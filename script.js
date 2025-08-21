function limpar() {
  document.getElementById('visor').value = '';
  document.getElementById("calc_anterior").value = '';
}

function trava(){
    let visor = document.getElementById('visor')
    if(visor.value != "NaN" && visor.value != "Erro" && visor.value != "Infinity"){
        return false;
    }

    return true;
}

function inserir(valor) {
  let visor = document.getElementById('visor');
  let digito_operador = /^[+\-/*=!]{1}$/.test(valor);
    if (visor.value.length < 13 && !trava()){
      if (/^[+\-/*]{1}$/.test(visor.value[visor.value.length-1]) && digito_operador)
        visor.value = visor.value.slice(0,-1) + valor;
      else
        visor.value += valor;
    }
}


function inverter_valor(){
    let visor = document.getElementById('visor');
    let valor = visor.value;

    // procura o último operador (+ - * /)
    let i = valor.length - 1;
    while (i >= 0 && !"+-*/".includes(valor[i])) {
        i--;
    }

    // separa a parte antes e depois do operador
    let antes = valor.slice(0,i);
    let operador = valor.slice(i,i+1);
    let numero = valor.slice(i+1);

    //console.log("antes: ", antes);
    //console.log("Operador: ", operador);
    //console.log("depois: ", numero);
    //console.log("Position: ", i);

    // inverte o número
    if(operador == "*" || operador == "/")
        visor.value = antes + operador + -Number(numero);
    else if (operador == "+")
        visor.value = antes + "-" + numero;
    else
        visor.value = antes + "+" + numero;
        
}

function porcentagem(){
    let visor = document.getElementById('visor');
    let valor = visor.value;

    // procura o último operador (+ - * /)
    let i = valor.length - 1;
    while (i >= 0 && !"+-*/".includes(valor[i])) {
        i--;
    }

    // separa a parte antes e depois do operador
    let antes = valor.slice(0, i + 1);
    let numero = valor.slice(i + 1);

    // inverte o número
    let invertido = numero / 100;

    // monta de volta
    visor.value = antes + invertido;
}

function calcular() {
  let expressao = document.getElementById('visor').value;
  try {
    document.getElementById('calc_anterior').value = expressao + "=";
    document.getElementById('visor').value = eval(expressao);
  } catch (e) {
    document.getElementById('visor').value = 'Erro';
  }
}