import React, { Component } from 'react';

// TODO:
// найти видео про вставку иконок в кнопку

export class SearchBar extends Component {
  state = {
    searchQuery: '',
    currentPage: 1,
  };

  handleChange = e => {
    this.setState({ searchQuery: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.searchQuery);
    this.setState({ searchQuery: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <button type="submit">Поиск</button>
        <input
          type="text"
          name="search"
          value={this.state.input}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default SearchBar;
