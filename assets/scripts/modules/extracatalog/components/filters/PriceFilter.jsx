import 'rc-slider/assets/index.css';
import React from 'react';
import {connect} from 'react-redux'
import ReactDOM from 'react-dom';
import Slider, { createSliderWithTooltip } from 'rc-slider';
import { Accordion, Icon } from 'semantic-ui-react'
import {filterCatalog} from '../../actions'

const Range = Slider.Range

function moneyFormatter(v) {
  return `${v} ${experiensa_vars.currency}`;
}
const marks = {
  0: `0 ${experiensa_vars.currency}`,
  9999: `9999 ${experiensa_vars.currency}`
};
const SliderWithTooltip = createSliderWithTooltip(Range);

class PriceFilter extends React.Component{
  constructor(props) {
    super(props);
  }
  onSliderChange = (value) => {
    this.props.filterCatalog('FILTER_PRICE', this.props.input_text, true, value)
  }
  render(){
    const fields = this.props;
    return(
      <Accordion fluid styled exclusive={false}>
        <Accordion.Title active={true} index={0}>
          Prix
        </Accordion.Title>
        <Accordion.Content active={true}>
          <SliderWithTooltip
            tipFormatter={moneyFormatter}
            marks={marks}
            tipProps={{ overlayClassName: 'foo' }}
            defaultValue={[0, 9999]}
            min={0} max={9999}
            onChange={this.onSliderChange} 
          />
        </Accordion.Content>
      </Accordion>
    )
  }
}
function mapStateToProps(state){
	return {
      isActive: false,
      input_text: state.catalog.input_text
	}
}
export default connect(mapStateToProps,{filterCatalog})(PriceFilter)