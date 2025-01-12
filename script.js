
function calcularCombustivel() {
    const dinheiro = parseFloat(document.getElementById('q01-dinheiro').value) || 0;
    const precoLitro = 6.30;
    const kmPorLitro = 14;

    const litros = dinheiro / precoLitro;
    const autonomia = litros * kmPorLitro;

    const resultado = document.getElementById('q01-resultado');
    resultado.innerHTML = `
        <li>Você abastecerá ${litros.toFixed(2)} litros</li>
        <li>Sua autonomia é de ${autonomia.toFixed(2)} km</li>`;
}


function calcularIMC() {
    const peso = parseFloat(document.getElementById('q02-peso').value) || 0;
    const altura = parseFloat(document.getElementById('q02-altura').value) || 0;
    const imc = peso / (altura * altura);

    let faixa;
    if (imc < 18.5) faixa = "Abaixo do peso";
    else if (imc < 25) faixa = "Peso normal";
    else if (imc < 30) faixa = "Levemente acima do peso";
    else if (imc < 35) faixa = "Obesidade grau I";
    else if (imc < 40) faixa = "Obesidade grau II (severa)";
    else faixa = "Obesidade grau III (mórbida)";

    const resultado = document.getElementById('q02-resultado');
    resultado.innerHTML = `
        <li>Seu IMC é ${imc.toFixed(2)}</li>
        <li>Você está na faixa: ${faixa}</li>`;
}


function simularDados() {
    const lances = Array(6).fill(0);
    const totalLances = 1000000;

    for (let i = 0; i < totalLances; i++) {
        const face = Math.floor(Math.random() * 6);
        lances[face]++;
    }

    const resultado = document.getElementById('q03-resultado');
    resultado.innerHTML = '';
    lances.forEach((ocorrencias, i) => {
        const frequencia = (ocorrencias / totalLances) * 100;
        resultado.innerHTML += `
            <tr>
                <td>${i + 1}</td>
                <td>${ocorrencias}</td>
                <td>${frequencia.toFixed(2)}%</td>
            </tr>`;
    });
}


const nomes = [];
function adicionarNome() {
    const nome = document.getElementById('q04-nome').value;
    if (nome) {
        nomes.push(nome);
        const lista = document.getElementById('q04-lista');
        lista.innerHTML += `<li>${nome}</li>`;
        document.getElementById('q04-nome').value = '';
    }
}
function inverterNomes() {
    const listaInvertida = document.getElementById('q04-invertido');
    listaInvertida.innerHTML = '';
    nomes.forEach(nome => {
        const invertido = nome.split('').reverse().join('');
        listaInvertida.innerHTML += `<li>${invertido}</li>`;
    });
}


function verificarPalindromo() {
    const palavra = document.getElementById('q05-palavra').value;
    const invertida = palavra.split('').reverse().join('');
    const ehPalindromo = palavra.toLowerCase() === invertida.toLowerCase();

    const resultado = document.getElementById('q05-resultado');
    resultado.textContent = `A palavra '${palavra}' ${ehPalindromo ? 'é' : 'não é'} um palíndromo.`;
}
