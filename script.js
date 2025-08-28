alert("Bem vindo ao meu projeto pessoal o nome dele é:")
alert("=====CONVERSOR DE MOEDAS=====")
alert("Como funciona?")
alert("Você escolhe uma moeda que vai ser convertida e depois escolhe a moeda que você quer converter")
alert("No momento usaremos apenas valores fixos para converter as moedas então aqui vai a tabela dos valores")

alert(`
| Moeda                | Código | Taxa fixa (1 unidade = quantos BRL)
----------------------------------------------------
| Dólar Americano        | USD    | 1 USD = 5.00 BRL
----------------------------------------------------
| Euro                   | EUR    | 1 EUR = 5.40 BRL 
----------------------------------------------------               
| Libra Esterlina        | GBP    | 1 GBP = 6.30 BRL 
----------------------------------------------------               
| Iene Japonês           | JPY    | 1 JPY = 0.035 BRL 
----------------------------------------------------              
| Dólar Australiano      | AUD    | 1 AUD = 3.30 BRL 
----------------------------------------------------               
| Franco Suíço           | CHF    | 1 CHF = 5.60 BRL 
----------------------------------------------------               
| Dólar Canadense        | CAD    | 1 CAD = 3.70 BRL
----------------------------------------------------                
| Peso Argentino         | ARS    | 1 ARS = 0.025 BRL               
----------------------------------------------------                 
 `)

 let dinheiro = prompt("Qual moeda você quer transformar? \n 1.BRL-REAL \n 2.USD-DOLAR AMERICANO \n 3.EUR-EURO \n 4.GBP-LIBRA ESTERLINA \n 5.JPY-IENE JAPÔNES \n 6.AUD-DÓLAR AUSTRALIANO \n 7.CHF- FRANCO SUIÇO \n 8.CAD-DÓLAR CANADENSE \n 9.ARS-PESO ARGENTINO").toLowerCase()
 let dinheiroTranformado = prompt("Em qual moeda seu dinheiro vai ser tranformado? \n 1.BRL-REAL \n 2.USD-DOLAR AMERICANO \n 3.EUR-EURO \n 4.GBP-LIBRA-ESTERLINA \n 5.JPY-IENE JAPÔNES \n 6.AUD-DÓLAR AUSTRALIANO \n 7.CHF- FRANCO SUIÇO \n 8.CAD-DÓLAR CANADENSE \n 9.ARS-PESO ARGENTINO").toLowerCase()
 let dinheiroQuantidade = parseFloat(prompt("Quanto você quer tranformar?"))

 let taxa = undefined
 
 if (dinheiro === "2" || dinheiro === "usd" || dinheiro === "dolar"){
    taxa = 5.00
 } else if (dinheiro === "3" || dinheiro === "eur" || dinheiro === "euro"){
    taxa = 5.40
 }else if(dinheiro === "4" || dinheiro === "gbp" || dinheiro === "libra esterlina"){
    taxa = 6.30
 }
