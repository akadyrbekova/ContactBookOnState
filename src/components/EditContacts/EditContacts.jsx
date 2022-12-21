import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const EditContacts = ({ editContacts, handleSaveEditedContact }) => {
  let [name, setName] = useState(editContacts.name);
  let [email, setEmail] = useState(editContacts.email);
  let [phone, setPhone] = useState(editContacts.phone);
  let [photo, setPhoto] = useState("");

  const handleSaveClick = () => {
    let contact = { ...editContacts };
    contact.name = name;
    contact.email = email;
    contact.phone = phone;
    contact.photo = photo;
    handleSaveEditedContact(contact);

    let newContact = {
      name,
      email,
      phone,
      photo,
    };
  };

  return (
    <>
      <Modal show={handleSaveClick} onHide={handleSaveClick}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Имя</Form.Label>
              <Form.Control
                onChange={(e) => setName(e.target.value)}
                type="text"
                value={name}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                value={email}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Номер телефона</Form.Label>
              <Form.Control
                onChange={(e) => setPhone(e.target.value)}
                type="text"
                value={phone}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Url ссылка</Form.Label>
              <Form.Control
                onChange={(e) => setPhoto(e.target.value)}
                type="text"
                value={photo}
              />
            </Form.Group>
          </Form>
          <Button
            className="container"
            variant="primary"
            onClick={handleSaveClick}
          >
            Сохранить изменения
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EditContacts;
