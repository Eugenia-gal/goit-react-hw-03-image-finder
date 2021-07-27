import React from 'react';
import s from './ImageGalleryItem.module.scss';

function ImageGalleryItem({ src, alt, modalImage }) {
  return (
    <li className={s.ImageGalleryItem}>
      <img src={src} alt={alt} className={s.ImageGalleryItem_image} />
    </li>
  );
}

export default ImageGalleryItem;
