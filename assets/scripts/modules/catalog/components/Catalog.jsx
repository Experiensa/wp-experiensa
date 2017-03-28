import React from 'react';
import {connect} from 'react-redux'

import {requestCatalog} from '../actions'

import CatalogLayout from './CatalogLayout'
import CatalogFilterLayout from './CatalogFilterLayout'

class Catalog extends React.Component {
    constructor(){
        super()
    }
    componentWillMount(){
        this.props.requestCatalog()
    }
    render() {
        // console.log('voy a mostrar',this.props.catalog)
        let filterOptions = {
            categories: this.props.categories,
            includes: this.props.includes,
            excludes: this.props.excludes,
            themes: this.props.themes,
            locations: this.props.locations,
            countries: this.props.countries
        }
        // console.log('filterOptions',filterOptions)
        // console.log('mis options son',this.props.options)
        return (
            <div className="ui container">
                <br/><br/>
                <CatalogFilterLayout filterOptions={filterOptions} options={this.props.options}/>
                <br/><br/>
                {/*<CatalogLayout voyages={this.props.catalog} options={this.props.options}/>*/}
                <br/><br/>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        catalog: state.catalog.catalog,
        categories: state.catalog.categories,
        includes: state.catalog.includes,
        excludes: state.catalog.excludes,
        themes: state.catalog.themes,
        locations: state.catalog.locations,
        countries: state.catalog.countries
    }
}

export default connect(mapStateToProps,{requestCatalog})(Catalog)