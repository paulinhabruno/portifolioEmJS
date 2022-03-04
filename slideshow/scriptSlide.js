const msg = "Paula Bruno Developer!";
let titulo = document.querySelector('.titulo');
for (let i=0; i< msg.length; i++) {
    (function(pos){
        setTimeout(function(){
           titulo.innerHTML += msg.charAt(pos);
        },300*pos);
    })(i);
};