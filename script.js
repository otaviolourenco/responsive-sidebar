const container = document.querySelector(".container");
const linkItems = document.querySelectorAll(".menu-item");
const darkMode = document.querySelector(".dark-mode");
const logo = document.querySelector(".logo svg")

container.addEventListener("mouseenter", () => {
    container.classList.add("active");
})

container.addEventListener("mouseleave", () => {
    container.classList.remove("active");
})

for (let i = 0; i < linkItems.length; i++) {
    if (!linkItems[i].classList.contains("dark-mode")){
        linkItems[i].addEventListener("click", () => {
            linkItems.forEach((linkItem) => {
                linkItem.classList.remove("active");
            });
            linkItems[i].classList.add("active");
        });
    }
    
}

darkMode.addEventListener("click", () => {
    if (document.body.classList.contains("dark-mode")){
        darkMode.querySelector("span").textContent = "dark mode";
        darkMode.querySelector("ion-icon").setAttribute("name", "moon-outline");
        logo.style.fill = "#363b46";
    } else{
        darkMode.querySelector("span").textContent = "light mode";
        darkMode.querySelector("ion-icon").setAttribute("name", "sunny-outline");
        logo.style.fill = "#fff";


    }
    document.body.classList.toggle("dark-mode");
});