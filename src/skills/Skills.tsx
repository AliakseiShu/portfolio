import React from 'react';
import style from './Skills.module.css';
import styleContainer from '../common/styles/Container.module.css';
import { Skill } from "./skill/Skill";

export const Skills = () => {
  return (
    <div className={style.skillsBlock}>
      <div className={`${styleContainer.container} ${style.skillsContainer}`}>
        <h2 className={style.title}>Skills</h2>
        <div className={style.skills}>
          <Skill title={"JS"} description={"React-это библиотека т.к нужно доустанавливать Роутинг, Редакс  и т.д по выбору. Angular-фреймворк, т.к доустанавливать ничего не надо."} />
          <Skill title={"CSS"} description={"React-это библиотека т.к нужно доустанавливать Роутинг, Редакс  и т.д по выбору. Angular-фреймворк, т.к доустанавливать ничего не надо."}/>
          <Skill title={"REACT"} description={"React-это библиотека т.к нужно доустанавливать Роутинг, Редакс  и т.д по выбору. Angular-фреймворк, т.к доустанавливать ничего не надо."}/>
        </div>
      </div>
    </div>
  );
}

