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
            let firstv1 = word.value;
            let first = word.value.replace(/[^A-Za-z0-9]/g,'').toLowerCase();
            let last = first.split("").reverse().join("");
            
            
            if (first==last)
            {
                log.innerText= firstv1 + "  is a Palindrome";
                return true;
                
            }
            else
            {
                log.innerText= firstv1 + " is NOT a Palindrome";
            }

            word.value= "";  //Claer input

        }








    })



