import React, { useState, useEffect } from 'react';
import CelebrityItem from './components/CelebrityItem';
import SearchBar from './components/SearchBar';
import './App.css';
import celebritiesData from './data/celebrities.json';

interface Celebrity {
  id: number;
  first: string;
  last: string;
  dob: string;
  gender: string;
  email: string;
  picture: string;
  country: string;
  description: string;
}

const App: React.FC = () => {
  const [celebrities, setCelebrities] = useState<Celebrity[]>(celebritiesData as Celebrity[]);
  const [filteredCelebrities, setFilteredCelebrities] = useState<Celebrity[]>(celebritiesData as Celebrity[]);

  const handleDelete = (id: number) => {
    const updatedCelebrities = celebrities.filter((celeb) => celeb.id !== id);
    setCelebrities(updatedCelebrities);
    setFilteredCelebrities(updatedCelebrities);
  };

  const handleSearch = (query: string) => {
    const lowercasedQuery = query.toLowerCase();
    const filtered = celebrities.filter((celeb) =>
      celeb.first.toLowerCase().includes(lowercasedQuery) ||
      celeb.last.toLowerCase().includes(lowercasedQuery)
    );
    setFilteredCelebrities(filtered);
  };

  useEffect(() => {
    setFilteredCelebrities(celebrities);
  }, [celebrities]);

  return (
    <div className="app-container">
      <SearchBar onSearch={handleSearch} />
      {filteredCelebrities.map((celebrity) => (
        <CelebrityItem
          key={celebrity.id}
          celebrity={celebrity}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default App;
