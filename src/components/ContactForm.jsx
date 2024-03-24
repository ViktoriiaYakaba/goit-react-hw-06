import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../redux/contactsSlice';
import css from './ContactForm.module.css';

const ContactsForm = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addContact({ name, phoneNumber }));
    setName('');
    setPhoneNumber('');
  };



  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className={ css.input} />
      <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Phone Number" className={ css.input} />
      <button type="submit" className={css.btn}>Add Contact</button>
    </form>
  );
};

export default ContactsForm;


