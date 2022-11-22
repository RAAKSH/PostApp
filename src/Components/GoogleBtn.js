import React, { Component } from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import Box from '@mui/material/Box';
import { gapi } from 'gapi-script';
import { DialogueComponent } from './DialogueComponent';
import Button from '@mui/material/Button';


const CLIENT_ID = '490720169503-un4v1nbj52kf85hmpa9a7tk3u1t0tvde.apps.googleusercontent.com';


  

class GoogleBtn extends Component {

    onComponentMount(){
        const initClient = () => {
            gapi.client.init({
                CLIENT_ID: CLIENT_ID,
            scope: ''
          });
       };
       gapi.load('client:auth2', initClient);
        
    }
   constructor(props) {
    super(props);

    this.state = {
      isLogined: false,
      accessToken: ''
    };

    this.login = this.login.bind(this);
    this.handleLoginFailure = this.handleLoginFailure.bind(this);
    this.logout = this.logout.bind(this);
    this.handleLogoutFailure = this.handleLogoutFailure.bind(this);
  }

  login (response) {
    if(response.accessToken){
      this.setState(state => ({
        isLogined: true,
        accessToken: response.accessToken
      }));
    }

    alert('user Logged In Successfully');
  }

  logout (response) {
    this.setState(state => ({
      isLogined: false,
      accessToken: ''
    }));
    
  }

  handleLoginFailure (response) {
    alert('Failed to log in')
  }

  handleLogoutFailure (response) {
    alert('Failed to log out')
  }

  render() {
    return (
    <div>
      { this.state.isLogined ?
        <GoogleLogout
          clientId={ CLIENT_ID }
          buttonText='Logout'
          onLogoutSuccess={ this.logout }
          onFailure={ this.handleLogoutFailure }
        />
   : <><GoogleLogin
                    clientId={CLIENT_ID}
                    buttonText='Login'
                    onSuccess={this.login}
                    onFailure={this.handleLoginFailure}
                    cookiePolicy={'single_host_origin'}
                    responseType='code,token' /><DialogueComponent isLoggedIn={this.state.isLogined} />
                    </>
      }

     

    </div>
    )
  }
}

export default GoogleBtn;