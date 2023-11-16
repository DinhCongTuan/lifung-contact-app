import React, { useState } from 'react'

interface SearchProps {
    onSearch: (query: string) => void;
}

const Search:React.FC<SearchProps> = ({ onSearch }) => {
    const [query, setQuery] = useState('');
    const handleSearch = () => {
        onSearch(query);
    }
  return (
    <div>
        <h2>Search Contacts</h2>
        <input 
            type="text"
            placeholder="Enter name to seach"
            value={query}
            onChange={e => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
    </div>
  )
}

export default Search;