import React from 'react'
import { Accordion, Icon } from 'semantic-ui-react'
import FilterCheckGroup from './FilterCheckGroup'

function jsUcfirst(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

class FilterItem extends React.Component {
  constructor(){
      super()
  }
  render() {
    const { title, key, filters, originalName } = this.props
    let items = [];
    if(typeof filters !== 'undefined' && filters.hasOwnProperty(title)){
      items = filters[title]
    }
    if(items.length > 0){
			let mainTitle = '';
			switch(title){
				case 'countries': 
					mainTitle = 'pays';
					break;
				case 'themes': 
					mainTitle = 'thèmes';
					break;
				case 'excludes': 
					mainTitle = 'exclut';
					break;
				case 'includes': 
					mainTitle = 'inclut';
					break;
				default: 
					mainTitle = title;
					break;
			}
			let ucTitle = jsUcfirst(mainTitle);
			return(
				<div>
					<Accordion.Title active={true} index={key}>
						<Icon name='dropdown' />
						{ `  ${ucTitle}` }
					</Accordion.Title>
					<Accordion.Content active={true}>
						<FilterCheckGroup options={items} groupName={title} originalName={originalName}/>
					</Accordion.Content>
				</div>
			)
    }else{
		return(<div></div>)
	}
  }
}
export default FilterItem;