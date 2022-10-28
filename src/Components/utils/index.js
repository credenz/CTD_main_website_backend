const AUTH_TOKEN = 'auth-token';

// export const login = (res) => {
//     localStorage.setItem(AUTH_TOKEN, res.data.auth_token);
// }

export const logout = () => {
    localStorage.removeItem(AUTH_TOKEN);
}

export const isLogin = () => {
    if (localStorage.getItem(AUTH_TOKEN)) {
        return true;
    }

    return false;
}