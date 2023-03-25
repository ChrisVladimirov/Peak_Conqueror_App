import {del, get, post, put} from "../api/request.js";

const endpoints = {
    'getAllPictures': '/pictures/all',
    'getSinglePicture': (pictureId) => `/pictures/${pictureId}`,
    'createPicture': '/pictures/create',
    'editPicture': (pictureId) => `/pictures/${pictureId}/edit`,
    'deletePicture': (pictureId) => `/pictures/${pictureId}/delete`,
}

export async function getAllPictures() {
    return await get(endpoints.getAllPictures);
}

export async function getSinglePicture(pictureId) {
    return await get(endpoints.getSinglePicture(pictureId));
}

export async function createPicture(pictureData) {
    await post(endpoints.createPicture, pictureData);
}

export async function editPicture(pictureId, editedPictureData) {
    await put(endpoints.editPicture(pictureId), editedPictureData);
}

export async function deletePicture(pictureId) {
    await del(endpoints.deletePicture(pictureId));
}
