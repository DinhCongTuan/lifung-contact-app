import React from 'react'
import { Contact } from '../interfaces'

interface DetailProps {
    contact: Contact | null;
}

const Detail:React.FC<DetailProps> = ({contact}) => {
    if (!contact) {
        return <div>No contact selected</div>
    }
  return (
    <div>
        <h2>Contact Details</h2>
        <p>Name: {contact.name}</p>
        <p>Email: {contact.email}</p>
        <p>Phone: {contact.phone}</p>
    </div>
  )
}

export default Detail;