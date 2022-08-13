import React from 'react';
import style from './Main.module.scss';
import styleContainer from '../common/styles/Container.module.scss';

export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <h3>hi there!</h3>
                    {/* <Title firstName={"I\'M"} secondName={"ALIAKSEI SHULHA"}/>*/}
                    {/*<h1>I'M ALIAKSEI SHULHA </h1>*/}
                    <h1 className={style.staticHeadline}>i'm</h1>
                    <span className={style.dynamicHeadline} >
                     <b className={style.isHidden}>aliaksei shulha</b>
                     <b>frontend developer</b>
                     </span>
                  {/*  <p>FRONTEND DEVELOPER</p>*/}
                </div>
                <div className={style.photo}></div>
            </div>
        </div>
    );
}

