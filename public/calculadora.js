function verOrcamento(){

var refrigeradores = Number(input_qtdRefrigeradores.value)
var ampolas = Number(input_qtdAmpola.value)
var valor = Number(input_valorAmpola.value)

var qtdVacina = (refrigeradores * ampolas) 
//var perda = (qtdVacina * 70) / 100
//var novaPerda = perda * 0.15
var lucro = (valor * qtdVacina)
var perda1 = lucro * 0.17
var perda2 = lucro * 0.07
//var lucro2 = (valor * qtdVacina) - novaPerda


resultado.innerHTML = `
Sem a solução da SaveVax <br><br>
Com o valor total de ${qtdVacina} ampolas <br>
O lucro é de R$${lucro} <br>
Existe uma perda de: R$${perda1} <br><br>


Com a solução da SaveVax <br>
Reduzirá o valor para R$${perda2} <br>
` 

}
