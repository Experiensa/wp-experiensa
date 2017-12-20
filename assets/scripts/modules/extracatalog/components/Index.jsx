import React from 'react'
import {connect} from 'react-redux'
import { Grid, Image } from 'semantic-ui-react'
import FiltersContainer from './FiltersContainer'
import ResultsContainer from './ResultsContainer'
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
    const { catalog, categories, includes, excludes, themes, destinations, countries } = this.props
    const values = {
      categories,
      includes,
      excludes,
      themes,
      destinations,
      countries
    }
    return(
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            <FiltersContainer filters={this.props.filters} values={values}/>
          </Grid.Column>
          <Grid.Column>
            <ResultsContainer/>
          </Grid.Column>
        </Grid.Row>
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