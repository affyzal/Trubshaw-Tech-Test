import React, { Component } from 'react';
import FormName from './FormName';
import FormEmail from './FormEmail';
import RiskInput from './FormRisk';

import Confirm from './Confirm';
import Success from './Success';

export class UserForm extends Component {
  state = {
    step: 1,
    firstName: '',
    email: '',
    risk: '',
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { firstName, email, risk } = this.state;
    const values = { firstName, email, risk};

    switch (step) {
      case 1:
        return (
          <FormName
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <FormEmail
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
            <RiskInput
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}
            />
        );
      case 4:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 5:
        return <Success
            prevStep={this.prevStep}
        />;
      default:
        (console.log('This is a multi-step form built with React.'))
    }
  }
}

export default UserForm;
