import {call, put, takeLatest} from 'redux-saga/effects';
import api from '../services/api';
import {
  ACCOUNT_CHANGED,
  DATA_FETCH_SUCCEEDED,
  DATA_FETCH_FAILED,
  TOGGLE_ACCOUNT,
} from '../redux/types';

function* fetchData(action) {
  try {
    const data = yield call(api.fetchTweets, action.payload);
    console.log(`found: ${data.statuses.length}`);
    yield put({type: DATA_FETCH_SUCCEEDED, payload: data});
  } catch (e) {
    yield put({type: DATA_FETCH_FAILED, message: e.message});
  }
}

function* AppSaga() {
  yield takeLatest(TOGGLE_ACCOUNT, fetchData);
}

export default AppSaga;
