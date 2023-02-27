import {clearUserData, setUserData} from "./util";
import {get, post} from "./request";

let endpoints = {
    'login': '/users/login',
    'register': '/users/register',
    'logout':'/users/logout'
}

export async function register(userdata) {
    const {id, firstName, lastName, username, email, roles} = await post(endpoints.register, {userdata});
    setUserData({id, firstName, lastName, username, email, roles});
}

export async function login(userdata) {
    let {id, username, email, roles} = await get(`/${userdata['username']}`);
    setUserData({id, username, email, roles});
}

export function logout() {
    post(endpoints.logout);
    clearUserData();
}