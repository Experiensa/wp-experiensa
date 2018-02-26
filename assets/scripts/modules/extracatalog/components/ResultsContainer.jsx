import React from 'react'
import _ from 'lodash'
import { Card, Image } from 'semantic-ui-react'
import LimitedInfiniteScroll from 'react-limited-infinite-scroll'
import VoyageCards from '../../catalog/components/themes/VoyageCards'
const ld = _.noConflict();

class ResultsContainer extends React.Component {
  constructor(){
      super()
  }
  elementsToShow(){
    const { elements } = this.props
    return({
        title: ld.includes(elements,'title'),
        price: ld.includes(elements,'price'),
        detail_button: ld.includes(elements,'detail_button'),
        destination: ld.includes(elements,'destination'),
        duration: ld.includes(elements,'duration'),
        themes: ld.includes(elements,'themes'),
        country: ld.includes(elements,'country'),
        includes: ld.includes(elements,'includes'),
        excludes: ld.includes(elements,'excludes')
    })
  }  
  renderVoyageCards(){
    const { voyages } = this.props
    return this.props.voyages.map((voyage,i) => {
      return(
        <VoyageCards voyage={voyage} key={i} options={this.props.options} show={this.elementsToShow()}/>
      )
    })
  }
  render() {
    return(
      <Card.Group className="stackable" itemsPerRow={4}>
        <LimitedInfiniteScroll 
        limit={5} 
        spinLoader={<div className="loader">Loading...</div>}
        mannualLoader={<span style={{fontSize: 20, lineHeight: 1.5, marginTop: 20, marginBottom: 20, display: 'inline-block'}}>Load More</span>}
        noMore={<div className="loader">No More Items</div>}
        >
        {this.renderVoyageCards()}
        </LimitedInfiniteScroll>
      </Card.Group>
    )
  }
}
export default ResultsContainer;