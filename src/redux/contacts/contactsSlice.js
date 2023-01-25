import { createSlice, nanoid } from '@reduxjs/toolkit';
import { getContactsThunk } from 'redux/thunks/contactsThunk';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], filter: '', isLoading: false, error: null },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.unshift(action.payload);
      },
      prepare(newContact) {
        return { payload: { ...newContact, id: nanoid() } };
      },
    },
    filterContacts(state, action) {
      state.filter = action.payload;
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(el => el.id !== action.payload);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(getContactsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
        state.error = null;
      })
      .addCase(getContactsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { addContact, filterContacts, deleteContact } = contactSlice.actions;
export default contactSlice.reducer;
