const button = document.querySelector("#botao-alterar-tema");
const body = document.querySelector("body");
const imgChangeTheme = document.querySelector(".imagem-botao");

button.addEventListener("click", () => {
    const darkModeOn = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro");

    if (darkModeOn) {
        imgChangeTheme.setAttribute("src", "./src/imgs/sun.png");
    } else {
        imgChangeTheme.setAttribute("src", "./src/imgs/moon.png");
    }
});
