import {get, patch} from "../api/request";

const baseUrl = 'http://localhost:8080/users/';

const endpoints = {
    'edit-thoughts': '/users/me/edit-thoughts',
    'getAllUsers': '/users/all'
}

export const getAllUsers = async () => {
    return await get(endpoints.getAllUsers);
}

export const getParticularUser = async (userId) => {
    return await get(`/users/${userId}`);
}

export const editThoughts = async (editedThoughts) => {
    await patch(endpoints["edit-thoughts"], editedThoughts);
}