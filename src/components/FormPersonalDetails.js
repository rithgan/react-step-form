import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
const FormPersonalDetails = (props) => {
  function Continue(e) {
    e.preventDefault();
    return props.nextStep();
  }
  function Back(e) {
    e.preventDefault();
    return props.previousStep();
  }

  return (
    <MuiThemeProvider>
      <React.Fragment>
        <AppBar title="Enter personal details" />
        <TextField
          hintText="Enter your occupation"
          floatingLabelText="Occupation"
          onChange={props.handleChange("occupation")}
          defaultValue={props.values.occupation}
        />
        <br />
        <TextField
          hintText="Enter your City"
          floatingLabelText="City"
          onChange={props.handleChange("city")}
          defaultValue={props.values.city}
        />
        <br />
        <TextField
          hintText="Enter your bio"
          floatingLabelText="Bio"
          onChange={props.handleChange("bio")}
          defaultValue={props.values.bio}
        />
        <br />
        <RaisedButton
          label="Continue"
          primary={true}
          style={styles.button}
          onClick={Continue}
        />
        <RaisedButton
          label="Back"
          primary={false}
          style={styles.button}
          onClick={Back}
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

export default FormPersonalDetails;
