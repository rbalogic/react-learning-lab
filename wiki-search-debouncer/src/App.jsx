import { useEffect, useState } from "react";

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState();

  useEffect(() => {
    const fetchResults = async () => {
      console.log("fetching queries for", searchTerm);
      const response = await fetch(
        `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=5&srsearch=${searchTerm}`,
      );
      const data = await response.json();
      setSearchResults(data.query.search);
    };
    if (searchTerm && searchTerm.length >= 5) {
      fetchResults();
    }
  }, [searchTerm]);

  return (
    <div>
      <h1>Wiki Search</h1>
      <input
        type="text"
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      ></input>
      <h1>Results</h1>
      {searchResults.map((searchResult, index) => {
        return <p key={index}>{searchResult.title}</p>;
      })}
    </div>
  );
};

export default App;
