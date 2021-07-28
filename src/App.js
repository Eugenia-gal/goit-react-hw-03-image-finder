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
    selectedImageURL: null,
    selectedImageTags: null,
    showModal: false,
  };

  saveSearchQuery = text => {
    this.setState({ searchQuery: text });
  };

  handleSelectImage = selectedImage => {
    console.log('Кликнули');
    console.log(selectedImage.tags);
    console.log(selectedImage.largeImage);
    this.setState({
      selectedImageURL: selectedImage.largeImage,
      selectedImageTags: selectedImage.tags,
    });
    this.toggleModal();
  };

  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
  };

  render() {
    const { searchQuery, showModal, selectedImageURL, selectedImageTags } =
      this.state;
    return (
      <div className="App">
        <SearchBar onSubmit={this.saveSearchQuery} />
        <ImageGallery query={searchQuery} onSelect={this.handleSelectImage} />
        {showModal && <Modal src={selectedImageURL} tags={selectedImageTags} />}
        <Toaster />
      </div>
    );
  }
}

export default App;
