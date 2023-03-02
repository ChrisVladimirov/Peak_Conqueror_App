import {del, get, post, put} from '../api/request.js';

const endpoints = {
    'routesAll': '/routes/all',
    'particularRoute': (routeId) => `/routes/${routeId}`,
    'createRoute': '/routes/create',
    'editRoute': '/routes/edit',
    'deleteRoute': (routeId) => `/routes/delete/${routeId}`
}

export async function getAllRoutes() {
    return await get(endpoints.routesAll).json();
}

export async function getParticularRoute(routeId) {
    return await get(endpoints.particularRoute(routeId)).json();
}

export async function createARoute(routeData) {
    await post(endpoints.createRoute, routeData);
}

export async function editRoute(newRouteData) {
    await put(endpoints.editRoute, newRouteData);
}

export async function deleteRoute(routeId) {
    await del(endpoints.deleteRoute(routeId));
}