import {put, call, cancel, takeEvery, takeLatest} from 'redux-saga/effects'
import * as A from '../actions/index'
import * as Type from '../actions/type'

const workCounter = (delay) => new Promise(resolve => {
    setTimeout(() => {
        resolve({
            name: 99999,
        })
    }, delay)
});

function* fetchData () {
    try {
        yield put(A.setLoading(1));
        const response = yield call(workCounter, 1000);
        yield put(A.setLoading(0));
        yield put(A.loadFromAPI(response.name));
    }catch (err){
        console.log(err);
    }
}
export default function* watchCounterSaga() {
    yield takeEvery(Type.USER_FETCH_REQUEST, fetchData);
}


