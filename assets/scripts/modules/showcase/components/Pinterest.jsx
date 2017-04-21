import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import { CSSGrid, SpringGrid, measureItems, layout, enterExitStyle } from 'react-stonecutter';
import TextImage from './TextImage'
const Grid = measureItems(SpringGrid);

export default class Pinterest extends React.Component{
    constructor(){
        super()
    }
    renderCards(){
        return this.props.posts.map((post,i) => {
            return (
                <Card key={i} className="asdasdsa">
                    <TextImage post={post} overlay={false}/>
                    <Card.Content>
                        <Card.Header>
                            Matthew
                        </Card.Header>
                    </Card.Content>
                </Card>
            )
        })
    }
    render(){
        const columnNumber = parseInt(this.props.posts_per_row)
        console.log('******',this.props.posts)
        return(
            <Grid
                columns={columnNumber}
                columnWidth={150}
                gutterWidth={5}
                gutterHeight={5}
                layout={layout.pinterest}
                duration={800}
                easing="ease-out"
                enter={enterExitStyle.simple.enter}
            >
                <Card.Group>
                    {this.renderCards()}
                </Card.Group>
            </Grid>
        )
    }
}