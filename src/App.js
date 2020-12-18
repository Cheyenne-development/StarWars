import React, { Component } from 'react';
import SearchBox from './SearchBox';
import DisplayResults from './DisplayResults'
import config from './config'
import './App.css';

class App extends Component {


  state = {
    searchOptions: ['planets', 'starships', 'vehicles', 'people', 'films', 'species'],
    searched: '',
    count: 0,
    names: [],
  }

  handleReset = () => {
    this.setState({
      searched: '',
      count: 0,
      names: [],
    })
  }

  updateResults = resJson => {
    const count = resJson.count
    const names = resJson.results.map(queriedName => (
      queriedName.name
    ))
    if (names.length !== 0) {
      this.setState({
        count: count,
        names: names,
      })
    } else {
      this.setState({
        count: 0,
        names: [`There were no results located for ${this.state.searchQuery} in ${this.state.searched}`],
      })
    }
  }


  handleSearch = (query, category) => {
    this.setState({
      searched: category,
      searchQuery: query
    })
    return fetch(`${config.API_ENDPOINT}${category}/?search=${query}`)
      .then(res => res.json())
      .then(resJson => this.updateResults(resJson))
  }


  render() {
    return (
      <div className="App">
        <SearchBox onSearch={this.handleSearch}
          onReset={this.handleReset}
          categories={this.state.searchOptions} />
        <DisplayResults display={this.state} searched={this.state.searched} />
      </div>
    );
  }
}

export default App;
