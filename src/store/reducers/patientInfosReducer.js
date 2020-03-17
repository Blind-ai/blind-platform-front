import { handleActions } from 'redux-actions'
import { GET_PATIENTS } from './patientsReducer';

const initialState = {
  infos: [],
  error: false
};

export const GET_PATIENT_INFOS = "GET_PATIENT_INFOS";

const SUCCEEDED = 'SUCCEEDED';
const STARTED = 'STARTED';
const FAILED = 'FAILED';

export default handleActions(
  {
    [`${GET_PATIENT_INFOS}_${STARTED}`]: (state) => ({ ...state, error: false }),
    [`${GET_PATIENT_INFOS}_${SUCCEEDED}`]: (state, { payload }) => ({ ...state, ...payload, infos: payload }),
    [`${GET_PATIENT_INFOS}_${FAILED}`]: (state) => ({ ...state, error: true }),
  },
  initialState
)