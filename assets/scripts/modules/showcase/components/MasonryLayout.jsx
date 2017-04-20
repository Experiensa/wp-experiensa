import React from 'react'
import Masonry from 'react-masonry-component';
import TextImage from './TextImage'
import { Image } from 'semantic-ui-react'
import * as Images from '../functions/Images'
const masonryOptions = {
    transitionDuration: 0,
    columnWidth: 60
};


export default class MasonryLayout extends React.Component{
    constructor(){
        super()
    }

    renderImages(){
        return this.props.posts.map((post,i) => {
            const imgURL = Images.getImageURL(post)
            return (
                <div key={i} className="masonry-item">
                    <Image
                        src={imgURL}
                        as='a'
                        href={post.link}
                        target='_blank'
                        alt="Post Image"
                    />
                </div>
            )
        })
    }
    render(){
        return(
            <Masonry
                options={masonryOptions}
                className="masonry-layout"
                style={{height:'auto'}}
            >
                {this.renderImages()}
            </Masonry>
        )
    }
}