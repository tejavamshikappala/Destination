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
      <div className="forOuter">
        <div className="forInner">
          <h1 className="forHeader">Destination Search</h1>
          <div className="forInputs">
            <input
              type="search"
              onChange={this.forChange}
              className="forInput"
              placeholder="Search"
              value={SearchInput}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="forImage"
            />
          </div>
          <ul className="forUL">
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
