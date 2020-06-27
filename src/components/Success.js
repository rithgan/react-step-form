import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";

const Success = () => {
  return (
    <MuiThemeProvider>
      <React.Fragment>
        <AppBar title="Success!" />
        <h1>Thank you for your submission</h1>
      </React.Fragment>
    </MuiThemeProvider>
  );
};

export default Success;
