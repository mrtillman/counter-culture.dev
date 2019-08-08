import React from 'react';
import Layout from '../components/layout';
import TextInput from '../components/common/text';
import TextBoxList from '../components/common/textBoxList';
import CheckBoxGroup from '../components/common/checkboxGroup';
import Backend from '../backend';
import uuid from 'uuid';
import KEYS from '../constants/keys';

export default class Register extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      client: {
        ClientName: "",
        AllowedScopes: [
          {
            id: "counters:read",
            label: "Read Counters",
            checked: true,
          },
          {
            id: "counters:profile",
            label: "Read User Profile",
            checked: false,
          }
        ],
        RedirectUris: [
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
    // const token = sessionStorage.getItem(KEYS.TOKEN_CACHE_KEY)
    this.backend = new Backend("token_value");
    this.onSubmit = this.onSubmit.bind(this);
    this.updateAppInfo = this.updateAppInfo.bind(this);
    this.addNewUri = this.addNewUri.bind(this);
  }

  onSubmit(e){
    e.preventDefault();
    this.backend.RegisterClient(this.state.client)
        // .then(client => {
        //   this.setState({ client });
        // })
        // .catch(console.log);
  }

  addNewUri(uri){
    const client = this.state.client;
    client.RedirectUris.push(uri);
    this.setState({ client })
  }

  updateAppInfo(e){
  
    const client = this.state.client;
    const field = e.target.name;

    if(field === "AllowedScopes"){
      client[field] = client[field].map(scope => {
        return (scope.id == e.target.id) 
                ? { ...scope, checked: e.target.checked }
                : scope;
      });
    } else if(field === "RedirectUris"){
      const redirectUris = [];
      client[field].map(uri => {
        if(uri.id == e.target.id){
          if(e.target.value){
            redirectUris.push({ ...uri, value: e.target.value });
          }
        } else {
          redirectUris.push(uri);
        }
      });
      client[field] = redirectUris;
    } else {
      client[field] = e.target.value;
    }
    
    return this.setState({ client });
    
  }

  render() {
    return (
      <Layout>
        <form onSubmit={this.onSubmit}>
            <TextInput 
              name="ClientName"
              label="App Name"
              value={this.state.client.ClientName}
              onChange={this.updateAppInfo}
            />
            <CheckBoxGroup
              name="AllowedScopes"
              label="Scope"
              options={this.state.client.AllowedScopes}
              onChange={this.updateAppInfo}
            />
            <TextBoxList
              name="RedirectUris"
              label="Redirect URIs"
              items={this.state.client.RedirectUris}
              onAddNew={this.addNewUri}
              onChange={this.updateAppInfo}
            />
            {
              this.state.client.ClientId
              ? <div>
                  <TextInput 
                    label="Client ID"
                    value={this.state.client.ClientId}
                  />
                  <TextInput 
                    label="Client Secret"
                    value={this.state.client.ClientSecrets[0]}
                  />
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
