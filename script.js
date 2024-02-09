const word = document.getElementById("text-input");
const button = document.getElementById("check-btn");
const log = document.getElementById("result")

button.addEventListener("click", ()=>{

    log.innerText="";

    if(word.value === "")
    {
        alert("Please input a value");
        
    }
    else
    {
        let first = word.value
        let last = first.split("").reverse().join("");
        console.log(last)
    }








})



