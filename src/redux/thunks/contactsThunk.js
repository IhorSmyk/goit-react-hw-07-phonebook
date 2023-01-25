import { createAsyncThunk } from '@reduxjs/toolkit';
import { getContacts } from 'services/API';

export const getContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      return await getContacts();
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
