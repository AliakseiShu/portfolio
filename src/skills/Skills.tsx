import React from 'react';
import style from './Skills.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import { Skill } from "./skill/Skill";
import {Title} from "../common/components/title/Title";

export const Skills = () => {
  return (
    <div className={style.skillsBlock}>
      <div className={`${styleContainer.container} ${style.skillsContainer}`}>
        <Title firstName={"My"} secondName={"Skills"} descriptionTitle={'Programming skills'}/>
        <div className={style.skills}>
          <Skill title={"JS"} description={"React-это библиотека т.к нужно доустанавливать Роутинг, Редакс  и т.д по выбору. Angular-фреймворк, т.к доустанавливать ничего не надо."} />
          <Skill title={"CSS"} description={"React-это библиотека т.к нужно доустанавливать Роутинг, Редакс  и т.д по выбору. Angular-фреймворк, т.к доустанавливать ничего не надо."}/>
          <Skill title={"REACT"} description={"React-это библиотека т.к нужно доустанавливать Роутинг, Редакс  и т.д по выбору. Angular-фреймворк, т.к доустанавливать ничего не надо."}/>
        </div>
      </div>
    </div>
  );
}

