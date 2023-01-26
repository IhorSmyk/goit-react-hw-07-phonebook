import axios from 'axios';

const contactsAPI = axios.create({
  baseURL: 'https://63d15af53f08e4a8ff963314.mockapi.io/contacts/',
});

export const getContacts = async () => (await contactsAPI.get()).data;

export const deleteContact = async id => (await contactsAPI.delete(id)).data;

export const addContact = async contact =>
  (await contactsAPI.post('', contact)).data;
