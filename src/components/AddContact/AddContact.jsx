import React, { useState } from "react";
import "./AddContact.css";

const AddContact = ({ handleNewContact }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [photo, setPhoto] = useState("");
  const handleClick = () => {
    let newContact = {
      name,
      email,
      phone,
      photo,
      id: Date.now(),
    };
    handleNewContact(newContact);

    setName("");
    setEmail("");
    setPhone("");
    setPhoto("");
  };

  return (
    <div className="d-flex flex-column w-50 container add-div">
      <input
        className="rounded mb-0 mb-3 block-example border border-light"
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Имя"
        value={name}
      />
      <input
        className="rounded mb-0 mb-3 block-example border border-light"
        onChange={(e) => setEmail(e.target.value)}
        type="text"
        placeholder="email@mail.ru"
        value={email}
      />
      <input
        className="rounded mb-0 mb-3 block-example border border-light"
        onChange={(e) => setPhone(e.target.value)}
        type="text"
        placeholder="Номер телефона"
        value={phone}
      />
      <input
        className="rounded mb-0 mb-3 block-example border border-light"
        alt="100x100"
        onChange={(e) => setPhoto(e.target.value)}
        type="text"
        placeholder="URL ссылка"
        value={photo}
      />
      <button className="btn btn-primary rounded-pill" onClick={handleClick}>
        Добавить
      </button>
    </div>
  );
};

export default AddContact;
