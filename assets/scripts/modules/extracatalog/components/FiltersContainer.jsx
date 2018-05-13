import React from 'react'
import { Accordion, Icon } from 'semantic-ui-react'
import FilterItem from './filters/FilterItem'

class FiltersContainer extends React.Component {
  constructor(){
      super();
  }
  renderFilterItems(){
    const { filters, values } = this.props
    return filters.map((f, i)=>{
      let filterName = f; 
      switch(f){
        case 'category':
          filterName = 'categories'
          break;
        case 'country':
          filterName = 'countries'
          break;
        case 'theme':
          filterName = 'themes'
          break;
        case 'excluded':
          filterName = 'excludes'
          break;
        case 'included':
          filterName = 'includes'
          break;
        case 'destination':
          filterName = 'destinations'
          break;
        default:
          filterName = f
          break;
      }
      return(
        <FilterItem key={ i } index={ i } title={ filterName } filters={ values } originalName={f}/>
      )
    })
  }
  createFilterIndexList(){
    const { filters } = this.props
    return Array.from(filters, (f,i) => i)
  }
  render() {
    const defaults = this.createFilterIndexList();
    return(
      <Accordion 
        defaultActiveIndex={defaults} 
        fluid 
        styled 
        exclusive={false}>
        {this.renderFilterItems()}
      </Accordion>
    )
  }
}
export default FiltersContainer;