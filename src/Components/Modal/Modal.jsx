import React from 'react';
import s from './Modal.module.scss';

function Modal({ src, tags }) {
  return (
    <div className={s.Overlay}>
      <div className={s.Modal}>
        <img src={src} alt={tags} />
      </div>
    </div>
  );
}

export default Modal;
