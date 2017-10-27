import React, {Component} from 'react';
import {Grid} from 'semantic-ui-react';
import ReCAPTCHA from 'react-google-recaptcha';

export default class Captcha extends Component{
  constructor(){
    super()
    this.state = {
      value: ''
    }
  }
  confirmCaptcha = (value) => {
    this.props.input.onChange(value)
    this.setState({
      value: value
    })
  }
  render(){
    console.log("Captcha props:", this.props);
    console.log('experiensa_vars',experiensa_vars)
    const captcha = this.props.input;
    return(
      <Grid centered columns={2}>
        <Grid.Column>
          <ReCAPTCHA
          ref="recaptcha"
          sitekey="6Lfq_Q0UAAAAACUqqMQSJ-qOhT8SHS_msHRbOdB1"
          onChange={this.confirmCaptcha}
          />
          <input {...captcha} type="hidden" value={this.state.value}/>
        </Grid.Column>
      </Grid>
    )
  }
}



