
function inserir(valor) {
  let visor = document.getElementById('visor');
    if (visor.value.length < 13){
        visor.value += valor;
    }
}

function limpar() {
  document.getElementById('visor').value = '';
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