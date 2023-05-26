window.onload = function () {
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

    const date = new Date();

    let currentDay = date.getDate();
    let currentMonth = date.getMonth();
    let currentYear = date.getFullYear();

    const typeOfError = [
        "",
        "this filed is required",
        "Must be a valid day",
        "Must be a valid month",
        "Must be a valid year",
        "Must be a valid date",
    ];

    const errorState = (numberOfError, typeOfDate, typeOfError, color) => {
        error[numberOfError].innerHTML = typeOfError;
        span[numberOfError].style.color = color;  
        typeOfDate.style.borderColor = color;      
    }

    const isLeapYear = (in_day, in_month, in_year) => {
        month = month - 1;
        fullDate = new Date(in_year, in_month, in_day);
        if(in_day == fullDate.getDate() && in_month == fullDate.getMonth()
            && in_year == fullDate.getFullYear()){
            return true;
            }
        else {
            return false;
        }    
    }

    const subtractAge = () => {
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

        span[3].innerHTML = newYear;
        span[4].innerHTML = newMonth;
        span[5].innerHTML = newDay;

    }
}