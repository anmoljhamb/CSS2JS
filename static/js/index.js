const css = document.querySelector("textarea.css")
const js = document.querySelector("textarea.js")


document.querySelector("button")
    .addEventListener("click", async () => {
        const resp = await fetch("/convert", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({css: css.value})
        })
        const data = await resp.json()
        js.value = data.converted
    })