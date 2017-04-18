import React from 'react'
import PostGrid from './PostGrid'
import Buttons from './Buttons'
import MasonryLayout from './MasonryLayout'
import SliderLayout from './SliderLayout'
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
        if(type == 'super'){
            return(
                <SliderLayout posts={this.props.posts} posts_per_row={this.props.posts_per_row}/>
            )
        }
        return(
            <MasonryLayout posts={this.props.posts} posts_per_row={this.props.posts_per_row}/>
        )
    }
}