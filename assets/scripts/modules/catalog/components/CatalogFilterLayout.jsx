import React from 'react';

import Filters from './filters/Filters'

export default class CatalogFilterLayout extends React.Component {
    constructor(){
        super()
    }
    loadFilters(){
        let filterToShow = this.props.options.filters
        return filterToShow.map((filter,index)=>{
            let options = {}
            switch(filter){
                case 'country':
                    options = {
                        title: 'Countries',
                        icon: 'world icon',
                        type: 'FILTER_COUNTRY',
                        values: this.props.filterOptions.countries
                    };
                    break;
                case 'location':
                    options = {
                        title: 'Locations',
                        icon: 'map icon',
                        type: 'FILTER_LOCATION',
                        values: this.props.filterOptions.locations
                    };
                    break;
                default:
                    options = {
                        title: 'Themes',
                        icon: 'soccer icon',
                        type: 'FILTER_THEME',
                        values: this.props.filterOptions.themes
                    }
            }
            return (<Filters options={options} key={index}/>)
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
