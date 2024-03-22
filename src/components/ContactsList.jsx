import { useSelector } from 'react-redux';
import { selectContacts } from '../redux/contactsSlice';
import Contact from './Contact';

const ContactList = () => {
  const contacts = useSelector(selectContacts);

  return (
    <div>
      <h2>Contact List</h2>
      <ul>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
