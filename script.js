    let largura = Number(prompt("Dê a largura do retângulo:"));
    let altura = Number(prompt("Dê a altura do retângulo:"));
    let area = altura * largura;
    console.log("Área do retângulo:", area);

    let aluno = prompt("Dê o nome do aluno:");
    let nota1 = Number(prompt("Dê a primeira nota do aluno:"));
    let nota2 = Number(prompt("Dê a segunda nota do aluno:"));
    let nota3 = Number(prompt("Dê a terceira nota do aluno:"));
    let media = (nota1 + nota2 + nota3) / 3
    console.log("A média do aluno" + aluno + "é: " + media.toFixed(2));

    let item = prompt("Dê o nome do item comprado:");
    let valorDoItem = Number(prompt("Dê o valor do item:"));
    let valorPago = Number(prompt("Dê o valor para pagar o item:"));
    let troco = (valorPago - valorDoItem)
    console.log("O valor do troco é: R$" + troco.toFixed(2));