const baseUrl = 'http://localhost:8080/users/';

export const register = async (userdata) => {
    try {
        let response = await fetch(baseUrl + 'register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(userdata)
        });

        if (response.status === 204) {
            return response;
        }

        if (!response.ok) {
            let error = response.json();
            alert(error.message);
            throw new Error(error.message);
        }
        return await response.json();
    } catch (e) {
        alert(e.message);
        throw e;
    }


}

export const getAllUsers = async () => {
    return await (await fetch(baseUrl + 'all')).json();
}