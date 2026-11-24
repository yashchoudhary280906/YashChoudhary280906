const profileImg = document.getElementById("profile-pic");
function setDarkMode() {
    document.body.classList.add("dark-theme");
    profileImg.src = "dark.jpg";
}
function setLightMode() {
    document.body.classList.remove("dark-theme");
    profileImg.src = "light.jpg";
}