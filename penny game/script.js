console.log("im loaded");
let flipBtn = document.querySelector(".flipCoinBtn");
let maxNumber= 2;

flipBtn.addEventListener("click", function(){
    let randomNumber= Math.ceil(Math.random()*maxNumber);
    console.log (randomNumber);
    if (randomNumber===1){
        console.log("twas 1");
    }else {
        console.log("twas 2");
    }
})