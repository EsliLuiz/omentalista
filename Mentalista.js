var nome = prompt("Digite seu nome!")
function Chutar() {
    var numeroSecreto = parseInt(Math.random() * 11)
    var elementoResultado = document.getElementById("resultado")
    var chute = parseInt(document.getElementById("valor").value);
    valor.focus();
    valor.value = "";
    var tentativas = 1;
    while (tentativas <= 3) {
        if (chute == numeroSecreto) {
            elementoResultado.innerHTML = ("Parabéns " + nome + " você acertou!");
        } else if (chute > 10 || chute < 0) {
            elementoResultado.innerHTML = (nome + " você deve digitar um numero entre 0 e 10!")
        } else {
            elementoResultado.innerHTML = (nome + " você errou");
        }
        tentativas++
    }
}