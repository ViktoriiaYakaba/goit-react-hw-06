import ContactForm from "./ContactForm";
import SearchBox from "./SearchBox";
import ContactList from "./ContactsList";
import './App.css';


const App = () => {
    return (
        <div>
            <h1>Phonebook</h1>
            <ContactForm />
            <SearchBox />
           <ContactList /> 
        </div>
    )
}
export default App;
