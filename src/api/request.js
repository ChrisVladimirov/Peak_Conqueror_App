import {clearUserData, getUserData} from "./util";

const baseUrl = 'http://localhost:8080';

async function api(method, url, payload) {
    let options = {
        method,
        headers: {}
    }

    if (payload !== undefined) {
        options.body = JSON.stringify(payload);
        options.headers['Content-Type'] = 'application/json'
    }

    let user = getUserData();
    /*if (user) {
        options.headers['X-Authorization'] = user.accessToken;
    }*/

    try {
        let response = await fetch(baseUrl + url, options);
        if (response.status === 204) {
            return response;
        }

        if (!response.ok) {
            let error = await response.json();
            alert(error.message);
            throw new Error(error.message);
        }

        if (response.status === 403) {
            clearUserData()
        }

        return await response.json();
    } catch (e) {
        alert(e.message);
        throw e;
    }
}

let get = api.bind(null, 'get');
let post = api.bind(null, 'post');
let put = api.bind(null, 'put');
let del = api.bind(null, 'delete');
let patch = api.bind(null, 'patch');

export {
    get, post, put, del, patch
}