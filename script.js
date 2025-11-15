
const charactersSymNum =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const charactersSym =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const charactersNum =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];


let passEl = document.querySelector("#password-one")
let passsEl = document.querySelector("#password-two")

let symbolEl = document.getElementById("Symbol")
let numbersEl = document.getElementById("Numbers")
const lenghtEl = document.getElementById("lenght")






function generatePassword(){

    console.log(Number(lenghtEl.value))

    if((symbolEl.checked && numbersEl.checked) || (!symbolEl.checked && !numbersEl.checked)){
        generatePasswordBoth()
    }else if(symbolEl.checked){
        generatePasswordAddSymbols()
    }else{
        generatePasswordAddNumbers()
    }

}

function generatePasswordBoth(){

    let passwordone =""
    let passwordtwo =""


    for(let i = 0;i<Number(lenghtEl.value);i++){
        let index = Math.floor(Math.random() * charactersSymNum.length)
        passwordone += charactersSymNum[index]
    }

    for(let i = (Number(lenghtEl.value)-1);i>=0;i--){
        let index = Math.floor(Math.random() * charactersSymNum.length)
        passwordtwo += charactersSymNum[index]
    }
    
    passEl.textContent = passwordone
    passsEl.textContent = passwordtwo
}


function generatePasswordAddSymbols(){
    let passwordone =""
    let passwordtwo =""

    for(let i = 0;i<Number(lenghtEl.value);i++){
        let index = Math.floor(Math.random() * charactersSym.length)
        passwordone += charactersSym[index]
    }

    for(let i = (Number(lenghtEl.value)-1);i>=0;i--){
        let index = Math.floor(Math.random() * charactersSym.length)
        passwordtwo += charactersSym[index]
    }
    
    passEl.textContent = passwordone
    passsEl.textContent = passwordtwo
}


function generatePasswordAddNumbers(){
    let passwordone =""
    let passwordtwo =""

    for(let i = 0;i<Number(lenghtEl.value);i++){
        let index = Math.floor(Math.random() * charactersNum.length)
        passwordone += charactersNum[index]
    }

    for(let i = (Number(lenghtEl.value)-1);i>=0;i--){
        let index = Math.floor(Math.random() * charactersNum.length)
        passwordtwo += charactersNum[index]
    }
    
    passEl.textContent = passwordone
    passsEl.textContent = passwordtwo
}



function copyPasswordOne(){

    let text = passEl.textContent;

    // Copy it to the clipboard
    navigator.clipboard.writeText(text);

    // Tell the user it worked
    alert("Copied: " + text);
}

function copyPasswordTwo(){

    let text = passsEl.textContent;

    // Copy it to the clipboard
    navigator.clipboard.writeText(text);

    // Tell the user it worked
    alert("Copied: " + text);
}
