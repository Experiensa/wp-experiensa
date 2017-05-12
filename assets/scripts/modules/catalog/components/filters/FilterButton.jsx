import React from 'react';
import {connect} from 'react-redux'
import {filterCatalog} from '../../actions'
import { Button } from 'semantic-ui-react'

class FilterButton extends React.Component {
    constructor(){
        super()
        this.state = {
            isActive: false,
            classValue: 'filter-button'
        }
        this.handleClick = this.handleClick.bind(this)
        // this.getStyles = /this.getStyles.bind(this)
    }
    handleClick(e,filter_type){
        // console.log('el color va cambiar ', this.props.active_color)
        // console.log('handleCLick',e.currentTarget.style)
        // e.currentTarget.style.backgroundColor = '#ccc';
        const active = !this.state.isActive
        const value = active?'active filter-button': 'filter-button'
        this.setState({
            isActive: active,
            classValue: value
        })
        this.props.filterCatalog(filter_type,this.props.name,!this.state.isActive)
    }
    getStyles(){
        const color = (this.state.isActive?this.props.active_color:this.props.color);
        //https://github.com/facebook/react/issues/1881
        let style = {
            backgroundColor: color,
            margin: "3px"            
        }
        return (style)
    }
    render() {
        const styles = this.getStyles()
        // const color = (this.state.isActive?this.props.active_color:this.props.color);
        return (
            <Button
                toggle
                compact
                className={this.state.classValue}
                key={this.props.id}
                style={styles}
                onClick={(e) => this.handleClick(e,this.props.filter_type)}
            >
                {this.props.name}
            </Button>
        );
    }
}
function mapStateToProps(state){
    return {
        isActive: false,
        customClass: "ui compact button"
    }
}

export default connect(mapStateToProps,{filterCatalog})(FilterButton)