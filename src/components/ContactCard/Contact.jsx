import React from "react";
import PropTypes from "prop-types";
import "./index.css";

const Contact = (props) => {
  const { contact } = props;
  return (
    <div key={contact} className="card">
      <h3>{contact.name}</h3>
      <p>{contact.phone}</p>
    </div>
  );
};

Contact.propTypes = {
    contact: PropTypes.object
};

export default Contact;
