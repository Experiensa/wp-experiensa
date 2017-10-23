import React from 'react';
import {Fields, reduxForm} from 'redux-form';
import {Form, Button, Icon} from 'semantic-ui-react';
import Contact from './sections/Contact';
import Destination from './sections/Destination';
import Options from './sections/Options';
import validate from '../functions/validate';

const DestinationForm = props => {
  const { handleSubmit } = props
  return (
    <Form onSubmit={handleSubmit}>
      <Fields names={['fullname','email','phone']} component={Contact}/>
      <Fields names={['destination','departure','return','flexibility']} component={Destination}/>
      <Fields names={['companion','adults','kids','babies', 'budget','preferences']} component={Options}/>
      <Button type="submit" className="next" animated color='blue' floated='left' size='big'>
        <Button.Content visible>Next</Button.Content>
        <Button.Content hidden>
          <Icon name='right arrow' />
        </Button.Content>
      </Button>
    </Form>
  )
}

export default reduxForm({
  form: 'contact',
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(DestinationForm);