import { Component } from 'react';
import { Toaster } from 'react-hot-toast';
import { SearchBar } from './Components/SearchBar/SearchBar';
import ImageGallery from 'Components/ImageGallery/ImageGallery';
import Modal from 'Components/Modal/Modal';
import './App.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

class App extends Component {
  state = {
    searchQuery: '',
    selectedImage: null,
    selectedImageTags: null,
  };

  saveSearchQuery = text => {
    this.setState({ searchQuery: text });
  };

  handleSelectImage = ({ largeImage, tags }) => {
    this.setState({
      selectedImage: largeImage,
      selectedImageTags: tags,
    });
  };

  handleCloseModal = () => {
    this.setState({ selectedImage: null });
  };

  render() {
    const { searchQuery, selectedImage, selectedImageTags } = this.state;
    return (
      <div className="App">
        <SearchBar onSubmit={this.saveSearchQuery} />
        <ImageGallery query={searchQuery} onSelect={this.handleSelectImage} />
        {selectedImage && (
          <Modal
            src={selectedImage}
            tags={selectedImageTags}
            onClose={this.handleCloseModal}
          />
        )}
        <Toaster />
      </div>
    );
  }
}

export default App;
