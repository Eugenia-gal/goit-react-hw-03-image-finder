import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import ImageGalleryItem from 'Components/ImageGalleryItem';
import Button from 'Components/Button';
import getImages from 'Services/getImages';
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
      this.setState({ status: STATUS.PENDING });
      getImages(newQuery, newPage)
        .then(images => {
          this.setState(prevState => ({
            images: [...prevState.images, ...images],
          }));
          this.setState({ status: STATUS.RESOLVED });
        })
        .catch(() => toast.error('Ooops, something going wrong.'));
    }

    if (oldPage !== newPage) {
      this.setState({ status: STATUS.PENDING });
      getImages(newQuery, newPage)
        .then(images => {
          this.setState(prevState => ({
            images: [...prevState.images, ...images],
          }));
          this.setState({ status: STATUS.RESOLVED });
        })
        .catch(() => toast.error('Ooops, something went wrong.'));
    }

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }

  changeCurrentPage = () => {
    this.setState(prevState => ({ currentPage: prevState.currentPage + 1 }));
  };

  render() {
    const { images, status } = this.state;

    return (
      <>
        {status === STATUS.PENDING && (
          <Loader type="ThreeDots" color="#3f51b5" height={100} width={100} />
        )}

        <>
          <ul className={s.ImageGallery}>
            {status === STATUS.RESOLVED &&
              images.map(image => (
                <ImageGalleryItem
                  key={image.id}
                  src={image.webformatURL}
                  alt={image.tags}
                  modalImage={image.largeImageURL}
                />
              ))}
          </ul>
          {images.length > 0 && <Button onClick={this.changeCurrentPage} />}
        </>
      </>
    );
  }
}

export default ImageGallery;
