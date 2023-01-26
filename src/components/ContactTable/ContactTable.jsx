import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  deleteContactThunk,
  getContactsThunk,
} from 'redux/thunks/contactsThunk';
import { selectFilteredContacts } from 'redux/contacts/selectors';
import s from './ContactTable.module.css';

const ContactTable = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
    <>
      {filteredContacts.length === 0 ? (
        <p className={s.message}>There is no contact</p>
      ) : (
        <table className={s.contactListTable}>
          <thead className={s.thead}>
            <tr>
              <th>Name</th>
              <th>Number</th>
              <th></th>
            </tr>
          </thead>
          <tbody className={s.tbody}>
            {filteredContacts?.map(({ id, name, number }) => {
              return (
                <tr key={id}>
                  <td>{name} </td>
                  <td>{number}</td>
                  <td>
                    <button onClick={() => dispatch(deleteContactThunk(id))}>
                      delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
};

export default ContactTable;
