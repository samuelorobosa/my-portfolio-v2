let year = new Date().getFullYear();

let htmlyear = document.querySelector("#year");

htmlyear.textContent = year;


/*preloader script*/

let loader = document.querySelector(".loader");

window.addEventListener("load", vanish);

function vanish(){
    loader.classList.add("disappear");
}