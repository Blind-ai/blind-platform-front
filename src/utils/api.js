
//This is temporary, id like to split the different apis wrappers

const ip = 'http://188.166.53.41:5000';

module.exports = {

    uploadImage(file, patientId, type, doctor) {


        console.log(doctor, type)

        const data = new FormData();
        data.append('attachment', file);
        data.append('name', type);
        data.append('doctor', doctor);
        return fetch(ip + '/patient/' + patientId + '/examination', {
            method: 'POST',
            body : data
        }).then((response) => {
            return response.json();
        })
            .catch((e) => {
                console.error(e);
            })
    },
    getPatients() {
        return fetch( ip + '/patient', {})
            .then((response) => {
                return response.json()
            })
    },

};
