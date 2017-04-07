import React from 'react'

export default class DataRow extends React.Component {
    constructor(){
        super()
    }
    render(){
        if(this.props.show){
            if(this.props.isTitle  && this.props.title){
                return(
                    <div className="header catalog-title">{this.props.title}</div>
                )
            }else{
                if( this.props.value) {
                    return (
                        <div className="catalog-content">
                            <br/><strong>{this.props.title}: </strong>{this.props.value}
                        </div>
                    )
                }else{
                    return(
                        <div></div>
                    )
                }
            }
        }else{
            return (
                <div></div>
            )
        }
    }
}