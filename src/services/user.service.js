import axios from 'axios';
import { authHeader } from '../helpers/auth-header';
import { handleResponse } from '../helpers/handle-response';

/*
For some reason, with "reac script test" this import explodes me! :(
import config from 'config';

else replace this urlBackEnd for this config.apiJavaUrl

*/

const urlFakeBackEnd = 'http://localhost:4000';

const headersOptions = {
    method: 'GET',
    headers: authHeader()
};

export const userService = {
    getAll,
    getById
};

async function getAll() {
    return await axios
        .get(`${urlFakeBackEnd}/users`, headersOptions)
        .catch(err => console.log('Error call auth - ' + err));
}

async function getById(id) {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`${urlFakeBackEnd}/users/${id}`, requestOptions).then(
        handleResponse
    );
}
