import { useDispatch } from 'react-redux';
import { deleteContact } from '../redux/contactsSlice';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div>
      <p>Name: {contact.name}</p>
      <p>Phone Number: {contact.phoneNumber}</p> {/* Modifica qui per utilizzare phoneNumber */}
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Contact;





