import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



export class FormName extends Component {

  /**
   * @param e: event(on click next button)
   * validates name input prior to moving to next step. disables moving to next step until email entry is valid.
   */
  continue = e => {
    console.log(this.props)
    e.preventDefault();
    let valid = false
    const temp = this.props.values.firstName;
    if(temp.length > 2 && temp.length < 26){    //validate string length
      valid = true
    }
    if (valid) {
      this.props.nextStep();
    }

  };


  render() {
    const { values, handleChange } = this.props;
    return (
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <h1 align="center">What is your name?</h1>
            <TextField
              placeholder="What is your name?"
              label="Name"
              onChange={handleChange('firstName')}
              defaultValue={values.firstName}
              margin="normal"
              fullWidth
              required
              helperText="Enter 3-25 characters"
            />
            <br />
            <Button         //next step button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Continue</Button>
          </Dialog>
        </>
    );
  }
}

export default FormName;
