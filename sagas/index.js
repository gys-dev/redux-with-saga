import watchCounterSaga from './counterSaga'
import {all} from 'redux-saga/effects'
export default function *() {
    yield all([
        watchCounterSaga(),

    ])
}