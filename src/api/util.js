export function getUserData() {
    return JSON.parse(sessionStorage.getItem('userData'));
}

export function setUserData(data) {
    sessionStorage.setItem('userData', JSON.stringify(data))
}

export function clearUserData() {
    sessionStorage.removeItem('userData')
}

export function isAdmin() {
    let userData = getUserData();
    if (!!userData) {
        return userData.roles.includes('ADMIN');
    } else return false;
}