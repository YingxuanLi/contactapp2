import React from "react";
import PropTypes from "prop-types";
import "./index.css";

const Contact = (props) => {
  const { contact } = props;
  return (
    <div className="card">
      <h3>{contact.name}</h3>
      <p>{contact.phone}</p>
      <p>From: {contact.address.city}</p>
      <p>email: {contact.email}</p>
    </div>
  );
};

const contactItemShape = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string,
  email: PropTypes.string,
  address: PropTypes.shape({
    street: PropTypes.string,
    suite: PropTypes.string,
    city: PropTypes.string,
    zipcode: PropTypes.string
  })
}
Contact.propTypes = {
    contact: PropTypes.shape(contactItemShape).isRequired
};

export default Contact;
