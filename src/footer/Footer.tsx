import React from 'react';
import style from './Footer.module.css';
import styleContainer from "../common/styles/Container.module.css";


export const Footer = () => {
  return (
    <div className={style.footerBlock}>
      <div className={`${styleContainer.container} ${style.footerContainer}`}>
        <h2 className={style.titleFooter}>Aliaksei Shulha</h2>
        <div className={style.socialFooterContainer}>
          <div className={style.socialFooter}></div>
          <div className={style.socialFooter}></div>
          <div className={style.socialFooter}></div>
          <div className={style.socialFooter}></div>
        </div>

        <span>2022 Все права защищены</span>
      </div>
    </div>
  );
}

