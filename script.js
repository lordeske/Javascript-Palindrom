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
        let first = word.value.replace(/[^A-Za-z0-9]/g,'').toLowerCase();
        console.log(first);
        let last = first.split("").reverse().join("");
        console.log(last);
        
        if (first==last)
        {
            log.innerText= first + "  is Palindrome";
            return true;
            
        }
        else
        {
            log.innerText= first + " is NOT Palindrome";
        }

        word.value= "";

    }








})



