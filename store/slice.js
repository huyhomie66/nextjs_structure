import { put, select, takeLatest } from "redux-saga/effects";
import { createModule } from "saga-slice";

const sagaSlice = createModule({
  name: "todo",
  initialState: {
    isFetching: false,
    data: null,
    error: null,
    shouldRunOnce: 0,
  },
  reducers: {
    fetch: (state) => {
      state.isFetching = true;
    },
    fetchSuccess: (state, payload) => {
      state.isFetching = false;
      state.data = payload;
    },
    fetchFail: (state, payload) => {
      state.isFetching = false;
      state.error = payload;
    },
  },
  sagas: (action) => ({
    *[action.fetch]({ payload }) {
      try {
        const res = yield fetch("https://jsonplaceholder.typicode.com/users");
        const data = yield res.json();
        yield put(A.fetchSuccess(data));
      } catch (error) {
        yield put(A.fetchFail(error));
      }
    },
  }),
});

export const { actions } = sagaSlice;
export default sagaSlice;
