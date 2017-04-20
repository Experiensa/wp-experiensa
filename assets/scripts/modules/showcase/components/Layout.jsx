import React from 'react'
import PostGrid from './PostGrid'
import Buttons from './Buttons'
import MasonryLayout from './MasonryLayout'
import Carousel from './Carousel'
import VegasSLider from './VegasSlider'
export default class Layout extends React.Component{
    constructor(){
        super()
    }
    render(){
        // console.log('el type layout es',this.props.type)
        let type = this.props.type
        if(type == 'grid') {
            return (
                <PostGrid posts={this.props.posts} posts_per_row={this.props.posts_per_row}/>
            )
        }
        if(type == 'button'){
            return(
                <Buttons posts={this.props.posts} posts_per_row={this.props.posts_per_row}/>
            )
        }
        if(type == 'carousel'){
            return(
                <Carousel posts={this.props.posts} posts_per_row={this.props.posts_per_row}/>
            )
        }
        if(type == 'vegas'){
            return(
                <VegasSLider posts={this.props.posts}/>
            )
        }
        return(
            <MasonryLayout posts={this.props.posts} posts_per_row={this.props.posts_per_row}/>
        )
    }
}