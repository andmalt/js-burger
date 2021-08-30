
let listaCoupon = ["Festival31Maggio","FraschetteAriccia","LarianoFunghiPorciniSagra"];
console.log(listaCoupon);

let nomePanino = document.getElementById("nome-panino");

let bottoneCalcolo = document.getElementById("bottone-calc");



let somma = 0;

bottoneCalcolo.addEventListener("click",
function(){
    if(nomePanino.length == 0){
        alert("Inserire nome panino");
    }else{
        let prezzoInizialePanino = 50;
        let ingredientiAggiunti = document.getElementsByClassName("checkbox-ingredienti");


        for(let i = 0; i < ingredientiAggiunti.length; i++){
            let ingrediente = ingredientiAggiunti[i]; 

            // aggiunta ingredienti

            if(ingrediente.checked === true){
                prezzoInizialePanino += 7.5;
            }

            // sconto panino
            let couponSconto = document.getElementById("coupon-sconto");
            
            console.log(prezzoInizialePanino);
            
        }
        somma = prezzoInizialePanino;
        document.getElementById("prezzo-panino").innerHTML = somma +"&euro;";
    }
}
);
console.log(somma);


