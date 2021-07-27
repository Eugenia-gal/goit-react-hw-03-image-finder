import { Component } from 'react';
import { Toaster } from 'react-hot-toast';
import { SearchBar } from './Components/SearchBar/SearchBar';
import ImageGallery from 'Components/ImageGallery/ImageGallery';
import './App.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

class App extends Component {
  state = {
    searchQuery: '',
    activeImageId: null,
  };

  saveSearchQuery = text => {
    this.setState({ searchQuery: text });
  };

  render() {
    const { searchQuery } = this.state;
    return (
      <div className="App">
        <SearchBar onSubmit={this.saveSearchQuery} />
        <ImageGallery query={searchQuery} />
        <Toaster />
      </div>
    );
  }
}

export default App;
