var input = document.querySelector('input#tela');

function mais(){
    var seg = input.value.length
    if(input.value[seg-1] == '+' || input.value == '' || input.value[seg-1] == '*' && input.value[seg-2] == '*'){
        alert('ERROR')
    }else{
        if(input.value[seg-1] == '-'){
            if(input.value.length == 1){
                alert('ERROR')
                del()
            }else{
                if(input.value[seg-2] == '*' && input.value[seg-3] == '*'){
                    alert('ERROR');
                }else{
                    del()
                    input.value += '+';
                }                
            }          
        }else{
            input.value += '+';
        }
    }
}
function menos(){
    var seg = input.value.length
    if(input.value[seg-1] == '-'){
        alert('ERROR')
    }else{
        if(input.value[seg-1] == '+'){
            del()
            input.value += '-';
        }else{
            input.value += '-';
        }
    }
}
function multiplicacao(){
    var seg = input.value.length
    if(input.value[seg-1] == '*' && input.value[seg-2] == '*'){
        del()
    }else if(input.value[seg-1] == '*' || input.value == '' || input.value[seg-1] == '-' || input.value[seg-1] == '+'){
        alert('ERROR');
    }else{
        if(input.value[seg-1] == '/'){
            del()
            input.value += '*';
        }else{
            input.value += '*';
        }
    }
}
function divisao(){
    var seg = input.value.length
    if(input.value[seg-1] == '*' && input.value[seg-2] == '*'){
        del()
        del()
        input.value += '/';
    }else if(input.value[seg-1] == '/' || input.value == '' || input.value[seg-1] == '-' || input.value[seg-1] == '+'){
        alert('ERROR')
    }else{
        if(input.value[seg-1] == '*' || input.value[seg-1] == '*' && input.value[seg-2] == '*'){
            del()
            input.value += '/';
        }else{
            input.value += '/';
        }
    }
}
function exponencial(){
    var seg = input.value.length
    if(input.value[seg-1] == '*' && input.value[seg-2] == '*' || input.value == '' || input.value[seg-1] == '-' || input.value[seg-1] == '+'){
        alert('ERROR')
    }else{
        if(input.value[seg-1] == '*'){
            input.value += '*';
        }else if(input.value[seg-1] == '/'){
            del()
            input.value += '**';
        }
        else{
            input.value += '**';
        }
    }
}
function parenteses_e(){input.value += '(';}
function parenteses_d(){input.value += ')';}
function ac(){input.value = '';}

const del = () =>{
    let deletar = input.value;
    document.getElementById('tela').value = deletar.substr(0,deletar.length-1);
}


function nove(){input.value += '9';}
function oito(){input.value += '8';}
function sete(){input.value += '7';}
function seis(){input.value += '6';}
function cinco(){input.value += '5';}
function quatro(){input.value += '4';}
function tres(){input.value += '3';}
function dois(){input.value += '2';}
function um(){input.value += '1';}
function zero(){input.value += '0';}


function igual(){
    input.value = eval(input.value)
}