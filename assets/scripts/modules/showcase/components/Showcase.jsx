import React from 'react'
import {connect} from 'react-redux'
import {requestPosts} from '../actions'
import Layout from './Layout'
import _ from 'lodash'
import { Segment } from 'semantic-ui-react'

class Showcase extends React.Component{
    constructor(){
        super()
    }
    componentWillMount(){
        console.log('mis query son ',this.props.query)
        console.log('mis options son ',this.props.options)
        this.props.requestPosts(this.props.query.cpt,this.props.query.taxonomy,this.props.query.terms,this.props.query.max)
    }
    render(){
        console.log('mi query', this.props.query)
        console.log('mi options', this.props.options)
        console.log('mis posts son',this.props.posts)
        if(_.isEmpty(this.props.posts)){
            return (<h1>No Posts Available</h1>)
        }else {
            // console.log('voy a enviar posts',this.props.posts)
            // console.log('voy a enviar type',this.props.options.type)
            // console.log('voy a enviar row',this.props.options.posts_per_row)
            return (
                 <Segment vertical className='component-content'>
                     <Layout posts={this.props.posts} type={this.props.options.type} posts_per_row={this.props.options.posts_per_row}/>
                 </Segment>
             )
        }
    }
}
function mapStateToProps(state){
    // console.log('mapStateToProps',state.posts)
    return {
        posts: state.posts.posts
    }
}

export default connect(mapStateToProps,{requestPosts})(Showcase)