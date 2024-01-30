
let metric_button = document.getElementById("metric-button")
let imperial_button = document.getElementById("imperial-button")
let input_cm = document.getElementById("input-cm")
let input_kg = document.getElementById("input-kg")

let metric_inside_checked = document.getElementById("metric-checked")
let imperial_inside_checked = document.getElementById("imperial-checked")

let metric_container = document.getElementById("inputs-container-metric")
let imperial_container = document.getElementById("inputs-container-imperial")

metric_button.addEventListener("click", () => {
    metric_button.classList.add("metric")
    metric_inside_checked.classList.add("radio-button-checked")
    imperial_inside_checked.classList.remove("radio-button-checked")
    imperial_button.classList.remove("imperial")
    imperial_container.classList.add("not-visible")
    metric_container.classList.remove("not-visible")
})

imperial_button.addEventListener("click", () => {
    metric_button.classList.remove("metric")
    metric_inside_checked.classList.remove("radio-button-checked")
    imperial_inside_checked.classList.add("radio-button-checked")
    imperial_button.classList.add("imperial")
    metric_container.classList.add("not-visible")
    imperial_container.classList.remove("not-visible")
})

// Metric calculation

input_cm.addEventListener("change", ()=> {
    if(parseInt(input_cm.value)) {
        console.log("isnum")
    }
})