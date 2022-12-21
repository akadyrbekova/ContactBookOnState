import React from "react";
import { Button, Card } from "react-bootstrap";

const ContactsList = ({
  contacts,
  handleDeleteContact,
  handleEditContacts,
}) => {
  console.log(contacts);
  return (
    <div className="d-flex justify-content-between container mt-5">
      {contacts.map((item, index) => (
        <Card key={item.id} style={{ width: "15rem" }}>
          <Card.Img variant="top" src={item.photo} />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Title>{item.email}</Card.Title>
            <Card.Text>{item.phone}</Card.Text>

            <Button
              className="container"
              variant="danger"
              onClick={() => handleDeleteContact(item.id)}
            >
              Удалить
            </Button>
            <Button
              className="container"
              variant="info"
              onClick={() => handleEditContacts(index)}
            >
              Изменить
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default ContactsList;
