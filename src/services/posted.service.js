import axios from 'axios';

/*
For some reason, with "reac script test" this import explodes me! :(
import config from 'config';

else replace this urlBackEnd for this config.apiJavaUrl

*/

const urlBackEnd = 'http://localhost:8080';

const headersOptions = {
    mode: 'no-cors',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
    }
};

//AL CRUD METHOD WITH AXIOS HTTP MODULE
export const postedService = {
    getAllPosted,
    getByIdPosted,
    deleteByIdPosted,
    updatePosted,
    savePosted
};

async function getAllPosted() {
    return await axios
        .get(`${urlBackEnd}/posteds/`, headersOptions)
        .then(response => {
            return response.data.postedList;
        })
        .catch(err => console.log('Error call backend with AXIOS - ' + err));
}

async function savePosted(posted) {
    await axios
        .post(`${urlBackEnd}/posteds/`, posted, headersOptions)
        .catch(err => console.log('Error call backend with AXIOS - ' + err));
}

async function getByIdPosted(id) {
    await axios
        .get(`${urlBackEnd}/posteds/${id}`, headersOptions)
        .catch(err => console.log('Error call backend with AXIOS - ' + err));
}

async function deleteByIdPosted(id) {
    await axios
        .delete(`${urlBackEnd}/posteds/${id}`, headersOptions)
        .catch(err => console.log('Error call backend with AXIOS - ' + err));
}

async function updatePosted(posted) {
    await axios
        .put(`${urlBackEnd}/posteds/`, posted, headersOptions)
        .catch(err => console.log('Error call backend with AXIOS - ' + err));
}
