import React from 'react';

import Filters from './filters/Filters'

export default class CatalogFilterLayout extends React.Component {
    constructor(){
        super()
    }
    loadFilters(){
        let filterToShow = this.props.filters
        return filterToShow.map((filter,index)=>{
            let filterOptions = {}
            switch(filter){
                case 'country':
                    filterOptions = {
                        title: 'Countries',
                        icon: 'world icon',
                        type: 'FILTER_COUNTRY',
                        values: this.props.filterOptions.countries
                    };
                    break;
                case 'location':
                    filterOptions = {
                        title: 'Locations',
                        icon: 'map icon',
                        type: 'FILTER_LOCATION',
                        values: this.props.filterOptions.locations
                    };
                    break;
                default:
                    filterOptions = {
                        title: 'Themes',
                        icon: 'soccer icon',
                        type: 'FILTER_THEME',
                        values: this.props.filterOptions.themes
                    }
            }
            return (<Filters filterOptions={filterOptions} key={index}/>)
        })
    }
    render() {
        return (
            <div className="ui two column stackable grid">
                <div className="stretched row">
                    {this.loadFilters()}
                </div>
            </div>
        );
    }
}
