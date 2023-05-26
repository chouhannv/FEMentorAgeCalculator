//input date
let isValid = false;
const in_year = document.querySelector('.input_year');
const in_month = document.querySelector('.input_month');
const in_day = document.querySelector('.input_day');

//output
const out_year = document.querySelector('.output_year');
const out_month = document.querySelector('.output_month');
const out_day = document.querySelector('.output_day');
const submit_btn = document.querySelector('.btn');

//error elements
const err_year = document.querySelector('.err_year');
const err_month = document.querySelector('.err_month');
const err_day = document.querySelector('.err_day');

// const spanTxtDay = document.querySelector('.date_textDay');
const spanTxtMonth = document.querySelector('.date_textMonth');
const spanTxtYear = document.querySelector('.date_textYear');

const date = new Date();

let currentDate = new Date();
let currentDay = date.getDate();
let currentMonth = date.getMonth();
let currentYear = date.getFullYear();

submit_btn.addEventListener("click", calculateAge);

in_day.addEventListener("input", e => {
    if(+in_day.value > 31 || +in_day.value < 0) {
        err_day.textContent = "Must be a valid day";
        document.querySelector('.input_day').style.border = "1px solid red";
        document.querySelector('.date_textDay').style.color = "red";
        isValid = false;
        return;
    }
    else {
        isValid = true;
        // document.querySelector('.input_day').style.color = "solid #FF0000";
        err_day.textContent = "";
    }

    if(+in_day.value === 0) {
        isValid = false;
        document.querySelector('.input_day').style.border = "1px solid red";
        document.querySelector('.date_textDay').style.color = "red";
        err_day.textContent = "This field is required";
        isValid = false;
        return;
    }
    else {
        isValid = true;
        err_day.textContent = "";
    }
} 
);

in_month.addEventListener("input", e => {
    if(+in_month.value > 12 || +in_month.value < 0) {
        document.querySelector('.input_month').style.border = "1px solid red";
        document.querySelector('.date_textMonth').style.color = "red";
        err_month.textContent = "Must be a valid month";
        isValid = false;
        return;
    }
    else {
        isValid = true;
        err_month.textContent = "";
    }

    if(+in_month.value === 0) {
        isValid = false;
        document.querySelector('.input_month').style.border = "1px solid red";
        document.querySelector('.date_textMonth').style.color = "red";
        err_month.textContent = "This field is required";
        isValid = false;
        return;
    }
    else {
        isValid = true;
        err_month.textContent = "";
    }
} 
);

in_year.addEventListener("input", e => {
    if(+in_year.value > currentDate.getFullYear() || +in_year.value < 0) {
        document.querySelector('.input_year').style.border = "1px solid red";
        document.querySelector('.date_textYear').style.color = "red";
        err_year.textContent = "Must be a valid year";
        isValid = false;
        return;
        
    }
    else {
        isValid = true;
        err_year.textContent = "";
    }

    if(+in_year.value === 0) {
        isValid = false;
        document.querySelector('.input_year').style.border = "1px solid red";
        document.querySelector('.date_textYear').style.color = "red";
        err_year.textContent = "This field is required";
        isValid = false;
        return;
    }
    else {
        isValid = true;
        err_year.textContent = "";
    }
} 
);

// function calculateDate() {
//     if(isValid) {
//         let birthday = `${in_day.value}/${in_month.value}/${in_year.value}`;
//         console.log(birthday);
//         let birthdayObj = new Date(birthday);
//         let ageDiffMill = Date.now() - birthdayObj;
//         let ageDate = new Date(ageDiffMill);
//         let ageYear = ageDate.getUTCFullYear() - 1970;
//         let ageMonth = ageDate.getUTCMonth();
//         let ageDay = ageDate.getUTCDay() -1;
//         out_day.textContent = ageDay; 
//         out_month.textContent = ageMonth;
//         out_year.textContent = ageYear;
//     }
//     else {
//         alert("DOB must be valid !!");
//     }
// }

function calculateAge()  {

    if(isValid){
        let newYear = Math.abs(currentYear - in_year.value);

    let newMonth = 0;
    if(currentMonth >= in_month.value) {
        newMonth = currentMonth - in_month.value;
    }
    else {
        newYear--;
        newMonth = 12 + currentMonth - in_month.value;
    }

    let newDay = 0;
    if(currentDay >= in_day.value) {
        newDay = currentDay - in_day.value;
    }
    else {
        if(isLeapYear(in_day.value, in_month.value, in_year.value)){
            newDay = 30 + currentDay - in_day.value;
        }
        else{
            newDay = currentDay + in_day.value;
        }

        if(newMonth < 0){
            newMonth = 11;
            newYear--;
        }

        if(newMonth < currentMonth){
            newDay++;
        }
    }

    out_day.textContent = newDay; 
    out_month.textContent = newMonth;
    out_year.textContent = newYear;
    }
    else {
             alert("DOB must be valid !!");
            }
    
}

