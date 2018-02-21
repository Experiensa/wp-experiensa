import React from 'react'
import {connect} from 'react-redux'
import { Grid, Image } from 'semantic-ui-react'
import SearchContainer from './SearchContainer'
import FiltersContainer from './FiltersContainer'
import ResultsContainer from './ResultsContainer'
import PriceFilter from './filters/PriceFilter'
import {requestCatalog} from '../actions'

class Index extends React.Component {
  constructor(){
      super()
  }
  componentWillMount(){
    this.props.requestCatalog()
  }
  render() {
    console.log('mis props son', this.props)    
    const { catalog, categories, includes, excludes, themes, destinations, countries, options } = this.props
    const { elements } = options
    const values = {
      categories,
      includes,
      excludes,
      themes,
      destinations,
      countries
    }
    return(
      <Grid stackable columns={2} divided>
        <Grid.Column width={4}>
          <SearchContainer/>
          <FiltersContainer filters={this.props.filters} values={values}/>
          <PriceFilter/>
        </Grid.Column>
        <Grid.Column width={12}>
          <ResultsContainer voyages={catalog} elements={elements} options={options}/>
        </Grid.Column>
      </Grid>
    )
  }
}
function mapStateToProps(state){
  const { catalog, categories, includes, excludes, themes, destinations, countries } = state.catalog
  return {
      catalog,
      categories,
      includes,
      excludes,
      themes,
      destinations,
      countries
  }
}

export default connect( mapStateToProps, { requestCatalog } )( Index )