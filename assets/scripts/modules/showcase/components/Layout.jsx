import React from 'react'
import PostGrid from './PostGrid'
import Buttons from './Buttons'

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
        }else{
            return(
                <Buttons posts={this.props.posts} posts_per_row={this.props.posts_per_row}/>
            )
        }
    }
}