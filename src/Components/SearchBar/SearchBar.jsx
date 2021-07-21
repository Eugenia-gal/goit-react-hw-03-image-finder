import React, { Component } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import s from './SearchBar.module.scss';

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
  };

  render() {
    return (
      <div className={s.wrapper}>
        <form className={s.form} onSubmit={this.handleSubmit}>
          <button className={s.submit_btn} type="submit">
            <AiOutlineSearch className={s.icon} />
          </button>
          <input
            className={s.search_input}
            placeholder="Search images and photos"
            type="text"
            name="search"
            value={this.state.input}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
