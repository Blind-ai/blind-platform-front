import { createActionThunk } from 'redux-thunk-actions';
import api from '../../utils/api';
import {
  GET_PATIENTS
} from '../reducers/patientsReducer';

// eslint-disable-next-line import/prefer-default-export
export const getPatients = createActionThunk(GET_PATIENTS, async () => {
  const res = await api.getPatients();
  console.log(res);
  return res;
})
