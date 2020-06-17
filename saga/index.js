import {call, put, takeLatest} from 'redux-saga/effects';
import api from '../services/api';
import {
  DATA_FETCH_SUCCEEDED,
  DATA_FETCH_FAILED,
  DATA_FETCH,
} from '../redux/types';

function* fetchData(action) {
  try {
    const trumpData = yield call(api.fetchTweets, 'realDonaldTrump');
    const hillaryData = yield call(api.fetchTweets, 'HillaryClinton');

    console.log(`realDonaldTrump: ${trumpData.statuses.length}`);
    console.log(`HillaryClinton: ${hillaryData.statuses.length}`);

    yield put({type: DATA_FETCH_SUCCEEDED, payload: {
      trump: trumpData,
      hillary: hillaryData,
    }});
  } catch (e) {
    yield put({type: DATA_FETCH_FAILED, message: e.message});
  }
}

function* AppSaga() {
  yield takeLatest(DATA_FETCH, fetchData);
}

export default AppSaga;
