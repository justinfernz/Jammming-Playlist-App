import React from "react";
import styles from "./Playlist.css";
import Tracklist from "../TrackList/TrackList";

function Playlist(props) {
  function handleNameChange({ target }) {
    props.onNameChange(target.value);
  }
  return (
    <div className="Playlist">
      <input placeHolder="New Playlist" onChange={handleNameChange} />
      <Tracklist
        userSearchResults={props.playlistTracks}
        onRemove={props.onRemove}
        isRemoval={true}
      />
      <button className="Playlist-save" onClick={props.onSave} >
        SAVE TO SPOTIFY
      </button>
    </div>
  );
}

export default Playlist;