import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as API from '../lib/api/movie';
import { takeLatest } from 'redux-saga/effects';

/* const [LOC] = createRequestActionTypes('cinema/LOC');
export const getLocation = createAction(LOC, loc=>loc); */

const [LIST, LIST_SUCCESS, LIST_FAILURE] = createRequestActionTypes(
  'cinema/LIST',
);

export const getListByCinema = createAction(LIST, ({cinema, filter}) => ({cinema, filter}));
//export const getListByFilter = createAction(LIST, (selectedCinema, filter) => ({selectedCinema, filter}));

/*
const filterSaga = createRequestSaga(LIST, API.getListByFilter);
export function* DBfilterSaga() {
  yield takeLatest(LIST, filterSaga);
}
*/

const listSaga = createRequestSaga(LIST, API.getListByCinema);
export function* DBListSaga() {
  yield takeLatest(LIST, listSaga);
}

const initialState = {
  cinema: null,
  error: null,
  selectedCinema: null, //필터추가
};

//불러와서 재활용하기 위해 함수 형태로(실제 액션 함수)
const DBlists = handleActions(
  {
    [LIST_SUCCESS]: (state, { payload: {movies, cinema}}) => ({ //필터값추가
      ...state,
      selectedCinema: cinema,
      cinema: movies,
    }),
    [LIST_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState,
);

export default DBlists;
