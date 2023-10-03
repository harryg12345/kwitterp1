function addUser() {
    login_name = document.getElementById("input_login")
    localStorage.setItem("login_name", login_name)
    window.location = "kwitter_room.html";
}