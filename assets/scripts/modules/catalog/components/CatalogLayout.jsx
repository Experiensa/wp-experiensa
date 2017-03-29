import React from 'react'
import _ from 'lodash'
// import CatalogVoyageCards from './CatalogVoyageCards'
// import CatalogVoyageMinimalist from './CatalogVoyageMinimalist'
// import CatalogVoyageMasonry from './voyages/layouts/masonry/CatalogVoyageMasonry'
import Minimalist from './themes/Minimalist'
export default class CatalogLayout extends React.Component {
    constructor(){
        super()
    }
    elementsToShow(){
        let elements = this.props.options.elements
        return({
            title: _.includes(elements,'title'),
            price: _.includes(elements,'price'),
            button: _.includes(elements,'button'),
            location: _.includes(elements,'location'),
            duration: _.includes(elements,'duration'),
            themes: _.includes(elements,'themes'),
            country: _.includes(elements,'country')
        })
    }
    renderCards(){}
    renderMasonry(){

    }
    renderMinimalist(){
        return this.props.voyages.map((voyage,i) => {
            return(
                <Minimalist voyage={voyage} key={i} options={this.props.options} show={this.elementsToShow()}/>
            )
        })
    }
    render() {
        if(this.props.voyages) {
            // console.log('mis voyages son', this.props.voyages)
            const type = this.props.options.type
            if (type == 'minimalist') {
                return (
                    <div className="ui four stackable cards">
                        {this.renderMinimalist()}
                    </div>
                )
            }
            if (type == 'cards') {
                return (
                    <div className="ui four stackable cards">
                        <h1>Hola soy Cards</h1>
                    </div>
                )
            }
            return (
                <div className="ui three column doubling stackable masonry grid">
                    Hola soy Masonry
                </div>
            );
        }else{
            return(<h1>No Voyages Available</h1>)
        }
    }
}
