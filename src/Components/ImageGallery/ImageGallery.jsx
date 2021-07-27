import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import ImageGalleryItem from 'Components/ImageGalleryItem';
import Button from 'Components/Button';
import fetchImages from 'Services/getImages';
import s from './ImageGallery.module.scss';
import toast from 'react-hot-toast';
// import Modal from 'Components/Modal/Modal';

const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export class ImageGallery extends Component {
  state = {
    currentPage: 1,
    images: [],
    loading: false,
    status: STATUS.IDLE,
  };

  componentDidUpdate(prevProps, prevState) {
    const oldQuery = prevProps.query;
    const newQuery = this.props.query;
    const oldPage = prevState.currentPage;
    const newPage = this.state.currentPage;

    if (oldQuery !== newQuery) {
      this.setState({ currentPage: 1, images: [] });
      this.getImages(newQuery, newPage);
    }

    if (oldQuery === newQuery && oldPage !== newPage) {
      this.getImages(newQuery, newPage);
    }

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }

  getImages = (query, page) => {
    this.setState({ status: STATUS.PENDING });
    fetchImages(query, page)
      .then(images => {
        if (images.length === 0) {
          this.setState({ status: STATUS.IDLE });
          return toast.error('Wrong query!', {
            position: 'top-right',
            duration: 2000,
          });
        }
        this.setState(prevState => ({
          images: [...prevState.images, ...images],
        }));
        this.setState({ status: STATUS.RESOLVED });
      })
      .catch(() => toast.error('Ooops, something went wrong.'));
  };

  changeCurrentPage = () => {
    this.setState(prevState => ({ currentPage: prevState.currentPage + 1 }));
  };

  render() {
    const { images, status } = this.state;

    return (
      <>
        <>
          <ul className={s.ImageGallery}>
            {images.length > 0 &&
              images.map(image => (
                <ImageGalleryItem
                  key={image.id}
                  src={image.webformatURL}
                  alt={image.tags}
                  modalImage={image.largeImageURL}
                />
              ))}
          </ul>

          {status === STATUS.PENDING && (
            <Loader type="ThreeDots" color="#3f51b5" height={100} width={100} />
          )}
          {status === STATUS.RESOLVED && images.length > 0 ? (
            <Button onClick={this.changeCurrentPage} />
          ) : (
            false
          )}
        </>
      </>
    );
  }
}

export default ImageGallery;
