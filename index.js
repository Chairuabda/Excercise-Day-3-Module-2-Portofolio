const icon = document.getElementById("nav-icon");
const navList = document.getElementById("nav-list")

icon.addEventListener("click", () => {
    navList.classList.toggle("hidden");
})