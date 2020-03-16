// This is temporary, id like to split the different apis wrappers

const localIp = "http://127.0.0.1:5000";
const ip = 'http://188.166.53.41:5000';

module.exports = {

    uploadImage(file, patientId, type, doctor) {
        const data = new FormData();
        data.append('attachment', file);
        data.append('name', type);
        data.append('doctor', doctor);
        return fetch(`${localIp  }/patient/${  patientId  }/examination`, {
            method: 'POST',
            body : data
        }).then((response) => {
            return response.json();
        })
            .catch((e) => {
                console.error(e);
            })
    },
    async getPatients() {
        return fetch( `${localIp  }/patient`, {}
        )
    },
    ip,
    localIp,

};
