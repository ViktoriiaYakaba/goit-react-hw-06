import { useSelector } from 'react-redux';
import { selectContacts } from '../redux/contactsSlice';
import Contact from './Contact';

const listItemStyles = {
  display: "flex",
  flexWrap: "wrap",
  gap: 25,
}


const ContactList = () => {
  const contacts = useSelector(selectContacts);

  return (
    <div>
      <h2 >Contact List</h2>
      <ul style={listItemStyles}>
        {contacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
