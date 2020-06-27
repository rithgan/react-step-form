import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import { List, ListItem } from "material-ui/List";
import RaisedButton from "material-ui/RaisedButton";
const Confirm = (props) => {
  function Continue(e) {
    e.preventDefault();
    // PROCESS FROM - SEND DATA TO API
    this.props.nextStep();
  }
  function Back(e) {
    e.preventDefault();
    this.props.previousStep();
  }

  return (
    <MuiThemeProvider>
      <React.Fragment>
        <AppBar title="Confirm user data" />
        <br />
        <List>
          <ListItem primaryText="First Name" secondaryText={props.firstName} />
          <ListItem primaryText="lastName" secondaryText={props.lastName} />
          <ListItem primaryText="email" secondaryText={props.email} />
          <ListItem primaryText="occupation" secondaryText={props.occupation} />
          <ListItem primaryText="city" secondaryText={props.city} />
          <ListItem primaryText="bio" secondaryText={props.bio} />
        </List>
        <RaisedButton
          label="Confirm & Continue"
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

export default Confirm;
