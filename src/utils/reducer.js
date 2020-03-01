import {FETCH_PATIENTS_ERROR, FETCH_PATIENTS_SUCCESS, FETCH_PATIENTS_PENDING} from './action'

const initialState = {
  pending: false,
  patients: [],
  error: null
};

export const patientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PATIENTS_PENDING:
      return {
        ...state,
        pending: true
      };
    case FETCH_PATIENTS_SUCCESS:
      return {
        ...state,
        pending: false,
        patients: action.payload
      };
    case FETCH_PATIENTS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      };
    default:
      return state;
 }
};

export const getPatients = state => state.patients;
export const getPatientsPending = state => state.pending;
export const getPatientsError = state => state.error;