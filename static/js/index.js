const css = document.querySelector("textarea.css")
const js = document.querySelector("textarea.js")
const button = document.querySelector("button")

button.addEventListener("click", async () => {
        const resp = await fetch("/convert", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({css: css.value})
        })
        const data = await resp.json()
        js.value = data.converted
    })


const resetButton = () => {
    button.innerText = "Convert"
    button.classList.toggle("active")
}


const copied = () => {
    button.innerText = "Copied!"
    button.classList.toggle("active")
}

document.querySelector(".left i")
    .addEventListener("click", async () => {
        copied()
        await navigator.clipboard.writeText(css.value)
            .then(() => {
                setTimeout(resetButton, 800)
                console.log("Copied to clipboard successfully");
            })
            .catch((err) => {
                console.log("There was an error while copying.");
            })
    })


document.querySelector(".right i")
    .addEventListener("click", async () => {
        copied()
        await navigator.clipboard.writeText(js.value)
            .then(() => {
                setTimeout(resetButton, 800)
                console.log("Copied to clipboard successfully");
            })
            .catch((err) => {
                console.log("There was an error while copying.");
            })
    })