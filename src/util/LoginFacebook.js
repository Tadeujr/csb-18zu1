import React from "react";
import FacebookLogin from "react-facebook-login";

class LoginFacebook extends React.Component {
  responseFacebook(response) {
    console.log(response);
  }
  // criar um metodo para verificar se tem login cadastrado
  render() {
    return (
      <FacebookLogin
        appId="337682907280002"
        autoLoad={false}
        fields="name,email,address"
        callback={this.responseFacebook}
        textButton={false}
        cssClass="fa fa-facebook"
      />
    );
  }
}

export default LoginFacebook;
