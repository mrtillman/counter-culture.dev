import React from 'react';
import Layout from '../components/layout';
import SelectInput from '../components/common/select';
import TextInput from '../components/common/text';
import Backend from '../bff';

export default class Register extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      appInfo: {
        name: "",
        type: "web",
        description: "",
        homepageURL: "",
        callbackURL: "",
      }
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.updateAppInfo = this.updateAppInfo.bind(this);
    this.getAppTypes = this.getAppTypes.bind(this);
  }

  onSubmit(e){
    e.preventDefault();
    Backend.registerApp(this.state.appInfo);
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
    let appInfo = this.state.appInfo;
    appInfo[field] = event.target.value;
    return this.setState({ appInfo });
  }

  render() {
    return (
      <Layout>
        <form onSubmit={this.onSubmit}>
            <TextInput 
              name="name"
              label="App Name"
              value={this.state.appInfo.name}
              onChange={this.updateAppInfo}
            />
            <SelectInput
              name="type" 
              label="App Type"
              value={this.state.appInfo.type}
              defaultOption="web"
              options={this.getAppTypes()}
              onChange={this.updateAppInfo}
            />
            <TextInput 
              name="description"
              label="App Description"
              value={this.state.appInfo.description}
              onChange={this.updateAppInfo}
            />
            <TextInput 
              name="homepageURL"
              label="Homepage URL"
              value={this.state.appInfo.homepageURL}
              onChange={this.updateAppInfo}
            />
            <TextInput 
              name="callbackURL"
              label="Callback URL"
              value={this.state.appInfo.callbackURL}
              onChange={this.updateAppInfo}
            />
            
          <p>
            <input type="submit" value="Submit" />
          </p>
        </form>
      </Layout>
    );
  }
}
