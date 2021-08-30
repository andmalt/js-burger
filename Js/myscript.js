
let listaCoupon = ["Festival31Maggio","FraschetteAriccia","LarianoFunghiPorciniSagra"];
console.log(listaCoupon);

let nomePanino = document.getElementById("nome-panino");

let bottoneCalcolo = document.getElementById("bottone-calc");

let prezzoInizialePanino;


let somma = 0;

bottoneCalcolo.addEventListener("click",
function(){
    if(nomePanino.value.length == 0){
        alert("Inserire nome panino");
    }else{
        prezzoInizialePanino = 50;

        let ingredientiAggiunti = document.getElementsByClassName("checkbox-ingredienti");

        let couponSconto = document.getElementById("coupon-sconto");
        console.log("coupon-sconto: "+ couponSconto);

        for(let i = 0; i < ingredientiAggiunti.length; i++){
            let ingrediente = ingredientiAggiunti[i]; 

            // aggiunta ingredienti

            if(ingrediente.checked === true){
                prezzoInizialePanino += 7.5;
            }   
        }

        // sconto panino

        if(couponSconto.value.length != 0){
            if(listaCoupon.includes(couponSconto.value)){
                prezzoInizialePanino = prezzoInizialePanino * 0.8;
            }else{
                alert("Coupon non valido!!!");
            }          
        }      
        console.log(prezzoInizialePanino);
        somma = prezzoInizialePanino;
        document.getElementById("prezzo-panino").innerHTML = somma +"&euro;";
    }
}
);



