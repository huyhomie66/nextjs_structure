import { put, select, takeLatest } from "redux-saga/effects";
import { createModule } from "saga-slice";

const userSlice = createModule({
  name: "user",
  initialState: {
    isFetching: false,
    data: [],
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
    updateData: (state, payload) => {
      state.data = payload;
    },
  },
  // choose `fetch` is start action
  sagas: (action) => ({
    *[action.fetch]({ payload }) {
      try {
        const res = yield fetch("https://jsonplaceholder.typicode.com/users");
        const data = yield res.json();
        yield put(action.fetchSuccess(data));
      } catch (error) {
        yield put(action.fetchFail(error));
      }
    },
    *[action.update]({ payload }) {
      yield put(action.updateData(payload));
    },
  }),
});

export default userSlice;
