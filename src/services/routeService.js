import {del, get, post, put} from '../api/request.js';
import {getUserData} from "../api/util.js";

const endpoints = {
    'routesAll': '/routes/all',
    'particularRoute': (routeId) => `/routes/${routeId}`,
    'getLikesForRoute': (routeId) => `/routes/${routeId}/likes`,
    'likeARoute': (userId, routeId) => `/routes/${routeId}/like?user=${userId}`,
    'removeLike': (userId, routeId) => `/routes/${routeId}/removeLike?user=${userId}`,
    'createRoute': '/routes/create',
    'editRoute': '/routes/edit',
    'deleteRoute': (routeId) => `/routes/delete?routeId=${routeId}`
}

export async function getAllRoutes() {
    return await get(endpoints.routesAll);
}

export async function getParticularRoute(routeId) {
    return await get(endpoints.particularRoute(routeId));
}

/*export async function getLikesForRoute(routeId) {
    return get(endpoints.getLikesForRoute(routeId));
}*/

export async function createARoute(routeData) {
    await post(endpoints.createRoute, routeData);
}

export async function likeARoute(routeId) {
    let userData = getUserData();
    const userId = userData.id;
    await post(endpoints.likeARoute(userId, routeId));
}

export async function removeLike(routeId) {
    let userData = getUserData();
    const userId = userData.id;
    await del(endpoints.removeLike(userId, routeId));
}

export async function editRoute(newRouteData) {
    await put(endpoints.editRoute, newRouteData);
}

export async function deleteRoute(routeId) {
    await del(endpoints.deleteRoute(routeId));
}