const msg = "Paula Bruno Developer!";
let titulo = document.querySelector('.titulo');
for (let i=0; i< msg.length; i++) {
    (function(pos){
        setTimeout(function(){
           titulo.innerHTML += msg.charAt(pos);
        },300*pos);
    })(i);
};


let seuVotoPara = document.querySelector('.d-1-1 spam');

let cargo = document.querySelector('.d-1-2 spam');

let descricao = document.querySelector('.d-1-4');

let aviso = document.querySelector('.d-2');

let lateral = document.querySelector('.d-1-right');

let numeros = document.querySelector('.d-1-3');

let etapaAtual = 0;


function clicou(n) {
    alert("Clicou em" +n);
}

function branco(){
    alert("Clicou em BRANCO!");
}
function corrige(){
    alert("Clicou em CORRIGE!");
}
function confirma(){
    alert("Clicou em CONFIRMA!");
}