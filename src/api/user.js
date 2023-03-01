import {clearUserData, setUserData} from "./util";
import {get, post} from "./request";

let endpoints = {
    'login': '/users/login',
    'register': '/users/register',
    'logout': '/users/logout'
}

export async function register(userdata) {
    let response = await post(endpoints.register, userdata);
    if (response.status === 400) {
        return await response.json();
    } else {
        const {id, firstName, lastName, username, email, roles} = await post(endpoints.register, userdata);
        setUserData({id, firstName, lastName, username, email, roles});
    }
}

export async function login(userdata) {
    let response = await post(endpoints.login, userdata);
    if (response.status === 401) {
        return await response;
    } else {
        let {id, firstName, lastName, username, email, thoughts, roles} = response;
        setUserData({id, firstName, lastName, username, email, thoughts, roles});
    }
}

export function logout() {
    post(endpoints.logout);
    clearUserData();
}