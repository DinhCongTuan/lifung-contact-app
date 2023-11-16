import React, { useState } from 'react';
import './App.css';
import { Contact } from './interfaces';
import Search from './components/Search';
import List from './components/List';
import Detail from './components/Detail';

const mockData: Contact[] = [
  { id: 1, name: 'Tuan Dinh', email: 'tuandinh@example.com', phone: '123-456-7890' },
  { id: 2, name: 'Toan Dinh', email: 'tuandinh@example.com', phone: '987-654-3210' },
  { id: 3, name: 'John Mr', email: 'john@example.com', phone: '123-456-7890' },
  { id: 4, name: 'John Mss', email: 'JohnMss@example.com', phone: '987-654-3210' },
  { id: 5, name: 'Cong Tuan', email: 'congtuan@example.com', phone: '123-456-7890' },
  { id: 6, name: 'Cuong Cuong', email: 'cuong@example.com', phone: '987-654-3210' },
  { id: 7, name: 'Angle', email: 'Angle@example.com', phone: '123-456-7890' },
  { id: 8, name: 'ABC 123', email: '123@example.com', phone: '987-654-3210' },
  { id: 9, name: '123 ABC', email: 'abc@example.com', phone: '987-654-3210' },
]

const App = () => {

  const [contacts, setContacts] = useState(mockData);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  
  const handleSearch = (query: string) => {
    const filteredContacts = mockData.filter((contact) =>
      contact.name.toLowerCase().includes(query.toLowerCase())
    );
    setContacts(filteredContacts);
    setSelectedContact(null);
  }

  const handleSelect = (contact: Contact) => {
    setSelectedContact(contact);
  }

  return (
    <div className="App">
      <header className="App-header">
        My Contact List 
      </header>
      <Search onSearch={handleSearch}/>
      <List contact={contacts} onSelect={handleSelect}/>
      <Detail contact={selectedContact}/>
    </div>
  );
}

export default App;
