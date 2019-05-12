import React from 'react';
import Layout from '../components/layout';
import SelectInput from '../components/common/select';
import TextInput from '../components/common/text';
import Backend from '../bff';

export default class Register extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      client: {
        "app_name": "",
        "app_type": "web",
        "app_description": "",
        "redirect_uri": "",
        "homepage_uri": "",
        "grant_types": "code",
        "scope": "user, counters",
        "user_id": ""
      }
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.updateAppInfo = this.updateAppInfo.bind(this);
    this.getAppTypes = this.getAppTypes.bind(this);
  }

  onSubmit(e){
    e.preventDefault();
    Backend.RegisterClient(this.state.client)
           .then(client => {
              this.setState({ client });
           });
  }

  getAppTypes(){
    return [
      {
        name: 'Web App',
        value:'web',
      },
      {
        name: 'Native App',
        value:'native',
      },
      {
        name: 'Single Page App',
        value:'spa',
      },
      {
        name: 'Mobile App',
        value:'mobile',
      }
    ]
  }

  updateAppInfo(event){
    const field = event.target.name;
    let client = this.state.client;
    client[field] = event.target.value;
    return this.setState({ client });
  }

  render() {
    return (
      <Layout>
        <form onSubmit={this.onSubmit}>
            <TextInput 
              name="app_name"
              label="App Name"
              value={this.state.client.app_name}
              onChange={this.updateAppInfo}
            />
            <SelectInput
              name="app_type" 
              label="App Type"
              value={this.state.client.app_type}
              defaultOption="web"
              options={this.getAppTypes()}
              onChange={this.updateAppInfo}
            />
            <TextInput 
              name="app_description"
              label="App Description"
              value={this.state.client.app_description}
              onChange={this.updateAppInfo}
            />
            <TextInput 
              name="homepage_uri"
              label="Homepage URL"
              value={this.state.client.homepage_uri}
              onChange={this.updateAppInfo}
            />
            <TextInput 
              name="redirect_uri"
              label="Callback URL"
              value={this.state.client.redirect_uri}
              onChange={this.updateAppInfo}
            />
            {
              this.state.client.client_id
              ? <div>
                  <TextInput 
                    name="client_id"
                    label="Client ID"
                    value={this.state.client.client_id}
                  />
                  <TextInput 
                    name="client_secret"
                    label="Client Secret"
                    value={this.state.client.client_secret}
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
