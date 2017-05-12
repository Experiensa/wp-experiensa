import React from 'react';

import Filters from './filters/Filters'

export default class CatalogFilterLayout extends React.Component {
    constructor(){
        super()
    }
    loadFilters(){
        let filterToShow = this.props.filters
        // console.log('mis props que voy a mandar a Filters', this.props.options)
        // console.log('los filtros a mostrar son',filterToShow)
        // console.log('los filter options son',this.props.filterOptions)
        return filterToShow.map((filter,index)=>{
            let filterOptions = {}
            switch(filter){
                case 'category':
                    filterOptions = {
                        title: 'Categories',
                        icon: 'tags icon',
                        type: 'FILTER_CATEGORY',
                        values: this.props.filterOptions.categories
                    };
                    break;
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
                case 'includes':
                    filterOptions = {
                        title: 'Includes',
                        icon: 'check circle icon',
                        type: 'FILTER_INCLUDE',
                        values: this.props.filterOptions.locations
                    };
                    break;case 'excludes':
                    filterOptions = {
                        title: 'Excludes',
                        icon: 'remove circle icon',
                        type: 'FILTER_EXCLUDE',
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
            return (<Filters filterOptions={filterOptions} key={index} color={this.props.options.button_bg_color} active_color={this.props.options.button_bg_active_color}/>)
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
