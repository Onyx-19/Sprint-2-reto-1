const FORM = document.getElementById("form");
let button = document.querySelector("button");
let valorMoneda1;
let valorMoneda2;
let result;

let array = [{iso:"USD", trm: 1},{iso:"COP", trm: 3953.88},{iso:"GBP", trm: 0.74},{iso:"MXN", trm: 20.59},{iso:"EUR", trm: 0.87}];
let COP = 0.00025;
let GBP = 1.35;
let MXN = 0.052;
let EUR = 1.13;

let element = document.getElementById("contenedor");
let fragment = document.createDocumentFragment();

FORM.addEventListener("submit", (e) =>{
    e.preventDefault();
    const inputResult = document.getElementById("result")
    if (inputResult !== null){
        inputResult.remove();        
    }
    const moneda1 = document.getElementById("moneda1").value;
    const moneda2 = document.getElementById("moneda2").value;
    const valor = document.getElementById("valor").value;  
    const tasa = document.getElementById("valor"); 

    tasa.addEventListener("keyup", (e) => {
        if(isNaN(valor)){
            button.setAttribute("disabled", "");
            alert ("El campo valor solo admite datos numericos  ");
            return;
        }
        button.setAttribute("disabled");
    });

    array.forEach((element) => {
        if(element.iso === moneda1){
          valorMoneda1 = element.trm			
        }
        if(element.iso === moneda2){
          valorMoneda2 = element.trm
        }	
    });        

    if(moneda1 === "USD"){
        if(moneda2 === "COP"){
            result = (valor * valorMoneda1) * valorMoneda2
        }else if(moneda2 === "GBP"){
            result = (valor * valorMoneda1) * valorMoneda2
        }else if(moneda2 === "MXN"){
            result = (valor * valorMoneda1) * valorMoneda2
        }else if (moneda2 === "EUR"){
            result = (valor * valorMoneda1) * valorMoneda2
        }
    }
    else if(moneda1 === "COP"){
        if(moneda2 === "USD"){
            result = (valor / valorMoneda1) / valorMoneda2
        }else if(moneda2 === "GBP"){
            result = (valor * COP) * valorMoneda2
        }else if(moneda2 === "MXN"){
            result = (valor * COP) * valorMoneda2
        }else if (moneda2 === "EUR"){
            result = (valor * COP) * valorMoneda2
        }
    }
    else if(moneda1 === "GBP"){
        if(moneda2 === "USD"){
            result = (valor * GBP) / valorMoneda2
        }else if(moneda2 === "COP"){
            result = (valor * GBP) * valorMoneda2
        }else if(moneda2 === "MXN"){
            result = (valor * GBP) * valorMoneda2
        }else if (moneda2 === "EUR"){
            result = (valor * GBP) * valorMoneda2
        }
    }
    else if(moneda1 === "MXN"){
        if(moneda2 === "USD"){
            result = (valor * MXN) * valorMoneda2
        }else if(moneda2 === "COP"){
            result = (valor * MXN) * valorMoneda2
        }else if(moneda2 === "GBP"){
            result = (valor * MXN) * valorMoneda2
        }else if (moneda2 === "EUR"){
            result = (valor * MXN) * valorMoneda2
        }
    }
    else if(moneda1 === "EUR"){
        if(moneda2 === "USD"){
            result = (valor * EUR) * valorMoneda2
        }else if(moneda2 === "COP"){
            result = (valor * EUR) * valorMoneda2
        }else if(moneda2 === "GBP"){
            result = (valor * EUR) * valorMoneda2
        }else if (moneda2 === "MXN"){
            result = (valor * EUR) * valorMoneda2
        }
    }else{
        
    }
    result = "El valor de la conversion es $" + result + " " + moneda2;
    
    let total = document.createElement("p");
    total.textContent = result;
    total.id = "result";
    fragment.appendChild(total);

    element.appendChild(fragment);  
})