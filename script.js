let buttons = document.getElementsByClassName("buttons");
let inp = document.getElementById("inputBox");
let string="";
Array.from(buttons).forEach(buttons=>{
    buttons.addEventListener("click",(e)=>{
        let audio = new Audio("audio.wav");
        audio.play();
        if(e.target.innerHTML == "="){
            if(string == ""){
                inp.value = string;
            }
            else{ 
                try{
                    string=eval(string);
                    inp.value=string;
                }
                catch(e){
                    alert("Error: Inavlid input");
                    console.warn(e);
                    string="";
                    inp.value=string;
                }
            }
        }
        else if(e.target.innerHTML == "AC"){
            string="";
            inp.value=string;
        }
        else if(e.target.innerHTML == "DEL"){
            string=string.slice(0,-1);
            inp.value=string;
        }
        else{
            string =string+e.target.innerHTML;
            inp.value=string;
        }
    } )});

    document.addEventListener("keypress", (e)=>{
        if(e.key=="="){
            if(string == ""){
                inp.value = string;
            }
            else{ 
                try{
                    string=eval(string);
                    inp.value=string;
                }
                catch(r){
                    alert("Error: Inavlid input");
                    console.warn(r);
                    string="";
                    inp.value=string;
                }
            }
        }
        console.log(e);
    });