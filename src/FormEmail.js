import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import validator from 'validator'

export class FormEmail extends Component {
  continue = e => {
    e.preventDefault();
    let valid = false
    const temp = this.props.values.email;
    if (validator.isEmail(temp)) {
      valid = true;
    }
    if (valid) {
      this.props.nextStep();
    }
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
            margin='auto'
          >
            <h1 align="center">Trubshaw Tech Test</h1>
            <TextField
                placeholder="What is your email?"
                label="Email"
                type="email"
                onChange={handleChange('email')}
                defaultValue={values.email}
                margin="normal"
                fullWidth
                required
            />

            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Back</Button>

            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Continue</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default FormEmail;
