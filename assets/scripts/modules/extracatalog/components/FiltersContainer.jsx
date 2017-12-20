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
      const filterName = f=='country'?'countries':f
      return(
        <FilterItem key={ i } title={ filterName } filters={ values }/>
      )
    })
  }
  render() {
    console.log('qqqqqqqq', this.props.values)
    return(
      <Accordion fluid styled exclusive={false}>
        {this.renderFilterItems()}
      </Accordion>
    )
  }
}
export default FiltersContainer;