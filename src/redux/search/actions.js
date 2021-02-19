import {
  SEARCH_SPOTIFY,
  SEARCH_SPOTIFY_SUCCESS,
  SEARCH_SPOTIFY_ERROR
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
