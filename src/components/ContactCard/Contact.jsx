import React from "react";
import PropTypes from "prop-types";
import "./index.css";

const Contact = (props) => {
  const { contact } = props;
  return (
    <div className="card">
      <h3>{contact.name}</h3>
      <p>{contact.phone}</p>
      <p>email: {contact.email}</p>
    </div>
  );
};

Contact.propTypes = {
    contact: PropTypes.object.isRequired
};

export default Contact;
