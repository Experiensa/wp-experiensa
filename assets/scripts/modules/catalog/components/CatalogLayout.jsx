import React from 'react'
import _ from 'lodash'
const ld = _.noConflict();
import { Card, Loader } from 'semantic-ui-react'
// import CatalogVoyageCards from './CatalogVoyageCards'
// import CatalogVoyageMinimalist from './CatalogVoyageMinimalist'
// import CatalogVoyageMasonry from './voyages/layouts/masonry/CatalogVoyageMasonry'
import VoyageCards from './themes/VoyageCards'
// import VoyageCards from './themes/VoyageCards'

export default class CatalogLayout extends React.Component {
    constructor(){
        super()
    }
    elementsToShow(){
        let elements = this.props.options.elements
        return({
            title: ld.includes(elements,'title'),
            price: ld.includes(elements,'price'),
            detail_button: ld.includes(elements,'detail_button'),
            location: ld.includes(elements,'location'),
            duration: ld.includes(elements,'duration'),
            themes: ld.includes(elements,'themes'),
            country: ld.includes(elements,'country')
        })
    }
    // renderCards(){
    //     return this.props.voyages.map((voyage,i) => {
    //         return(
    //             <VoyageCards voyage={voyage} key={i} options={this.props.options} show={this.elementsToShow()}/>
    //         )
    //     })
    // }
    // renderMasonry(){
    //     return this.props.voyages.map((voyage,i) => {
    //         return(
    //             <Minimalist voyage={voyage} key={i} options={this.props.options} show={this.elementsToShow()}/>
    //         )
    //     })
    // }
    renderVoyageCards(){
        return this.props.voyages.map((voyage,i) => {
            return(
                <VoyageCards voyage={voyage} key={i} options={this.props.options} show={this.elementsToShow()}/>
            )
        })
    }
    render() {
        // console.log('el correo de la agencia es',experiensa_vars.agency_email)
        const size = ld.size(this.props.voyages)
        if(size > 0) {
            // console.log('los voyages',this.props.voyages)
            // console.log('mi size es',size)
            let itemxrow = 4
            if(size < 4)
                itemxrow = size

            // console.log('mis voyages son', this.props.voyages)
            const type = this.props.options.type
            if (type == 'cards') {
                return (
                    <Card.Group itemsPerRow={itemxrow}>
                        {this.renderVoyageCards()}
                    </Card.Group>
                )
            }
            return (
                <div className="ui three column doubling stackable masonry grid">
                    Hola soy Masonry
                </div>
            );
        }else{
            return(
                <div>
                    <Loader active inline='centered' content='Loading'/>
                </div>
            )
        }
    }
}
