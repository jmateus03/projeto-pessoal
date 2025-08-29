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

 let dinheiro = prompt("Qual moeda você quer transformar? \n (Coloque apenas o numero) \n 1.REAL \n 2.DOLAR AMERICANO \n 3.EURO \n 4.LIBRA ESTERLINA \n 5.IENE JAPÔNES \n 6.DÓLAR AUSTRALIANO \n 7.FRANCO SUIÇO \n 8.DÓLAR CANADENSE \n 9.PESO ARGENTINO").toLowerCase()

 if(dinheiro != "1" && dinheiro != "2" && dinheiro != "3" && dinheiro != "4" && dinheiro != "5" && dinheiro != "6" && dinheiro != "7" && dinheiro != "8" && dinheiro != "9"){
    alert("Você inseriu uma moeda invalida")
 }

 let taxa = parseFloat(undefined)
 
 if (dinheiro === "1"){
    taxa = 1.00

    let dinheiroTranformado = prompt("Em qual moeda seu dinheiro vai ser tranformado? \n (Coloque apenas o numero) \n 1.DOLAR AMERICANO \n 2.EURO \n 3.LIBRA-ESTERLINA \n 4.IENE JAPÔNES \n 5.DÓLAR AUSTRALIANO \n 6.FRANCO SUIÇO \n 7.DÓLAR CANADENSE \n 8.PESO ARGENTINO").toLowerCase()
    let dinheiroQuantidade = parseFloat(prompt("Quanto você quer tranformar?"))
    
     if(dinheiroTranformado === "1"){
        alert(`Você tem ${((dinheiroQuantidade * taxa) /  5).toFixed(2)} dólares`)
     } else if (dinheiroTranformado === "2"){
        alert(`Você tem ${((dinheiroQuantidade * taxa) /  5.40).toFixed(2)} euros`)
     } else if (dinheiroTranformado === "3"){
        alert(`Você tem ${((dinheiroQuantidade * taxa) /  6.30).toFixed(2)} libras esterlinas`)
     } else if (dinheiroTranformado === "4"){
        alert(`Você tem ${((dinheiroQuantidade * taxa) /  0.035).toFixed(2)} ienes japônes`)
     } else if(dinheiroTranformado === "5"){
        alert(`Você tem ${((dinheiroQuantidade * taxa) /  3.30).toFixed(2)} dólares australianos`)
     } else if(dinheiroTranformado === "6"){
        alert(`Você tem ${((dinheiroQuantidade * taxa) /  5.60).toFixed(2)} francos suiços`)
     }else if(dinheiroTranformado === "7"){
        alert(`Você tem ${((dinheiroQuantidade * taxa) / 3.70).toFixed(2)} dólares canadenses`)
     }else if(dinheiroTranformado === "8"){
        alert(`Você tem ${((dinheiroQuantidade * taxa) /  0.025).toFixed(2)} pesos argentinos`)
     } else{
        alert("Você inseriu uma moeda invalida")
     }

 }else if (dinheiro === "2"){
    taxa = 5.00

    let dinheiroTranformado = prompt("Em qual moeda seu dinheiro vai ser tranformado? \n (Coloque apenas o numero) \n 1.REAL \n 2.EURO \n 3.LIBRA-ESTERLINA \n 4.IENE JAPÔNES \n 5.DÓLAR AUSTRALIANO \n 6.FRANCO SUIÇO \n 7.DÓLAR CANADENSE \n 8.PESO ARGENTINO")
    let dinheiroQuantidade = parseFloat(prompt("Quanto você quer tranformar?"))

    if(dinheiroTranformado === "1"){
        alert(`Você tem ${((dinheiroQuantidade * taxa) /  1).toFixed(2)} reais`)
     } else if (dinheiroTranformado === "2"){
        alert(`Você tem ${((dinheiroQuantidade * taxa) /  5.40).toFixed(2)} euros`)
     } else if (dinheiroTranformado === "3"){
        alert(`Você tem ${((dinheiroQuantidade * taxa) /  6.30).toFixed(2)} libras esterlinas`)
     } else if (dinheiroTranformado === "4"){
        alert(`Você tem ${((dinheiroQuantidade * taxa) /  0.035).toFixed(2)} ienes japônes`)
     } else if(dinheiroTranformado === "5"){
        alert(`Você tem ${((dinheiroQuantidade * taxa) /  3.30).toFixed(2)} dólares australianos`)
     } else if(dinheiroTranformado === "6"){
        alert(`Você tem ${((dinheiroQuantidade * taxa) /  5.60).toFixed(2)} francos suiços`)
     }else if(dinheiroTranformado === "7"){
        alert(`Você tem ${((dinheiroQuantidade * taxa) / 3.70).toFixed(2)} dólares canadenses`)
     }else if(dinheiroTranformado === "8"){
        alert(`Você tem ${((dinheiroQuantidade * taxa) /  0.025).toFixed(2)} pesos argentinos`)
     } else{
        alert("Você inseriu uma moeda invalida")
     }

 } else if (dinheiro === "3"){
    taxa = 5.40

     let dinheiroTranformado = prompt("Em qual moeda seu dinheiro vai ser tranformado? \n (Coloque apenas o numero) \n 1.REAL \n 2.DOLARES AMERICANOS  \n 3.LIBRA-ESTERLINA \n 4.IENE JAPÔNES \n 5.DÓLARES AUSTRALIANOS \n 6.FRANCO SUIÇO \n 7.DÓLAR CANADENSE \n 8.PESO ARGENTINO")
    let dinheiroQuantidade = parseFloat(prompt("Quanto você quer tranformar?"))

    if(dinheiroTranformado === "1"){
        alert(`Você tem ${((dinheiroQuantidade * taxa) /  1).toFixed(2)} reais`)
    } else if (dinheiroTranformado === "2"){
        alert(`Você tem ${((dinheiroQuantidade * taxa) /  5).toFixed(2)} dólares americanos`)
    } else if (dinheiroTranformado === "3"){
        alert(`Você tem ${((dinheiroQuantidade * taxa) /  6.30).toFixed(2)} libras esterlinas`)
    } else if(dinheiroTranformado === "4"){
       alert(`Você tem ${((dinheiroQuantidade * taxa) /  0.035).toFixed(2)} ienes japôneses`)
    } else if(dinheiroTranformado === "5"){
        alert(`Você tem ${((dinheiroQuantidade * taxa) /  3.30).toFixed(2)} dólares australianos`)
     }else if(dinheiroTranformado === "6"){
        alert(`Você tem ${((dinheiroQuantidade * taxa) /  5.60).toFixed(2)} francos suiços`)
     }else if(dinheiroTranformado === "7"){
        alert(`Você tem ${((dinheiroQuantidade * taxa) / 3.70).toFixed(2)} dólares canadenses`)
     }else if(dinheiroTranformado === "8"){
        alert(`Você tem ${((dinheiroQuantidade * taxa) /  0.025).toFixed(2)} pesos argentinos`)
     } else{
        alert("Você inseriu uma moeda invalida")
     }

 } else if(dinheiro === "4"){
    taxa = 6.30
    
     let dinheiroTranformado = prompt("Em qual moeda seu dinheiro vai ser tranformado? \n (Coloque apenas o numero) \n 1.REAL \n 2.DOLARES AMERICANOS  \n 3.EURO \n 4.IENE JAPÔNES \n 5.DÓLARES AUSTRALIANOS \n 6.FRANCO SUIÇO \n 7.DÓLAR CANADENSE \n 8.PESO ARGENTINO")
    let dinheiroQuantidade = parseFloat(prompt("Quanto você quer tranformar?"))

if(dinheiroTranformado === "1"){
        alert(`Você tem ${((dinheiroQuantidade * taxa) /  1).toFixed(2)} reais`)
    } else if (dinheiroTranformado === "2"){
        alert(`Você tem ${((dinheiroQuantidade * taxa) /  5).toFixed(2)} dólares americanos`)
    } else if (dinheiroTranformado === "3"){
        alert(`Você tem ${((dinheiroQuantidade * taxa) /  5.40).toFixed(2)} euros`)
    } else if(dinheiroTranformado === "4"){
       alert(`Você tem ${((dinheiroQuantidade * taxa) /  0.035).toFixed(2)} ienes japôneses`)
    } else if(dinheiroTranformado === "5"){
        alert(`Você tem ${((dinheiroQuantidade * taxa) /  3.30).toFixed(2)} dólares australianos`)
     }else if(dinheiroTranformado === "6"){
        alert(`Você tem ${((dinheiroQuantidade * taxa) /  5.60).toFixed(2)} francos suiços`)
     }else if(dinheiroTranformado === "7"){
        alert(`Você tem ${((dinheiroQuantidade * taxa) / 3.70).toFixed(2)} dólares canadenses`)
     }else if(dinheiroTranformado === "8"){
        alert(`Você tem ${((dinheiroQuantidade * taxa) /  0.025).toFixed(2)} pesos argentinos`)
     } else{
        alert("Você inseriu uma moeda invalida")
     }

 } else if(dinheiro === "5"){
   taxa = 0.035

        let dinheiroTranformado = prompt("Em qual moeda seu dinheiro vai ser tranformado? \n (Coloque apenas o numero) \n 1.REAL \n 2.DOLARES AMERICANOS  \n 3.EURO \n 4.LIBRAS ESTERLINAS \n 5.DÓLARES AUSTRALIANOS \n 6.FRANCO SUIÇO \n 7.DÓLAR CANADENSE \n 8.PESO ARGENTINO")
    let dinheiroQuantidade = parseFloat(prompt("Quanto você quer tranformar?"))

if(dinheiroTranformado === "1"){
        alert(`Você tem ${((dinheiroQuantidade * taxa) /  1).toFixed(2)} reais`)
    } else if (dinheiroTranformado === "2"){
        alert(`Você tem ${((dinheiroQuantidade * taxa) /  5).toFixed(2)} dólares americanos`)
    } else if (dinheiroTranformado === "3"){
        alert(`Você tem ${((dinheiroQuantidade * taxa) /  5.40).toFixed(2)} euros`)
    } else if(dinheiroTranformado === "4"){
       alert(`Você tem ${((dinheiroQuantidade * taxa) /  6.30).toFixed(2)} libras esterlinas`)
    } else if(dinheiroTranformado === "5"){
        alert(`Você tem ${((dinheiroQuantidade * taxa) /  3.30).toFixed(2)} dólares australianos`)
     }else if(dinheiroTranformado === "6"){
        alert(`Você tem ${((dinheiroQuantidade * taxa) /  5.60).toFixed(2)} francos suiços`)
     }else if(dinheiroTranformado === "7"){
        alert(`Você tem ${((dinheiroQuantidade * taxa) / 3.70).toFixed(2)} dólares canadenses`)
     }else if(dinheiroTranformado === "8"){
        alert(`Você tem ${((dinheiroQuantidade * taxa) /  0.025).toFixed(2)} pesos argentinos`)
     } else{
        alert("Você inseriu uma moeda invalida")
     }

 } else if(dinheiro === "6"){
   taxa = 3.30

      let dinheiroTranformado = prompt("Em qual moeda seu dinheiro vai ser tranformado? \n (Coloque apenas o numero) \n 1.REAL \n 2.DOLARES AMERICANOS  \n 3.EURO \n 4.LIBRAS ESTERLINAS \n 5.IENE JAPÔNES \n 6.FRANCO SUIÇO \n 7.DÓLAR CANADENSE \n 8.PESO ARGENTINO")
    let dinheiroQuantidade = parseFloat(prompt("Quanto você quer tranformar?"))

if(dinheiroTranformado === "1"){
        alert(`Você tem ${((dinheiroQuantidade * taxa) /  1).toFixed(2)} reais`)
    } else if (dinheiroTranformado === "2"){
        alert(`Você tem ${((dinheiroQuantidade * taxa) /  5).toFixed(2)} dólares americanos`)
    } else if (dinheiroTranformado === "3"){
        alert(`Você tem ${((dinheiroQuantidade * taxa) /  5.40).toFixed(2)} euros`)
    } else if(dinheiroTranformado === "4"){
       alert(`Você tem ${((dinheiroQuantidade * taxa) /  6.30).toFixed(2)} libras esterlinas`)
    } else if(dinheiroTranformado === "5"){
        alert(`Você tem ${((dinheiroQuantidade * taxa) /  0.035).toFixed(2)}) ienes japôneses`)
     }else if(dinheiroTranformado === "6"){
        alert(`Você tem ${((dinheiroQuantidade * taxa) /  5.60).toFixed(2)} francos suiços`)
     }else if(dinheiroTranformado === "7"){
        alert(`Você tem ${((dinheiroQuantidade * taxa) / 3.70).toFixed(2)} dólares canadenses`)
     }else if(dinheiroTranformado === "8"){
        alert(`Você tem ${((dinheiroQuantidade * taxa) /  0.025).toFixed(2)} pesos argentinos`)
     } else{
        alert("Você inseriu uma moeda invalida")
     }

 } else if(dinheiro === "7"){
     taxa = 5.60

        let dinheiroTranformado = prompt("Em qual moeda seu dinheiro vai ser tranformado? \n (Coloque apenas o numero) \n 1.REAL \n 2.DOLARES AMERICANOS  \n 3.EURO \n 4.LIBRAS ESTERLINAS \n 5.IENE JAPÔNES \n 6.DOLAR AUSTRALIANO \n 7.DÓLAR CANADENSE \n 8.PESO ARGENTINO")
    let dinheiroQuantidade = parseFloat(prompt("Quanto você quer tranformar?"))

if(dinheiroTranformado === "1"){
        alert(`Você tem ${((dinheiroQuantidade * taxa) /  1).toFixed(2)} reais`)
    } else if (dinheiroTranformado === "2"){
        alert(`Você tem ${((dinheiroQuantidade * taxa) /  5).toFixed(2)} dólares americanos`)
    } else if (dinheiroTranformado === "3"){
        alert(`Você tem ${((dinheiroQuantidade * taxa) /  5.40).toFixed(2)} euros`)
    } else if(dinheiroTranformado === "4"){
       alert(`Você tem ${((dinheiroQuantidade * taxa) /  6.30).toFixed(2)} libras esterlinas`)
    } else if(dinheiroTranformado === "5"){
        alert(`Você tem ${((dinheiroQuantidade * taxa) /  0.035).toFixed(2)}) ienes japôneses`)
     }else if(dinheiroTranformado === "6"){
        alert(`Você tem ${((dinheiroQuantidade * taxa) /  3.30).toFixed(2)} dólares australianos`)
     }else if(dinheiroTranformado === "7"){
        alert(`Você tem ${((dinheiroQuantidade * taxa) / 3.70).toFixed(2)} dólares canadenses`)
     }else if(dinheiroTranformado === "8"){
        alert(`Você tem ${((dinheiroQuantidade * taxa) /  0.025).toFixed(2)} pesos argentinos`)
     } else{
        alert("Você inseriu uma moeda invalida")
     }

 } else if(dinheiro === "8"){
   taxa = 3.70

           let dinheiroTranformado = prompt("Em qual moeda seu dinheiro vai ser tranformado? \n (Coloque apenas o numero) \n 1.REAL \n 2.DOLARES AMERICANOS  \n 3.EURO \n 4.LIBRAS ESTERLINAS \n 5.IENE JAPÔNES \n 6.DOLAR AUSTRALIANO \n 7.FRANCO SUIÇOS \n 8.PESO ARGENTINO")
    let dinheiroQuantidade = parseFloat(prompt("Quanto você quer tranformar?"))

if(dinheiroTranformado === "1"){
        alert(`Você tem ${((dinheiroQuantidade * taxa) /  1).toFixed(2)} reais`)
    } else if (dinheiroTranformado === "2"){
        alert(`Você tem ${((dinheiroQuantidade * taxa) /  5).toFixed(2)} dólares americanos`)
    } else if (dinheiroTranformado === "3"){
        alert(`Você tem ${((dinheiroQuantidade * taxa) /  5.40).toFixed(2)} euros`)
    } else if(dinheiroTranformado === "4"){
       alert(`Você tem ${((dinheiroQuantidade * taxa) /  6.30).toFixed(2)} libras esterlinas`)
    } else if(dinheiroTranformado === "5"){
        alert(`Você tem ${((dinheiroQuantidade * taxa) /  0.035).toFixed(2)}) ienes japôneses`)
     }else if(dinheiroTranformado === "6"){
        alert(`Você tem ${((dinheiroQuantidade * taxa) /  3.30).toFixed(2)} dólares australianos`)
     }else if(dinheiroTranformado === "7"){
        alert(`Você tem ${((dinheiroQuantidade * taxa) / 5.60).toFixed(2)} francos suiços`)
     }else if(dinheiroTranformado === "8"){
        alert(`Você tem ${((dinheiroQuantidade * taxa) /  0.025).toFixed(2)} pesos argentinos`)
     } else{
        alert("Você inseriu uma moeda invalida")
     }

 } else if(dinheiro === "9"){
   taxa = 0.025

            let dinheiroTranformado = prompt("Em qual moeda seu dinheiro vai ser tranformado? \n (Coloque apenas o numero) \n 1.REAL \n 2.DOLARES AMERICANOS  \n 3.EURO \n 4.LIBRAS ESTERLINAS \n 5.IENE JAPÔNES \n 6.DOLAR AUSTRALIANO \n 7.FRANCO SUIÇOS \n 8.PESO ARGENTINO")
    let dinheiroQuantidade = parseFloat(prompt("Quanto você quer tranformar?"))

if(dinheiroTranformado === "1"){
        alert(`Você tem ${((dinheiroQuantidade * taxa) /  1).toFixed(2)} reais`)
    } else if (dinheiroTranformado === "2"){
        alert(`Você tem ${((dinheiroQuantidade * taxa) /  5).toFixed(2)} dólares americanos`)
    } else if (dinheiroTranformado === "3"){
        alert(`Você tem ${((dinheiroQuantidade * taxa) /  5.40).toFixed(2)} euros`)
    } else if(dinheiroTranformado === "4"){
       alert(`Você tem ${((dinheiroQuantidade * taxa) /  6.30).toFixed(2)} libras esterlinas`)
    } else if(dinheiroTranformado === "5"){
        alert(`Você tem ${((dinheiroQuantidade * taxa) /  0.035).toFixed(2)}) ienes japôneses`)
     }else if(dinheiroTranformado === "6"){
        alert(`Você tem ${((dinheiroQuantidade * taxa) /  3.30).toFixed(2)} dólares australianos`)
     }else if(dinheiroTranformado === "7"){
        alert(`Você tem ${((dinheiroQuantidade * taxa) / 5.60).toFixed(2)} francos suiços`)
     }else if(dinheiroTranformado === "8"){
        alert(`Você tem ${((dinheiroQuantidade * taxa) /  3.70).toFixed(2)} dólares canadenses`)
     } else{
        alert("Você inseriu uma moeda invalida")
     }

 }
