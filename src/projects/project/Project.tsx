import React from 'react';
import style from './Project.module.scss';
import {Button} from "../../common/components/button/Button";

interface Properties<T, U> {
}

type ProjectType = {
    buttonName: string
    title: string
    description: string
    style: Properties<string | number, string & {}>
}

export const Project = (props: ProjectType) => {
    return (
        <div className={style.project}>
            <div className={style.image} style={props.style}>
                <Button buttonName={props.buttonName}/>
                {/*<a className={style.btn}>{props.buttonName}</a>*/}
            </div>
            <div className={style.projectInfo}>
                <h3 className={style.projectTitle}>{props.title}</h3>
                <span  className={style.description}>{props.description}</span>
            </div>

        </div>
    );
}

