import React from 'react';
import style from './Project.module.css';


type ProjectType = {
  buttonName: string
  title: string
  description: string
}

export const Project = (props: ProjectType) => {
  return (
    <div className={style.project}>
      <div className={style.imgContainer}>
        <a className={style.button}>{props.buttonName}</a>
      </div>
      <div>
      <div className={style.projectTitle}>{props.title}</div>
      <span className={style.projectDescription}>{props.description}</span>
      </div>
    </div>
  );
}

