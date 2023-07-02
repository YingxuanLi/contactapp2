import "./App.css";
import { useEffect, useState } from "react";
import Contact from "./components/ContactCard/Contact";

const App = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setContacts(data));
  }, []);

  return (
    <div>
      <section>
        <div className="container">
          <h1>Responsive Contact Cards</h1>
          <div className="contactCards">
            {contacts.map((contact) => (
              <Contact contact={contact} key={contact.id} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
