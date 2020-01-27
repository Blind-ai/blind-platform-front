
//This is temporary, id like to split the different apis wrappers

module.exports = {

    uploadImage(file) {

        const data = new FormData();
        data.append('myFile', file);
        return fetch('http://localhost:8001/api/mock/uploadfile?type=lungh', {
            mode: 'no-cors',
            method: 'POST',
            body : data
        }).then((response) => {
            return response.json();
        })
            .catch((e) => {
                console.error(e)
            })
    }
};