import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";

export class Success extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <h1>Thank You For Your Submission</h1>
            <Button
                color="secondary"
                variant="contained"
                onClick={this.back}
            >Back</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Success;
