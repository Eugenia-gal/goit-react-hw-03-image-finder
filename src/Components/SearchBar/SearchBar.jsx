import React, { Component } from 'react';

// TODO:
// найти видео про вставку иконок в кнопку

export class SearchBar extends Component {
  state = {
    search: '',
  };

  handleChange = e => {
    this.setState({ search: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState('');
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
