import React from "react";
import styles from "./SearchResults.css";
import TrackList from "../TrackList/TrackList";

function SearchResults(props) {
    return (
      <div className="SearchResults">
        <TrackList
          userSearchResults={props.userSearchResults}
          isRemoval={false}
          onAdd={props.onAdd}
        />
      </div>
    );
  }
  
  export default SearchResults;