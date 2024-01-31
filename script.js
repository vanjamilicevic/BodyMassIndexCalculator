
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

let input_ft = document.getElementById("input-ft")
let input_in = document.getElementById("input-in")
let input_st = document.getElementById("input-st")
let input_lbs = document.getElementById("input-lbs")

let BMI = 0
let ideal_BMI_min = 0
let ideal_BMI_max = 0
let imperial_cm = 0
let imperial_kg = 0

let imperial_check = (ft, inch, st, lbs) => {
    if(parseInt(ft) && parseInt(inch) && parseInt(st) && parseInt(lbs)) {
        return 1
    } else {
        return 0
    }
}

let calculate_bmi = (kg, cm) => {
    if(parseInt(kg) && parseInt(cm)) {
        BMI = Math.round(parseInt(kg)/((parseInt(cm) / 100)**2)*10)/10
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

            ideal_BMI_min = Math.round(((parseInt(cm)/100)**2 * 18.5)*10)/10
            ideal_BMI_max = Math.round(((parseInt(cm)/100)**2 * 24.9)*10)/10

        
            bmi_range.innerHTML = ideal_BMI_min + "kgs - " + ideal_BMI_max + "kgs"
        }
        
    }
}

metric_button.addEventListener("click", () => {
    metric_button.classList.add("metric")
    metric_inside_checked.classList.add("radio-button-checked")
    imperial_inside_checked.classList.remove("radio-button-checked")
    imperial_button.classList.remove("imperial")
    imperial_container.classList.add("not-visible")
    metric_container.classList.remove("not-visible")
    welcome_title.classList.remove("not-visible")
    welcome_description.classList.remove("not-visible")
    result_container.classList.add("not-visible")
    BMI = 0
    ideal_BMI_max = 0
    ideal_BMI_min = 0
    input_cm.value = 0
    input_kg.value = 0
})

imperial_button.addEventListener("click", () => {
    metric_button.classList.remove("metric")
    metric_inside_checked.classList.remove("radio-button-checked")
    imperial_inside_checked.classList.add("radio-button-checked")
    imperial_button.classList.add("imperial")
    metric_container.classList.add("not-visible")
    imperial_container.classList.remove("not-visible")
    welcome_title.classList.remove("not-visible")
    welcome_description.classList.remove("not-visible")
    result_container.classList.add("not-visible")
    BMI = 0
    ideal_BMI_max = 0
    ideal_BMI_min = 0
})

// Metric calculation

input_kg.addEventListener("change", ()=> {
    calculate_bmi(input_kg.value, input_cm.value)
})

input_cm.addEventListener("change", () => {
    calculate_bmi(input_kg.value, input_cm.value)
})

// Imperial calculation
input_ft.addEventListener("change", () => {
    if (imperial_check(input_ft.value, input_in.value, input_st.value, input_lbs.value)) {
        imperial_cm = parseInt(input_ft.value) * 30.48 + parseInt(input_in.value) * 2.54
        imperial_kg = parseInt(input_st.value) * 6.35 + parseInt(input_lbs.value) * 0.45359237
        calculate_bmi(imperial_kg, imperial_cm)
    }
})

input_in.addEventListener("change", () => {
    if (imperial_check(input_ft.value, input_in.value, input_st.value, input_lbs.value)) {
        imperial_cm = parseInt(input_ft.value) * 30.48 + parseInt(input_in.value) * 2.54
        imperial_kg = parseInt(input_st.value) * 6.35 + parseInt(input_lbs.value) * 0.45359237
        calculate_bmi(imperial_kg, imperial_cm)
    }
})

input_st.addEventListener("change", () => {
    if (imperial_check(input_ft.value, input_in.value, input_st.value, input_lbs.value)) {
        imperial_cm = parseInt(input_ft.value) * 30.48 + parseInt(input_in.value) * 2.54
        imperial_kg = parseInt(input_st.value) * 6.35 + parseInt(input_lbs.value) * 0.45359237
        calculate_bmi(imperial_kg, imperial_cm)
    }
})

input_lbs.addEventListener("change", () => {
    if (imperial_check(input_ft.value, input_in.value, input_st.value, input_lbs.value)) {
        imperial_cm = parseInt(input_ft.value) * 30.48 + parseInt(input_in.value) * 2.54
        imperial_kg = parseInt(input_st.value) * 6.35 + parseInt(input_lbs.value) * 0.45359237
        calculate_bmi(imperial_kg, imperial_cm)
    }
})


