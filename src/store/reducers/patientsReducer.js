import { handleActions } from 'redux-actions';

const initialState = {
  patients: [],
  error: false
};

export const GET_PATIENTS = 'GET_PATIENTS';

const SUCCEEDED = 'SUCCEEDED';
const STARTED = 'STARTED';
const FAILED = 'FAILED';

export default handleActions(
  {
    [`${GET_PATIENTS}_${STARTED}`]: (state) => ({ ...state, error: false }),
    [`${GET_PATIENTS}_${SUCCEEDED}`]: (state, { payload }) => ({ ...state, ...payload, patients: payload }),
    [`${GET_PATIENTS}_${FAILED}`]: (state) => ({ ...state, error: true }),
  },
  initialState
)