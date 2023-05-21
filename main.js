const form = document.getElementById('form-atividade')
const imgAprovado = '<img src= "./images/aprovado.png" alt= "emoji celebrando" />'
const imgReprovado = '<img src= "./images/reprovado.png" alt= "emoji triste" />'
let novaLinha = ' '
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>'
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>'
const notaMinima = prompt("Digite a nota mínima")

form.addEventListener('submit', function (e) {
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
    calculaMediaFinal()
    atualizaMediaFinal()
})

function adicionaLinha() {

    let inputAtividade = document.querySelector('.atividade');
    let inputNota = document.querySelector('.nota');

    if (atividades.includes(inputAtividade.value)) {
        alert(`A atividade ${inputAtividade.value} já existe`)
    }
    else {
        let conteudoLinha = '<tr>';
        conteudoLinha += `<td> ${inputAtividade.value} </td>`;
        conteudoLinha += `<td> ${inputNota.value} </td>`;
        conteudoLinha += `<td> ${inputNota.value >= 7 ? imgAprovado : imgReprovado} </td>`;
        novaLinha += conteudoLinha

        atividades.push(inputAtividade.value)
        notas.push(parseFloat(inputNota.value))
    }

    inputAtividade.value = "";
    inputNota.value = "";
    inputAtividade.focus()
}

function atualizaTabela() {

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = novaLinha;

}

function calculaMediaFinal() {
    let somaDasNotas = 0;

    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i];
    }
    return somaDasNotas / notas.length
}

function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal();

    document.getElementById('nota-media-valor').innerHTML = mediaFinal;
    document.getElementById('nota-media-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado
}