import {get} from "../api/request.js";

const endpoints = {
    'getLikesForRoute': (routeId) => `/routes/${routeId}/likes`,

}

export function getAllLikesForRoute(routeId) {
    return get(endpoints.getLikesForRoute(routeId));
}

