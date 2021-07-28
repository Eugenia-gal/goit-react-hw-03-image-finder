import React from 'react';
import s from './ImageGalleryItem.module.scss';

function ImageGalleryItem({ src, tags, largeImage, onClick }) {
  return (
    <li className={s.ImageGalleryItem}>
      <img
        src={src}
        alt={tags}
        className={s.ImageGalleryItem_image}
        onClick={() => {
          onClick({ largeImage, tags });
        }}
      />
    </li>
  );
}

export default ImageGalleryItem;
