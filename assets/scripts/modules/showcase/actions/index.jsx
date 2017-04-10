require('es6-promise').polyfill();
import axios from 'axios'
import _ from 'lodash'
//Action Types
export const REQUEST_POSTS = 'REQUEST_POSTS'

function createRequestURL(post_type,taxonomy,terms){
    if(post_type === 'post')
        post_type = 'posts'
    const base_url = experiensa_vars.siteurl + '/wp-json/wp/v2/'
    let requestURL = base_url + post_type
    if(taxonomy !== 'all'){
        requestURL += '?filter[taxonomy]=' + taxonomy
    }
    return requestURL
}
function createPostsObject(data){
    return {
        posts: data
    }
}
//,taxonomy,terms
export function requestPosts(post_type,taxonomy,terms) {
    return(dispatch,getState)=>{
        let requestURL = createRequestURL(post_type,taxonomy,terms)
        console.log('requestURL',requestURL)
        axios.get(requestURL,{timeout: 30000})
        .then((response)=>{
            // let catalogResponse = createCatalogObject(response.data)
            // console.log(catalogResponse)
            console.log('qwewqeqwewqewq',response.data)
            dispatch({
                type: REQUEST_POSTS,
                payload: createPostsObject(response.data)
            })
        })
        .catch((error)=>{
            dispatch({
                type: REQUEST_POSTS,
                payload: createPostsObject([])
            })
        })
    }
}