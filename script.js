
let metric_button = document.getElementById("metric-button")
let imperial_button = document.getElementById("imperial-button")
let input_cm = document.getElementById("input-cm")
let input_kg = document.getElementById("input-kg")
let welcome_title = document.getElementById("welcome-title")
let welcome_description = document.getElementById("welcome-description")
let result_container = document.getElementById("bmi-result-and-result-desc-container")
let result = document.getElementById("result")
let healtiness = document.getElementById("healtiness")
let bmi_range = document.getElementById("bmi-range")

let metric_inside_checked = document.getElementById("metric-checked")
let imperial_inside_checked = document.getElementById("imperial-checked")

let metric_container = document.getElementById("inputs-container-metric")
let imperial_container = document.getElementById("inputs-container-imperial")

let BMI = 0
let ideal_BMI_min = 0
let ideal_BMI_max = 0

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

input_kg.addEventListener("change", ()=> {
    if(parseInt(input_kg.value) && parseInt(input_cm.value)) {
        BMI = Math.round(parseInt(input_kg.value)/((parseInt(input_cm.value) / 100)**2)*10)/10
        console.log(BMI)
        if(BMI > 0) {
            welcome_title.classList.add("not-visible")
            welcome_description.classList.add("not-visible")
            result_container.classList.remove("not-visible")
            result.innerHTML = BMI
            if(BMI < 18.5 ) {
                healtiness.innerHTML = "underweight"
            }

            if(BMI >= 18.5 && BMI < 24.9) {
                healtiness.innerHTML = "healthy"
            }

            if(BMI >= 24.9 && BMI <= 30) {
                healtiness.innerHTML = "overweight"
            }

            if(BMI >= 30) {
                healtiness.innerHTML = "obese"
            }

            ideal_BMI_min = Math.round(((parseInt(input_cm.value)/100)**2 * 18.5)*10)/10
            ideal_BMI_max = Math.round(((parseInt(input_cm.value)/100)**2 * 24.9)*10)/10

        
            bmi_range.innerHTML = ideal_BMI_min + "kgs - " + ideal_BMI_max + "kgs"
        }
        
    }
})