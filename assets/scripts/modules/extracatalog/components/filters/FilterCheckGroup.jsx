import React, { Component } from 'react'
import {connect} from 'react-redux'
import {filterCatalog,FILTER_CATEGORY,FILTER_DESTINATION,FILTER_COUNTRY,FILTER_EXCLUDE,FILTER_INCLUDE,FILTER_THEME} from '../../actions'
import { Grid, Form, Checkbox } from 'semantic-ui-react'

class CheckboxGroup extends Component {
  constructor(props) {
    super(props)
  }
  handleChange = (e, data) => {
    const {checked,value} = data
    const {groupName} = this.props
    let filterType
    switch(groupName){
      case 'countries':
        filterType = FILTER_COUNTRY;
        break;
      case 'themes':
        filterType = FILTER_THEME;
        break;
      case 'destinations':
        filterType = FILTER_DESTINATION;
        break;
      case 'includes':
        filterType = FILTER_INCLUDE;
        break;
      case 'excludes':
        filterType = FILTER_EXCLUDE;
        break;
      default:
        filterType = FILTER_CATEGORY;
        break;
    }
    this.props.filterCatalog(filterType,value,checked)
  }
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
function mapStateToProps(state){
	return {}
}
export default connect(mapStateToProps,{filterCatalog})(CheckboxGroup)