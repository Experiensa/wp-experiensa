import React from 'react';
import FilterButton from './FilterButton'

export default class Filters extends React.Component {
    constructor(){
        super()
    }
    renderButtons(){
        if(this.props.options.values) {
            return this.props.options.values.map((value) => {
                return (
                    <FilterButton key={value.id}
                                  id={value.id}
                                  name={value.name}
                                  filter_type={this.props.options.type}/>
                )
            })
        }else{
            return (<h3>No {this.props.options.title} Filters</h3>)
        }
    }
    render() {
        return (
            <div className="column">
                <h3 className="ui header">
                    <i className={this.props.options.icon}/>
                    <div className="content catalog-title">{this.props.options.title}</div>
                </h3>
                <div className="ui items" style={{"display": "block"}}>
                    {this.renderButtons()}
                </div>
            </div>
        );
    }
}
