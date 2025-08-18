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
    const valor = visor.value;

    // Encontra o último "token numérico" no final da string, com sinal opcional e decimais
    const m = valor.match(/-?\d+(?:\.\d+)?\s*$/);
    if (!m) return; // não há número no final, nada a fazer

    const numero = Number(m[0]);     // ex.: "-340" -> -340
    const invertido = -numero;       // inverte o sinal
    const inicio = m.index;          // posição onde o número começa

    visor.value = valor.slice(0, inicio) + String(invertido);
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