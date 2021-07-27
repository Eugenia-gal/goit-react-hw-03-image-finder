import React from 'react';
import s from './Button.module.scss';

function Button({ onClick }) {
  return (
    <>
      <button type="button" className={s.Button} onClick={onClick}>
        Load more
      </button>
    </>
  );
}

export default Button;

// window.scrollTo({
//   top: document.documentElement.scrollHeight,
//   behavior: 'smooth',
// });
