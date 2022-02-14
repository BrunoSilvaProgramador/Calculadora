var tela = document.querySelector('input.números');
var conta = [];
var sit = [0];
var operacao = [];
var result = 0;

function mais(){
    operacao[0] = '+';
    tela.value += operacao;
    conta.push('+')
}
function menos(){
    operacao[0] = '-';
    tela.value += operacao;
    conta.push('-')
}
function multiplicacao(){
    operacao[0] = '*';
    tela.value += 'x';
    conta.push('*')
}
function divisao(){
    operacao[0] = '/';
    tela.value += operacao;
    conta.push('/')
}



function igual(){
    var n1 = ''
    var n2 = ''
    if(operacao[0] == '+'){
        if(sit[0] == 0){
            for(var i = 0; i <= conta.length; i++){
                if(conta[i] == '+'){
                    var s = 2
                }else{
                    if(s == 2){
                        n2 = n2 + conta[i] 
                    }else{
                        n1 = n1 + conta[i]
                    }
                    s=1
                }
            }
            result += Number(n1) + Number(n2);
            alert(result)
            sit[0] = 1
            conta = []
        }else{
            for(var i = 0; i <= conta.length; i++){
                if(conta[i] == '+'){
                    var s = 2
                }else{
                    if(s == 2){
                        n1 = conta[i] 
                    }
                    s=1
                }
            }
            result += Number(n1);
            alert(result)
        }
    
    }else if(operacao[0] == '-'){ 
        if(sit[0] == 0){
            result += conta[0] - conta[1];
            alert(result)
            sit[0] = 1
        }else{
            result -= conta[0];
            alert(result)
        }
    }else if(operacao[0] == '*'){
        if(sit[0] == 0){
            result += conta[0] * conta[1];
            alert(result)
            sit[0] = 1
        }else{
            result *= conta[0];
            alert(result)
        }
    
    }else if(operacao[0] == '/'){
        if(sit[0] == 0){
            result += conta[0] / conta[1];
            alert(result)
            sit[0] = 1
        }else{
            result /= conta[0];
            alert(result)
        }
    }
    
}

function sete(){
    tela.value += '7';
    if(conta[0] == ''){
        conta.push('8')
    }


}
function oito(){
    tela.value += '8';
    if(conta[0] == ''){
        conta.push('8')
    }

}
