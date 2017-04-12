import React from 'react'
import { Image, Container, Header } from 'semantic-ui-react'

export default class TextImage extends React.Component{
    constructor(){
        super()
        this.state = {active: false}
    }
    getContent(){
        return(
            <h2>hola mundo</h2>
        )
    }
    renderSingleImage(){
        return(
            <Image
                src="http://www.cravelook.com/media/wysiwyg/404NotFound.jpg"
                as='a' size='medium'
                href={this.props.post.link}
                target='_blank'
                alt="Post Image"
            />
        )
    }
    renderTextImage(active){

        // console.log('mi content es')
        return(
            <Dimmer.Dimmable
                as={Image}
                dimmed={active}
                dimmer={{ active, content }}
                onMouseEnter={this.handleShow}
                onMouseLeave={this.handleHide}
                size='medium'
                src='http://www.cravelook.com/media/wysiwyg/404NotFound.jpg'
            />
        )
    }
    handleShow = () => this.setState({ active: true })
    handleHide = () => this.setState({ active: false })
    render(){
        const { active } = this.state
        const content = this.getContent()
        console.log('mi active es',active)
        // return(
        //     <h4>TEXTIMAGE</h4>
        // )
        if(this.props.overlay){
            return(
                <Dimmer.Dimmable
                    as={Image}
                    dimmed={active}
                    dimmer={{ active, content }}
                    onMouseEnter={this.handleShow}
                    onMouseLeave={this.handleHide}
                    size='medium'
                    src='http://www.cravelook.com/media/wysiwyg/404NotFound.jpg'
                />
             )
        }else{
             return(
                 <div>
                     {this.renderSingleImage()}
                 </div>
             )
        }
    }
}