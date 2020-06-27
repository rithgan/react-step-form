//Stateless component
import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

const FormUserDetails = (props) => {
  function Continue(e) {
    e.preventDefault();
    return props.nextStep();
  }

  return (
    <MuiThemeProvider>
      <React.Fragment>
        <AppBar title="Enter user details" />
        <TextField
          hintText="Enter your first name"
          floatingLabelText="First name"
          onChange={props.handleChange("firstName")}
          defaultValue={props.values.firstName}
        />
        <br />
        <TextField
          hintText="Enter your last name"
          floatingLabelText="Last name"
          onChange={props.handleChange("lastName")}
          defaultValue={props.values.lastName}
        />
        <br />
        <TextField
          hintText="Enter your email"
          floatingLabelText="Email"
          onChange={props.handleChange("email")}
          defaultValue={props.values.email}
        />
        <br />
        <RaisedButton
          label="Continue"
          primary={true}
          style={styles.button}
          onClick={Continue}
        />
      </React.Fragment>
    </MuiThemeProvider>
  );
};

const styles = {
  button: {
    margin: 15,
  },
};

export default FormUserDetails;
