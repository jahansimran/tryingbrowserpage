import {Component} from 'react'

import './index.css'

import BrowserList from '../BrowserList'

class Browser extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  deleteBtn = id => {
    const {initialHistoryList} = this.props
    const filteredList = initialHistoryList.filter(
      eachItem => eachItem.id !== id,
      console.log('delete'),
    )

    this.setState({
      initialHistoryList: filteredList,
    })
  }

  render() {
    const {initialHistoryList} = this.props
    const {searchInput} = this.state
    const filteredList = initialHistoryList.filter(eachWord =>
      eachWord.title.includes(searchInput),
    )

    return (
      <>
        <div className="header">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            className="history-logo"
            alt="app logo"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/search-img.png"
            className="search-logo"
            alt="search"
          />
          <input
            type="search"
            className="input-bar "
            value={searchInput}
            onChange={this.onChangeSearchInput}
          />
        </div>
        <div className="main-list-container">
          <div className="list-container">
            <ul>
              {filteredList.map(eachItem => (
                <BrowserList
                  key={eachItem.id}
                  listDetails={eachItem}
                  deleteBtn={this.deleteBtn}
                />
              ))}
            </ul>
          </div>
        </div>
      </>
    )
  }
}

export default Browser
