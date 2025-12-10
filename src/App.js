
import React, { useState } from 'react';

function App() {
  const [contact, setContact] = useState({ name: '', email: '', phone: '' });
    const [contactList, setContactList] = useState([]);

      const handleChange = (e) => {
          setContact({ ...contact, [e.target.name]: e.target.value });
            };

              const handleSubmit = (e) => {
                  e.preventDefault();
                      setContactList([...contactList, contact]);
                          setContact({ name: '', email: '', phone: '' });
                            };

                              return (
                                  <div style={{ padding: '20px' }}>
                                        <h2>Contact Manager</h2>
                                              <form onSubmit={handleSubmit}>
                                                      <input name="name" placeholder="Name" value={contact.name} onChange={handleChange} /><br /><br />
                                                              <input name="email" placeholder="Email" value={contact.email} onChange={handleChange} /><br /><br />
                                                                      <input name="phone" placeholder="Phone" value={contact.phone} onChange={handleChange} /><br /><br />
                                                                              <button type="submit">Add Contact</button>
                                                                                    </form>

                                                                                          <h3>Contact List</h3>
                                                                                                <ul>
                                                                                                        {contactList.map((c, index) => (
                                                                                                                  <li key={index}>
                                                                                                                   {c.name} - {c.email} - {c.phone}
                                                                                                                            </li>
                                                                                                                                    ))}
                                                                                                                                          </ul>
                                                                                                                                              </div>
                                                                                                                                                );
                                                                                                                                                }

                                                                                                                                                export default App;
                                                                                                                                                
    

