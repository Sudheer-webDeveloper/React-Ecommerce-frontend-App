import React from "react";
import { BsTwitter, BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    setName("");
  };

  return (
    <div className="former-6">
      <form className="form-6" onSubmit={handleSubmit}>
        <h2>BE IN TOUCH WITH US</h2>
        <div className="form-input-6">
          <input
            type='email'
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="E-mail"
          />
          <button type="submit">Join US</button>
        </div>

        <div className="icons-6">
          <BsTwitter  />
          <BsInstagram />
          <BsFacebook />
          <BsWhatsapp  />
        </div>
      </form>
    </div>
  );
};

export default Contact;
