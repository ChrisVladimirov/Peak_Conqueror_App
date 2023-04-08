import {get, patch} from "../api/request.js";
import {updateUserData} from "../api/util.js";

const endpoints = {
    'getAllUsers': '/users/all',
    'getParticularUser': (username) => `/users/${username}`,
    'edit-thoughts': (userId, thoughts) => `/users/me/edit-thoughts?id=${userId}&editedThoughts=${thoughts}`,
    'promoteUser': (userId) => `/admins/promote?userId=${userId}`,
    'demoteUser': (userId) => `/admins/demote?adminId=${userId}`
}

export const getAllUsers = async () => {
    return await get(endpoints.getAllUsers);
}

export const getParticularUser = async (username) => {
    return await get(endpoints.getParticularUser(username));
}

export const promoteUser = async (userId) => {
    await patch(endpoints.promoteUser(userId));
}

export const demoteUser = async (userId) => {
    await patch(endpoints.demoteUser(userId));
}

export const editThoughts = async (userId, editedThoughts) => {
    let r = await patch(endpoints["edit-thoughts"](userId, editedThoughts));
    if (r.status === 400) {
        return r;
    } else {
        updateUserData({'thoughts': editedThoughts})
    }
}