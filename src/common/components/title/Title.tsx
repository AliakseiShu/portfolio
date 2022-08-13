import React from 'react';
import style from './Title.module.scss';

type TitleType ={
    firstName: string
    secondName: string
    descriptionTitle?: string
}

export const Title = (props:TitleType) => {
    return (
        <div className={style.title}>
            <h2>{props.firstName}
                <span> {props.secondName}</span>
            </h2>
            <div className={style.titleSubtitle}>
                {props.descriptionTitle}
            </div>
        </div>
    );
}

