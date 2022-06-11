import React from 'react';
import style from './Footer.module.scss';
import styleContainer from "../common/styles/Container.module.scss";
import {Title} from "../common/components/title/Title";

export const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <Title firstName={'Aliaksei'} secondName={'Shulha'} descriptionTitle={'social profiles'}/>
                <div className={style.socialIcons}>
                    <div className={style.socialIcon}></div>
                    <div className={style.socialIcon}></div>
                    <div className={style.socialIcon}></div>
                    <div className={style.socialIcon}></div>
                </div>
                <span className={style.copyright}>Copyright © 2022 All Rights Reserved.</span>
            </div>
        </div>
    );
}

