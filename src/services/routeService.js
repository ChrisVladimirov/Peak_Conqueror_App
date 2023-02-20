const baseUrl = "http://localhost:8080/routes/";

export function getAllRoutes() {
    return fetch(baseUrl + "all/").then(r => r.json());
}

export function getParticularRoute(routeId) {
    return fetch(`${baseUrl}/${routeId}`).then(r => r.json());
}

