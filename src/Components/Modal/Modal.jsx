import React, { Component } from 'react';
import s from './Modal.module.scss';

class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.escFunction);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.escFunction);
  }

  escFunction = e => {
    if (e.keyCode === 27) {
      this.props.onClose();
    }
  };

  closeModal = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { src, tags } = this.props;
    return (
      <div
        className={s.Overlay}
        onClick={e => {
          this.closeModal(e);
        }}
      >
        <div className={s.Modal}>
          <img src={src} alt={tags} />
        </div>
      </div>
    );
  }
}

export default Modal;
