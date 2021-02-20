import {
  SEARCH_SPOTIFY,
  SEARCH_SPOTIFY_SUCCESS,
  SEARCH_SPOTIFY_ERROR,
  UPDATE_SEARCH_QUERY,
} from '../actions';

export const searchSpotify = (query) => ({
  type: SEARCH_SPOTIFY,
  payload: query
});
export const searchSpotifySuccess = (results) => ({
  type: SEARCH_SPOTIFY_SUCCESS,
  payload: results
});
export const searchSpotifyError = (message) => ({
  type: SEARCH_SPOTIFY_ERROR,
  payload: { message }
});
export const updateSearchQuery = (query) => ({
  type: UPDATE_SEARCH_QUERY,
  payload: query
});
