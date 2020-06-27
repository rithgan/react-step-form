import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import { List, ListItem } from "material-ui/List";
import RaisedButton from "material-ui/RaisedButton";
class Confirm extends Component {
  continue = (e) => {
    e.preventDefault();
    // PROCESS FROM - SEND DATA TO API
    this.props.nextStep();
  };
  back = (e) => {
    e.preventDefault();
    this.props.previousStep();
  };
  render() {
    const {
      values: { firstName, lastName, email, occupation, city, bio },
    } = this.props;

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Confirm user data" />
          <br />
          <List>
            <ListItem primaryText="First Name" secondaryText={firstName} />
            <ListItem primaryText="lastName" secondaryText={lastName} />
            <ListItem primaryText="email" secondaryText={email} />
            <ListItem primaryText="occupation" secondaryText={occupation} />
            <ListItem primaryText="city" secondaryText={city} />
            <ListItem primaryText="bio" secondaryText={bio} />
          </List>
          <RaisedButton
            label="Confirm & Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
          <RaisedButton
            label="Back"
            primary={false}
            style={styles.button}
            onClick={this.back}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15,
  },
};

export default Confirm;
