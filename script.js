const bodyVar = document.createElement("div");
bodyVar.setAttribute("id", "game");
document.body.appendChild(bodyVar);

let selectedCube = 0;

function createMenu() {
    let menu = document.createElement("div");
    menu.setAttribute("id", "menu");
    menu.setAttribute("class", "menu");
    menu.innerHTML ="Menu";
    bodyVar.appendChild(menu)
}

function start() {
    createMenu();

}

start();