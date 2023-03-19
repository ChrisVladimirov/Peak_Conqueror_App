import {get, patch} from "../api/request.js";

//const baseUrl = 'http://localhost:8080/users/';

const endpoints = {
    'getAllUsers': '/users/all',
    'getParticularUser': (userId) => `/users/${userId}`,
    'edit-thoughts': '/users/me/edit-thoughts',
    'promoteUser': (userId) => `/admins/promote?userId=${userId}`,
    'demoteUser': (userId) => `/admins/demote?adminId=${userId}`
}

export const getAllUsers = async () => {
    return await get(endpoints.getAllUsers);
}

export const getParticularUser = async (userId) => {
    return await get(endpoints.getParticularUser(userId));
}

export const promoteUser = async (userId) => {
    await patch(endpoints.promoteUser(userId));
}

export const demoteUser = async (userId) => {
    await patch(endpoints.demoteUser(userId));
}

export const editThoughts = async (editedThoughts) => {
    await patch(endpoints["edit-thoughts"], editedThoughts);
}