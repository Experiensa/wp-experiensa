import React, { Component } from 'react';
import { Grid, Form, Checkbox } from 'semantic-ui-react';

export default class CheckboxGroup extends Component {
  constructor(props) {
    super(props)
  }
  handleChange = (e, data) => {
	  console.log('qqasdasda', e, data)
    /*const input = this.props.input;
    const newValue = [...input.value];
    if(data.checked) {
      newValue.push(data.value);
    } else {
      newValue.splice(newValue.indexOf(data.value), 1);
    }
    return this.props.input.onChange(newValue);*/
  }
 
					/*onChange={ (e, data)=>this.handleChange(e, data) } 
					checked={input.value.indexOf(option.value) !== -1}
  */
  render() {
    const { options, groupName } = this.props
    return(
        <Form.Group grouped>
		{options.map((option, index)=>(
			<Form.Field key={index}>
				<div class="ui checkbox">
					<Checkbox type='checkbox' 
					name={`${groupName}[${index}]`} 
					value={option.name}
					label={option.name}
					onChange={ (e, data)=>this.handleChange(e, data) }/>
				</div>
			</Form.Field>
		))}          
        </Form.Group>
    )
  }
}