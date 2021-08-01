import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import validator from 'validator'

export class FormEmail extends Component {
  /**
   * @param e: event(on click next button)
   * validates email input prior to moving to next step. disables moving to next step until email entry is valid.
   */
  continue = e => {
    e.preventDefault();
    let valid = false
    const temp = this.props.values.email;
    if (validator.isEmail(temp)) {          //validate email using validator module
      valid = true;
    }
    if (valid) {
      this.props.nextStep();
    }
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
    const { values, handleChange } = this.props;
    return (
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
            margin='auto'
          >
            <h1 align="center">What is your email?</h1>
            <TextField
                placeholder="What is your email?"
                label="Email"
                type="email"
                onChange={handleChange('email')}
                defaultValue={values.email}
                margin="normal"
                fullWidth
                required
                helperText="Enter a valid email"
            />

            <Button   //back step button
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Back</Button>

            <Button     //next step button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Continue</Button>
          </Dialog>
        </>
    );
  }
}

export default FormEmail;
