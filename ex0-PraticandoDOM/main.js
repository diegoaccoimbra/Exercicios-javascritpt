function somar() {
    //Criando os objetos que vão pegar o valor digitado no input
    var stringN1 = window.document.querySelector("input#stringN1")
    var stringN2 = window.document.querySelector("input#stringN2")
    //Criando o objeto que se associa com a div onde vai aparecer o resultado da soma
    var resultado = window.document.querySelector("div#resultado")

    //Convertendo o valor digitado pra number, já que eles são primeiramente armazenados como string
    var n1 = Number(stringN1.value)
    var n2 = Number(stringN2.value)
    soma = n1 + n2

    resultado.innerHTML = `A soma entre ${n1} e ${n2} é igual a ${soma}`

}
