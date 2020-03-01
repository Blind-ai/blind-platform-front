import {fetchPatientsPending, fetchPatientsSuccess, fetchPatientsError} from './action'

const localIp = "http://127.0.0.1:5000";

const fetchPatients = () => {
  return dispatch => {
    dispatch(fetchPatientsPending());
    fetch( `${localIp  }/patient`)
    .then(res => res.json())
    .then(res => {
      if (res.error){
        throw(res.error)
      }
      dispatch(fetchPatientsSuccess(res));
      return res;
    })
    .catch(error => {
      dispatch(fetchPatientsError(error))
    })
  }
};

export default fetchPatients;