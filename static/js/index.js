const css = document.querySelector("textarea.css")
const js = document.querySelector("textarea.js")


document.querySelector("button")
    .addEventListener("click", () => {
        console.log(css.value);
        js.value = css.value
    })