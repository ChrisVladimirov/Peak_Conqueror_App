export function getUserData() {
    return JSON.parse(sessionStorage.getItem('userData'));
}

export function setUserData(data) {
    sessionStorage.setItem('userData', JSON.stringify(data))
}

export function clearUserData() {
    sessionStorage.removeItem('userData')
}

export function updateUserData(newValue) {
    let prevData = getUserData();
    Object.keys(newValue).forEach(function(val, key){
        prevData[val] = newValue[val];
    })
    setUserData(prevData)
}

export function isAdmin() {
    let userData = getUserData();
    if (!!userData) {
        return userData.roles.includes('ADMIN');
    } else return false;
}

export function isOwner() {
    let userData = getUserData();
    if (!!userData) {
        return userData.roles.includes('OWNER');
    } else return false;
}