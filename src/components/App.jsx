import { ContactForm } from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactTable from './ContactTable/ContactTable';
import { useSelector } from 'react-redux';
import { Loader } from './Loader/Loader';

export const App = () => {
  const isLoading = useSelector(state => state.contacts.isLoading);
  return (
    <div>
      {isLoading && <Loader />}
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactTable />
    </div>
  );
};
