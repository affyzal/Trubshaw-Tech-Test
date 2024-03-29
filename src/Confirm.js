import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';

export class Confirm extends Component {
  /**
   * @param e: event(on click next button)
   * steps application back to success page
   */
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  /**
   * @param e: event(on click back button)
   * steps application back to previous question
   */
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { firstName, email, risk}
    } = this.props;
    return (
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <h1 align="center">Preview</h1>
            <List>
              <ListItem>
                <ListItemText primary="What is your Name?" secondary={firstName} />
              </ListItem>

              <ListItem>
                <ListItemText primary="What is your email?" secondary={email} />
              </ListItem>

              <ListItem>
                <ListItemText primary="What level of risk are you reporting?" secondary={risk} />
              </ListItem>

            </List>
            <br />

            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Back</Button>

            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Confirm & Continue</Button>
          </Dialog>
        </>
    );
  }
}

export default Confirm;
