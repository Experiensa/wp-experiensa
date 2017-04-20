import React from 'react'
import DataRow from '../common/DataRow'
// import VoyageImageMinimalist from './voyages/layouts/VoyageImageMinimalist'
// import CatalogVoyageDetailsModalMinimalist from './voyages/layouts/CatalogVoyageDetailsModalMinimalist'
import DetailsModal from '../voyages/layouts/DetailsModal'
import { Card } from 'semantic-ui-react'

export default class Minimalist extends React.Component {
    constructor(){
        super()
    }
    createTitleRow(value,show){
        if(show){
            return(
                <div className="header catalog-title">{value}</div>
            )
        }
        return(<div></div>)
    }
    createDataRow(title,value,show){
        if(show) {
            return (
                <div className="catalog-content">
                    <br/><strong>{title}: </strong>{value}
                </div>
            );
        }
        return(<div></div>);
    }
    renderDetailButton(price){
        if(this.props.show.detail_button){
            return(
                <DetailsModal voyage={this.props.voyage} price={price} options={this.props.options} type="button"/>
            )
        }else{
            return(
                <div></div>
            )
        }
    }
    render() {
        const voyage = this.props.voyage;
        let currency = "USD";
        if(voyage.currency!=null)
            currency = voyage.currency
        let price = "No Available"
        if(voyage.price != '')
            price = voyage.price
        if(price != 'No Available')
            price = currency+' '+price
        // console.log('soy el voyage',voyage);
        // console.log('mis opt son',this.props.options);
        // console.log('mis show son',this.props.show);
        return(
            <div className="ui card">
                <DetailsModal voyage={this.props.voyage} price={price} options={this.props.options} type="image"/>
                <div className="content">
                    <DataRow show={this.props.show.title} title={voyage.title} value="" isTitle={true}/>
                    <DataRow show={this.props.show.duration} title="Duration" value={voyage.duration} isTitle={false}/>
                    <DataRow show={this.props.show.themes} title="Theme" value={voyage.theme.text} isTitle={false}/>
                    <DataRow show={this.props.show.location} title="Places" value={voyage.location.text} isTitle={false}/>
                    <DataRow show={this.props.show.country} title="Country" value={voyage.country.text} isTitle={false}/>
                </div>
                {this.renderDetailButton(price)}
            </div>
        )
    }
}
