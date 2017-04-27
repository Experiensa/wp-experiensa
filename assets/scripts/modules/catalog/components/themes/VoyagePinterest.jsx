import React from 'react'
import StackGrid from "react-stack-grid";
import VoyagePinterestElement from './VoyageCards'


export default class VoyagePinterestLayout extends React.Component {
    constructor(){
        super()
    }
    render() {
        const voyages = this.props.voyages;
        return(
            <StackGrid
                columnWidth={200}
                gutterWidth={10}
                gutterHeight={15}
                duration={1000}
            >

                {voyages.map((voyage,i) => (
                    <VoyagePinterestElement key={i} voyage={voyage} options={this.props.options} show={this.props.show}/>
                ))}
            </StackGrid>
        )
    }
}
