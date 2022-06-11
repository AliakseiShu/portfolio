import React from 'react';
import style from './Button.module.scss';

type ButtonType ={
    buttonName: string
}

export const Button = (props:ButtonType) => {
    return (
        <div>
            <a className={style.btn}>{props.buttonName}</a>
        </div>
    );
}

