import { createSlice } from '@reduxjs/toolkit';

const contactInitialState = {
  items: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactInitialState,
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },
    deleteContact(state, action) {
      state.items = state.items.filter(contact => contact.id !== action.payload); 
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const selectContacts = state => state.contacts.items;

export default contactsSlice.reducer;

