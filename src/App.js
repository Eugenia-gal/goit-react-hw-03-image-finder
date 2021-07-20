import { Component } from 'react';
import './App.css';
import { SearchBar } from './Components/SearchBar/SearchBar';

class App extends Component {
  state = {
    searchQuery: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.elements.search);
    // this.setState({ searchQuery: e.target });
  };

  render() {
    return (
      <div className="App">
        <SearchBar onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
