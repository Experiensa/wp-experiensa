import React from 'react'
import {connect} from 'react-redux'
import {requestPosts} from '../actions'

class Showcase extends React.Component{
    constructor(){
        super()
    }
    componentWillMount(){
        console.log('mis query son ',this.props.query)
        console.log('mis options son ',this.props.options)
        this.props.requestPosts(this.props.query.cpt,this.props.query.taxonomy,this.props.query.terms)
    }
    render(){
        console.log('mi query', this.props.query)
        console.log('mi options', this.props.options)
        return(
            <h1>AQUI COMIENZA EL SHOWCASE</h1>
        )
    }
}
function mapStateToProps(state){
    console.log('mapStateToProps',state.posts)
    return {
        posts: state.posts.posts
    }
}

export default connect(mapStateToProps,{requestPosts})(Showcase)