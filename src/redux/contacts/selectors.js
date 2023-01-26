import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.contacts;
export const selectFilter = state => state.contacts.filter;

export const selectFilterContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
