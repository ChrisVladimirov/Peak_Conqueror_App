import {clearUserData, setUserData} from "./util.js";
import {get, post} from "./request.js";

let endpoints = {
    'register': '/users/register',
    'login': '/users/login',
    'logout': '/users/logout'
}

export async function register(userdata) {
    await post(endpoints.register, userdata);
}

export async function login(userdata) {
    let response = await post(endpoints.login, userdata);
    if (response.status === 401) {
        return await response;
    } else {
        let {id, firstName, lastName, username, email, thoughts, roles, token} = response;
        setUserData({id, firstName, lastName, username, email, thoughts, roles, token});
    }
}

export function logout() {
    //post(endpoints.logout);
    clearUserData();
}