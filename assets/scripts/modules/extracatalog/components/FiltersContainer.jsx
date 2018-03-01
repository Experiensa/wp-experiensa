import React from 'react'
import { Accordion, Icon } from 'semantic-ui-react'
import FilterItem from './filters/FilterItem'

class FiltersContainer extends React.Component {
  constructor(){
      super()
  }
  /*handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index
    this.setState({ activeIndex: newIndex })
  }*/
  renderFilterItems(){
    const { filters, values } = this.props
    return filters.map((f, i)=>{
      let filterName = f; //f =='country'?'countries':f
      // console.log('voy por el filtro', filterName, values)
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
        <FilterItem key={ i } title={ filterName } filters={ values } originalName={f}/>
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
      <Accordion defaultActiveIndex={defaults} fluid styled exclusive={false}>
        {this.renderFilterItems()}
      </Accordion>
    )
  }
}
export default FiltersContainer;