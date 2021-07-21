import { Component } from 'react';
import './App.css';
import { SearchBar } from './Components/SearchBar/SearchBar';
import { ImageGallery } from './Components/ImageGallery/ImageGallery';

const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

class App extends Component {
  state = {
    searchQuery: '',
    status: STATUS.IDLE,
    activeImageId: null,
  };

  saveSearchQuery = text => {
    this.setState({ searchQuery: text });
  };

  render() {
    return (
      <div className="App">
        <SearchBar onSubmit={this.saveSearchQuery} />
        <ImageGallery />
      </div>
    );
  }
}

export default App;
