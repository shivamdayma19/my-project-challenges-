import { useState } from "react";

const Search = () => {
  const [query, setQuery] = useState("");

  const countries = [
    "India",
    "United States",
    "United Kingdom",
    "Australia",
    "Canada",
    "Germany",
    "France",
    "Japan",
    "China",
    "Brazil"
  ];

  const filteredCountries = countries.filter((country) =>
    country.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search countries..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: "8px", border: "1px solid #ccc", borderRadius: "6px" }}
      />

      <ul>
        {filteredCountries.map((country, index) => (
          <li key={index}>{country}</li>
        ))}
      </ul>
    </div>
  );
};

export default Search;