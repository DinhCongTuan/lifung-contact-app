import React from 'react'
import { Contact } from '../interfaces';

interface ListProps {
    contact: Contact[];
    onSelect: (contact: Contact) => void
}

const List:React.FC<ListProps> = ({contact, onSelect}) => {



  return (
    <div>
        <h2>Contact List</h2>
        <ul>
            {contact.map((contact) => (
                <li key={contact.id} onClick={() => onSelect(contact)}>
                    {contact.name}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default List;