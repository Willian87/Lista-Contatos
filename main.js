
const form = document.getElementById('form');
const nomeContato = [];
const numeroContato = [];

var linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    addLine();
})

function addLine(){
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');

    nomeContato.push(inputNomeContato.value)
    numeroContato.push(inputNumeroContato.value)

    var linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumeroContato.value}</td>`;
    linha += '</tr>'

    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    inputNomeContato.value = '';
    inputNumeroContato.value = '';
}