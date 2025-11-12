let darkmode = localStorage.getItem("darkmode") /* This to get current theme from local storage */

const themeSwitch = document.getElementById("theme-switch")


/** this line of code to check of the darkmode is acrive from preivous localstoarge */

if(darkmode === "active"){
    enableDarkMode()
}

function checkDarkMode(){
    darkmode = localStorage.getItem("darkmode")
    if(darkmode !== "active"){
        enableDarkMode()
    }
    else {
        disableDarkMode()
    }
}

function enableDarkMode(){
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode','active')
}

function disableDarkMode(){
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode',null)
}