export const FETCH_PATIENTS_PENDING = "FETCH_PATIENTS_PENDING";
export const FETCH_PATIENTS_SUCCESS = "FETCH_PATIENTS_SUCCESS";
export const FETCH_PATIENTS_ERROR = "FETCH_PATIENTS_ERROR";

export const fetchPatientsPending = () => {
  return {
    type : FETCH_PATIENTS_PENDING
  }
};

export const fetchPatientsSuccess = (patients) => {
  return {
    type : FETCH_PATIENTS_SUCCESS,
    patients
  }
};

export const fetchPatientsError = (error) => {
  return {
    type : FETCH_PATIENTS_ERROR,
    error
  }
};