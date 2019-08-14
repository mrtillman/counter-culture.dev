import React from 'react';
// import { CounterCulture } from 'counter-culture.client';
import Backend from '../backend';
import Layout from '../components/layout';
import TextInput from '../components/common/text';
import TextBoxList from '../components/common/textBoxList';
import CheckBoxGroup from '../components/common/checkboxGroup';
import SERVERS from '../constants/servers';

export default class Register extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      viewModel: {
        clientName: "Test App",
        allowedScopes: [
          {
            id: "counters:read",
            label: "Read Counters",
            checked: false,
          },
          {
            id: "counters:profile",
            label: "Read User Profile",
            checked: false,
          }
        ],
        redirectUris: [
          {
            id: "foo",
            value: "foo.com"
          },
          {
            id: "bar",
            value: "bar.com"
          }
        ],
      }
    };

    // TODO: absorb into presentational 
    // components and higher-order components
    this.updateClientInfo = this.updateClientInfo.bind(this);
    this.addNewUri = this.addNewUri.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.loadProfile = this.loadProfile.bind(this);
    this.getClient = this.getClient.bind(this);
  }

  componentDidMount(){
    this.loadProfile();
  }

  onSubmit(e){
    e.preventDefault();
    const client = this.getClient();
    this.backend.registerClient(client)
        .then(client => {
          const { viewModel } = this.state;
          viewModel.clientId = client.clientId;
          viewModel.clientSecrets = client.clientSecrets;
          this.setState({ viewModel });
        })
        .catch(console.log);
  }

  addNewUri(uri){
    const { viewModel } = this.state;
    viewModel.redirectUris.push(uri);
    this.setState({ viewModel })
  }

  updateClientInfo(e){
  
    const viewModel = this.state.viewModel;
    const field = e.target.name;

    if(field === "allowedScopes"){
      viewModel[field] = viewModel[field].map(scope => {
        return (scope.id == e.target.id) 
                ? { ...scope, checked: e.target.checked }
                : scope;
      });
    } else if(field === "redirectUris"){
      const redirectUris = [];
      viewModel[field].map(uri => {
        if(uri.id == e.target.id){
          if(e.target.value){
            redirectUris.push({ ...uri, value: e.target.value });
          }
        } else {
          redirectUris.push(uri);
        }
      });
      viewModel[field] = redirectUris;
    } else {
      viewModel[field] = e.target.value;
    }
    
    return this.setState({ viewModel });
    
  }

  getClient(){
    // TODO: simplify using automapper-ts
    return {
      ClientName: this.state.viewModel.clientName,
      AllowedScopes: this.state
        .viewModel.allowedScopes
        .filter(scope => scope.checked)
        .map(scope => scope.id),
      RedirectUris: this.state
        .viewModel.redirectUris
        .map(uri => uri.value)
    }
  }

  loadProfile(){
    fetch(`${SERVERS.DEV}/user/profile`, {
      method: 'post',
      mode: 'no-cors',
      cache: 'no-cache',
    }).then(res => {
      if(res.ok){
        return res.json();
      } else {
        throw new Error(res.statusText);
      }
    }).then(profile => {
      // TODO: absorb bff logic into client lib
      this.backend = new Backend(profile.token);
    }).catch(console.log);
  }

  render() {
    return (
      <Layout>
        <form onSubmit={this.onSubmit}>
            <TextInput 
              name="clientName"
              label="App Name"
              value={this.state.viewModel.clientName}
              onChange={this.updateClientInfo}
            />
            <CheckBoxGroup
              name="allowedScopes"
              label="Scope"
              options={this.state.viewModel.allowedScopes}
              onChange={this.updateClientInfo}
            />
            <TextBoxList
              name="redirectUris"
              label="Redirect URIs"
              items={this.state.viewModel.redirectUris}
              onAddNew={this.addNewUri}
              onChange={this.updateClientInfo}
            />
            {
              this.state.viewModel.clientId
              ? <div>
                  <TextInput 
                    name="clientId"
                    label="Client ID"
                    value={this.state.viewModel.clientId}
                  />
                  {this.state.viewModel.clientSecrets.map(
                    (secret) => (
                      <TextInput 
                        name="clientSecret"
                        label="Client Secret"
                        value={secret.value} />))}
                </div> : (
                <p>
                  <input type="submit" value="Submit" />
                </p>
              )
            }
        </form>
      </Layout>
    );
  }
}
