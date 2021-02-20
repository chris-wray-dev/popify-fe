import React from 'react';
import { connect } from 'react-redux';
import { updateSearchQuery, searchSpotify } from '../../redux/actions';
import './SearchBox.css';


const SearchBox = ({ updateSearchQuery, searchSpotify, searchData: { query } }) => {

  // higlights the selected type by using a box shadow
  const selectType = (type) => {
    const button = document.getElementById(type);
    // if statement used to toggle if already set
    if (button.style.boxShadow === "") {
      button.style.boxShadow = "0px 0px 0px 4px white inset";
    } else {
      button.style.boxShadow = ""
    }

    // searches the type array for the type and adds it if not found and removes it if found
    if (query.type.indexOf(type) === -1) {
      query.type.push(type)
    } else {
      query.type.splice(query.type.indexOf(type));
    }

    // updates the query state with the altered state
    updateSearchQuery(query);
  }

  const handleSubmit = (e) => {
    // preventdefault prevents the normal form action of reloading the page
    e.preventDefault();

    // if 'Go' is clicked and it is missing either a type or a search term it adds the heartbeat class to highlight to user action required
    if (query.type.length === 0) {
      const typeButtons = document.getElementsByClassName("type");
      for (let i = 0; i < typeButtons.length; i++) {
        typeButtons[i].classList.add('heartbeat');
      }
      // removes the class after 1 cycle (1.5s)
      setTimeout(() => {
        for (let i = 0; i < typeButtons.length; i++) {
          typeButtons[i].classList.remove('heartbeat');
        }
      }, 1500);
    }
    if (query.q === "") {
      document.getElementById("search").classList.add('heartbeat');
      setTimeout(() => {
        document.getElementById("search").classList.remove('heartbeat');
      }, 1500);
    }
    if (query.type.length > 0 && query.q !== "") {
      searchSpotify(query);
    }

  }

  // updates the query state as the user types
  const handleChange = (e) => {
    query.q = e.target.value;
    updateSearchQuery(query);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-4 type" id="album" style={ { ...styles.button, ...styles.album } } onClick={() => selectType("album")}>
          <p style={ styles.center }>ALBUM</p>
        </div>
        <div className="col-4 type" id="artist" style={ { ...styles.button, ...styles.artist } } onClick={() => selectType("artist")}>
          <p style={ styles.center }>ARTIST</p>
        </div>
        <div className="col-4 type" id="playlist" style={ { ...styles.button, ...styles.playlist } } onClick={() => selectType("playlist")}>
          <p style={ styles.center }>PLAYLIST</p>
        </div>
      </div>
      <div className="row">
        <div className="col-12 search-bar" style={ styles.search }>
          <form style={styles.center} onSubmit={handleSubmit}>
            <div className="input-group" style={ styles.inputGroup }>
              <input className="form-control form-control-lg" id="search" onChange={handleChange} placeholder="search..." style={styles.input} />
              <button type="submit" className="btn btn-primary btn-lg">Go</button>
            </div>
          </form>
        </div>
      </div>
      <div className="row">
        <div className="col-4 type" id="track" style={ { ...styles.button, ...styles.track } } onClick={() => selectType("track")}>
          <p style={ styles.center }>TRACK</p>
        </div>
        <div className="col-4 type" id="show" style={ { ...styles.button, ...styles.show } } onClick={() => selectType("show")}>
          <p style={ styles.center }>SHOW</p>
        </div>
        <div className="col-4 type" id="episode" style={ { ...styles.button, ...styles.episode } } onClick={() => selectType("episode")}>
          <p style={ styles.center }>EPISODE</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  button: {
    height: 50,
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
    height: 70,
    position: "relative"
  },
  inputGroup: {
    width: 700,
    maxWidth: "95vw"
  },
  input: {
    textAlign: "center"
  },
  center: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  }
}

const mapStateToProps = ({ searchData }) => ({
  searchData
})

const mapActionsToProps = ({
  updateSearchQuery,
  searchSpotify
})

export default connect(mapStateToProps, mapActionsToProps)(SearchBox);
