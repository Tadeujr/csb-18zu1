import React, { Component } from "react";

import GoogleLogin from "react-google-login";

class LoginGoogle extends Component {
  render() {
    const responseGoogle = (response) => {
      console.log(response);
    };

    return (
      <GoogleLogin
        clientId="271504432831-cut9pmiccsruqrd6hhu0cp8i3spqdo70.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
        buttonText={false}
        icon={false}
        disabledStyle={false}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
    );
  }
}

export default LoginGoogle;
