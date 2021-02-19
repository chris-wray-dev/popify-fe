
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';

import axios from "axios";
import { checkResponseData } from '../utils';

import {
  SEARCH_SPOTIFY
} from '../actions';

import {
  searchSpotifySuccess,
  searchSpotifyError
} from './actions';

const request = axios.create({ baseURL: "http://localhost:9090/api" });

const searchSpotifyAsync = async (query) => {
  return await request.get('/search', {
      params: query
    })
    .then(checkResponseData);
}

function* searchSpotify({ payload }) {
  const query = { ...payload };
  query.type = query.type.join(',');
  try {
    const results = yield call(searchSpotifyAsync, query);
    if (!results.message) {
      yield put(searchSpotifySuccess({ results }));
    } else {
      yield put(searchSpotifyError(results.message));
    }
  } catch (error) {
    yield put(searchSpotifyError(error));
  }
}

export function* watchSearchSpotify() {
  yield takeEvery(SEARCH_SPOTIFY, searchSpotify);
}


export default function* rootSaga() {
  yield all([
    fork(watchSearchSpotify)
  ]);
}