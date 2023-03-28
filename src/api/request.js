import {clearUserData, getUserData} from "./util.js";

const baseUrl = 'http://localhost:8080';

async function api(method, url, payload) {
    let options = {
        method,
        headers: {}
    }

    if (payload !== undefined) {
        options.body = JSON.stringify(payload);
        options.headers['Content-Type'] = 'application/json';
    }

    let user = getUserData();
    if (user) {
        options.headers['Authorization'] = `Bearer ${user.token}`;
    }

    try {
        let response = await fetch(baseUrl + url, options);
        if (response.status === 204 || response.status === 201) {
            return response;
        }

        if (response.status === 400) {
            return response;
        }

        if (response.status === 401) {
            return response;
        }

        if (!response.ok) {
            let error = await response.json();
            //alert(error.message);
            throw new Error(error.message);
        }

        if (response.status === 403) {
            clearUserData()
        }

        return await response.json();
    } catch (e) {
        //alert(e.message);
        throw e;
    }
}

let get = api.bind(null, 'GET');
let post = api.bind(null, 'POST');
let put = api.bind(null, 'PUT');
let patch = api.bind(null, 'PATCH');
let del = api.bind(null, 'DELETE');

export {
    get, post, put, patch, del
}