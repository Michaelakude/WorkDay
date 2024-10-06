import React, { useState, useEffect } from 'react';

const Search = () => {
    const [countries, setCountries] = useState([]);
    const [search, setSearch] = useState('');
    const [filteredCountries, setFilteredCountries] = useState([]);

    
    useEffect(() => {
        fetch(`http://localhost:8000/countries/`)
            .then(response => response.json())
            .then(data => setCountries(data));
    }, []);

    
    const handleSubmit = (e) => {
        e.preventDefault();  

        
        const filtered = countries.filter(country =>
            country.name.toLowerCase().includes(search.toLowerCase())
        );
        
        setFilteredCountries(filtered); 
    };
    

    return (
     
        <div>
           
            <div>
                <h1>Country List</h1>
                <ul>
                    {countries.map(country => (
                        <li key={country.id}>{country.name}</li>
                    ))}
                </ul>
            </div>
            <form onSubmit={handleSubmit}>
                <label>Search Country</label>
                <input 
                    type="text"
                    placeholder="Search Country" 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button type="submit" className="btn">Button</button>
            </form>

            <div>
                <h3>Results:</h3>
                <ul>
                    {filteredCountries.length > 0 ? (
                        filteredCountries.map(country => (
                            <li key={country.id}>{country.name}</li>
                        ))
                    ) : (
                        <li>No countries found</li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Search;
