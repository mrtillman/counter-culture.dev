import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as commonActions from '../actions/common.actions';
import SERVERS from "../constants/servers";
import TextInput from '../components/common/text';
import TextBoxList from '../components/common/textBoxList';

class RegisterPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      viewModel: {
        clientName: "Test App",
        allowedScopes: [
          {
            id: "openid",
            label: "OpenID Connect",
            checked: true,
          },
          {
            id: "profile",
            label: "User Profile",
            checked: true,
          }
        ],
        redirectUris: [
          {
            id: "hostname",
            value: "http://counter-culture:8080/oauth2/callback"
          },
          {
            id: "localhost",
            value: "http://localhost:8080/oauth2/callback"
          }
        ],
      }
    };

    // TODO: absorb into presentational
    // components and higher-order components
    this.updateClientInfo = this.updateClientInfo.bind(this);
    this.addNewUri = this.addNewUri.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.getClient = this.getClient.bind(this);
  }

  registerClient(client){
    const url = `${SERVERS.SECURE}/api/v1/clients/register`
    return fetch(url, {
      method: "POST",
      cache: "no-cache",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${this.access_token}`,
      },
      body: JSON.stringify(client)
    }).then(res => {
      if(res.ok){
        return res.json();
      } else {
        throw res.text();
      }
    })
  }

  onSubmit(e){
    e.preventDefault();
      this.registerClient(this.getClient())
        .then(client => {
          console.log(client);
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

  render() {
    return (
      <form onSubmit={this.onSubmit}>
          <TextInput
            name="clientName"
            label="App Name"
            value={this.state.viewModel.clientName}
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
                  (secret, index) => (
                    <TextInput
                      key={`${index}`}
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
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  const actions = Object.assign({}, commonActions);
  return bindActionCreators(actions, dispatch);
}

export default connect(state => state, mapDispatchToProps)(RegisterPage);