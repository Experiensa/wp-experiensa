import React from 'react'
import { Accordion, Icon } from 'semantic-ui-react'

class FilterItem extends React.Component {
  constructor(){
      super()
  }
  render() {
    const { title, key, filters } = this.props
    let items = [];
    if(typeof filters !== 'undefined' && filters.hasOwnProperty(title)){
      items = filters[title]
    }
    return(
      <div>
        <Accordion.Title active={true} index={key}>
          <Icon name='dropdown' />
          {title}
        </Accordion.Title>
        <Accordion.Content active={true}>
          <p>
            Hola mundo {key}
          </p>
        </Accordion.Content>
      </div>
    )
  }
}
export default FilterItem;