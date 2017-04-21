import React from 'react';
import FilterButton from './FilterButton'

export default class Filters extends React.Component {
    constructor(){
        super()
    }
    renderButtons(){
        if(this.props.filterOptions.values) {
            return this.props.filterOptions.values.map((value) => {
                return (
                    <FilterButton key={value.id}
                                  id={value.id}
                                  name={value.name}
                                  filter_type={this.props.filterOptions.type}/>
                )
            })
        }else{
            return (<h3>No {this.props.filterOptions.title} Filters</h3>)
        }
    }
    render() {
        return (
            <div className="column">
                <h3 className="ui header">
                    <i className={this.props.filterOptions.icon}/>
                    <div className="content catalog-filter-title">{this.props.filterOptions.title}</div>
                </h3>
                <div className="ui items" style={{"display": "block"}}>
                    {this.renderButtons()}
                </div>
            </div>
        );
    }
}
