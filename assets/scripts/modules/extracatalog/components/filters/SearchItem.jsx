import React from 'react'
import { Search } from 'semantic-ui-react'

class SearchItem extends React.Component {
  constructor(){
		super()
	}
	componentWillMount() {
    this.resetComponent()
  }
	resetComponent = () => this.setState({ isLoading: false, results: [], value: '' })	
	handleSearchChange(e, control){
		console.log('adsadas',e,control)
		this.setState({
			isLoading: true
		})
	}
  render() {
		const {isLoading, results, value} = this.state
    return(
			<Search 
			loading={isLoading}
			size='large'
			input='text'
			placeholder='Search here'
			fluid
			onSearchChange={this.handleSearchChange}
			showNoResults={true}/>
    )
  }
}
export default SearchItem;