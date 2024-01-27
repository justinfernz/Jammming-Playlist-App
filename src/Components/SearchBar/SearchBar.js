import React, { useState } from "react";
import styles from "./SearchBar.css";
function SearchBar(props) {
  const [term, setTerm] = useState("");

  function passTerm() {
    props.onSearch(term);
  }

  function handleTermChange({ target }) {
    setTerm(target.value);
  }

  function handleKeyPress(event) {
      if (event.key === "Enter") {
        passTerm();
      }
    };

  return (
    <div className="SearchBar">
      <input
        placeHolder="Enter a song, album, or artist"
        onChange={handleTermChange} onKeyDown={handleKeyPress}
      />
      <button className="SearchButton" onClick={passTerm}>SEARCH</button>
    </div>
  );
}


export default SearchBar;