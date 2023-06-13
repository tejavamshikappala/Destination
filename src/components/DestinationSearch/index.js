import './index.css'

import {Component} from 'react'

import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {SearchInput: ''}

  forChange = event => {
    this.setState({SearchInput: event.target.value})
  }

  render() {
    const {SearchInput} = this.state

    const {destinationsList} = this.props

    const SearchResults = destinationsList.filter(everyDes =>
      everyDes.name.toLowerCase().includes(SearchInput),
    )

    return (
      <div className="for-outer">
        <div className="for-inner">
          <h1 className="for-header">Destination Search</h1>
          <div className="for-inputs">
            <input
              type="search"
              onChange={this.forChange}
              className="for-input"
              placeholder="Search"
              value={SearchInput}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="for-image"
            />
          </div>
          <ul className="for-ul">
            {SearchResults.map(eachDestination => (
              <DestinationItem
                Each={eachDestination}
                key={eachDestination.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
