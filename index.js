let eleCount = document.getElementById("count")
let elePrev = document.getElementById("prev")

let count = 0

function increment() {
    count += 1
    eleCount.textContent = count
}

function save() {
    elePrev.textContent += count + " - "
    count = 0
    eleCount.textContent = count
}