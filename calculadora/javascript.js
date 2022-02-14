var tela = document.querySelector('input.números');
var conta = [];
var sit = [0];
var operacao = [];
var result = [0];

function mais(e){
    operacao[0] = [e.value];
    tela.value += operacao;
    conta[0] = ''
}

function calc(sit){
    if(sit == 0){
        var oper = operacao[0] 
        if(conta.length <= 2){
            var calculo = eval(conta[0]+oper+conta[0]);
            result[0] = calculo
        }else{
            calculo = eval(calculo+oper+conta[0]);
            result[0] = calculo
        }
    }

}


function igual(){
    sit[0] = 1
    if(!isNaN(result[0])){
       alert(result[0]);
    }
}

function sete(){
    tela.value += '7';
    conta[0] = 7
    calc(sit[0])
    sit[0] = 0
}
function oito(){
    tela.value += '8';
    conta[0] = 8
    calc(sit[0])
    sit[0] = 0
}
