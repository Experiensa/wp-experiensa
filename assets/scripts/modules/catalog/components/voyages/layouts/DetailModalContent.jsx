import React from 'react'
import { Button, Header, Image, Modal, Icon, Grid, Menu, Segment, Container } from 'semantic-ui-react'
import imageUrl from '../../../../../../images/travel-no-image.jpg'
const travelNoImage = experiensa_vars.dist_url + imageUrl

export default class DetailsModal extends React.Component {
    constructor(){
        super()
    }
    renderInformation(){
        let voyage = this.props.data
        let price = () =>{
            let value = ""
            if(voyage.price){
                value = "<b>Price</b>: "+ voyage.price+" "
                if(voyage.currency)
                    value += voyage.currency
                value += "<br/>"
            }
            return value
        }
        let duration = () =>{
            return (voyage.duration.text?"<b>Duration</b>: " + voyage.duration.text+"<br/>":"")
        }
        let country = () =>{
            return (voyage.country.text?"<b>Country</b>: " + voyage.country.text+"<br/>":"")
        }
        let location = () =>{
            return (voyage.location.text?"<b>Location</b>: " + voyage.location.text+"<br/>":"")
        }
        let theme = () =>{
            return (voyage.theme.text?"<b>Theme</b>: " + voyage.theme.text+"<br/>":"")
        }
        return(
            <Grid stackable columns={2}>
                <Grid.Column width={6}>
                    <Container>
                    <div dangerouslySetInnerHTML={{__html: price()}}/>
                    <div dangerouslySetInnerHTML={{__html: duration()}}/>
                    <div dangerouslySetInnerHTML={{__html: country()}}/>
                    <div dangerouslySetInnerHTML={{__html: location()}}/>
                    <div dangerouslySetInnerHTML={{__html: theme()}}/>
                    <br/>
                    </Container>
                </Grid.Column>
                <Grid.Column width={10}>
                    <Container>
                        <p dangerouslySetInnerHTML={{__html: voyage.content}}></p>
                    </Container>
                </Grid.Column>
            </Grid>
        )
    }
    renderDetails(){
        let voyage = this.props.data
        let itinerary_title = () => {
            let title = ''
            if(voyage.itinerary && voyage.itinerary !== "")
                title = "Itinerary"
            return title
        }
        return(
            <div>
                <Header as='h2'>{itinerary_title()}</Header>
                <p dangerouslySetInnerHTML={{__html: voyage.itinerary}}/>
            </div>
        )
    }
    renderGallery(){
        let voyage = this.props.data
        let voyageImage = () => {
            const lostTravelImage = travelNoImage
            let image = voyage.cover_image
            let imageSrc
            if(!image.feature_image && image.gallery.length < 1){
                imageSrc = lostTravelImage
            }else{
                if(image.feature_image){
                    imageSrc = image.feature_image
                }else{
                    imageSrc = image.gallery[0]
                }
            }
            return imageSrc
        }
        return(
            <Image src={voyageImage()} centered/>
        )
    }
    render(){
        const context = this.props.context
        if(context === 'gallery'){
            return(
                <Segment attached='bottom'>
                    <Container textAlign='center'>
                        {this.renderGallery()}
                    </Container>
                </Segment>
            )
        }else{
            if(context === 'details'){
                return(
                    <Segment attached='bottom'>
                        {this.renderDetails()}
                    </Segment>
                )
            }
        }

        return (
            <Segment attached='bottom'>
                {this.renderInformation()}
            </Segment>
        )
    }
}