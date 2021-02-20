import {
  SEARCH_SPOTIFY,
  SEARCH_SPOTIFY_SUCCESS,
  SEARCH_SPOTIFY_ERROR,
  UPDATE_SEARCH_QUERY
} from '../actions';

const INIT_STATE = {
  loading: false,
  query: {
    q: "",
    type: [],
    offset: 0
  },
  results: null
};

const searchSpotify = (state = INIT_STATE, action) => {
  
  switch (action.type) {

    case SEARCH_SPOTIFY:
      return { ...state, loading: true, error: '' };

    case SEARCH_SPOTIFY_SUCCESS:
      const { results } = action.payload;
      return { ...state, loading: false, results };

    case SEARCH_SPOTIFY_ERROR:
      return { ...state, loading: false, error: action.payload.message };

    case UPDATE_SEARCH_QUERY: {
      const query = action.payload;
      return  { ...state, query };
    }

    default: return { ...state };
  }
}

export default searchSpotify;
