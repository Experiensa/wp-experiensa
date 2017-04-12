import React from 'react'
import { Grid, Image, Segment, Container, Header, Dimmer} from 'semantic-ui-react'
import _ from 'lodash'
import TextImage from './TextImage'
export default class PostGrid extends React.Component{
    constructor(){
        super()
    }
    renderColumns(){
        return this.props.posts.map((post,i)=>{
            console.log('mi post actaul es',post)
            return (
                <Grid.Column key={i}>
                    <Segment.Group>
                        <Segment secondary textAlign="center">
                            <TextImage post={post} overlay={true}/>
                        </Segment>
                    </Segment.Group>
                </Grid.Column>
            )
        })
    }
    render(){
        return(
            <Grid stackable columns={this.props.posts_per_row}>
                {this.renderColumns()}
            </Grid>
        )
    }
}