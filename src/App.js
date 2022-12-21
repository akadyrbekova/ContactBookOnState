import React, { useState } from "react";
import AddContact from "./components/AddContact/AddContact";
import ContactsList from "./components/ContactsList/ContactsList";
import EditContacts from "./components/EditContacts/EditContacts";
import Header from "./components/Header/Header";
const App = () => {
  let [contacts, setContacts] = useState([]);
  let [editContacts, setEditContacts] = useState({});
  let [isEdit, setEdit] = useState(false); //modal
  //! add data to generous array
  const handleNewContact = (newContact) => {
    let newContactsArray = [...contacts];
    newContactsArray.push(newContact);
    setContacts(newContactsArray);
  };
  //! delete function
  const handleDeleteContact = (id) => {
    let newContactsArray = contacts.filter((item) => {
      return item.id !== id;
    });
    setContacts(newContactsArray);
  };
  //!edit function
  const handleEditContacts = (index) => {
    setEdit(true);
    setEditContacts(contacts[index]);
  };
  //!save function
  const handleSaveEditedContact = (newContact) => {
    let newContactsArray = contacts.map((item) => {
      if (item.id === newContact.id) {
        return newContact;
      }
      return item;
    });
    setContacts(newContactsArray);
    setEdit(false);
  };
  return (
    <div>
      <Header />
      <AddContact handleNewContact={handleNewContact} />
      {isEdit ? (
        <EditContacts
          editContacts={editContacts}
          handleSaveEditedContact={handleSaveEditedContact}
        />
      ) : null}

      <ContactsList
        contacts={contacts}
        handleDeleteContact={handleDeleteContact}
        handleEditContacts={handleEditContacts}
      />
    </div>
  );
};

export default App;
