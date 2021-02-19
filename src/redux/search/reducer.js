import {
  SEARCH_SPOTIFY,
  SEARCH_SPOTIFY_SUCCESS,
  SEARCH_SPOTIFY_ERROR,
  TOGGLE_SEARCH_TYPE,
  UPDATE_SEARCH_QUERY
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
      const { results } = action.payload;
      return { ...state, loading: false, results };

    case SEARCH_SPOTIFY_ERROR:
      return { ...state, loading: false, error: action.payload.message };

    case TOGGLE_SEARCH_TYPE:
      const newTypeArray = [...state.query.type];
      const type = action.payload;
      if (newTypeArray.indexOf(type) === -1) {
        newTypeArray.push(type);
      } else {
        newTypeArray.splice(newTypeArray.indexOf(type));
      }
      return  { ...state, query: { q: state.query.q, type: newTypeArray }};

    case UPDATE_SEARCH_QUERY:
      const queryString = action.payload;
      return  { ...state, query: { q: queryString, type: state.query.type }};
      
    default: return { ...state };
  }
}

export default searchSpotify;
