import React from 'react';
import style from './Nav.module.scss';

export const Nav = () => {
  return (
    <div className={style.nav}>
      <a className={style.navLink} href="">HOME</a>
      <a className={style.navLink} href="">SKILLS</a>
      <a className={style.navLink} href="">PORTFOLIO</a>
      <a className={style.navLink} href="">CONTACT</a>
    </div>
  );
}

