import {
  SEARCH_SPOTIFY,
  SEARCH_SPOTIFY_SUCCESS,
  SEARCH_SPOTIFY_ERROR
} from '../actions';

const INIT_STATE = {
  loading: false,
  query: {
    q: "",
    type: []
  },
  results: []
};

const searchSpotify = (state = INIT_STATE, action) => {
  switch (action.type) {
    case SEARCH_SPOTIFY:
      return { ...state, loading: true, error: '' };
    case SEARCH_SPOTIFY_SUCCESS:
      const results = action.payload;
      return { ...state, loading: false, results };
    case SEARCH_SPOTIFY_ERROR:
      return { ...state, loading: false, error: action.payload.message };
    
    default: return { ...state };
  }
}

export default searchSpotify;
