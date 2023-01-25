import axios from 'axios';

const contactsApi = axios.create({
  baseURL: 'https://63d15af53f08e4a8ff963314.mockapi.io/contacts',
});

export const getContacts = async () => (await contactsApi.get()).data;
