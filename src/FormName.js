import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



export class FormName extends Component {
  continue = e => {
    console.log(this.props)
    e.preventDefault();
    let valid = false
    const temp = this.props.values.firstName;
    if(temp.length > 2 && temp.length < 26){
      valid = true
    }
    if (valid) {
      this.props.nextStep();
    }

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
          >
            <h1 align="center">Trubshaw Tech Test</h1>
            <TextField
              placeholder="What is your name?"
              label="First Name"
              onChange={handleChange('firstName')}
              defaultValue={values.firstName}
              margin="normal"
              fullWidth
              required
            />
            <br />
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

export default FormName;
