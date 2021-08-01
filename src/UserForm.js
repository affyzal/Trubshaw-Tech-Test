import React, { Component } from 'react';
import FormName from './FormName';
import FormEmail from './FormEmail';
import RiskInput from './FormRisk';

import Confirm from './Confirm';
import Success from './Success';

/**
 * Parent Class for form component
 */
export class UserForm extends Component {
  //JSON structure for the required data to be stored
  state = {
    step: 1,
    firstName: '',
    email: '',
    risk: '',
  };


  // Proceed to next question
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev question
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle data change on input event
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { firstName, email, risk } = this.state;
    const values = { firstName, email, risk};

    //use switch to step between each question with regards to this.state.step
    switch (step) {
      //step 1 shows what is your name question
      case 1:
        return (
          <FormName
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
        //step 2 shows what is your email question
      case 2:
        return (
          <FormEmail
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
        //step 3 shows what level of threat are you reporting question
      case 3:
        return (
            <RiskInput
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}
            />
        );
        //step 4 shows preview page
      case 4:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
        //step 5 shows confirmed page
      case 5:
        return <Success
            prevStep={this.prevStep}
        />;
    }
  }
}

export default UserForm;
