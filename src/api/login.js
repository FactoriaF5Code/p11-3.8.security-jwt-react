const USER_NAME_KEY = "userName";
const TOKEN_KEY = "token";

const setUserName = (name) =>    localStorage.setItem(USER_NAME_KEY, name);
export const getUserName = () => localStorage.getItem(USER_NAME_KEY)

const setToken = (token) => localStorage.setItem(TOKEN_KEY, token);
export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const login = (onSuccess) => {
    const loginUrl = "http://localhost:8080/login";
    const options = {
        method: "post",
        body: JSON.stringify({
            "email": "owner@puppycenter.com",
            "password": "iVl1!OcE01p3dtKg"
        }),
        "headers": {
            "Content-Type": "application/json"
        }
    };
    fetch(loginUrl, options)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                console.log("Something failed!");
            }
        })
        .then(data => {
            setUserName(data.user.email);
            setToken(data.accessToken);
            onSuccess();
        })
        .catch((error) => {
            console.log("Failed to login", error);
        })

}