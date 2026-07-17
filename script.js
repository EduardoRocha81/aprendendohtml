function verificarAprovacao() {
    let nota = parseFloat(document.getElementById("nota").value);
    let resultado = document.getElementById("resultado");

    if (isNaN(nota)) {
        resultado.textContent = "Por favor, digite uma nota válida.";
    } else if (nota >= 7) {
        resultado.textContent = "Aluno aprovado!";
        alert("Parabéns! Você foi aprovado.");
    } else {
        resultado.textContent = "Aluno reprovado.";
        alert("Infelizmente, você foi reprovado. Tente novamente.");
    }

    console.log("Nota verificada: " + nota);
}