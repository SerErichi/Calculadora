function limpar() {
  document.getElementById('visor').value = '';
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
    if (visor.value.length < 13 && !trava()){
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
    let antes = valor.slice(i + 1);
    let numero = valor.slice(i);

    console.log("antes: ", antes);
    console.log("depois: ", numero);

    // inverte o número
    if(numero < 0)
        visor.value = antes + numero.replace("-","+");
    else
        visor.value = antes + numero.replace("+","-");
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