const baseUrl = 'http://localhost:8080/users/';

export const register = async (userdata) => {
    try {
        let response = await fetch(baseUrl + 'register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(userdata)
        });

        if (response.status === 204) return response;

        if (!response.ok) {
            let error = response.json();
            throw new Error(error.message);
        }
        return await response.json();
    } catch (e) {
        alert(e.message);
        throw e;
    }
}

export const login = async ({username, password}) => {
    try {
        let response = await fetch(baseUrl + 'login', {
            method: 'post',
            body: JSON.stringify({username, password}),
            headers: {'Content-Type': 'application/json'}
        });

        if (response.status === 204) return response;

        if (!response.ok) {
            let error = response.json();
            throw new Error(error.message);
        }
        return await response.json();
    } catch (e) {
        console.log(e.message);
        throw new Error(e);
    }
}

export const getAllUsers = async () => {
    return await (await fetch(baseUrl + 'all')).json();
}

export const getParticularUser = async (userId) => {
    return await (await fetch(baseUrl + `${userId}`)).json();
}