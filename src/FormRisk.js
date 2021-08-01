import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';

//options for selection entry
const risks = [
  {
    value: 'Low',
    label: 'Low',
  },
  {
    value: 'Medium',
    label: 'Medium',
  },
  {
    value: 'High',
    label: 'High',
  }
];

export class FormRisk extends Component {

  /**
   * @param e: event(on click next button)
   * validates risk selection prior to moving to next step. disables moving to next step until risk is selected.
   */
  continue = e => {
    e.preventDefault();
    let valid = false
    const temp = this.props.values.risk;
    console.log(temp)

    if(temp === "Low" || temp === "Medium" || temp === "High"){      //check if any of the 3 options are selected
      valid = true
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
          >
            <h1 align="center">What level of threat are you reporting?</h1>
            <TextField
                id="standard-select-currency"
                select
                label="Select"
                value={risks.label}
                onChange={handleChange('risk')}
                helperText="Select threat level"
            >
              {risks.map((option) => ( //map through risks to set options
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
              ))}
            </TextField>

            <Button    //Back step Button
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Back</Button>

            <Button     //Next step button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Continue</Button>
          </Dialog>
        </>
    );
  }
}

export default FormRisk;
