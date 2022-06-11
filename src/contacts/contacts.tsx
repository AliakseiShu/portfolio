import React from 'react';
import style from './contacts.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import {Title} from "../common/components/title/Title";

export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title firstName={'My'} secondName={'Contacts'} descriptionTitle={'contact us'}/>
                <form className={style.contactsForm}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea/>
                    <button type={"submit"} className={style.submitBtn}>SEND MESSAGE</button>
                </form>
            </div>
        </div>
    );
}

