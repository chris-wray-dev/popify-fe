import React from 'react';

const selectType = (type) => {
  const button = document.getElementById(type);
  if (button.style.boxShadow === "") {
    button.style.boxShadow = "0px 0px 0px 4px white inset";
  } else {
    button.style.boxShadow = ""
  }
}

const SearchBox = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4" id="album" style={ { ...styles.button, ...styles.album } } onClick={() => selectType("album")}>
          <p style={ styles.center }>ALBUM</p>
        </div>
        <div className="col-4" id="artist" style={ { ...styles.button, ...styles.artist } } onClick={() => selectType("artist")}>
          <p style={ styles.center }>ARTIST</p>
        </div>
        <div className="col-4" id="playlist" style={ { ...styles.button, ...styles.playlist } } onClick={() => selectType("playlist")}>
          <p style={ styles.center }>PLAYLIST</p>
        </div>
      </div>
      <div className="row">
        <div className="col-12" style={ styles.search }>
          <input className="form-control form-control-lg" type="text" placeholder="search..." style={ { ...styles.input, ...styles.center} } />
        </div>
      </div>
      <div className="row">
        <div className="col-4" id="track" style={ { ...styles.button, ...styles.track } } onClick={() => selectType("track")}>
          <p style={ styles.center }>TRACK</p>
        </div>
        <div className="col-4" id="show" style={ { ...styles.button, ...styles.show } } onClick={() => selectType("show")}>
          <p style={ styles.center }>SHOW</p>
        </div>
        <div className="col-4" id="episode" style={ { ...styles.button, ...styles.episode } } onClick={() => selectType("episode")}>
          <p style={ styles.center }>EPISODE</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  button: {
    height: 100,
    cursor: "pointer",
    color: "white",
    fontWeight: "bold",
    fontSize: "1.4rem",
    position: "relative"
  },
  album: {
    backgroundColor: "#B529A3"
  },
  artist: {
    backgroundColor: "#FFBC04"
  },
  playlist: {
    backgroundColor: "#FA5023"
  },
  track: {
    backgroundColor: "#B8C403"
  },
  show: {
    backgroundColor: "#FF126A"
  },
  episode: {
    backgroundColor: "#FB8C21"
  },
  search: {
    height: 100,
    backgroundColor: "#777777",
    position: "relative"
  },
  input: {
    textAlign: "center",
    maxWidth: "95%",
    width: 700,
  },
  center: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  }
}

export default SearchBox;