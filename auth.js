// auth.js
function login(username, password) {
    if(username === "admin" && password === "1234") {
        return "Login successful!";
    } else {
        return "Invalid credentials!";
    }
}

function logout() {
    return "User logged out";
}

module.exports = { login, logout };
