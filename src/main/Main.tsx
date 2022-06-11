import React from 'react';
import style from './Main.module.scss';
import styleContainer from '../common/styles/Container.module.scss';

export const Main = () => {
  return (
    <div className={style.mainBlock}>
      <div className={styleContainer.container}>
        <div className={style.text}>
          <span>HI THERE !</span>
          <h1>I'M ALIAKSEI SHULHA </h1>
          <p>FRONTEND DEVELOPER</p>
        </div>
        <div className={style.photo}></div>
      </div>
    </div>
  );
}

