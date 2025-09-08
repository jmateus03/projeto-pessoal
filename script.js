let equipes = prompt(
  "Digite o número de equipes que vão participar do campeonato (entre 3 e 12):\n\n" +
  "Exemplos:\n3 equipes   |   8 equipes\n4 equipes   |   9 equipes\n5 equipes   |  10 equipes\n6 equipes   |  11 equipes\n7 equipes   |  12 equipes"
).toLowerCase()

if (equipes === "3" || equipes === "3 equipes") {

  let equipe1 = prompt("Digite o nome da PRIMEIRA equipe:").toUpperCase()
  let equipe2 = prompt("Digite o nome da SEGUNDA equipe:").toUpperCase()
  let equipe3 = prompt("Digite o nome da TERCEIRA equipe:").toUpperCase()

  let posicao = Math.floor(Math.random() * 3) + 1
  alert(`Sorteio realizado! Vamos ver quem joga a primeira partida...`)

  if (posicao === 1) {
    alert(`Partida 1: ${equipe1} vs ${equipe2}`)
    let vencedor1 = prompt("Digite o nome do vencedor da primeira partida:").toUpperCase()

    if (vencedor1 !== equipe1 && vencedor1 !== equipe2) {
      alert("❌ Nome inválido! Essa equipe não participou da partida.")
    } else {
      alert(`Grande final: ${vencedor1} vs ${equipe3}`)
      let vencedor2 = prompt("Digite o nome do vencedor da final:").toUpperCase()

      if (vencedor2 === vencedor1 || vencedor2 === equipe3) {
        alert(`🏆 Parabéns, ${vencedor2}! Vocês são os campeões do torneio!`)
      } else {
        alert("❌ Nome inválido! Essa equipe não participou da final.")
      }
    }

  } else if (posicao === 2) {
    alert(`Partida 1: ${equipe2} vs ${equipe3}`)
    let vencedor1 = prompt("Digite o nome do vencedor da primeira partida:").toUpperCase()

    if (vencedor1 !== equipe2 && vencedor1 !== equipe3) {
      alert("❌ Nome inválido! Essa equipe não participou da partida.")
    } else {
      alert(`Grande final: ${vencedor1} vs ${equipe1}`)
      let vencedor2 = prompt("Digite o nome do vencedor da final:").toUpperCase()

      if (vencedor2 === vencedor1 || vencedor2 === equipe1) {
        alert(`🏆 Parabéns, ${vencedor2}! Vocês são os campeões do torneio!`)
      } else {
        alert("❌ Nome inválido! Essa equipe não participou da final.")
      }
    }

  } else if (posicao === 3) {
    alert(`Partida 1: ${equipe1} vs ${equipe3}`)
    let vencedor1 = prompt("Digite o nome do vencedor da primeira partida:").toUpperCase()

    if (vencedor1 !== equipe1 && vencedor1 !== equipe3) {
      alert("❌ Nome inválido! Essa equipe não participou da partida.")
    } else {
      alert(`Grande final: ${vencedor1} vs ${equipe2}`)
      let vencedor2 = prompt("Digite o nome do vencedor da final:").toUpperCase()

      if (vencedor2 === vencedor1 || vencedor2 === equipe2) {
        alert(`🏆 Parabéns, ${vencedor2}! Vocês são os campeões do torneio!`)
      } else {
        alert("❌ Nome inválido! Essa equipe não participou da final.")
      }
    }
  }

}else if(equipes === "4" || equipes === "4 equipes"){
     let equipe1 = prompt("Digite o nome da PRIMEIRA equipe:").toUpperCase() 
     let equipe2 = prompt("Digite o nome da SEGUNDA equipe:").toUpperCase() 
     let equipe3 = prompt("Digite o nome da TERCEIRA equipe:").toUpperCase() 
     let equipe4 = prompt("Digite o nome da QUARTA equipe:").toUpperCase() 
     
     let posicao = Math.floor(Math.random() * 4) + 1

    alert("Sorteio realizado! Vamos ver quem joga a primeira partida...")

    if(posicao === 1){ 
        alert(`Partida 1: ${equipe1} vs ${equipe2}`)

    let vencedor1 = prompt("Digite o nome do vencedor da primeira partida:").toUpperCase()
     if(vencedor1 === equipe1 || vencedor1 === equipe2){ 
        alert(`Partida 2: ${equipe3} vs ${equipe4}`) 
        
        let vencedor2 = prompt("Digite o nome do vencedor da segunda partida:").toUpperCase()
        
        if(vencedor2 === equipe3 || vencedor2 === equipe4){ 
            alert(`Grande final: ${vencedor1} vs ${vencedor2}`) 
            
            let vencedorFinal = prompt("Digite o nome do vencedor da final:").toUpperCase() 
            
            alert(`🏆 Parabéns, ${vencedorFinal}! Vocês são os campeões do torneio!`) 
        }else{
             alert("❌ Nome inválido! Essa equipe não participou da final.") 
        } 
    }else{
         alert("❌ Nome inválido! Essa equipe não participou da partida.") 
        } 
    }else if(posicao === 2){
             alert(`Partida 1: ${equipe1} vs ${equipe3}`)

    let vencedor1 = prompt("Digite o nome do vencedor da primeira partida:").toUpperCase()
     if(vencedor1 === equipe1 || vencedor1 === equipe3){ 
        alert(`Partida 2: ${equipe2} vs ${equipe4}`) 
        
        let vencedor2 = prompt("Digite o nome do vencedor da segunda partida:").toUpperCase()
        
        if(vencedor2 === equipe2 || vencedor2 === equipe4){ 
            alert(`Grande final: ${vencedor1} vs ${vencedor2}`) 
            
            let vencedorFinal = prompt("Digite o nome do vencedor da final:").toUpperCase() 
            
            alert(`🏆 Parabéns, ${vencedorFinal}! Vocês são os campeões do torneio!`) 
        }else{
             alert("❌ Nome inválido! Essa equipe não participou da final.") 
        } 
    }else{
         alert("❌ Nome inválido! Essa equipe não participou da partida.") 
        } 
    }else if(posicao === 3){
             alert(`Partida 1: ${equipe1} vs ${equipe4}`)

    let vencedor1 = prompt("Digite o nome do vencedor da primeira partida:").toUpperCase()
     if(vencedor1 === equipe1 || vencedor1 === equipe4){ 
        alert(`Partida 2: ${equipe2} vs ${equipe3}`) 
        
        let vencedor2 = prompt("Digite o nome do vencedor da segunda partida:").toUpperCase()
        
        if(vencedor2 === equipe2 || vencedor2 === equipe3){ 
            alert(`Grande final: ${vencedor1} vs ${vencedor2}`) 
            
            let vencedorFinal = prompt("Digite o nome do vencedor da final:").toUpperCase() 
            
            alert(`🏆 Parabéns, ${vencedorFinal}! Vocês são os campeões do torneio!`) 
        }else{
             alert("❌ Nome inválido! Essa equipe não participou da final.") 
        } 
    }else{
         alert("❌ Nome inválido! Essa equipe não participou da partida.") 
        } 
    }else if(posicao === 4){
             alert(`Partida 1: ${equipe3} vs ${equipe4}`)

    let vencedor1 = prompt("Digite o nome do vencedor da primeira partida:").toUpperCase()
     if(vencedor1 === equipe3 || vencedor1 === equipe4){ 
        alert(`Partida 2: ${equipe1} vs ${equipe2}`) 
        
        let vencedor2 = prompt("Digite o nome do vencedor da segunda partida:").toUpperCase()
        
        if(vencedor2 === equipe1 || vencedor2 === equipe2){ 
            alert(`Grande final: ${vencedor1} vs ${vencedor2}`) 
            
            let vencedorFinal = prompt("Digite o nome do vencedor da final:").toUpperCase() 
            
            alert(`🏆 Parabéns, ${vencedorFinal}! Vocês são os campeões do torneio!`) 
        }else{
             alert("❌ Nome inválido! Essa equipe não participou da final.") 
        } 
    }else{
         alert("❌ Nome inválido! Essa equipe não participou da partida.") 
        } 
    }
}else if(equipes === "5" || equipes === "5 equipes"){
    let equipe1 = prompt("Digite o nome da PRIMEIRA equipe:").toUpperCase() 
    let equipe2 = prompt("Digite o nome da SEGUNDA equipe:").toUpperCase() 
    let equipe3 = prompt("Digite o nome da TERCEIRA equipe:").toUpperCase() 
    let equipe4 = prompt("Digite o nome da QUARTA equipe:").toUpperCase() 
    let equipe5 = prompt("Digite o nome da QUINTA equipe:").toUpperCase()  

    let posicao = 1

     alert("Sorteio realizado! Vamos ver quem joga a primeira partida...")

     if (posicao === 1){
        alert(`Partida 1: ${equipe1} vs ${equipe2}`)

        let vencedor1 = prompt("Digite o nome do vencedor da primeira partida:").toUpperCase()

     if(vencedor1 != equipe1 && vencedor1 != equipe2){
        alert("❌ Nome inválido! Essa equipe não participou da partida.") 
        }else{
            alert(`Partida 2: ${equipe3} vs ${equipe4}`)

            let vencedor2 = prompt("Digite o nome do vencedor da segunda partida:").toUpperCase()

            if(vencedor2 === equipe3 || vencedor2 === equipe4){
                alert(`Semi final: ${vencedor1} vs ${equipe5}`)

                let vencedorSemi = prompt("Digite o nome do vencedor da semi final:").toUpperCase()

                if(vencedorSemi === vencedor1 || vencedorSemi === equipe5){
                    alert(`Grande final: ${vencedorSemi} vs ${vencedor2}`)

                    let vencedorFinal = prompt("Digite o nome do vencedor da final:").toUpperCase()
                    
                    alert(`🏆 Parabéns, ${vencedorFinal}! Vocês são os campeões do torneio!`) 

                }else if (vencedorFinal != vencedorSemi && vencedorFinal != equipe5){
                  alert("❌ Nome inválido! Essa equipe não participou da final.") 
                }else{
                    alert("❌ Nome inválido! Essa equipe não participou da partida.") 
                }
            }
        }
}
}
