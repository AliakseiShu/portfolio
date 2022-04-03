import React from 'react';
import style from './Projects.module.css';
import styleContainer from "../common/styles/Container.module.css";
import { Project } from "./project/Project";


export const Projects = () => {
  return (
    <div className={style.projectBlock}>
      <div className={`${styleContainer.container} ${style.projectContainer}`}>
        <h2 className={style.projectTitle}>Project</h2>
        <div className={style.projects}>
        <Project buttonName={"Посмотреть"} title={"Social Network"} description={"Project description"}/>
        <Project buttonName={"Посмотреть"} title={"Todo list"} description={"Project description"}/>
        </div>
      </div>
    </div>
  );
}

