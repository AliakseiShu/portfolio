import React from 'react';
import style from './contacts.module.css';
import styleContainer from '../common/styles/Container.module.css';


export const Contacts = () => {
  return (
    <div className={style.contactsBlock}>
      <div className={`${styleContainer.container} ${style.contactsContainer}`}>
        <h2 className={style.titleContacts}>Contacts</h2>
        <form className={style.contactsForm}>
          <input type="text"/>
          <input type="text"/>
          <textarea></textarea>
        </form>

        <a className={style.buttonContacts}>Отправить</a>
      </div>
    </div>
  );
}

