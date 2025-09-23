alert("Bem-vindos(as) ao ChaveRing, nosso projeto pessoal")
alert("Ele consiste em gerar chaveamentos aleatórios para você usar nos seus torneios, campeonatos etc.")
alert("Aviso: Em chaveamentos ímpares algumas equipes equipes ficarão no bye(Descanso entre as partidas/Passarão direto para a próxima)")

let equipes = prompt("Digite o número de equipes que vão participar do campeonato (entre 3 e 12):\n\n" + "Exemplos:\n3 equipes   |   8 equipes\n4 equipes   |   9 equipes\n5 equipes   |  10 equipes\n6 equipes   |  11 equipes\n7 equipes   |  12 equipes").toLowerCase()

if (equipes === "3" || equipes === "3 equipes") {


  let equipe1Chave3 = prompt("Digite o nome da PRIMEIRA equipe:").toUpperCase()
  let equipe2Chave3 = prompt("Digite o nome da SEGUNDA equipe:").toUpperCase()
  let equipe3Chave3 = prompt("Digite o nome da TERCEIRA equipe:").toUpperCase()

  let chave = Math.floor(Math.random() * 3) + 1

  alert(`Sorteio realizado! Vamos ver o chaveamento...`)

  if (chave === 1) {
    alert(`Partida 1: ${equipe1Chave3} vs ${equipe2Chave3}`)

    let vencedor1Chave3 = prompt("Digite o nome do vencedor da primeira partida:").toUpperCase()

    if (vencedor1Chave3 !== equipe1Chave3 && vencedor1Chave3 !== equipe2Chave3) {
      alert("❌ Nome inválido! Essa equipe não participou da partida.")
    } else {
      alert(`Grande final: ${vencedor1Chave3} vs ${equipe3Chave3}`)

      let vencedor2Chave3 = prompt("Digite o nome do vencedor da final:").toUpperCase()

      if (vencedor2Chave3 === vencedor1Chave3 || vencedor2Chave3 === equipe3Chave3) {
        alert(`🏆 Parabéns, ${vencedor2Chave3}! Vocês são os campeões do torneio!`)
      } else {
        alert("❌ Nome inválido! Essa equipe não participou da final.")
      }
    }

  } else if (chave === 2) {
    alert(`Partida 1: ${equipe2Chave3} vs ${equipe3Chave3}`)

    let vencedor1Chave3 = prompt("Digite o nome do vencedor da primeira partida:").toUpperCase()

    if (vencedor1Chave3 !== equipe2Chave3 && vencedor1Chave3 !== equipe3Chave3) {
      alert("❌ Nome inválido! Essa equipe não participou da partida.")
    } else {
      alert(`Grande final: ${vencedor1Chave3} vs ${equipe1Chave3}`)

      let vencedor2Chave3 = prompt("Digite o nome do vencedor da final:").toUpperCase()

      if (vencedor2Chave3 === vencedor1Chave3 || vencedor2Chave3 === equipe1Chave3) {
        alert(`🏆 Parabéns, ${vencedor2Chave3}! Vocês são os campeões do torneio!`)
      } else {
        alert("❌ Nome inválido! Essa equipe não participou da final.")
      }
    }

  } else if (chave === 3) {
    alert(`Partida 1: ${equipe1Chave3} vs ${equipe3Chave3}`)

    let vencedor1Chave3 = prompt("Digite o nome do vencedor da primeira partida:").toUpperCase()

    if (vencedor1Chave3 !== equipe1Chave3 && vencedor1Chave3 !== equipe3Chave3) {
      alert("❌ Nome inválido! Essa equipe não participou da partida.")
    } else {
      alert(`Grande final: ${vencedor1Chave3} vs ${equipe2Chave3}`)

      let vencedor2Chave3 = prompt("Digite o nome do vencedor da final:").toUpperCase()

      if (vencedor2Chave3 === vencedor1Chave3 || vencedor2Chave3 === equipe2Chave3) {
        alert(`🏆 Parabéns, ${vencedor2Chave3}! Vocês são os campeões do torneio!`)
      } else {
        alert("❌ Nome inválido! Essa equipe não participou da final.")
      }
    }
  }

} else if (equipes === "4" || equipes === "4 equipes") {
  let equipe1Chave4 = prompt("Digite o nome da PRIMEIRA equipe:").toUpperCase()
  let equipe2Chave4 = prompt("Digite o nome da SEGUNDA equipe:").toUpperCase()
  let equipe3Chave4 = prompt("Digite o nome da TERCEIRA equipe:").toUpperCase()
  let equipe4Chave4 = prompt("Digite o nome da QUARTA equipe:").toUpperCase()

  let chave = Math.floor(Math.random() * 4) + 1

  alert("Sorteio realizado! Vamos ver o chaveamento...")

  if (chave === 1) {

    alert(" CHAVEAMENTO \n partida 1: " + equipe1Chave4 + " vs " + equipe2Chave4 + "\n partida 2: " + equipe3Chave4 + " vs " + equipe4Chave4)
    alert(`Partida 1: ${equipe1Chave4} vs ${equipe2Chave4}`)

    let vencedor1Chave4 = prompt("Digite o nome do vencedor da primeira partida:").toUpperCase()

    if (vencedor1Chave4 === equipe1Chave4 || vencedor1Chave4 === equipe2Chave4) {
      alert(`Partida 2: ${equipe3Chave4} vs ${equipe4Chave4}`)

      let vencedor2Chave4 = prompt("Digite o nome do vencedor da segunda partida:").toUpperCase()


      if (vencedor2Chave4 === equipe3Chave4 || vencedor2Chave4 === equipe4Chave4) {
        alert(`Grande final: ${vencedor1Chave4} vs ${vencedor2Chave4}`)

        let vencedorFinalChave4 = prompt("Digite o nome do vencedor da final:").toUpperCase()

        if (vencedorFinalChave4 == vencedor1Chave4 || vencedorFinalChave4 == vencedor2Chave4) {
          alert(`🏆 Parabéns, ${vencedorFinalChave4}! Vocês são os campeões do torneio!`)
        } else {
          alert("❌ Nome inválido! Essa equipe não participou da final.")
        }
      } else {
        alert("❌ Nome inválido! Essa equipe não participou da partida.")
      }
    } else {
      alert("❌ Nome inválido! Essa equipe não participou da partida.")
    }
  } else if (chave === 2) {
    alert(" CHAVEAMENTO \n partida 1: " + equipe1Chave4 + " vs " + equipe3Chave4 + "\n partida 2: " + equipe2Chave4 + " vs " + equipe4Chave4)
    alert(`Partida 1: ${equipe1Chave4} vs ${equipe3Chave4}`)

    let vencedor1Chave4 = prompt("Digite o nome do vencedor da primeira partida:").toUpperCase()

    if (vencedor1Chave4 === equipe1Chave4 || vencedor1Chave4 === equipe3Chave4) {
      alert(`Partida 2: ${equipe2Chave4} vs ${equipe4Chave4}`)

      let vencedor2Chave4 = prompt("Digite o nome do vencedor da segunda partida:").toUpperCase()

      if (vencedor2Chave4 === equipe2Chave4 || vencedor2Chave4 === equipe4Chave4) {
        alert(`Grande final: ${vencedor1Chave4} vs ${vencedor2Chave4}`)

        let vencedorFinalChave4 = prompt("Digite o nome do vencedor da final:").toUpperCase()

        if (vencedorFinalChave4 == vencedor1Chave4 || vencedorFinalChave4 == vencedor2Chave4) {
          alert(`🏆 Parabéns, ${vencedorFinalChave4}! Vocês são os campeões do torneio!`)
        } else {
          alert("❌ Nome inválido! Essa equipe não participou da final.")
        }
      } else {
        alert("❌ Nome inválido! Essa equipe não participou da partida.")
      }
    } else {
      alert("❌ Nome inválido! Essa equipe não participou da partida.")
    }
  } else if (chave === 3) {
    alert(" CHAVEAMENTO \n partida 1: " + equipe1Chave4 + " vs " + equipe4Chave4 + "\n partida 2: " + equipe2Chave4 + " vs " + equipe3Chave4)
    alert(`Partida 1: ${equipe1Chave4} vs ${equipe4Chave4}`)

    let vencedor1Chave4 = prompt("Digite o nome do vencedor da primeira partida:").toUpperCase()

    if (vencedor1Chave4 === equipe1Chave4 || vencedor1Chave4 === equipe4Chave4) {
      alert(`Partida 2: ${equipe2Chave4} vs ${equipe3Chave4}`)

      let vencedor2Chave4 = prompt("Digite o nome do vencedor da segunda partida:").toUpperCase()

      if (vencedor2Chave4 === equipe2Chave4 || vencedor2Chave4 === equipe3Chave4) {
        alert(`Grande final: ${vencedor1Chave4} vs ${vencedor2Chave4}`)

        let vencedorFinalChave4 = prompt("Digite o nome do vencedor da final:").toUpperCase()

        if (vencedorFinalChave4 == vencedor1Chave4 || vencedorFinalChave4 == vencedor2Chave4) {
          alert(`🏆 Parabéns, ${vencedorFinalChave4}! Vocês são os campeões do torneio!`)
        } else {
          alert("❌ Nome inválido! Essa equipe não participou da final.")
        }
      } else {
        alert("❌ Nome inválido! Essa equipe não participou da partida.")
      }
    } else {
      alert("❌ Nome inválido! Essa equipe não participou da partida.")
    }
  } else if (chave === 4) {
    alert(" CHAVEAMENTO \n partida 1: " + equipe3Chave4 + " vs " + equipe4Chave4 + "\n partida 2: " + equipe1Chave4 + " vs " + equipe2Chave4)
    alert(`Partida 1: ${equipe3Chave4} vs ${equipe4Chave4}`)

    let vencedor1Chave4 = prompt("Digite o nome do vencedor da primeira partida:").toUpperCase()

    if (vencedor1Chave4 === equipe3Chave4 || vencedor1Chave4 === equipe4Chave4) {
      alert(`Partida 2: ${equipe1Chave4} vs ${equipe2Chave4}`)

      let vencedor2Chave4 = prompt("Digite o nome do vencedor da segunda partida:").toUpperCase()

      if (vencedor2Chave4 === equipe1Chave4 || vencedor2Chave4 === equipe2Chave4) {
        alert(`Grande final: ${vencedor1Chave4} vs ${vencedor2Chave4}`)

        let vencedorFinalChave4 = prompt("Digite o nome do vencedor da final:").toUpperCase()

        if (vencedorFinalChave4 == vencedor1Chave4 || vencedorFinalChave4 == vencedor2Chave4) {
          alert(`🏆 Parabéns, ${vencedorFinalChave4}! Vocês são os campeões do torneio!`)

        } else {
          alert("❌ Nome inválido! Essa equipe não participou da final.")
        }
      } else {
        alert("❌ Nome inválido! Essa equipe não participou da partida.")
      }
    } else {
      alert("❌ Nome inválido! Essa equipe não participou da partida.")
    }
  }
} else if (equipes === "5" || equipes === "5 equipes") {
  let equipe1Chave5 = prompt("Digite o nome da PRIMEIRA equipe:").toUpperCase()
  let equipe2Chave5 = prompt("Digite o nome da SEGUNDA equipe:").toUpperCase()
  let equipe3Chave5 = prompt("Digite o nome da TERCEIRA equipe:").toUpperCase()
  let equipe4Chave5 = prompt("Digite o nome da QUARTA equipe:").toUpperCase()
  let equipe5Chave5 = prompt("Digite o nome da QUINTA equipe:").toUpperCase()

  let chave = Math.floor(Math.random() * 5) + 1

  alert("Sorteio realizado! Vamos ver o chaveamento...")

  if (chave === 1) {
    alert("chaveamento \n 1°Partida: " + equipe1Chave5 + " vs " + equipe2Chave5 + "\n 2°Partida: " + equipe3Chave5 + " vs " + equipe4Chave5 + "\n" + equipe5Chave5 + " Passou para proxima fase")
    alert(`Partida 1: ${equipe1Chave5} vs ${equipe2Chave5}`)

    let vencedor1Chave5 = prompt("Digite o nome do vencedor da primeira partida:").toUpperCase()

    if (vencedor1Chave5 != equipe1Chave5 && vencedor1Chave5 != equipe2Chave5) {
      alert("❌ Nome inválido! Essa equipe não participou da partida.")
    } else {
      alert(`Partida 2: ${equipe3Chave5} vs ${equipe4Chave5}`)

      let vencedor2Chave5 = prompt("Digite o nome do vencedor da segunda partida:").toUpperCase()

      if (vencedor2Chave5 === equipe3Chave5 || vencedor2Chave5 === equipe4Chave5) {
        alert(`Semi final: ${vencedor1Chave5} vs ${equipe5Chave5}`)

        let vencedorSemiChave5 = prompt("Digite o nome do vencedor da semi final:").toUpperCase()

        if (vencedorSemiChave5 === vencedor1Chave5 || vencedorSemiChave5 === equipe5Chave5) {
          alert(`Grande final: ${vencedorSemiChave5} vs ${vencedor2Chave5}`)

          let vencedorFinalChave5 = prompt("Digite o nome do vencedor da final:").toUpperCase()

          if (vencedorFinalChave5 != vencedorSemiChave5 && vencedorFinalChave5 != vencedor2Chave5) {
            alert("❌ Nome inválido! Essa equipe não participou da final.")
          } else {
            alert(`🏆 Parabéns, ${vencedorFinalChave5}! Vocês são os campeões do torneio!`)
          }
        } else if (vencedorSemiChave5 != vencedor1Chave5 && vencedorSemiChave5 != equipe5Chave5) {
          alert("❌ Nome inválido! Essa equipe não participou da Semifinal.")
        } else {
          alert("❌ Nome inválido! Essa equipe não participou da 1° partida.")
        }
      } else {
        alert("❌ Nome inválido! Essa equipe não participou da partida.")
      }
    }
  } else if (chave === 2) {
    alert("chaveamento \n 1°Partida: " + equipe1Chave5 + " vs " + equipe3Chave5 + "\n 2°Partida: " + equipe2Chave5 + " vs " + equipe5Chave5 + "\n" + equipe4Chave5 + " Passou para proxima fase")
    alert(`Partida 1: ${equipe1Chave5} vs ${equipe3Chave5}`)

    let vencedor1Chave5 = prompt("Digite o nome do vencedor da primeira partida:").toUpperCase()

    if (vencedor1Chave5 != equipe1Chave5 && vencedor1Chave5 != equipe3Chave5) {
      alert("❌ Nome inválido! Essa equipe não participou da partida.")
    } else {
      alert(`Partida 2: ${equipe2Chave5} vs ${equipe5Chave5}`)

      let vencedor2Chave5 = prompt("Digite o nome do vencedor da segunda partida:").toUpperCase()

      if (vencedor2Chave5 === equipe2Chave5 || vencedor2Chave5 === equipe5Chave5) {
        alert(`Semi final: ${vencedor1Chave5} vs ${equipe4Chave5}`)

        let vencedorSemiChave5 = prompt("Digite o nome do vencedor da semi final:").toUpperCase()

        if (vencedorSemiChave5 === vencedor1Chave5 || vencedorSemiChave5 === equipe4Chave5) {
          alert(`Grande final: ${vencedorSemiChave5} vs ${vencedor2Chave5}`)

          let vencedorFinalChave5 = prompt("Digite o nome do vencedor da final:").toUpperCase()

          if (vencedorFinalChave5 != vencedorSemiChave5 && vencedorFinalChave5 != vencedor2Chave5) {
            alert("❌ Nome inválido! Essa equipe não participou da final.")
          } else {
            alert(`🏆 Parabéns, ${vencedorFinalChave5}! Vocês são os campeões do torneio!`)
          }
        } else if (vencedorSemiChave5 != vencedor1Chave5 && vencedorSemiChave5 != equipe4Chave5) {
          alert("❌ Nome inválido! Essa equipe não participou da Semifinal.")
        } else {
          alert("❌ Nome inválido! Essa equipe não participou da 1° partida.")
        }
      } else {
        alert("❌ Nome inválido! Essa equipe não participou da partida.")
      }
    }
  } else if (chave === 3) {
    alert("chaveamento \n 1°Partida: " + equipe1Chave5 + " vs " + equipe4Chave5 + "\n 2°Partida: " + equipe2Chave5 + " vs " + equipe5Chave5 + "\n" + equipe3Chave5 + " Passou para proxima fase")
    alert(`Partida 1: ${equipe1Chave5} vs ${equipe4Chave5}`)

    let vencedor1Chave5 = prompt("Digite o nome do vencedor da primeira partida:").toUpperCase()

    if (vencedor1Chave5 != equipe1Chave5 && vencedor1Chave5 != equipe4Chave5) {
      alert("❌ Nome inválido! Essa equipe não participou da partida.")
    } else {
      alert(`Partida 2: ${equipe2Chave5} vs ${equipe5Chave5}`)

      let vencedor2Chave5 = prompt("Digite o nome do vencedor da segunda partida:").toUpperCase()

      if (vencedor2Chave5 === equipe2Chave5 || vencedor2Chave5 === equipe5Chave5) {
        alert(`Semi final: ${vencedor1Chave5} vs ${equipe3Chave5}`)

        let vencedorSemiChave5 = prompt("Digite o nome do vencedor da semi final:").toUpperCase()

        if (vencedorSemiChave5 === vencedor1Chave5 || vencedorSemiChave5 === equipe3Chave5) {
          alert(`Grande final: ${vencedorSemiChave5} vs ${vencedor2Chave5}`)

          let vencedorFinalChave5 = prompt("Digite o nome do vencedor da final:").toUpperCase()

          if (vencedorFinalChave5 != vencedorSemiChave5 && vencedorFinalChave5 != vencedor2Chave5) {
            alert("❌ Nome inválido! Essa equipe não participou da final.")
          } else {
            alert(`🏆 Parabéns, ${vencedorFinalChave5}! Vocês são os campeões do torneio!`)
          }
        } else if (vencedorSemiChave5 != vencedor1Chave5 && vencedorSemiChave5 != equipe3Chave5) {
          alert("❌ Nome inválido! Essa equipe não participou da Semifinal.")
        } else {
          alert("❌ Nome inválido! Essa equipe não participou da 1° partida.")
        }
      } else {
        alert("❌ Nome inválido! Essa equipe não participou da partida.")
      }
    }
  } else if (chave === 4) {
    alert("chaveamento \n 1°Partida: " + equipe1Chave5 + " vs " + equipe5Chave5 + "\n 2°Partida: " + equipe2Chave5 + " vs " + equipe3Chave5 + "\n" + equipe4Chave5 + " Passou para proxima fase")
    alert(`Partida 1: ${equipe1Chave5} vs ${equipe5Chave5}`)

    let vencedor1Chave5 = prompt("Digite o nome do vencedor da primeira partida:").toUpperCase()

    if (vencedor1Chave5 != equipe1Chave5 && vencedor1Chave5 != equipe5Chave5) {
      alert("❌ Nome inválido! Essa equipe não participou da partida.")
    } else {
      alert(`Partida 2: ${equipe2Chave5} vs ${equipe3Chave5}`)

      let vencedor2Chave5 = prompt("Digite o nome do vencedor da segunda partida:").toUpperCase()

      if (vencedor2Chave5 === equipe2Chave5 || vencedor2Chave5 === equipe3Chave5) {
        alert(`Semi final: ${vencedor1Chave5} vs ${equipe4Chave5}`)

        let vencedorSemiChave5 = prompt("Digite o nome do vencedor da semi final:").toUpperCase()

        if (vencedorSemiChave5 === vencedor1Chave5 || vencedorSemiChave5 === equipe4Chave5) {
          alert(`Grande final: ${vencedorSemiChave5} vs ${vencedor2Chave5}`)

          let vencedorFinalChave5 = prompt("Digite o nome do vencedor da final:").toUpperCase()

          if (vencedorFinalChave5 != vencedorSemiChave5 && vencedorFinalChave5 != vencedor2Chave5) {
            alert("❌ Nome inválido! Essa equipe não participou da final.")
          } else {
            alert(`🏆 Parabéns, ${vencedorFinalChave5}! Vocês são os campeões do torneio!`)
          }
        } else if (vencedorSemiChave5 != vencedor1Chave5 && vencedorSemiChave5 != equipe4Chave5) {
          alert("❌ Nome inválido! Essa equipe não participou da Semifinal.")
        } else {
          alert("❌ Nome inválido! Essa equipe não participou da 1° partida.")
        }
      } else {
        alert("❌ Nome inválido! Essa equipe não participou da partida.")
      }
    }
  } else if (chave === 5) {
    alert("chaveamento \n 1°Partida: " + equipe3Chave5 + " vs " + equipe5Chave5 + "\n 2°Partida: " + equipe2Chave5 + " vs " + equipe4Chave5 + "\n" + equipe1Chave5 + " Passou para proxima fase")
    alert(`Partida 1: ${equipe3Chave5} vs ${equipe5Chave5}`)

    let vencedor1Chave5 = prompt("Digite o nome do vencedor da primeira partida:").toUpperCase()

    if (vencedor1Chave5 != equipe3Chave5 && vencedor1Chave5 != equipe5Chave5) {
      alert("❌ Nome inválido! Essa equipe não participou da partida.")
    } else {
      alert(`Partida 2: ${equipe2Chave5} vs ${equipe4Chave5}`)

      let vencedor2Chave5 = prompt("Digite o nome do vencedor da segunda partida:").toUpperCase()

      if (vencedor2Chave5 === equipe2Chave5 || vencedor2Chave5 === equipe4Chave5) {
        alert(`Semi final: ${vencedor1Chave5} vs ${equipe1Chave5}`)

        let vencedorSemiChave5 = prompt("Digite o nome do vencedor da semi final:").toUpperCase()

        if (vencedorSemiChave5 === vencedor1Chave5 || vencedorSemiChave5 === equipe1Chave5) {
          alert(`Grande final: ${vencedorSemiChave5} vs ${vencedor2Chave5}`)

          let vencedorFinalChave5 = prompt("Digite o nome do vencedor da final:").toUpperCase()

          if (vencedorFinalChave5 != vencedorSemiChave5 && vencedorFinalChave5 != vencedor2Chave5) {
            alert("❌ Nome inválido! Essa equipe não participou da final.")
          } else {
            alert(`🏆 Parabéns, ${vencedorFinalChave5}! Vocês são os campeões do torneio!`)
          }
        } else if (vencedorSemiChave5 != vencedor1Chave5 && vencedorSemiChave5 != equipe1Chave5) {
          alert("❌ Nome inválido! Essa equipe não participou da Semifinal.")
        } else {
          alert("❌ Nome inválido! Essa equipe não participou da 1° partida.")
        }
      } else {
        alert("❌ Nome inválido! Essa equipe não participou da partida.")
      }
    }
  }
} else if (equipes === "6" || equipes === "6 equipes") {

  let equipe1Chave6 = prompt("Digite o nome da PRIMEIRA equipe:").toUpperCase()
  let equipe2Chave6 = prompt("Digite o nome da SEGUNDA equipe:").toUpperCase()
  let equipe3Chave6 = prompt("Digite o nome da TERCEIRA equipe:").toUpperCase()
  let equipe4Chave6 = prompt("Digite o nome da QUARTA equipe:").toUpperCase()
  let equipe5Chave6 = prompt("Digite o nome da QUINTA equipe:").toUpperCase()
  let equipe6Chave6 = prompt("Digite o nome da SEXTA equipe:").toUpperCase()

  let chave = Math.floor(Math.random() * 6) + 1

  alert("Sorteio realizado! Vamos ver o chaveamento...")

  if (chave === 1) {
    alert("chaveamento \n 1°Partida: " + equipe1Chave6 + " vs " + equipe2Chave6 + "\n 2°Partida: " + equipe3Chave6 + " vs " + equipe4Chave6 + "\n" + equipe5Chave6 + " Passou para proxima fase\n" + equipe6Chave6 + " Passou para proxima fase")

    alert(`Partida 1: ${equipe1Chave6} vs ${equipe2Chave6}`)

    let vencedor1Chave6 = prompt("Digite o nome do vencedor da primeira partida:").toUpperCase()

    if (vencedor1Chave6 != equipe1Chave6 && vencedor1Chave6 != equipe2Chave6) {
      alert("❌ Nome inválido! Essa equipe não participou da partida.")
    } else {
      alert(`Partida 2: ${equipe3Chave6} vs ${equipe4Chave6}`)

      let vencedor2Chave6 = prompt("Digite o nome do vencedor da segunda partida:").toUpperCase()

      if (vencedor2Chave6 === equipe3Chave6 || vencedor2Chave6 === equipe4Chave6) {
        alert(`Semi final 1: ${vencedor1Chave6} vs ${equipe5Chave6}`)

        let vencedorSemi1Chave6 = prompt("Digite o nome do vencedor da semi final 1:").toUpperCase()

        if (vencedorSemi1Chave6 === vencedor1Chave6 || vencedorSemi1Chave6 === equipe5Chave6) {
          alert(`Semi final 2: ${vencedor2Chave6} vs ${equipe6Chave6}`)

          let vencedorSemi2Chave6 = prompt("Digite o nome do vencedor da semi final 2:").toUpperCase()

          if (vencedorSemi2Chave6 === vencedor2Chave6 || vencedorSemi2Chave6 === equipe6Chave6) {
            alert(`Grande final: ${vencedorSemi1Chave6} vs ${vencedorSemi2Chave6}`)

            let vencedorFinalChave6 = prompt("Digite o nome do vencedor da final:").toUpperCase()

            if (vencedorFinalChave6 != vencedorSemi1Chave6 && vencedorFinalChave6 != vencedorSemi2Chave6) {
              alert("❌ Nome inválido! Essa equipe não participou da final.")
            } else {
              alert(`🏆 Parabéns, ${vencedorFinalChave6}! Vocês são os campeões do torneio!`)
            }
          } else {
            alert("❌ Nome inválido! Essa equipe não participou da Semi final 2.")
          }
        } else {
          alert("❌ Nome inválido! Essa equipe não participou da Semi final 1.")
        }
      } else {
        alert("❌ Nome inválido! Essa equipe não participou da partida.")
      }
    }
  } else if (chave === 2) {
    alert("chaveamento \n 1°Partida: " + equipe1Chave6 + " vs " + equipe6Chave6 + "\n 2°Partida: " + equipe3Chave6 + " vs " + equipe5Chave6 + "\n" + equipe4Chave6 + " Passou para proxima fase\n" + equipe2Chave6 + " Passou para proxima fase")

    alert(`Partida 1: ${equipe1Chave6} vs ${equipe6Chave6}`)

    let vencedor1Chave6 = prompt("Digite o nome do vencedor da primeira partida:").toUpperCase()

    if (vencedor1Chave6 != equipe1Chave6 && vencedor1Chave6 != equipe6Chave6) {
      alert("❌ Nome inválido! Essa equipe não participou da partida.")
    } else {
      alert(`Partida 2: ${equipe3Chave6} vs ${equipe5Chave6}`)

      let vencedor2Chave6 = prompt("Digite o nome do vencedor da segunda partida:").toUpperCase()

      if (vencedor2Chave6 === equipe3Chave6 || vencedor2Chave6 === equipe5Chave6) {
        alert(`Semi final 1: ${vencedor1Chave6} vs ${equipe4Chave6}`)

        let vencedorSemi1Chave6 = prompt("Digite o nome do vencedor da semi final 1:").toUpperCase()

        if (vencedorSemi1Chave6 === vencedor1Chave6 || vencedorSemi1Chave6 === equipe4Chave6) {
          alert(`Semi final 2: ${vencedor2Chave6} vs ${equipe2Chave6}`)

          let vencedorSemi2Chave6 = prompt("Digite o nome do vencedor da semi final 2:").toUpperCase()

          if (vencedorSemi2Chave6 === vencedor2Chave6 || vencedorSemi2Chave6 === equipe2Chave6) {
            alert(`Grande final: ${vencedorSemi1Chave6} vs ${vencedorSemi2Chave6}`)

            let vencedorFinalChave6 = prompt("Digite o nome do vencedor da final:").toUpperCase()

            if (vencedorFinalChave6 != vencedorSemi1Chave6 && vencedorFinalChave6 != vencedorSemi2Chave6) {
              alert("❌ Nome inválido! Essa equipe não participou da final.")
            } else {
              alert(`🏆 Parabéns, ${vencedorFinalChave6}! Vocês são os campeões do torneio!`)
            }
          } else {
            alert("❌ Nome inválido! Essa equipe não participou da Semi final 2.")
          }
        } else {
          alert("❌ Nome inválido! Essa equipe não participou da Semi final 1.")
        }
      } else {
        alert("❌ Nome inválido! Essa equipe não participou da partida.")
      }
    }
  } else if (chave === 3) {
    alert("chaveamento \n 1°Partida: " + equipe1Chave6 + " vs " + equipe3Chave6 + "\n 2°Partida: " + equipe2Chave6 + " vs " + equipe4Chave6 + "\n" + equipe5Chave6 + " Passou para proxima fase\n" + equipe6Chave6 + " Passou para proxima fase")

    alert(`Partida 1: ${equipe1Chave6} vs ${equipe3Chave6}`)

    let vencedor1Chave6 = prompt("Digite o nome do vencedor da primeira partida:").toUpperCase()

    if (vencedor1Chave6 != equipe1Chave6 && vencedor1Chave6 != equipe3Chave6) {
      alert("❌ Nome inválido! Essa equipe não participou da partida.")
    } else {
      alert(`Partida 2: ${equipe2Chave6} vs ${equipe4Chave6}`)

      let vencedor2Chave6 = prompt("Digite o nome do vencedor da segunda partida:").toUpperCase()

      if (vencedor2Chave6 === equipe2Chave6 || vencedor2Chave6 === equipe4Chave6) {
        alert(`Semi final 1: ${vencedor1Chave6} vs ${equipe5Chave6}`)

        let vencedorSemi1Chave6 = prompt("Digite o nome do vencedor da semi final 1:").toUpperCase()

        if (vencedorSemi1Chave6 === vencedor1Chave6 || vencedorSemi1Chave6 === equipe5Chave6) {
          alert(`Semi final 2: ${vencedor2Chave6} vs ${equipe6Chave6}`)

          let vencedorSemi2Chave6 = prompt("Digite o nome do vencedor da semi final 2:").toUpperCase()

          if (vencedorSemi2Chave6 === vencedor2Chave6 || vencedorSemi2Chave6 === equipe6Chave6) {
            alert(`Grande final: ${vencedorSemi1Chave6} vs ${vencedorSemi2Chave6}`)

            let vencedorFinalChave6 = prompt("Digite o nome do vencedor da final:").toUpperCase()

            if (vencedorFinalChave6 != vencedorSemi1Chave6 && vencedorFinalChave6 != vencedorSemi2Chave6) {
              alert("❌ Nome inválido! Essa equipe não participou da final.")
            } else {
              alert(`🏆 Parabéns, ${vencedorFinalChave6}! Vocês são os campeões do torneio!`)
            }
          } else {
            alert("❌ Nome inválido! Essa equipe não participou da Semi final 2.")
          }
        } else {
          alert("❌ Nome inválido! Essa equipe não participou da Semi final 1.")
        }
      } else {
        alert("❌ Nome inválido! Essa equipe não participou da partida.")
      }
    }
  } else if (chave === 4) {
    alert("chaveamento \n 1°Partida: " + equipe1Chave6 + " vs " + equipe4Chave6 + "\n 2°Partida: " + equipe2Chave6 + " vs " + equipe5Chave6 + "\n" + equipe3Chave6 + " Passou para proxima fase\n" + equipe6Chave6 + " Passou para proxima fase")

    alert(`Partida 1: ${equipe1Chave6} vs ${equipe4Chave6}`)

    let vencedor1Chave6 = prompt("Digite o nome do vencedor da primeira partida:").toUpperCase()

    if (vencedor1Chave6 != equipe1Chave6 && vencedor1Chave6 != equipe4Chave6) {
      alert("❌ Nome inválido! Essa equipe não participou da partida.")
    } else {
      alert(`Partida 2: ${equipe2Chave6} vs ${equipe5Chave6}`)

      let vencedor2Chave6 = prompt("Digite o nome do vencedor da segunda partida:").toUpperCase()

      if (vencedor2Chave6 === equipe2Chave6 || vencedor2Chave6 === equipe5Chave6) {
        alert(`Semi final 1: ${vencedor1Chave6} vs ${equipe3Chave6}`)

        let vencedorSemi1Chave6 = prompt("Digite o nome do vencedor da semi final 1:").toUpperCase()

        if (vencedorSemi1Chave6 === vencedor1Chave6 || vencedorSemi1Chave6 === equipe3Chave6) {
          alert(`Semi final 2: ${vencedor2Chave6} vs ${equipe6Chave6}`)

          let vencedorSemi2Chave6 = prompt("Digite o nome do vencedor da semi final 2:").toUpperCase()

          if (vencedorSemi2Chave6 === vencedor2Chave6 || vencedorSemi2Chave6 === equipe6Chave6) {
            alert(`Grande final: ${vencedorSemi1Chave6} vs ${vencedorSemi2Chave6}`)

            let vencedorFinalChave6 = prompt("Digite o nome do vencedor da final:").toUpperCase()

            if (vencedorFinalChave6 != vencedorSemi1Chave6 && vencedorFinalChave6 != vencedorSemi2Chave6) {
              alert("❌ Nome inválido! Essa equipe não participou da final.")
            } else {
              alert(`🏆 Parabéns, ${vencedorFinalChave6}! Vocês são os campeões do torneio!`)
            }
          } else {
            alert("❌ Nome inválido! Essa equipe não participou da Semi final 2.")
          }
        } else {
          alert("❌ Nome inválido! Essa equipe não participou da Semi final 1.")
        }
      } else {
        alert("❌ Nome inválido! Essa equipe não participou da partida.")
      }
    }
  } else if (chave === 5) {
    alert("chaveamento \n 1°Partida: " + equipe1Chave6 + " vs " + equipe5Chave6 + "\n 2°Partida: " + equipe2Chave6 + " vs " + equipe6Chave6 + "\n" + equipe3Chave6 + " Passou para proxima fase\n" + equipe4Chave6 + " Passou para proxima fase")

    alert(`Partida 1: ${equipe1Chave6} vs ${equipe5Chave6}`)

    let vencedor1Chave6 = prompt("Digite o nome do vencedor da primeira partida:").toUpperCase()

    if (vencedor1Chave6 != equipe1Chave6 && vencedor1Chave6 != equipe5Chave6) {
      alert("❌ Nome inválido! Essa equipe não participou da partida.")
    } else {
      alert(`Partida 2: ${equipe2Chave6} vs ${equipe6Chave6}`)

      let vencedor2Chave6 = prompt("Digite o nome do vencedor da segunda partida:").toUpperCase()

      if (vencedor2Chave6 === equipe2Chave6 || vencedor2Chave6 === equipe6Chave6) {
        alert(`Semi final 1: ${vencedor1Chave6} vs ${equipe3Chave6}`)

        let vencedorSemi1Chave6 = prompt("Digite o nome do vencedor da semi final 1:").toUpperCase()

        if (vencedorSemi1Chave6 === vencedor1Chave6 || vencedorSemi1Chave6 === equipe3Chave6) {
          alert(`Semi final 2: ${vencedor2Chave6} vs ${equipe4Chave6}`)

          let vencedorSemi2Chave6 = prompt("Digite o nome do vencedor da semi final 2:").toUpperCase()

          if (vencedorSemi2Chave6 === vencedor2Chave6 || vencedorSemi2Chave6 === equipe4Chave6) {
            alert(`Grande final: ${vencedorSemi1Chave6} vs ${vencedorSemi2Chave6}`)

            let vencedorFinalChave6 = prompt("Digite o nome do vencedor da final:").toUpperCase()

            if (vencedorFinalChave6 != vencedorSemi1Chave6 && vencedorFinalChave6 != vencedorSemi2Chave6) {
              alert("❌ Nome inválido! Essa equipe não participou da final.")
            } else {
              alert(`🏆 Parabéns, ${vencedorFinalChave6}! Vocês são os campeões do torneio!`)
            }
          } else {
            alert("❌ Nome inválido! Essa equipe não participou da Semi final 2.")
          }
        } else {
          alert("❌ Nome inválido! Essa equipe não participou da Semi final 1.")
        }
      } else {
        alert("❌ Nome inválido! Essa equipe não participou da partida.")
      }
    }
  } else if (chave === 6) {
    alert("chaveamento \n 1°Partida: " + equipe1Chave6 + " vs " + equipe2Chave6 + "\n 2°Partida: " + equipe3Chave6 + " vs " + equipe6Chave6 + "\n" + equipe4Chave6 + " Passou para proxima fase\n" + equipe5Chave6 + " Passou para proxima fase")

    alert(`Partida 1: ${equipe1Chave6} vs ${equipe2Chave6}`)

    let vencedor1Chave6 = prompt("Digite o nome do vencedor da primeira partida:").toUpperCase()

    if (vencedor1Chave6 != equipe1Chave6 && vencedor1Chave6 != equipe2Chave6) {
      alert("❌ Nome inválido! Essa equipe não participou da partida.")
    } else {
      alert(`Partida 2: ${equipe3Chave6} vs ${equipe6Chave6}`)

      let vencedor2Chave6 = prompt("Digite o nome do vencedor da segunda partida:").toUpperCase()

      if (vencedor2Chave6 === equipe3Chave6 || vencedor2Chave6 === equipe6Chave6) {
        alert(`Semi final 1: ${vencedor1Chave6} vs ${equipe4Chave6}`)

        let vencedorSemi1Chave6 = prompt("Digite o nome do vencedor da semi final 1:").toUpperCase()

        if (vencedorSemi1Chave6 === vencedor1Chave6 || vencedorSemi1Chave6 === equipe4Chave6) {
          alert(`Semi final 2: ${vencedor2Chave6} vs ${equipe5Chave6}`)

          let vencedorSemi2Chave6 = prompt("Digite o nome do vencedor da semi final 2:").toUpperCase()

          if (vencedorSemi2Chave6 === vencedor2Chave6 || vencedorSemi2Chave6 === equipe5Chave6) {
            alert(`Grande final: ${vencedorSemi1Chave6} vs ${vencedorSemi2Chave6}`)

            let vencedorFinalChave6 = prompt("Digite o nome do vencedor da final:").toUpperCase()

            if (vencedorFinalChave6 != vencedorSemi1Chave6 && vencedorFinalChave6 != vencedorSemi2Chave6) {
              alert("❌ Nome inválido! Essa equipe não participou da final.")
            } else {
              alert(`🏆 Parabéns, ${vencedorFinalChave6}! Vocês são os campeões do torneio!`)
            }
          } else {
            alert("❌ Nome inválido! Essa equipe não participou da Semi final 2.")
          }
        } else {
          alert("❌ Nome inválido! Essa equipe não participou da Semi final 1.")
        }
      } else {
        alert("❌ Nome inválido! Essa equipe não participou da partida.")
      }
    }
  }
} else if (equipes === "7" || equipes === "7 equipes") {

  let equipe1Chave7 = prompt("Digite o nome da PRIMEIRA equipe:").toUpperCase()
  let equipe2Chave7 = prompt("Digite o nome da SEGUNDA equipe:").toUpperCase()
  let equipe3Chave7 = prompt("Digite o nome da TERCEIRA equipe:").toUpperCase()
  let equipe4Chave7 = prompt("Digite o nome da QUARTA equipe:").toUpperCase()
  let equipe5Chave7 = prompt("Digite o nome da QUINTA equipe:").toUpperCase()
  let equipe6Chave7 = prompt("Digite o nome da SEXTA equipe:").toUpperCase()
  let equipe7Chave7 = prompt("Digite o nome da SÉTIMA equipe:").toUpperCase()

  let chave = Math.floor(Math.random() * 7) + 1

  alert("Sorteio realizado! Vamos ver o chaveamento...")

  if (chave === 1) {
    alert("chaveamento \n 1°Partida: " + equipe1Chave7 + " vs " + equipe2Chave7 + "\n 2°Partida: " + equipe3Chave7 + " vs " + equipe4Chave7 + "\n 3°Partida: " + equipe5Chave7 + " vs " + equipe6Chave7 + "\n" + equipe7Chave7 + " Passou para proxima fase")

    alert(`Partida 1: ${equipe1Chave7} vs ${equipe2Chave7}`)

    let vencedor1Chave7 = prompt("Digite o nome do vencedor da primeira partida:").toUpperCase()

    if (vencedor1Chave7 != equipe1Chave7 && vencedor1Chave7 != equipe2Chave7) {
      alert("❌ Nome inválido! Essa equipe não participou da partida.")
    } else {
      alert(`Partida 2: ${equipe3Chave7} vs ${equipe4Chave7}`)

      let vencedor2Chave7 = prompt("Digite o nome do vencedor da segunda partida:").toUpperCase()

      if (vencedor2Chave7 === equipe3Chave7 || vencedor2Chave7 === equipe4Chave7) {
        alert(`Partida 3: ${equipe5Chave7} vs ${equipe6Chave7}`)

        let vencedor3Chave7 = prompt("Digite o nome do vencedor da terceira partida:").toUpperCase()

        if (vencedor3Chave7 === equipe5Chave7 || vencedor3Chave7 === equipe6Chave7) {
          alert(`Semi final 1: ${vencedor1Chave7} vs ${vencedor2Chave7}`)

          let vencedorSemi1Chave7 = prompt("Digite o nome do vencedor da semi final 1:").toUpperCase()

          if (vencedorSemi1Chave7 === vencedor1Chave7 || vencedorSemi1Chave7 === vencedor2Chave7) {
            alert(`Semi final 2: ${vencedor3Chave7} vs ${equipe7Chave7}`)

            let vencedorSemi2Chave7 = prompt("Digite o nome do vencedor da semi final 2:").toUpperCase()

            if (vencedorSemi2Chave7 === vencedor3Chave7 || vencedorSemi2Chave7 === equipe7Chave7) {
              alert(`Grande final: ${vencedorSemi1Chave7} vs ${vencedorSemi2Chave7}`)

              let vencedorFinalChave7 = prompt("Digite o nome do vencedor da final:").toUpperCase()

              if (vencedorFinalChave7 != vencedorSemi1Chave7 && vencedorFinalChave7 != vencedorSemi2Chave7) {
                alert("❌ Nome inválido! Essa equipe não participou da final.")
              } else {
                alert(`🏆 Parabéns, ${vencedorFinalChave7}! Vocês são os campeões do torneio!`)
              }
            } else {
              alert("❌ Nome inválido! Essa equipe não participou da Semi final 2.")
            }
          } else {
            alert("❌ Nome inválido! Essa equipe não participou da Semi final 1.")
          }
        } else {
          alert("❌ Nome inválido! Essa equipe não participou da partida.")
        }
      } else {
        alert("❌ Nome inválido! Essa equipe não participou da partida.")
      }
    }
  } else if (chave === 2) {
    alert("chaveamento \n 1°Partida: " + equipe1Chave7 + " vs " + equipe7Chave7 + "\n 2°Partida: " + equipe3Chave7 + " vs " + equipe5Chave7 + "\n 3°Partida: " + equipe2Chave7 + " vs " + equipe4Chave7 + "\n" + equipe6Chave7 + " Passou para proxima fase")

    alert(`Partida 1: ${equipe1Chave7} vs ${equipe7Chave7}`)

    let vencedor1Chave7 = prompt("Digite o nome do vencedor da primeira partida:").toUpperCase()

    if (vencedor1Chave7 != equipe1Chave7 && vencedor1Chave7 != equipe7Chave7) {
      alert("❌ Nome inválido! Essa equipe não participou da partida.")
    } else {
      alert(`Partida 2: ${equipe3Chave7} vs ${equipe5Chave7}`)

      let vencedor2Chave7 = prompt("Digite o nome do vencedor da segunda partida:").toUpperCase()

      if (vencedor2Chave7 === equipe3Chave7 || vencedor2Chave7 === equipe5Chave7) {
        alert(`Partida 3: ${equipe2Chave7} vs ${equipe4Chave7}`)

        let vencedor3Chave7 = prompt("Digite o nome do vencedor da terceira partida:").toUpperCase()

        if (vencedor3Chave7 === equipe2Chave7 || vencedor3Chave7 === equipe4Chave7) {
          alert(`Semi final 1: ${vencedor1Chave7} vs ${vencedor2Chave7}`)

          let vencedorSemi1Chave7 = prompt("Digite o nome do vencedor da semi final 1:").toUpperCase()

          if (vencedorSemi1Chave7 === vencedor1Chave7 || vencedorSemi1Chave7 === vencedor2Chave7) {
            alert(`Semi final 2: ${vencedor3Chave7} vs ${equipe6Chave7}`)

            let vencedorSemi2Chave7 = prompt("Digite o nome do vencedor da semi final 2:").toUpperCase()

            if (vencedorSemi2Chave7 === vencedor3Chave7 || vencedorSemi2Chave7 === equipe6Chave7) {
              alert(`Grande final: ${vencedorSemi1Chave7} vs ${vencedorSemi2Chave7}`)

              let vencedorFinalChave7 = prompt("Digite o nome do vencedor da final:").toUpperCase()

              if (vencedorFinalChave7 != vencedorSemi1Chave7 && vencedorFinalChave7 != vencedorSemi2Chave7) {
                alert("❌ Nome inválido! Essa equipe não participou da final.")
              } else {
                alert(`🏆 Parabéns, ${vencedorFinalChave7}! Vocês são os campeões do torneio!`)
              }
            } else {
              alert("❌ Nome inválido! Essa equipe não participou da Semi final 2.")
            }
          } else {
            alert("❌ Nome inválido! Essa equipe não participou da Semi final 1.")
          }
        } else {
          alert("❌ Nome inválido! Essa equipe não participou da partida.")
        }
      } else {
        alert("❌ Nome inválido! Essa equipe não participou da partida.")
      }
    }
  } else if (chave === 3) {
    alert("chaveamento \n 1°Partida: " + equipe1Chave7 + " vs " + equipe3Chave7 + "\n 2°Partida: " + equipe2Chave7 + " vs " + equipe6Chave7 + "\n 3°Partida: " + equipe4Chave7 + " vs " + equipe5Chave7 + "\n" + equipe7Chave7 + " Passou para proxima fase")

    alert(`Partida 1: ${equipe1Chave7} vs ${equipe3Chave7}`)

    let vencedor1Chave7 = prompt("Digite o nome do vencedor da primeira partida:").toUpperCase()

    if (vencedor1Chave7 != equipe1Chave7 && vencedor1Chave7 != equipe3Chave7) {
      alert("❌ Nome inválido! Essa equipe não participou da partida.")
    } else {
      alert(`Partida 2: ${equipe2Chave7} vs ${equipe6Chave7}`)

      let vencedor2Chave7 = prompt("Digite o nome do vencedor da segunda partida:").toUpperCase()

      if (vencedor2Chave7 === equipe2Chave7 || vencedor2Chave7 === equipe6Chave7) {
        alert(`Partida 3: ${equipe4Chave7} vs ${equipe5Chave7}`)

        let vencedor3Chave7 = prompt("Digite o nome do vencedor da terceira partida:").toUpperCase()

        if (vencedor3Chave7 === equipe4Chave7 || vencedor3Chave7 === equipe5Chave7) {
          alert(`Semi final 1: ${vencedor1Chave7} vs ${vencedor2Chave7}`)

          let vencedorSemi1Chave7 = prompt("Digite o nome do vencedor da semi final 1:").toUpperCase()

          if (vencedorSemi1Chave7 === vencedor1Chave7 || vencedorSemi1Chave7 === vencedor2Chave7) {
            alert(`Semi final 2: ${vencedor3Chave7} vs ${equipe7Chave7}`)

            let vencedorSemi2Chave7 = prompt("Digite o nome do vencedor da semi final 2:").toUpperCase()

            if (vencedorSemi2Chave7 === vencedor3Chave7 || vencedorSemi2Chave7 === equipe7Chave7) {
              alert(`Grande final: ${vencedorSemi1Chave7} vs ${vencedorSemi2Chave7}`)

              let vencedorFinalChave7 = prompt("Digite o nome do vencedor da final:").toUpperCase()

              if (vencedorFinalChave7 != vencedorSemi1Chave7 && vencedorFinalChave7 != vencedorSemi2Chave7) {
                alert("❌ Nome inválido! Essa equipe não participou da final.")
              } else {
                alert(`🏆 Parabéns, ${vencedorFinalChave7}! Vocês são os campeões do torneio!`)
              }
            } else {
              alert("❌ Nome inválido! Essa equipe não participou da semi final 2.")
            }
          } else {
            alert("❌ Nome inválido! Essa equipe não participou da semi final 1.")
          }
        } else {
          alert("❌ Nome inválido! Essa equipe não participou da partida.")
        }
      } else {
        alert("❌ Nome inválido! Essa equipe não participou da partida.")
      }
    }
  } else if (chave === 4) {
    alert("chaveamento \n 1°Partida: " + equipe1Chave7 + " vs " + equipe2Chave7 + "\n 2°Partida: " + equipe3Chave7 + " vs " + equipe4Chave7 + "\n 3°Partida: " + equipe5Chave7 + " vs " + equipe6Chave7 + "\n" + equipe7Chave7 + " Passou para proxima fase")

    alert(`Partida 1: ${equipe1Chave7} vs ${equipe2Chave7}`)

    let vencedor1Chave7 = prompt("Digite o nome do vencedor da primeira partida:").toUpperCase()

    if (vencedor1Chave7 != equipe1Chave7 && vencedor1Chave7 != equipe2Chave7) {
      alert("❌ Nome inválido! Essa equipe não participou da partida.")
    } else {
      alert(`Partida 2: ${equipe3Chave7} vs ${equipe4Chave7}`)

      let vencedor2Chave7 = prompt("Digite o nome do vencedor da segunda partida:").toUpperCase()

      if (vencedor2Chave7 === equipe3Chave7 || vencedor2Chave7 === equipe4Chave7) {
        alert(`Partida 3: ${equipe5Chave7} vs ${equipe6Chave7}`)

        let vencedor3Chave7 = prompt("Digite o nome do vencedor da terceira partida:").toUpperCase()

        if (vencedor3Chave7 === equipe5Chave7 || vencedor3Chave7 === equipe6Chave7) {
          alert(`Semi final 1: ${vencedor1Chave7} vs ${vencedor2Chave7}`)

          let vencedorSemi1Chave7 = prompt("Digite o nome do vencedor da semi final 1:").toUpperCase()

          if (vencedorSemi1Chave7 === vencedor1Chave7 || vencedorSemi1Chave7 === vencedor2Chave7) {
            alert(`Semi final 2: ${vencedor3Chave7} vs ${equipe7Chave7}`)

            let vencedorSemi2Chave7 = prompt("Digite o nome do vencedor da semi final 2:").toUpperCase()

            if (vencedorSemi2Chave7 === vencedor3Chave7 || vencedorSemi2Chave7 === equipe7Chave7) {
              alert(`Grande final: ${vencedorSemi1Chave7} vs ${vencedorSemi2Chave7}`)

              let vencedorFinalChave7 = prompt("Digite o nome do vencedor da final:").toUpperCase()

              if (vencedorFinalChave7 != vencedorSemi1Chave7 && vencedorFinalChave7 != vencedorSemi2Chave7) {
                alert("❌ Nome inválido! Essa equipe não participou da final.")
              } else {
                alert(`🏆 Parabéns, ${vencedorFinalChave7}! Vocês são os campeões do torneio!`)
              }
            } else {
              alert("❌ Nome inválido! Essa equipe não participou da Semi final 2.")
            }
          } else {
            alert("❌ Nome inválido! Essa equipe não participou da Semi final 1.")
          }
        } else {
          alert("❌ Nome inválido! Essa equipe não participou da partida.")
        }
      } else {
        alert("❌ Nome inválido! Essa equipe não participou da partida.")
      }
    }
  } else if (chave === 5) {
    alert("chaveamento \n 1°Partida: " + equipe1Chave7 + " vs " + equipe7Chave7 + "\n 2°Partida: " + equipe3Chave7 + " vs " + equipe5Chave7 + "\n 3°Partida: " + equipe2Chave7 + " vs " + equipe4Chave7 + "\n" + equipe6Chave7 + " Passou para proxima fase")

    alert(`Partida 1: ${equipe1Chave7} vs ${equipe7Chave7}`)

    let vencedor1Chave7 = prompt("Digite o nome do vencedor da primeira partida:").toUpperCase()

    if (vencedor1Chave7 != equipe1Chave7 && vencedor1Chave7 != equipe7Chave7) {
      alert("❌ Nome inválido! Essa equipe não participou da partida.")
    } else {
      alert(`Partida 2: ${equipe3Chave7} vs ${equipe5Chave7}`)

      let vencedor2Chave7 = prompt("Digite o nome do vencedor da segunda partida:").toUpperCase()

      if (vencedor2Chave7 === equipe3Chave7 || vencedor2Chave7 === equipe5Chave7) {
        alert(`Partida 3: ${equipe2Chave7} vs ${equipe4Chave7}`)

        let vencedor3Chave7 = prompt("Digite o nome do vencedor da terceira partida:").toUpperCase()

        if (vencedor3Chave7 === equipe2Chave7 || vencedor3Chave7 === equipe4Chave7) {
          alert(`Semi final 1: ${vencedor1Chave7} vs ${vencedor2Chave7}`)

          let vencedorSemi1Chave7 = prompt("Digite o nome do vencedor da semi final 1:").toUpperCase()

          if (vencedorSemi1Chave7 === vencedor1Chave7 || vencedorSemi1Chave7 === vencedor2Chave7) {
            alert(`Semi final 2: ${vencedor3Chave7} vs ${equipe6Chave7}`)

            let vencedorSemi2Chave7 = prompt("Digite o nome do vencedor da semi final 2:").toUpperCase()

            if (vencedorSemi2Chave7 === vencedor3Chave7 || vencedorSemi2Chave7 === equipe6Chave7) {
              alert(`Grande final: ${vencedorSemi1Chave7} vs ${vencedorSemi2Chave7}`)

              let vencedorFinalChave7 = prompt("Digite o nome do vencedor da final:").toUpperCase()

              if (vencedorFinalChave7 != vencedorSemi1Chave7 && vencedorFinalChave7 != vencedorSemi2Chave7) {
                alert("❌ Nome inválido! Essa equipe não participou da final.")
              } else {
                alert(`🏆 Parabéns, ${vencedorFinalChave7}! Vocês são os campeões do torneio!`)
              }
            } else {
              alert("❌ Nome inválido! Essa equipe não participou da Semi final 2.")
            }
          } else {
            alert("❌ Nome inválido! Essa equipe não participou da Semi final 1.")
          }
        } else {
          alert("❌ Nome inválido! Essa equipe não participou da partida.")
        }
      } else {
        alert("❌ Nome inválido! Essa equipe não participou da partida.")
      }
    }
  } else if (chave === 6) {
    alert("chaveamento \n 1°Partida: " + equipe1Chave7 + " vs " + equipe3Chave7 + "\n 2°Partida: " + equipe2Chave7 + " vs " + equipe6Chave7 + "\n 3°Partida: " + equipe4Chave7 + " vs " + equipe5Chave7 + "\n" + equipe7Chave7 + " Passou para proxima fase")

    alert(`Partida 1: ${equipe1Chave7} vs ${equipe3Chave7}`)

    let vencedor1Chave7 = prompt("Digite o nome do vencedor da primeira partida:").toUpperCase()

    if (vencedor1Chave7 != equipe1Chave7 && vencedor1Chave7 != equipe3Chave7) {
      alert("❌ Nome inválido! Essa equipe não participou da partida.")
    } else {
      alert(`Partida 2: ${equipe2Chave7} vs ${equipe6Chave7}`)

      let vencedor2Chave7 = prompt("Digite o nome do vencedor da segunda partida:").toUpperCase()

      if (vencedor2Chave7 === equipe2Chave7 || vencedor2Chave7 === equipe6Chave7) {
        alert(`Partida 3: ${equipe4Chave7} vs ${equipe5Chave7}`)

        let vencedor3Chave7 = prompt("Digite o nome do vencedor da terceira partida:").toUpperCase()

        if (vencedor3Chave7 === equipe4Chave7 || vencedor3Chave7 === equipe5Chave7) {
          alert(`Semi final 1: ${vencedor1Chave7} vs ${vencedor2Chave7}`)

          let vencedorSemi1Chave7 = prompt("Digite o nome do vencedor da semi final 1:").toUpperCase()

          if (vencedorSemi1Chave7 === vencedor1Chave7 || vencedorSemi1Chave7 === vencedor2Chave7) {
            alert(`Semi final 2: ${vencedor3Chave7} vs ${equipe7Chave7}`)

            let vencedorSemi2Chave7 = prompt("Digite o nome do vencedor da semi final 2:").toUpperCase()

            if (vencedorSemi2Chave7 === vencedor3Chave7 || vencedorSemi2Chave7 === equipe7Chave7) {
              alert(`Grande final: ${vencedorSemi1Chave7} vs ${vencedorSemi2Chave7}`)

              let vencedorFinalChave7 = prompt("Digite o nome do vencedor da final:").toUpperCase()

              if (vencedorFinalChave7 != vencedorSemi1Chave7 && vencedorFinalChave7 != vencedorSemi2Chave7) {
                alert("❌ Nome inválido! Essa equipe não participou da final.")
              } else {
                alert(`🏆 Parabéns, ${vencedorFinalChave7}! Vocês são os campeões do torneio!`)
              }
            } else {
              alert("❌ Nome inválido! Essa equipe não participou da semi final 2.")
            }
          } else {
            alert("❌ Nome inválido! Essa equipe não participou da semi final 1.")
          }
        } else {
          alert("❌ Nome inválido! Essa equipe não participou da partida.")
        }
      } else {
        alert("❌ Nome inválido! Essa equipe não participou da partida.")
      }
    }
  } else if (chave === 7) {
    alert("chaveamento \n 1°Partida: " + equipe1Chave7 + " vs " + equipe3Chave7 + "\n 2°Partida: " + equipe2Chave7 + " vs " + equipe6Chave7 + "\n 3°Partida: " + equipe4Chave7 + " vs " + equipe5Chave7 + "\n" + equipe7Chave7 + " Passou para proxima fase")

    alert(`Partida 1: ${equipe1Chave7} vs ${equipe3Chave7}`)

    let vencedor1Chave7 = prompt("Digite o nome do vencedor da primeira partida:").toUpperCase()

    if (vencedor1Chave7 != equipe1Chave7 && vencedor1Chave7 != equipe3Chave7) {
      alert("❌ Nome inválido! Essa equipe não participou da partida.")
    } else {
      alert(`Partida 2: ${equipe2Chave7} vs ${equipe6Chave7}`)

      let vencedor2Chave7 = prompt("Digite o nome do vencedor da segunda partida:").toUpperCase()

      if (vencedor2Chave7 === equipe2Chave7 || vencedor2Chave7 === equipe6Chave7) {
        alert(`Partida 3: ${equipe4Chave7} vs ${equipe5Chave7}`)

        let vencedor3Chave7 = prompt("Digite o nome do vencedor da terceira partida:").toUpperCase()

        if (vencedor3Chave7 === equipe4Chave7 || vencedor3Chave7 === equipe5Chave7) {
          alert(`Semi final 1: ${vencedor1Chave7} vs ${vencedor2Chave7}`)

          let vencedorSemi1Chave7 = prompt("Digite o nome do vencedor da semi final 1:").toUpperCase()

          if (vencedorSemi1Chave7 === vencedor1Chave7 || vencedorSemi1Chave7 === vencedor2Chave7) {
            alert(`Semi final 2: ${vencedor3Chave7} vs ${equipe7Chave7}`)

            let vencedorSemi2Chave7 = prompt("Digite o nome do vencedor da semi final 2:").toUpperCase()

            if (vencedorSemi2Chave7 === vencedor3Chave7 || vencedorSemi2Chave7 === equipe7Chave7) {
              alert(`Grande final: ${vencedorSemi1Chave7} vs ${vencedorSemi2Chave7}`)

              let vencedorFinalChave7 = prompt("Digite o nome do vencedor da final:").toUpperCase()

              if (vencedorFinalChave7 != vencedorSemi1Chave7 && vencedorFinalChave7 != vencedorSemi2Chave7) {
                alert("❌ Nome inválido! Essa equipe não participou da final.")
              } else {
                alert(`🏆 Parabéns, ${vencedorFinalChave7}! Vocês são os campeões do torneio!`)
              }
            } else {
              alert("❌ Nome inválido! Essa equipe não participou da semi final 2.")
            }
          } else {
            alert("❌ Nome inválido! Essa equipe não participou da semi final 1.")
          }
        } else {
          alert("❌ Nome inválido! Essa equipe não participou da partida.")
        }
      } else {
        alert("❌ Nome inválido! Essa equipe não participou da partida.")
      }
    }
  }
} else if (equipes === "8" || equipes === "8 equipes") {

  let equipe1Chave8 = prompt("Digite o nome da PRIMEIRA equipe:").toUpperCase()
  let equipe2Chave8 = prompt("Digite o nome da SEGUNDA equipe:").toUpperCase()
  let equipe3Chave8 = prompt("Digite o nome da TERCEIRA equipe:").toUpperCase()
  let equipe4Chave8 = prompt("Digite o nome da QUARTA equipe:").toUpperCase()
  let equipe5Chave8 = prompt("Digite o nome da QUINTA equipe:").toUpperCase()
  let equipe6Chave8 = prompt("Digite o nome da SEXTA equipe:").toUpperCase()
  let equipe7Chave8 = prompt("Digite o nome da SÉTIMA equipe:").toUpperCase()
  let equipe8Chave8 = prompt("Digite o nome da OITAVA equipe:").toUpperCase()

  let chave = Math.floor(Math.random() * 8) + 1

  alert("Sorteio realizado! Vamos ver o chaveamento...")

  if (chave === 1) {
    alert("chaveamento \n 1°Partida: " + equipe1Chave8 + " vs " + equipe2Chave8 + "\n 2°Partida: " + equipe3Chave8 + " vs " + equipe4Chave8 + "\n 3°Partida: " + equipe5Chave8 + " vs " + equipe6Chave8 + "\n 4°Partida: " + equipe7Chave8 + " vs " + equipe8Chave8)

    alert(`Partida 1: ${equipe1Chave8} vs ${equipe2Chave8}`)

    let vencedor1Chave8 = prompt("Digite o nome do vencedor da primeira partida:").toUpperCase()

    if (vencedor1Chave8 != equipe1Chave8 && vencedor1Chave8 != equipe2Chave8) {
      alert("❌ Nome inválido! Essa equipe não participou da partida.")
    } else {
      alert(`Partida 2: ${equipe3Chave8} vs ${equipe4Chave8}`)

      let vencedor2Chave8 = prompt("Digite o nome do vencedor da segunda partida:").toUpperCase()

      if (vencedor2Chave8 === equipe3Chave8 || vencedor2Chave8 === equipe4Chave8) {
        alert(`Partida 3: ${equipe5Chave8} vs ${equipe6Chave8}`)

        let vencedor3Chave8 = prompt("Digite o nome do vencedor da terceira partida:").toUpperCase()

        if (vencedor3Chave8 === equipe5Chave8 || vencedor3Chave8 === equipe6Chave8) {
          alert(`Partida 4: ${equipe7Chave8} vs ${equipe8Chave8}`)

          let vencedor4Chave8 = prompt("Digite o nome do vencedor da quarta partida:").toUpperCase()

          if (vencedor4Chave8 === equipe7Chave8 || vencedor4Chave8 === equipe8Chave8) {
            alert(`Semi final 1: ${vencedor1Chave8} vs ${vencedor2Chave8}`)

            let vencedorSemi1Chave8 = prompt("Digite o nome do vencedor da semi final 1:").toUpperCase()

            if (vencedorSemi1Chave8 === vencedor1Chave8 || vencedorSemi1Chave8 === vencedor2Chave8) {
              alert(`Semi final 2: ${vencedor3Chave8} vs ${vencedor4Chave8}`)

              let vencedorSemi2Chave8 = prompt("Digite o nome do vencedor da semi final 2:").toUpperCase()

              if (vencedorSemi2Chave8 === vencedor3Chave8 || vencedorSemi2Chave8 === vencedor4Chave8) {
                alert(`Grande final: ${vencedorSemi1Chave8} vs ${vencedorSemi2Chave8}`)

                let vencedorFinalChave8 = prompt("Digite o nome do vencedor da final:").toUpperCase()

                if (vencedorFinalChave8 != vencedorSemi1Chave8 && vencedorFinalChave8 != vencedorSemi2Chave8) {
                  alert("❌ Nome inválido! Essa equipe não participou da final.")
                } else {
                  alert(`🏆 Parabéns, ${vencedorFinalChave8}! Vocês são os campeões do torneio!`)
                }
              } else {
                alert("❌ Nome inválido! Essa equipe não participou da Semi final 2.")
              }
            } else {
              alert("❌ Nome inválido! Essa equipe não participou da Semi final 1.")
            }
          } else {
            alert("❌ Nome inválido! Essa equipe não participou da partida.")
          }
        } else {
          alert("❌ Nome inválido! Essa equipe não participou da partida.")
        }
      } else {
        alert("❌ Nome inválido! Essa equipe não participou da partida.")
      }
    }
  } else if (chave === 2) {
    alert("chaveamento \n 1°Partida: " + equipe1Chave8 + " vs " + equipe3Chave8 + "\n 2°Partida: " + equipe2Chave8 + " vs " + equipe4Chave8 + "\n 3°Partida: " + equipe5Chave8 + " vs " + equipe6Chave8 + "\n 4°Partida: " + equipe7Chave8 + " vs " + equipe8Chave8)

    alert(`Partida 1: ${equipe1Chave8} vs ${equipe3Chave8}`)

    let vencedor1Chave8 = prompt("Digite o nome do vencedor da primeira partida:").toUpperCase()

    if (vencedor1Chave8 != equipe1Chave8 && vencedor1Chave8 != equipe3Chave8) {
      alert("❌ Nome inválido! Essa equipe não participou da partida.")
    } else {
      alert(`Partida 2: ${equipe2Chave8} vs ${equipe4Chave8}`)

      let vencedor2Chave8 = prompt("Digite o nome do vencedor da segunda partida:").toUpperCase()

      if (vencedor2Chave8 === equipe2Chave8 || vencedor2Chave8 === equipe4Chave8) {
        alert(`Partida 3: ${equipe5Chave8} vs ${equipe6Chave8}`)

        let vencedor3Chave8 = prompt("Digite o nome do vencedor da terceira partida:").toUpperCase()

        if (vencedor3Chave8 === equipe5Chave8 || vencedor3Chave8 === equipe6Chave8) {
          alert(`Partida 4: ${equipe7Chave8} vs ${equipe8Chave8}`)

          let vencedor4Chave8 = prompt("Digite o nome do vencedor da quarta partida:").toUpperCase()

          if (vencedor4Chave8 === equipe7Chave8 || vencedor4Chave8 === equipe8Chave8) {
            alert(`Semi final 1: ${vencedor1Chave8} vs ${vencedor2Chave8}`)

            let vencedorSemi1Chave8 = prompt("Digite o nome do vencedor da semi final 1:").toUpperCase()

            if (vencedorSemi1Chave8 === vencedor1Chave8 || vencedorSemi1Chave8 === vencedor2Chave8) {
              alert(`Semi final 2: ${vencedor3Chave8} vs ${vencedor4Chave8}`)

              let vencedorSemi2Chave8 = prompt("Digite o nome do vencedor da semi final 2:").toUpperCase()

              if (vencedorSemi2Chave8 === vencedor3Chave8 || vencedorSemi2Chave8 === vencedor4Chave8) {
                alert(`Grande final: ${vencedorSemi1Chave8} vs ${vencedorSemi2Chave8}`)

                let vencedorFinalChave8 = prompt("Digite o nome do vencedor da final:").toUpperCase()

                if (vencedorFinalChave8 != vencedorSemi1Chave8 && vencedorFinalChave8 != vencedorSemi2Chave8) {
                  alert("❌ Nome inválido! Essa equipe não participou da final.")
                } else {
                  alert(`🏆 Parabéns, ${vencedorFinalChave8}! Vocês são os campeões do torneio!`)
                }
              } else {
                alert("❌ Nome inválido! Essa equipe não participou da Semi final 2.")
              }
            } else {
              alert("❌ Nome inválido! Essa equipe não participou da Semi final 1.")
            }
          } else {
            alert("❌ Nome inválido! Essa equipe não participou da partida.")
          }
        } else {
          alert("❌ Nome inválido! Essa equipe não participou da partida.")
        }
      } else {
        alert("❌ Nome inválido! Essa equipe não participou da partida.")
      }
    }
  } else if (chave === 3) {
    alert("chaveamento \n 1°Partida: " + equipe1Chave8 + " vs " + equipe4Chave8 + "\n 2°Partida: " + equipe2Chave8 + " vs " + equipe3Chave8 + "\n 3°Partida: " + equipe5Chave8 + " vs " + equipe6Chave8 + "\n 4°Partida: " + equipe7Chave8 + " vs " + equipe8Chave8)

    alert(`Partida 1: ${equipe1Chave8} vs ${equipe4Chave8}`)

    let vencedor1Chave8 = prompt("Digite o nome do vencedor da primeira partida:").toUpperCase()

    if (vencedor1Chave8 != equipe1Chave8 && vencedor1Chave8 != equipe4Chave8) {
      alert("❌ Nome inválido! Essa equipe não participou da partida.")
    } else {
      alert(`Partida 2: ${equipe2Chave8} vs ${equipe3Chave8}`)

      let vencedor2Chave8 = prompt("Digite o nome do vencedor da segunda partida:").toUpperCase()

      if (vencedor2Chave8 === equipe2Chave8 || vencedor2Chave8 === equipe3Chave8) {
        alert(`Partida 3: ${equipe5Chave8} vs ${equipe6Chave8}`)

        let vencedor3Chave8 = prompt("Digite o nome do vencedor da terceira partida:").toUpperCase()

        if (vencedor3Chave8 === equipe5Chave8 || vencedor3Chave8 === equipe6Chave8) {
          alert(`Partida 4: ${equipe7Chave8} vs ${equipe8Chave8}`)

          let vencedor4Chave8 = prompt("Digite o nome do vencedor da quarta partida:").toUpperCase()

          if (vencedor4Chave8 === equipe7Chave8 || vencedor4Chave8 === equipe8Chave8) {
            alert(`Semi final 1: ${vencedor1Chave8} vs ${vencedor2Chave8}`)

            let vencedorSemi1Chave8 = prompt("Digite o nome do vencedor da semi final 1:").toUpperCase()

            if (vencedorSemi1Chave8 === vencedor1Chave8 || vencedorSemi1Chave8 === vencedor2Chave8) {
              alert(`Semi final 2: ${vencedor3Chave8} vs ${vencedor4Chave8}`)

              let vencedorSemi2Chave8 = prompt("Digite o nome do vencedor da semi final 2:").toUpperCase()

              if (vencedorSemi2Chave8 === vencedor3Chave8 || vencedorSemi2Chave8 === vencedor4Chave8) {
                alert(`Grande final: ${vencedorSemi1Chave8} vs ${vencedorSemi2Chave8}`)

                let vencedorFinalChave8 = prompt("Digite o nome do vencedor da final:").toUpperCase()

                if (vencedorFinalChave8 != vencedorSemi1Chave8 && vencedorFinalChave8 != vencedorSemi2Chave8) {
                  alert("❌ Nome inválido! Essa equipe não participou da final.")
                } else {
                  alert(`🏆 Parabéns, ${vencedorFinalChave8}! Vocês são os campeões do torneio!`)
                }
              } else {
                alert("❌ Nome inválido! Essa equipe não participou da Semi final 2.")
              }
            } else {
              alert("❌ Nome inválido! Essa equipe não participou da Semi final 1.")
            }
          } else {
            alert("❌ Nome inválido! Essa equipe não participou da partida.")
          }
        } else {
          alert("❌ Nome inválido! Essa equipe não participou da partida.")
        }
      } else {
        alert("❌ Nome inválido! Essa equipe não participou da partida.")
      }
    }
  } else if (chave === 4) {
    alert("chaveamento \n 1°Partida: " + equipe1Chave8 + " vs " + equipe5Chave8 + "\n 2°Partida: " + equipe2Chave8 + " vs " + equipe6Chave8 + "\n 3°Partida: " + equipe3Chave8 + " vs " + equipe4Chave8 + "\n 4°Partida: " + equipe7Chave8 + " vs " + equipe8Chave8)

    alert(`Partida 1: ${equipe1Chave8} vs ${equipe5Chave8}`)

    let vencedor1Chave8 = prompt("Digite o nome do vencedor da primeira partida:").toUpperCase()

    if (vencedor1Chave8 != equipe1Chave8 && vencedor1Chave8 != equipe5Chave8) {
      alert("❌ Nome inválido! Essa equipe não participou da partida.")
    } else {
      alert(`Partida 2: ${equipe2Chave8} vs ${equipe6Chave8}`)

      let vencedor2Chave8 = prompt("Digite o nome do vencedor da segunda partida:").toUpperCase()

      if (vencedor2Chave8 === equipe2Chave8 || vencedor2Chave8 === equipe6Chave8) {
        alert(`Partida 3: ${equipe3Chave8} vs ${equipe4Chave8}`)

        let vencedor3Chave8 = prompt("Digite o nome do vencedor da terceira partida:").toUpperCase()

        if (vencedor3Chave8 === equipe3Chave8 || vencedor3Chave8 === equipe4Chave8) {
          alert(`Partida 4: ${equipe7Chave8} vs ${equipe8Chave8}`)

          let vencedor4Chave8 = prompt("Digite o nome do vencedor da quarta partida:").toUpperCase()

          if (vencedor4Chave8 === equipe7Chave8 || vencedor4Chave8 === equipe8Chave8) {
            alert(`Semi final 1: ${vencedor1Chave8} vs ${vencedor2Chave8}`)

            let vencedorSemi1Chave8 = prompt("Digite o nome do vencedor da semi final 1:").toUpperCase()

            if (vencedorSemi1Chave8 === vencedor1Chave8 || vencedorSemi1Chave8 === vencedor2Chave8) {
              alert(`Semi final 2: ${vencedor3Chave8} vs ${vencedor4Chave8}`)

              let vencedorSemi2Chave8 = prompt("Digite o nome do vencedor da semi final 2:").toUpperCase()

              if (vencedorSemi2Chave8 === vencedor3Chave8 || vencedorSemi2Chave8 === vencedor4Chave8) {
                alert(`Grande final: ${vencedorSemi1Chave8} vs ${vencedorSemi2Chave8}`)

                let vencedorFinalChave8 = prompt("Digite o nome do vencedor da final:").toUpperCase()

                if (vencedorFinalChave8 != vencedorSemi1Chave8 && vencedorFinalChave8 != vencedorSemi2Chave8) {
                  alert("❌ Nome inválido! Essa equipe não participou da final.")
                } else {
                  alert(`🏆 Parabéns, ${vencedorFinalChave8}! Vocês são os campeões do torneio!`)
                }
              } else {
                alert("❌ Nome inválido! Essa equipe não participou da Semi final 2.")
              }
            } else {
              alert("❌ Nome inválido! Essa equipe não participou da Semi final 1.")
            }
          } else {
            alert("❌ Nome inválido! Essa equipe não participou da partida.")
          }
        } else {
          alert("❌ Nome inválido! Essa equipe não participou da partida.")
        }
      } else {
        alert("❌ Nome inválido! Essa equipe não participou da partida.")
      }
    }
  } else if (chave === 5) {
    alert("chaveamento \n 1°Partida: " + equipe1Chave8 + " vs " + equipe6Chave8 + "\n 2°Partida: " + equipe2Chave8 + " vs " + equipe5Chave8 + "\n 3°Partida: " + equipe3Chave8 + " vs " + equipe4Chave8 + "\n 4°Partida: " + equipe7Chave8 + " vs " + equipe8Chave8)

    alert(`Partida 1: ${equipe1Chave8} vs ${equipe6Chave8}`)

    let vencedor1Chave8 = prompt("Digite o nome do vencedor da primeira partida:").toUpperCase()

    if (vencedor1Chave8 != equipe1Chave8 && vencedor1Chave8 != equipe6Chave8) {
      alert("❌ Nome inválido! Essa equipe não participou da partida.")
    } else {
      alert(`Partida 2: ${equipe2Chave8} vs ${equipe5Chave8}`)

      let vencedor2Chave8 = prompt("Digite o nome do vencedor da segunda partida:").toUpperCase()

      if (vencedor2Chave8 === equipe2Chave8 || vencedor2Chave8 === equipe5Chave8) {
        alert(`Partida 3: ${equipe3Chave8} vs ${equipe4Chave8}`)

        let vencedor3Chave8 = prompt("Digite o nome do vencedor da terceira partida:").toUpperCase()

        if (vencedor3Chave8 === equipe3Chave8 || vencedor3Chave8 === equipe4Chave8) {
          alert(`Partida 4: ${equipe7Chave8} vs ${equipe8Chave8}`)

          let vencedor4Chave8 = prompt("Digite o nome do vencedor da quarta partida:").toUpperCase()

          if (vencedor4Chave8 === equipe7Chave8 || vencedor4Chave8 === equipe8Chave8) {
            alert(`Semi final 1: ${vencedor1Chave8} vs ${vencedor2Chave8}`)

            let vencedorSemi1Chave8 = prompt("Digite o nome do vencedor da semi final 1:").toUpperCase()

            if (vencedorSemi1Chave8 === vencedor1Chave8 || vencedorSemi1Chave8 === vencedor2Chave8) {
              alert(`Semi final 2: ${vencedor3Chave8} vs ${vencedor4Chave8}`)

              let vencedorSemi2Chave8 = prompt("Digite o nome do vencedor da semi final 2:").toUpperCase()

              if (vencedorSemi2Chave8 === vencedor3Chave8 || vencedorSemi2Chave8 === vencedor4Chave8) {
                alert(`Grande final: ${vencedorSemi1Chave8} vs ${vencedorSemi2Chave8}`)

                let vencedorFinalChave8 = prompt("Digite o nome do vencedor da final:").toUpperCase()

                if (vencedorFinalChave8 != vencedorSemi1Chave8 && vencedorFinalChave8 != vencedorSemi2Chave8) {
                  alert("❌ Nome inválido! Essa equipe não participou da final.")
                } else {
                  alert(`🏆 Parabéns, ${vencedorFinalChave8}! Vocês são os campeões do torneio!`)
                }
              } else {
                alert("❌ Nome inválido! Essa equipe não participou da Semi final 2.")
              }
            } else {
              alert("❌ Nome inválido! Essa equipe não participou da Semi final 1.")
            }
          } else {
            alert("❌ Nome inválido! Essa equipe não participou da partida.")
          }
        } else {
          alert("❌ Nome inválido! Essa equipe não participou da partida.")
        }
      } else {
        alert("❌ Nome inválido! Essa equipe não participou da partida.")
      }
    }
  } else if (chave === 6) {
    alert("chaveamento \n 1°Partida: " + equipe1Chave8 + " vs " + equipe7Chave8 + "\n 2°Partida: " + equipe2Chave8 + " vs " + equipe5Chave8 + "\n 3°Partida: " + equipe3Chave8 + " vs " + equipe4Chave8 + "\n 4°Partida: " + equipe6Chave8 + " vs " + equipe8Chave8)

    alert(`Partida 1: ${equipe1Chave8} vs ${equipe7Chave8}`)

    let vencedor1Chave8 = prompt("Digite o nome do vencedor da primeira partida:").toUpperCase()

    if (vencedor1Chave8 != equipe1Chave8 && vencedor1Chave8 != equipe7Chave8) {
      alert("❌ Nome inválido! Essa equipe não participou da partida.")
    } else {
      alert(`Partida 2: ${equipe2Chave8} vs ${equipe5Chave8}`)

      let vencedor2Chave8 = prompt("Digite o nome do vencedor da segunda partida:").toUpperCase()

      if (vencedor2Chave8 === equipe2Chave8 || vencedor2Chave8 === equipe5Chave8) {
        alert(`Partida 3: ${equipe3Chave8} vs ${equipe4Chave8}`)

        let vencedor3Chave8 = prompt("Digite o nome do vencedor da terceira partida:").toUpperCase()

        if (vencedor3Chave8 === equipe3Chave8 || vencedor3Chave8 === equipe4Chave8) {
          alert(`Partida 4: ${equipe6Chave8} vs ${equipe8Chave8}`)

          let vencedor4Chave8 = prompt("Digite o nome do vencedor da quarta partida:").toUpperCase()

          if (vencedor4Chave8 === equipe6Chave8 || vencedor4Chave8 === equipe8Chave8) {
            alert(`Semi final 1: ${vencedor1Chave8} vs ${vencedor2Chave8}`)

            let vencedorSemi1Chave8 = prompt("Digite o nome do vencedor da semi final 1:").toUpperCase()

            if (vencedorSemi1Chave8 === vencedor1Chave8 || vencedorSemi1Chave8 === vencedor2Chave8) {
              alert(`Semi final 2: ${vencedor3Chave8} vs ${vencedor4Chave8}`)

              let vencedorSemi2Chave8 = prompt("Digite o nome do vencedor da semi final 2:").toUpperCase()

              if (vencedorSemi2Chave8 === vencedor3Chave8 || vencedorSemi2Chave8 === vencedor4Chave8) {
                alert(`Grande final: ${vencedorSemi1Chave8} vs ${vencedorSemi2Chave8}`)

                let vencedorFinalChave8 = prompt("Digite o nome do vencedor da final:").toUpperCase()

                if (vencedorFinalChave8 != vencedorSemi1Chave8 && vencedorFinalChave8 != vencedorSemi2Chave8) {
                  alert("❌ Nome inválido! Essa equipe não participou da final.")
                } else {
                  alert(`🏆 Parabéns, ${vencedorFinalChave8}! Vocês são os campeões do torneio!`)
                }
              } else {
                alert("❌ Nome inválido! Essa equipe não participou da Semi final 2.")
              }
            } else {
              alert("❌ Nome inválido! Essa equipe não participou da Semi final 1.")
            }
          } else {
            alert("❌ Nome inválido! Essa equipe não participou da partida.")
          }
        } else {
          alert("❌ Nome inválido! Essa equipe não participou da partida.")
        }
      } else {
        alert("❌ Nome inválido! Essa equipe não participou da partida.")
      }
    }
  } else if (chave === 7) {
    alert("chaveamento \n 1°Partida: " + equipe1Chave8 + " vs " + equipe2Chave8 + "\n 2°Partida: " + equipe3Chave8 + " vs " + equipe6Chave8 + "\n 3°Partida: " + equipe4Chave8 + " vs " + equipe5Chave8 + "\n 4°Partida: " + equipe7Chave8 + " vs " + equipe8Chave8)

    alert(`Partida 1: ${equipe1Chave8} vs ${equipe2Chave8}`)

    let vencedor1Chave8 = prompt("Digite o nome do vencedor da primeira partida:").toUpperCase()

    if (vencedor1Chave8 != equipe1Chave8 && vencedor1Chave8 != equipe2Chave8) {
      alert("❌ Nome inválido! Essa equipe não participou da partida.")
    } else {
      alert(`Partida 2: ${equipe3Chave8} vs ${equipe6Chave8}`)

      let vencedor2Chave8 = prompt("Digite o nome do vencedor da segunda partida:").toUpperCase()

      if (vencedor2Chave8 === equipe3Chave8 || vencedor2Chave8 === equipe6Chave8) {
        alert(`Partida 3: ${equipe4Chave8} vs ${equipe5Chave8}`)

        let vencedor3Chave8 = prompt("Digite o nome do vencedor da terceira partida:").toUpperCase()

        if (vencedor3Chave8 === equipe4Chave8 || vencedor3Chave8 === equipe5Chave8) {
          alert(`Partida 4: ${equipe7Chave8} vs ${equipe8Chave8}`)

          let vencedor4Chave8 = prompt("Digite o nome do vencedor da quarta partida:").toUpperCase()

          if (vencedor4Chave8 === equipe7Chave8 || vencedor4Chave8 === equipe8Chave8) {
            alert(`Semi final 1: ${vencedor1Chave8} vs ${vencedor2Chave8}`)

            let vencedorSemi1Chave8 = prompt("Digite o nome do vencedor da semi final 1:").toUpperCase()

            if (vencedorSemi1Chave8 === vencedor1Chave8 || vencedorSemi1Chave8 === vencedor2Chave8) {
              alert(`Semi final 2: ${vencedor3Chave8} vs ${vencedor4Chave8}`)

              let vencedorSemi2Chave8 = prompt("Digite o nome do vencedor da semi final 2:").toUpperCase()

              if (vencedorSemi2Chave8 === vencedor3Chave8 || vencedorSemi2Chave8 === vencedor4Chave8) {
                alert(`Grande final: ${vencedorSemi1Chave8} vs ${vencedorSemi2Chave8}`)

                let vencedorFinalChave8 = prompt("Digite o nome do vencedor da final:").toUpperCase()

                if (vencedorFinalChave8 != vencedorSemi1Chave8 && vencedorFinalChave8 != vencedorSemi2Chave8) {
                  alert("❌ Nome inválido! Essa equipe não participou da final.")
                } else {
                  alert(`🏆 Parabéns, ${vencedorFinalChave8}! Vocês são os campeões do torneio!`)
                }
              } else {
                alert("❌ Nome inválido! Essa equipe não participou da Semi final 2.")
              }
            } else {
              alert("❌ Nome inválido! Essa equipe não participou da Semi final 1.")
            }
          } else {
            alert("❌ Nome inválido! Essa equipe não participou da partida.")
          }
        } else {
          alert("❌ Nome inválido! Essa equipe não participou da partida.")
        }
      } else {
        alert("❌ Nome inválido! Essa equipe não participou da partida.")
      }
    }
  } else if (chave === 8) {
    alert("chaveamento \n 1°Partida: " + equipe1Chave8 + " vs " + equipe2Chave8 + "\n 2°Partida: " + equipe3Chave8 + " vs " + equipe4Chave8 + "\n 3°Partida: " + equipe5Chave8 + " vs " + equipe7Chave8 + "\n 4°Partida: " + equipe6Chave8 + " vs " + equipe8Chave8)

    alert(`Partida 1: ${equipe1Chave8} vs ${equipe2Chave8}`)

    let vencedor1Chave8 = prompt("Digite o nome do vencedor da primeira partida:").toUpperCase()

    if (vencedor1Chave8 != equipe1Chave8 && vencedor1Chave8 != equipe2Chave8) {
      alert("❌ Nome inválido! Essa equipe não participou da partida.")
    } else {
      alert(`Partida 2: ${equipe3Chave8} vs ${equipe4Chave8}`)

      let vencedor2Chave8 = prompt("Digite o nome do vencedor da segunda partida:").toUpperCase()

      if (vencedor2Chave8 === equipe3Chave8 || vencedor2Chave8 === equipe4Chave8) {
        alert(`Partida 3: ${equipe5Chave8} vs ${equipe7Chave8}`)

        let vencedor3Chave8 = prompt("Digite o nome do vencedor da terceira partida:").toUpperCase()

        if (vencedor3Chave8 === equipe5Chave8 || vencedor3Chave8 === equipe7Chave8) {
          alert(`Partida 4: ${equipe6Chave8} vs ${equipe8Chave8}`)

          let vencedor4Chave8 = prompt("Digite o nome do vencedor da quarta partida:").toUpperCase()

          if (vencedor4Chave8 === equipe6Chave8 || vencedor4Chave8 === equipe8Chave8) {
            alert(`Semi final 1: ${vencedor1Chave8} vs ${vencedor2Chave8}`)

            let vencedorSemi1Chave8 = prompt("Digite o nome do vencedor da semi final 1:").toUpperCase()

            if (vencedorSemi1Chave8 === vencedor1Chave8 || vencedorSemi1Chave8 === vencedor2Chave8) {
              alert(`Semi final 2: ${vencedor3Chave8} vs ${vencedor4Chave8}`)

              let vencedorSemi2Chave8 = prompt("Digite o nome do vencedor da semi final 2:").toUpperCase()

              if (vencedorSemi2Chave8 === vencedor3Chave8 || vencedorSemi2Chave8 === vencedor4Chave8) {
                alert(`Grande final: ${vencedorSemi1Chave8} vs ${vencedorSemi2Chave8}`)

                let vencedorFinalChave8 = prompt("Digite o nome do vencedor da final:").toUpperCase()

                if (vencedorFinalChave8 != vencedorSemi1Chave8 && vencedorFinalChave8 != vencedorSemi2Chave8) {
                  alert("❌ Nome inválido! Essa equipe não participou da final.")
                } else {
                  alert(`🏆 Parabéns, ${vencedorFinalChave8}! Vocês são os campeões do torneio!`)
                }
              } else {
                alert("❌ Nome inválido! Essa equipe não participou da Semi final 2.")
              }
            } else {
              alert("❌ Nome inválido! Essa equipe não participou da Semi final 1.")
            }
          } else {
            alert("❌ Nome inválido! Essa equipe não participou da partida.")
          }
        } else {
          alert("❌ Nome inválido! Essa equipe não participou da partida.")
        }
      } else {
        alert("❌ Nome inválido! Essa equipe não participou da partida.")
      }
    }
  }
} else if (equipes === "9" || equipes === "9 equipes") {
  let equipe1Chave9 = prompt("Digite o nome da PRIMEIRA equipe:").toUpperCase()
  let equipe2Chave9 = prompt("Digite o nome da SEGUNDA equipe:").toUpperCase()
  let equipe3Chave9 = prompt("Digite o nome da TERCEIRA equipe:").toUpperCase()
  let equipe4Chave9 = prompt("Digite o nome da QUARTA equipe:").toUpperCase()
  let equipe5Chave9 = prompt("Digite o nome da QUINTA equipe:").toUpperCase()
  let equipe6Chave9 = prompt("Digite o nome da SEXTA equipe:").toUpperCase()
  let equipe7Chave9 = prompt("Digite o nome da SÉTIMA equipe:").toUpperCase()
  let equipe8Chave9 = prompt("Digite o nome da OITAVA equipe:").toUpperCase()
  let equipe9Chave9 = prompt("Digite o nome da NONA equipe:").toUpperCase()

  let chave = Math.floor(Math.random() * 9) + 1

  alert("Sorteio realizado! Vamos ver o chaveamento...")

  if (chave === 1) {
    alert("chaveamento \n 1°Partida: " + equipe1Chave9 + " vs " + equipe2Chave9 + "\n 2°Partida: " + "Vencedor da 1°partida" + " vs " + equipe3Chave9 + "\n 3°Partida: " + equipe4Chave9 + " vs " + equipe5Chave9 + "\n 4°Partida: " + equipe6Chave9 + " vs " + equipe7Chave9 + "\n 5°Partida: " + equipe8Chave9 + " vs " + equipe9Chave9)

    alert(`Partida 1: ${equipe1Chave9} vs ${equipe2Chave9}`)

    let vencedor1Chave9 = prompt("Digite o nome do vencedor da primeira partida:").toUpperCase()

    if (vencedor1Chave9 != equipe1Chave9 && vencedor1Chave9 != equipe2Chave9) {
      alert("❌ Nome inválido! Essa equipe não participou da partida.")
    } else {
      alert(`Partida 2: ${vencedor1Chave9} vs ${equipe3Chave9}`)

      let vencedor2Chave9 = prompt("Digite o nome do vencedor da segunda partida:").toUpperCase()

      if (vencedor2Chave9 === vencedor1Chave9 || vencedor2Chave9 === equipe4Chave9) {
        alert(`Partida 3: ${equipe4Chave9} vs ${equipe5Chave9}`)

        let vencedor3Chave9 = prompt("Digite o nome do vencedor da terceira partida:").toUpperCase()

        if (vencedor3Chave9 === equipe4Chave9 || vencedor3Chave9 === equipe5Chave9) {
          alert(`Partida 4: ${equipe6Chave9} vs ${equipe7Chave9}`)

          let vencedor4Chave9 = prompt("Digite o nome do vencedor da quarta partida:").toUpperCase()

          if (vencedor4Chave9 === equipe6Chave9 || vencedor4Chave9 === equipe7Chave9) {
            alert(`Partida 5: ${equipe8Chave9} vs ${equipe9Chave9}`)

            let vencedor5Chave9 = prompt("Digite o nome do vencedor da quinta partida:").toUpperCase()

            if (vencedor5Chave9 === equipe8Chave9 || vencedor5Chave9 === equipe9Chave9) {
              alert(`Semi final 1: ${vencedor2Chave9} vs ${vencedor3Chave9}`)

              let vencedorSemi1Chave9 = prompt("Digite o nome do vencedor da semi final 1:").toUpperCase()

              if (vencedorSemi1Chave9 === vencedor2Chave9 || vencedorSemi1Chave9 === vencedor3Chave9) {
                alert(`Semi final 2: ${vencedor4Chave9} vs ${vencedor5Chave9}`)

                let vencedorSemi2Chave9 = prompt("Digite o nome do vencedor da semi final 2:").toUpperCase()

                if (vencedorSemi2Chave9 === vencedor4Chave9 || vencedorSemi2Chave9 === vencedor5Chave9) {
                  alert(`Grande final: ${vencedorSemi1Chave9} vs ${vencedorSemi2Chave9}`)

                  let vencedorFinalChave9 = prompt("Digite o nome do vencedor da final:").toUpperCase()

                  if (vencedorFinalChave9 != vencedorSemi1Chave9 && vencedorFinalChave9 != vencedorSemi2Chave9) {
                    alert("❌ Nome inválido! Essa equipe não participou da final.")
                  } else {
                    alert(`🏆 Parabéns, ${vencedorFinalChave9}! Vocês são os campeões do torneio!`)
                  }
                } else {
                  alert("❌ Nome inválido! Essa equipe não participou da Semi final 2.")
                }
              } else {
                alert("❌ Nome inválido! Essa equipe não participou da Semi final 1.")
              }
            }
          } else {
            alert("❌ Nome inválido! Essa equipe não participou da partida.")
          }
        } else {
          alert("❌ Nome inválido! Essa equipe não participou da partida.")
        }
      } else {
        alert("❌ Nome inválido! Essa equipe não participou da partida.")
      }
    }
  } else if (chave === 2) {
    alert("chaveamento \n 1°Partida: " + equipe2Chave9 + " vs " + equipe3Chave9 + "\n 2°Partida: " + "Vencedor da 1°partida" + " vs " + equipe1Chave9 + "\n 3°Partida: " + equipe4Chave9 + " vs " + equipe5Chave9 + "\n 4°Partida: " + equipe6Chave9 + " vs " + equipe7Chave9 + "\n 5°Partida: " + equipe8Chave9 + " vs " + equipe9Chave9)

    alert(`Partida 1: ${equipe2Chave9} vs ${equipe3Chave9}`)

    let vencedor1Chave9 = prompt("Digite o nome do vencedor da primeira partida:").toUpperCase()

    if (vencedor1Chave9 != equipe2Chave9 && vencedor1Chave9 != equipe3Chave9) {
      alert("❌ Nome inválido! Essa equipe não participou da partida.")
    } else {
      alert(`Partida 2: ${vencedor1Chave9} vs ${equipe1Chave9}`)

      let vencedor2Chave9 = prompt("Digite o nome do vencedor da segunda partida:").toUpperCase()

      if (vencedor2Chave9 === vencedor1Chave9 || vencedor2Chave9 === equipe1Chave9) {
        alert(`Partida 3: ${equipe4Chave9} vs ${equipe5Chave9}`)

        let vencedor3Chave9 = prompt("Digite o nome do vencedor da terceira partida:").toUpperCase()

        if (vencedor3Chave9 === equipe4Chave9 || vencedor3Chave9 === equipe5Chave9) {
          alert(`Partida 4: ${equipe6Chave9} vs ${equipe7Chave9}`)

          let vencedor4Chave9 = prompt("Digite o nome do vencedor da quarta partida:").toUpperCase()

          if (vencedor4Chave9 === equipe6Chave9 || vencedor4Chave9 === equipe7Chave9) {
            alert(`Partida 5: ${equipe8Chave9} vs ${equipe9Chave9}`)

            let vencedor5Chave9 = prompt("Digite o nome do vencedor da quinta partida:").toUpperCase()

            if (vencedor5Chave9 === equipe8Chave9 || vencedor5Chave9 === equipe9Chave9) {
              alert(`Semi final 1: ${vencedor2Chave9} vs ${vencedor3Chave9}`)

              let vencedorSemi1Chave9 = prompt("Digite o nome do vencedor da semi final 1:").toUpperCase()

              if (vencedorSemi1Chave9 === vencedor2Chave9 || vencedorSemi1Chave9 === vencedor3Chave9) {
                alert(`Semi final 2: ${vencedor4Chave9} vs ${vencedor5Chave9}`)

                let vencedorSemi2Chave9 = prompt("Digite o nome do vencedor da semi final 2:").toUpperCase()

                if (vencedorSemi2Chave9 === vencedor4Chave9 || vencedorSemi2Chave9 === vencedor5Chave9) {
                  alert(`Grande final: ${vencedorSemi1Chave9} vs ${vencedorSemi2Chave9}`)

                  let vencedorFinalChave9 = prompt("Digite o nome do vencedor da final:").toUpperCase()

                  if (vencedorFinalChave9 != vencedorSemi1Chave9 && vencedorFinalChave9 != vencedorSemi2Chave9) {
                    alert("❌ Nome inválido! Essa equipe não participou da final.")
                  } else {
                    alert(`🏆 Parabéns, ${vencedorFinalChave9}! Vocês são os campeões do torneio!`)
                  }
                } else {
                  alert("❌ Nome inválido! Essa equipe não participou da Semi final 2.")
                }
              }
            } else {
              alert("❌ Nome inválido! Essa equipe não participou da Semi final 1.")
            }
          } else {
            alert("❌ Nome inválido! Essa equipe não participou da partida.")
          }
        } else {
          alert("❌ Nome inválido! Essa equipe não participou da partida.")
        }
      } else {
        alert("❌ Nome inválido! Essa equipe não participou da partida.")
      }
    }
  } else if (chave === 3) {
    alert("chaveamento \n 1°Partida: " + equipe3Chave9 + " vs " + equipe1Chave9 + "\n 2°Partida: " + "Vencedor da 1°partida" + " vs " + equipe2Chave9 + "\n 3°Partida: " + equipe4Chave9 + " vs " + equipe5Chave9 + "\n 4°Partida: " + equipe6Chave9 + " vs " + equipe7Chave9 + "\n 5°Partida: " + equipe8Chave9 + " vs " + equipe9Chave9)

    alert(`Partida 1: ${equipe3Chave9} vs ${equipe1Chave9}`)

    let vencedor1Chave9 = prompt("Digite o nome do vencedor da primeira partida:").toUpperCase()

    if (vencedor1Chave9 != equipe3Chave9 && vencedor1Chave9 != equipe1Chave9) {
      alert("❌ Nome inválido! Essa equipe não participou da partida.")
    } else {
      alert(`Partida 2: ${vencedor1Chave9} vs ${equipe2Chave9}`)

      let vencedor2Chave9 = prompt("Digite o nome do vencedor da segunda partida:").toUpperCase()

      if (vencedor2Chave9 === vencedor1Chave9 || vencedor2Chave9 === equipe2Chave9) {
        alert(`Partida 3: ${equipe4Chave9} vs ${equipe5Chave9}`)

        let vencedor3Chave9 = prompt("Digite o nome do vencedor da terceira partida:").toUpperCase()

        if (vencedor3Chave9 === equipe4Chave9 || vencedor3Chave9 === equipe5Chave9) {
          alert(`Partida 4: ${equipe6Chave9} vs ${equipe7Chave9}`)

          let vencedor4Chave9 = prompt("Digite o nome do vencedor da quarta partida:").toUpperCase()

          if (vencedor4Chave9 === equipe6Chave9 || vencedor4Chave9 === equipe7Chave9) {
            alert(`Partida 5: ${equipe8Chave9} vs ${equipe9Chave9}`)

            let vencedor5Chave9 = prompt("Digite o nome do vencedor da quinta partida:").toUpperCase()

            if (vencedor5Chave9 === equipe8Chave9 || vencedor5Chave9 === equipe9Chave9) {
              alert(`Semi final 1: ${vencedor2Chave9} vs ${vencedor3Chave9}`)

              let vencedorSemi1Chave9 = prompt("Digite o nome do vencedor da semi final 1:").toUpperCase()

              if (vencedorSemi1Chave9 === vencedor2Chave9 || vencedorSemi1Chave9 === vencedor3Chave9) {
                alert(`Semi final 2: ${vencedor4Chave9} vs ${vencedor5Chave9}`)

                let vencedorSemi2Chave9 = prompt("Digite o nome do vencedor da semi final 2:").toUpperCase()

                if (vencedorSemi2Chave9 === vencedor4Chave9 || vencedorSemi2Chave9 === vencedor5Chave9) {
                  alert(`Grande final: ${vencedorSemi1Chave9} vs ${vencedorSemi2Chave9}`)

                  let vencedorFinalChave9 = prompt("Digite o nome do vencedor da final:").toUpperCase()

                  if (vencedorFinalChave9 != vencedorSemi1Chave9 && vencedorFinalChave9 != vencedorSemi2Chave9) {
                    alert("❌ Nome inválido! Essa equipe não participou da final.")
                  } else {
                    alert(`🏆 Parabéns, ${vencedorFinalChave9}! Vocês são os campeões do torneio!`)
                  }
                } else {
                  alert("❌ Nome inválido! Essa equipe não participou da Semi final 2.")
                }
              } else {
                alert("❌ Nome inválido! Essa equipe não participou da Semi final 1.")
              }
            } else {
              alert("❌ Nome inválido! Essa equipe não participou da partida.")
            }
          }
        } else {
          alert("❌ Nome inválido! Essa equipe não participou da partida.")
        }
      } else {
        alert("❌ Nome inválido! Essa equipe não participou da partida.")
      }
    }
  } else if (chave === 4) {
    alert("chaveamento \n 1°Partida: " + equipe4Chave9 + " vs " + equipe5Chave9 + "\n 2°Partida: " + "Vencedor da 1°partida" + " vs " + equipe1Chave9 + "\n 3°Partida: " + equipe2Chave9 + " vs " + equipe3Chave9 + "\n 4°Partida: " + equipe6Chave9 + " vs " + equipe7Chave9 + "\n 5°Partida: " + equipe8Chave9 + " vs " + equipe9Chave9)

    alert(`Partida 1: ${equipe4Chave9} vs ${equipe5Chave9}`)

    let vencedor1Chave9 = prompt("Digite o nome do vencedor da primeira partida:").toUpperCase()

    if (vencedor1Chave9 != equipe4Chave9 && vencedor1Chave9 != equipe5Chave9) {
      alert("❌ Nome inválido! Essa equipe não participou da partida.")
    } else {
      alert(`Partida 2: ${vencedor1Chave9} vs ${equipe1Chave9}`)

      let vencedor2Chave9 = prompt("Digite o nome do vencedor da segunda partida:").toUpperCase()

      if (vencedor2Chave9 === vencedor1Chave9 || vencedor2Chave9 === equipe1Chave9) {
        alert(`Partida 3: ${equipe2Chave9} vs ${equipe3Chave9}`)

        let vencedor3Chave9 = prompt("Digite o nome do vencedor da terceira partida:").toUpperCase()

        if (vencedor3Chave9 === equipe2Chave9 || vencedor3Chave9 === equipe3Chave9) {
          alert(`Partida 4: ${equipe6Chave9} vs ${equipe7Chave9}`)

          let vencedor4Chave9 = prompt("Digite o nome do vencedor da quarta partida:").toUpperCase()

          if (vencedor4Chave9 === equipe6Chave9 || vencedor4Chave9 === equipe7Chave9) {
            alert(`Partida 5: ${equipe8Chave9} vs ${equipe9Chave9}`)

            let vencedor5Chave9 = prompt("Digite o nome do vencedor da quinta partida:").toUpperCase()

            if (vencedor5Chave9 === equipe8Chave9 || vencedor5Chave9 === equipe9Chave9) {
              alert(`Semi final 1: ${vencedor2Chave9} vs ${vencedor3Chave9}`)

              let vencedorSemi1Chave9 = prompt("Digite o nome do vencedor da semi final 1:").toUpperCase()

              if (vencedorSemi1Chave9 === vencedor2Chave9 || vencedorSemi1Chave9 === vencedor3Chave9) {
                alert(`Semi final 2: ${vencedor4Chave9} vs ${vencedor5Chave9}`)

                let vencedorSemi2Chave9 = prompt("Digite o nome do vencedor da semi final 2:").toUpperCase()

                if (vencedorSemi2Chave9 === vencedor4Chave9 || vencedorSemi2Chave9 === vencedor5Chave9) {
                  alert(`Grande final: ${vencedorSemi1Chave9} vs ${vencedorSemi2Chave9}`)

                  let vencedorFinalChave9 = prompt("Digite o nome do vencedor da final:").toUpperCase()

                  if (vencedorFinalChave9 != vencedorSemi1Chave9 && vencedorFinalChave9 != vencedorSemi2Chave9) {
                    alert("❌ Nome inválido! Essa equipe não participou da final.")
                  } else {
                    alert(`🏆 Parabéns, ${vencedorFinalChave9}! Vocês são os campeões do torneio!`)
                  }
                } else {
                  alert("❌ Nome inválido! Essa equipe não participou da Semi final 2.")
                }
              }
            } else {
              alert("❌ Nome inválido! Essa equipe não participou da Semi final 1.")
            }
          } else {
            alert("❌ Nome inválido! Essa equipe não participou da partida.")
          }
        } else {
          alert("❌ Nome inválido! Essa equipe não participou da partida.")
        }
      } else {
        alert("❌ Nome inválido! Essa equipe não participou da partida.")
      }
    }
  } else if (chave === 5) {
    alert("chaveamento \n 1°Partida: " + equipe5Chave9 + " vs " + equipe4Chave9 + "\n 2°Partida: " + "Vencedor da 1°partida" + " vs " + equipe1Chave9 + "\n 3°Partida: " + equipe2Chave9 + " vs " + equipe3Chave9 + "\n 4°Partida: " + equipe6Chave9 + " vs " + equipe7Chave9 + "\n 5°Partida: " + equipe8Chave9 + " vs " + equipe9Chave9)

    alert(`Partida 1: ${equipe5Chave9} vs ${equipe4Chave9}`)

    let vencedor1Chave9 = prompt("Digite o nome do vencedor da primeira partida:").toUpperCase()

    if (vencedor1Chave9 != equipe5Chave9 && vencedor1Chave9 != equipe4Chave9) {
      alert("❌ Nome inválido! Essa equipe não participou da partida.")
    } else {
      alert(`Partida 2: ${vencedor1Chave9} vs ${equipe1Chave9}`)

      let vencedor2Chave9 = prompt("Digite o nome do vencedor da segunda partida:").toUpperCase()

      if (vencedor2Chave9 === vencedor1Chave9 || vencedor2Chave9 === equipe1Chave9) {
        alert(`Partida 3: ${equipe2Chave9} vs ${equipe3Chave9}`)

        let vencedor3Chave9 = prompt("Digite o nome do vencedor da terceira partida:").toUpperCase()


        if (vencedor3Chave9 === equipe2Chave9 || vencedor3Chave9 === equipe3Chave9) {
          alert(`Partida 4: ${equipe6Chave9} vs ${equipe7Chave9}`)

          let vencedor4Chave9 = prompt("Digite o nome do vencedor da quarta partida:").toUpperCase()

          if (vencedor4Chave9 === equipe6Chave9 || vencedor4Chave9 === equipe7Chave9) {
            alert(`Partida 5: ${equipe8Chave9} vs ${equipe9Chave9}`)

            let vencedor5Chave9 = prompt("Digite o nome do vencedor da quinta partida:").toUpperCase()

            if (vencedor5Chave9 === equipe8Chave9 || vencedor5Chave9 === equipe9Chave9) {
              alert(`Semi final 1: ${vencedor2Chave9} vs ${vencedor3Chave9}`)

              let vencedorSemi1Chave9 = prompt("Digite o nome do vencedor da semi final 1:").toUpperCase()

              if (vencedorSemi1Chave9 === vencedor2Chave9 || vencedorSemi1Chave9 === vencedor3Chave9) {
                alert(`Semi final 2: ${vencedor4Chave9} vs ${vencedor5Chave9}`)

                let vencedorSemi2Chave9 = prompt("Digite o nome do vencedor da semi final 2:").toUpperCase()

                if (vencedorSemi2Chave9 === vencedor4Chave9 || vencedorSemi2Chave9 === vencedor5Chave9) {
                  alert(`Grande final: ${vencedorSemi1Chave9} vs ${vencedorSemi2Chave9}`)

                  let vencedorFinalChave9 = prompt("Digite o nome do vencedor da final:").toUpperCase()

                  if (vencedorFinalChave9 != vencedorSemi1Chave9 && vencedorFinalChave9 != vencedorSemi2Chave9) {
                    alert("❌ Nome inválido! Essa equipe não participou da final.")
                  } else {
                    alert(`🏆 Parabéns, ${vencedorFinalChave9}! Vocês são os campeões do torneio!`)
                  }
                } else {
                  alert("❌ Nome inválido! Essa equipe não participou da Semi final 2.")
                }
              } else {
                alert("❌ Nome inválido! Essa equipe não participou da Semi final 1.")
              }
            }
          } else {
            alert("❌ Nome inválido! Essa equipe não participou da partida.")
          }
        } else {
          alert("❌ Nome inválido! Essa equipe não participou da partida.")
        }
      } else {
        alert("❌ Nome inválido! Essa equipe não participou da partida.")
      }
    }
  } else if (chave === 6) {
    alert("chaveamento \n 1°Partida: " + equipe6Chave9 + " vs " + equipe7Chave9 + "\n 2°Partida: " + "Vencedor da 1°partida" + " vs " + equipe1Chave9 + "\n 3°Partida: " + equipe2Chave9 + " vs " + equipe3Chave9 + "\n 4°Partida: " + equipe4Chave9 + " vs " + equipe5Chave9 + "\n 5°Partida: " + equipe8Chave9 + " vs " + equipe9Chave9)

    alert(`Partida 1: ${equipe6Chave9} vs ${equipe7Chave9}`)

    let vencedor1Chave9 = prompt("Digite o nome do vencedor da primeira partida:").toUpperCase()

    if (vencedor1Chave9 != equipe6Chave9 && vencedor1Chave9 != equipe7Chave9) {
      alert("❌ Nome inválido! Essa equipe não participou da partida.")
    } else {
      alert(`Partida 2: ${vencedor1Chave9} vs ${equipe1Chave9}`)

      let vencedor2Chave9 = prompt("Digite o nome do vencedor da segunda partida:").toUpperCase()

      if (vencedor2Chave9 === vencedor1Chave9 || vencedor2Chave9 === equipe1Chave9) {
        alert(`Partida 3: ${equipe2Chave9} vs ${equipe3Chave9}`)

        let vencedor3Chave9 = prompt("Digite o nome do vencedor da terceira partida:").toUpperCase()

        if (vencedor3Chave9 === equipe2Chave9 || vencedor3Chave9 === equipe3Chave9) {
          alert(`Partida 4: ${equipe4Chave9} vs ${equipe5Chave9}`)

          let vencedor4Chave9 = prompt("Digite o nome do vencedor da quarta partida:").toUpperCase()

          if (vencedor4Chave9 === equipe4Chave9 || vencedor4Chave9 === equipe5Chave9) {
            alert(`Partida 5: ${equipe8Chave9} vs ${equipe9Chave9}`)

            let vencedor5Chave9 = prompt("Digite o nome do vencedor da quinta partida:").toUpperCase()

            if (vencedor5Chave9 === equipe8Chave9 || vencedor5Chave9 === equipe9Chave9) {
              alert(`Semi final 1: ${vencedor2Chave9} vs ${vencedor3Chave9}`)

              let vencedorSemi1Chave9 = prompt("Digite o nome do vencedor da semi final 1:").toUpperCase()

              if (vencedorSemi1Chave9 === vencedor2Chave9 || vencedorSemi1Chave9 === vencedor3Chave9) {
                alert(`Semi final 2: ${vencedor4Chave9} vs ${vencedor5Chave9}`)

                let vencedorSemi2Chave9 = prompt("Digite o nome do vencedor da semi final 2:").toUpperCase()

                if (vencedorSemi2Chave9 === vencedor4Chave9 || vencedorSemi2Chave9 === vencedor5Chave9) {
                  alert(`Grande final: ${vencedorSemi1Chave9} vs ${vencedorSemi2Chave9}`)

                  let vencedorFinalChave9 = prompt("Digite o nome do vencedor da final:").toUpperCase()


                  if (vencedorFinalChave9 != vencedorSemi1Chave9 && vencedorFinalChave9 != vencedorSemi2Chave9) {
                    alert("❌ Nome inválido! Essa equipe não participou da final.")
                  } else {
                    alert(`🏆 Parabéns, ${vencedorFinalChave9}! Vocês são os campeões do torneio!`)
                  }
                } else {
                  alert("❌ Nome inválido! Essa equipe não participou da Semi final 2.")
                }
              }
            } else {
              alert("❌ Nome inválido! Essa equipe não participou da Semi final 1.")
            }
          } else {
            alert("❌ Nome inválido! Essa equipe não participou da partida.")
          }
        } else {
          alert("❌ Nome inválido! Essa equipe não participou da partida.")
        }
      } else {
        alert("❌ Nome inválido! Essa equipe não participou da partida.")
      }
    }
  } else if (chave === 7) {
    alert("chaveamento \n 1°Partida: " + equipe7Chave9 + " vs " + equipe6Chave9 + "\n 2°Partida: " + "Vencedor da 1°partida" + " vs " + equipe1Chave9 + "\n 3°Partida: " + equipe2Chave9 + " vs " + equipe3Chave9 + "\n 4°Partida: " + equipe4Chave9 + " vs " + equipe5Chave9 + "\n 5°Partida: " + equipe8Chave9 + " vs " + equipe9Chave9)

    alert(`Partida 1: ${equipe7Chave9} vs ${equipe6Chave9}`)

    let vencedor1Chave9 = prompt("Digite o nome do vencedor da primeira partida:").toUpperCase()

    if (vencedor1Chave9 != equipe7Chave9 && vencedor1Chave9 != equipe6Chave9) {
      alert("❌ Nome inválido! Essa equipe não participou da partida.")
    } else {
      alert(`Partida 2: ${vencedor1Chave9} vs ${equipe1Chave9}`)

      let vencedor2Chave9 = prompt("Digite o nome do vencedor da segunda partida:").toUpperCase()

      if (vencedor2Chave9 === vencedor1Chave9 || vencedor2Chave9 === equipe1Chave9) {
        alert(`Partida 3: ${equipe2Chave9} vs ${equipe3Chave9}`)

        let vencedor3Chave9 = prompt("Digite o nome do vencedor da terceira partida:").toUpperCase()


        if (vencedor3Chave9 === equipe2Chave9 || vencedor3Chave9 === equipe3Chave9) {
          alert(`Partida 4: ${equipe4Chave9} vs ${equipe5Chave9}`)

          let vencedor4Chave9 = prompt("Digite o nome do vencedor da quarta partida:").toUpperCase()

          if (vencedor4Chave9 === equipe4Chave9 || vencedor4Chave9 === equipe5Chave9) {
            alert(`Partida 5: ${equipe8Chave9} vs ${equipe9Chave9}`)

            let vencedor5Chave9 = prompt("Digite o nome do vencedor da quinta partida:").toUpperCase()

            if (vencedor5Chave9 === equipe8Chave9 || vencedor5Chave9 === equipe9Chave9) {
              alert(`Semi final 1: ${vencedor2Chave9} vs ${vencedor3Chave9}`)

              let vencedorSemi1Chave9 = prompt("Digite o nome do vencedor da semi final 1:").toUpperCase()

              if (vencedorSemi1Chave9 === vencedor2Chave9 || vencedorSemi1Chave9 === vencedor3Chave9) {
                alert(`Semi final 2: ${vencedor4Chave9} vs ${vencedor5Chave9}`)

                let vencedorSemi2Chave9 = prompt("Digite o nome do vencedor da semi final 2:").toUpperCase()

                if (vencedorSemi2Chave9 === vencedor4Chave9 || vencedorSemi2Chave9 === vencedor5Chave9) {
                  alert(`Grande final: ${vencedorSemi1Chave9} vs ${vencedorSemi2Chave9}`)

                  let vencedorFinalChave9 = prompt("Digite o nome do vencedor da final:").toUpperCase()

                  if (vencedorFinalChave9 != vencedorSemi1Chave9 && vencedorFinalChave9 != vencedorSemi2Chave9) {
                    alert("❌ Nome inválido! Essa equipe não participou da final.")
                  } else {
                    alert(`🏆 Parabéns, ${vencedorFinalChave9}! Vocês são os campeões do torneio!`)
                  }
                } else {
                  alert("❌ Nome inválido! Essa equipe não participou da Semi final 2.")
                }
              } else {
                alert("❌ Nome inválido! Essa equipe não participou da Semi final 1.")
              }
            } else {
              alert("❌ Nome inválido! Essa equipe não participou da partida.")
            }
          }
        } else {
          alert("❌ Nome inválido! Essa equipe não participou da partida.")
        }
      } else {
        alert("❌ Nome inválido! Essa equipe não participou da partida.")
      }
    }
  } else if (chave === 8) {
    alert("chaveamento \n 1°Partida: " + equipe8Chave9 + " vs " + equipe9Chave9 + "\n 2°Partida: " + "Vencedor da 1°partida" + " vs " + equipe1Chave9 + "\n 3°Partida: " + equipe2Chave9 + " vs " + equipe3Chave9 + "\n 4°Partida: " + equipe4Chave9 + " vs " + equipe5Chave9 + "\n 5°Partida: " + equipe6Chave9 + " vs " + equipe7Chave9)

    alert(`Partida 1: ${equipe8Chave9} vs ${equipe9Chave9}`)

    let vencedor1Chave9 = prompt("Digite o nome do vencedor da primeira partida:").toUpperCase()

    if (vencedor1Chave9 != equipe8Chave9 && vencedor1Chave9 != equipe9Chave9) {
      alert("❌ Nome inválido! Essa equipe não participou da partida.")
    } else {
      alert(`Partida 2: ${vencedor1Chave9} vs ${equipe1Chave9}`)

      let vencedor2Chave9 = prompt("Digite o nome do vencedor da segunda partida:").toUpperCase()

      if (vencedor2Chave9 === vencedor1Chave9 || vencedor2Chave9 === equipe1Chave9) {
        alert(`Partida 3: ${equipe2Chave9} vs ${equipe3Chave9}`)

        let vencedor3Chave9 = prompt("Digite o nome do vencedor da terceira partida:").toUpperCase()

        if (vencedor3Chave9 === equipe2Chave9 || vencedor3Chave9 === equipe3Chave9) {
          alert(`Partida 4: ${equipe4Chave9} vs ${equipe5Chave9}`)

          let vencedor4Chave9 = prompt("Digite o nome do vencedor da quarta partida:").toUpperCase()

          if (vencedor4Chave9 === equipe4Chave9 || vencedor4Chave9 === equipe5Chave9) {
            alert(`Partida 5: ${equipe6Chave9} vs ${equipe7Chave9}`)

            let vencedor5Chave9 = prompt("Digite o nome do vencedor da quinta partida:").toUpperCase()

            if (vencedor5Chave9 === equipe6Chave9 || vencedor5Chave9 === equipe7Chave9) {
              alert(`Semi final 1: ${vencedor2Chave9} vs ${vencedor3Chave9}`)

              let vencedorSemi1Chave9 = prompt("Digite o nome do vencedor da semi final 1:").toUpperCase()

              if (vencedorSemi1Chave9 === vencedor2Chave9 || vencedorSemi1Chave9 === vencedor3Chave9) {
                alert(`Semi final 2: ${vencedor4Chave9} vs ${vencedor5Chave9}`)

                let vencedorSemi2Chave9 = prompt("Digite o nome do vencedor da semi final 2:").toUpperCase()

                if (vencedorSemi2Chave9 === vencedor4Chave9 || vencedorSemi2Chave9 === vencedor5Chave9) {
                  alert(`Grande final: ${vencedorSemi1Chave9} vs ${vencedorSemi2Chave9}`)

                  let vencedorFinalChave9 = prompt("Digite o nome do vencedor da final:").toUpperCase()

                  if (vencedorFinalChave9 != vencedorSemi1Chave9 && vencedorFinalChave9 != vencedorSemi2Chave9) {
                    alert("❌ Nome inválido! Essa equipe não participou da final.")
                  } else {
                    alert(`🏆 Parabéns, ${vencedorFinalChave9}! Vocês são os campeões do torneio!`)
                  }
                } else {
                  alert("❌ Nome inválido! Essa equipe não participou da Semi final 2.")
                }
              } else {
                alert("❌ Nome inválido! Essa equipe não participou da Semi final 1.")
              }
            } else {
              alert("❌ Nome inválido! Essa equipe não participou da partida.")
            }
          } else {
            alert("❌ Nome inválido! Essa equipe não participou da partida.")
          }
        } else {
          alert("❌ Nome inválido! Essa equipe não participou da partida.")
        }
      }
    }
  } else if (chave === 9) {
    alert("chaveamento \n 1°Partida: " + equipe9Chave9 + " vs " + equipe8Chave9 + "\n 2°Partida: " + "Vencedor da 1°partida" + " vs " + equipe1Chave9 + "\n 3°Partida: " + equipe2Chave9 + " vs " + equipe3Chave9 + "\n 4°Partida: " + equipe4Chave9 + " vs " + equipe5Chave9 + "\n 5°Partida: " + equipe6Chave9 + " vs " + equipe7Chave9)

    alert(`Partida 1: ${equipe9Chave9} vs ${equipe8Chave9}`)

    let vencedor1Chave9 = prompt("Digite o nome do vencedor da primeira partida:").toUpperCase()

    if (vencedor1Chave9 != equipe9Chave9 && vencedor1Chave9 != equipe8Chave9) {
      alert("❌ Nome inválido! Essa equipe não participou da partida.")
    } else {
      alert(`Partida 2: ${vencedor1Chave9} vs ${equipe1Chave9}`)

      let vencedor2Chave9 = prompt("Digite o nome do vencedor da segunda partida:").toUpperCase()
      if (vencedor2Chave9 === vencedor1Chave9 || vencedor2Chave9 === equipe1Chave9) {
        alert(`Partida 3: ${equipe2Chave9} vs ${equipe3Chave9}`)

        let vencedor3Chave9 = prompt("Digite o nome do vencedor da terceira partida:").toUpperCase()

        if (vencedor3Chave9 === equipe2Chave9 || vencedor3Chave9 === equipe3Chave9) {
          alert(`Partida 4: ${equipe4Chave9} vs ${equipe5Chave9}`)

          let vencedor4Chave9 = prompt("Digite o nome do vencedor da quarta partida:").toUpperCase()

          if (vencedor4Chave9 === equipe4Chave9 || vencedor4Chave9 === equipe5Chave9) {
            alert(`Partida 5: ${equipe6Chave9} vs ${equipe7Chave9}`)

            let vencedor5Chave9 = prompt("Digite o nome do vencedor da quinta partida:").toUpperCase()

            if (vencedor5Chave9 === equipe6Chave9 || vencedor5Chave9 === equipe7Chave9) {
              alert(`Semi final 1: ${vencedor2Chave9} vs ${vencedor3Chave9}`)

              let vencedorSemi1Chave9 = prompt("Digite o nome do vencedor da semi final 1:").toUpperCase()

              if (vencedorSemi1Chave9 === vencedor2Chave9 || vencedorSemi1Chave9 === vencedor3Chave9) {
                alert(`Semi final 2: ${vencedor4Chave9} vs ${vencedor5Chave9}`)

                let vencedorSemi2Chave9 = prompt("Digite o nome do vencedor da semi final 2:").toUpperCase()

                if (vencedorSemi2Chave9 === vencedor4Chave9 || vencedorSemi2Chave9 === vencedor5Chave9) {
                  alert(`Grande final: ${vencedorSemi1Chave9} vs ${vencedorSemi2Chave9}`)

                  let vencedorFinalChave9 = prompt("Digite o nome do vencedor da final:").toUpperCase()

                  if (vencedorFinalChave9 != vencedorSemi1Chave9 && vencedorFinalChave9 != vencedorSemi2Chave9) {
                    alert("❌ Nome inválido! Essa equipe não participou da final.")
                  } else {
                    alert(`🏆 Parabéns, ${vencedorFinalChave9}! Vocês são os campeões do torneio!`)
                  }
                } else {
                  alert("❌ Nome inválido! Essa equipe não participou da Semi final 2.")
                }
              } else {
                alert("❌ Nome inválido! Essa equipe não participou da Semi final 1.")
              }
            } else {
              alert("❌ Nome inválido! Essa equipe não participou da partida.")
            }
          }
        } else {
          alert("❌ Nome inválido! Essa equipe não participou da partida.")
        }
      } else {
        alert("❌ Nome inválido! Essa equipe não participou da partida.")
      }
    }
  }
} else if (equipes === "10" || equipes === "10 equipes") {
  let equipe1Chave10 = prompt("Digite o nome da PRIMEIRA equipe:").toUpperCase()
  let equipe2Chave10 = prompt("Digite o nome da SEGUNDA equipe:").toUpperCase()
  let equipe3Chave10 = prompt("Digite o nome da TERCEIRA equipe:").toUpperCase()
  let equipe4Chave10 = prompt("Digite o nome da QUARTA equipe:").toUpperCase()
  let equipe5Chave10 = prompt("Digite o nome da QUINTA equipe:").toUpperCase()
  let equipe6Chave10 = prompt("Digite o nome da SEXTA equipe:").toUpperCase()
  let equipe7Chave10 = prompt("Digite o nome da SÉTIMA equipe:").toUpperCase()
  let equipe8Chave10 = prompt("Digite o nome da OITAVA equipe:").toUpperCase()
  let equipe9Chave10 = prompt("Digite o nome da NONA equipe:").toUpperCase()
  let equipe10Chave10 = prompt("Digite o nome da DÉCIMA equipe:").toUpperCase()

  let chave = Math.floor(Math.random() * 10) + 1

  alert(`Sorteio realizado! Vamos ver o chaveamento...`)

  if (chave === 1) {
    alert("chaveamento \n 1°Partida: " + equipe1Chave10 + " vs " + equipe2Chave10 + "\n 2°Partida: " + "Vencedor da 1°partida" + " vs " + equipe3Chave10 + "\n 3°Partida: " + equipe4Chave10 + " vs " + equipe5Chave10 + "\n 4°Partida: " + equipe6Chave10 + " vs " + equipe7Chave10 + "\n 5°Partida: " + equipe8Chave10 + " vs " + equipe9Chave10 + "\n 6°Partida: " + "Vencedor da 5°partida" + " vs " + equipe10Chave10)

    alert(`Partida 1: ${equipe1Chave10} vs ${equipe2Chave10}`)

    let vencedor1Chave10 = prompt("Digite o nome do vencedor da primeira partida:").toUpperCase()

    if (vencedor1Chave10 != equipe1Chave10 && vencedor1Chave10 != equipe2Chave10) {
      alert("❌ Nome inválido! Essa equipe não participou da partida.")
    } else {
      alert(`Partida 2: ${vencedor1Chave10} vs ${equipe3Chave10}`)

      let vencedor2Chave10 = prompt("Digite o nome do vencedor da segunda partida:").toUpperCase()

      if (vencedor2Chave10 === vencedor1Chave10 || vencedor2Chave10 === equipe3Chave10) {
        alert(`Partida 3: ${equipe4Chave10} vs ${equipe5Chave10}`)

        let vencedor3Chave10 = prompt("Digite o nome do vencedor da terceira partida:").toUpperCase()

        if (vencedor3Chave10 === equipe4Chave10 || vencedor3Chave10 === equipe5Chave10) {
          alert(`Partida 4: ${equipe6Chave10} vs ${equipe7Chave10}`)

          let vencedor4Chave10 = prompt("Digite o nome do vencedor da quarta partida:").toUpperCase()

          if (vencedor4Chave10 === equipe6Chave10 || vencedor4Chave10 === equipe7Chave10) {
            alert(`Partida 5: ${equipe8Chave10} vs ${equipe9Chave10}`)

            let vencedor5Chave10 = prompt("Digite o nome do vencedor da quinta partida:").toUpperCase()

            if (vencedor5Chave10 === equipe8Chave10 || vencedor5Chave10 === equipe9Chave10) {
              alert(`Partida 6: ${vencedor5Chave10} vs ${equipe10Chave10}`)

              let vencedor6Chave10 = prompt("Digite o nome do vencedor da sexta partida:").toUpperCase()

              if (vencedor6Chave10 === vencedor5Chave10 || vencedor6Chave10 === equipe10Chave10) {
                alert(`Semi final 1: ${vencedor2Chave10} vs ${vencedor3Chave10}`)

                let vencedorSemi1Chave10 = prompt("Digite o nome do vencedor da semi final 1:").toUpperCase()

                if (vencedorSemi1Chave10 === vencedor2Chave10 || vencedorSemi1Chave10 === vencedor3Chave10) {
                  alert(`Semi final 2: ${vencedor4Chave10} vs ${vencedor6Chave10}`)

                  let vencedorSemi2Chave10 = prompt("Digite o nome do vencedor da semi final 2:").toUpperCase()

                  if (vencedorSemi2Chave10 === vencedor4Chave10 || vencedorSemi2Chave10 === vencedor6Chave10) {
                    alert(`Grande final: ${vencedorSemi1Chave10} vs ${vencedorSemi2Chave10}`)

                    let vencedorFinalChave10 = prompt("Digite o nome do vencedor da final:").toUpperCase()

                    if (vencedorFinalChave10 != vencedorSemi1Chave10 && vencedorFinalChave10 != vencedorSemi2Chave10) {
                      alert("❌ Nome inválido! Essa equipe não participou da partida.")
                    } else {
                      alert(`🏆 Parabéns, ${vencedorFinalChave10}! Vocês são os campeões do torneio!`)
                    }
                  } else {
                    alert("❌ Nome inválido! Essa equipe não participou da Semi final 2.")
                  }
                } else {
                  alert("❌ Nome inválido! Essa equipe não participou da Semi final 1.")
                }
              }
            } else {
              alert("❌ Nome inválido! Essa equipe não participou da partida.")
            }
          } else {
            alert("❌ Nome inválido! Essa equipe não participou da partida.")
          }
        } else {
          alert("❌ Nome inválido! Essa equipe não participou da partida.")
        }
      } else {
        alert("❌ Nome inválido! Essa equipe não participou da partida.")
      }
    }
  } else if (chave === 2) {
    alert("chaveamento \n 1°Partida: " + equipe2Chave10 + " vs " + equipe1Chave10 + "\n 2°Partida: " + "Vencedor da 1°partida" + " vs " + equipe3Chave10 + "\n 3°Partida: " + equipe4Chave10 + " vs " + equipe5Chave10 + "\n 4°Partida: " + equipe6Chave10 + " vs " + equipe7Chave10 + "\n 5°Partida: " + equipe8Chave10 + " vs " + equipe9Chave10 + "\n 6°Partida: " + "Vencedor da 5°partida" + " vs " + equipe10Chave10)

    alert(`Partida 1: ${equipe2Chave10} vs ${equipe1Chave10}`)

    let vencedor1Chave10 = prompt("Digite o nome do vencedor da primeira partida:").toUpperCase()

    if (vencedor1Chave10 != equipe2Chave10 && vencedor1Chave10 != equipe1Chave10) {
      alert("❌ Nome inválido! Essa equipe não participou da partida.")
    } else {
      alert(`Partida 2: ${vencedor1Chave10} vs ${equipe3Chave10}`)

      let vencedor2Chave10 = prompt("Digite o nome do vencedor da segunda partida:").toUpperCase()

      if (vencedor2Chave10 === vencedor1Chave10 || vencedor2Chave10 === equipe3Chave10) {
        alert(`Partida 3: ${equipe4Chave10} vs ${equipe5Chave10}`)

        let vencedor3Chave10 = prompt("Digite o nome do vencedor da terceira partida:").toUpperCase()

        if (vencedor3Chave10 === equipe4Chave10 || vencedor3Chave10 === equipe5Chave10) {
          alert(`Partida 4: ${equipe6Chave10} vs ${equipe7Chave10}`)

          let vencedor4Chave10 = prompt("Digite o nome do vencedor da quarta partida:").toUpperCase()

          if (vencedor4Chave10 === equipe6Chave10 || vencedor4Chave10 === equipe7Chave10) {
            alert(`Partida 5: ${equipe8Chave10} vs ${equipe9Chave10}`)

            let vencedor5Chave10 = prompt("Digite o nome do vencedor da quinta partida:").toUpperCase()

            if (vencedor5Chave10 === equipe8Chave10 || vencedor5Chave10 === equipe9Chave10) {
              alert(`Partida 6: ${vencedor5Chave10} vs ${equipe10Chave10}`)

              let vencedor6Chave10 = prompt("Digite o nome do vencedor da sexta partida:").toUpperCase()

              if (vencedor6Chave10 === vencedor5Chave10 || vencedor6Chave10 === equipe10Chave10) {
                alert(`Semi final 1: ${vencedor2Chave10} vs ${vencedor3Chave10}`)

                let vencedorSemi1Chave10 = prompt("Digite o nome do vencedor da semi final 1:").toUpperCase()

                if (vencedorSemi1Chave10 === vencedor2Chave10 || vencedorSemi1Chave10 === vencedor3Chave10) {
                  alert(`Semi final 2: ${vencedor4Chave10} vs ${vencedor6Chave10}`)

                  let vencedorSemi2Chave10 = prompt("Digite o nome do vencedor da semi final 2:").toUpperCase()

                  if (vencedorSemi2Chave10 === vencedor4Chave10 || vencedorSemi2Chave10 === vencedor6Chave10) {
                    alert(`Grande final: ${vencedorSemi1Chave10} vs ${vencedorSemi2Chave10}`)

                    let vencedorFinalChave10 = prompt("Digite o nome do vencedor da final:").toUpperCase()

                    if (vencedorFinalChave10 != vencedorSemi1Chave10 && vencedorFinalChave10 != vencedorSemi2Chave10) {
                      alert("❌ Nome inválido! Essa equipe não participou da partida.")
                    } else {
                      alert(`🏆 Parabéns, ${vencedorFinalChave10}! Vocês são os campeões do torneio!`)
                    }
                  } else {
                    alert("❌ Nome inválido! Essa equipe não participou da Semi final 2.")
                  }
                } else {
                  alert("❌ Nome inválido! Essa equipe não participou da Semi final 1.")
                }
              } else {
                alert("❌ Nome inválido! Essa equipe não participou da partida.")
              }
            } else {
              alert("❌ Nome inválido! Essa equipe não participou da partida.")
            }
          } else {
            alert("❌ Nome inválido! Essa equipe não participou da partida.")
          }
        } else {
          alert("❌ Nome inválido! Essa equipe não participou da partida.")
        }
      } else {
        alert("❌ Nome inválido! Essa equipe não participou da partida.")
      }
    }
  } else if (chave === 3) {
    alert("chaveamento \n 1°Partida: " + equipe3Chave10 + " vs " + equipe1Chave10 + "\n 2°Partida: " + "Vencedor da 1°partida" + " vs " + equipe2Chave10 + "\n 3°Partida: " + equipe4Chave10 + " vs " + equipe5Chave10 + "\n 4°Partida: " + equipe6Chave10 + " vs " + equipe7Chave10 + "\n 5°Partida: " + equipe8Chave10 + " vs " + equipe9Chave10 + "\n 6°Partida: " + "Vencedor da 5°partida" + " vs " + equipe10Chave10)

    alert(`Partida 1: ${equipe3Chave10} vs ${equipe1Chave10}`)

    let vencedor1Chave10 = prompt("Digite o nome do vencedor da primeira partida:").toUpperCase()

    if (vencedor1Chave10 != equipe3Chave10 && vencedor1Chave10 != equipe1Chave10) {
      alert("❌ Nome inválido! Essa equipe não participou da partida.")
    } else {
      alert(`Partida 2: ${vencedor1Chave10} vs ${equipe2Chave10}`)

      let vencedor2Chave10 = prompt("Digite o nome do vencedor da segunda partida:").toUpperCase()

      if (vencedor2Chave10 === vencedor1Chave10 || vencedor2Chave10 === equipe2Chave10) {
        alert(`Partida 3: ${equipe4Chave10} vs ${equipe5Chave10}`)

        let vencedor3Chave10 = prompt("Digite o nome do vencedor da terceira partida:").toUpperCase()

        if (vencedor3Chave10 === equipe4Chave10 || vencedor3Chave10 === equipe5Chave10) {
          alert(`Partida 4: ${equipe6Chave10} vs ${equipe7Chave10}`)

          let vencedor4Chave10 = prompt("Digite o nome do vencedor da quarta partida:").toUpperCase()

          if (vencedor4Chave10 === equipe6Chave10 || vencedor4Chave10 === equipe7Chave10) {
            alert(`Partida 5: ${equipe8Chave10} vs ${equipe9Chave10}`)

            let vencedor5Chave10 = prompt("Digite o nome do vencedor da quinta partida:").toUpperCase()

            if (vencedor5Chave10 === equipe8Chave10 || vencedor5Chave10 === equipe9Chave10) {
              alert(`Partida 6: ${vencedor5Chave10} vs ${equipe10Chave10}`)

              let vencedor6Chave10 = prompt("Digite o nome do vencedor da sexta partida:").toUpperCase()

              if (vencedor6Chave10 === vencedor5Chave10 || vencedor6Chave10 === equipe10Chave10) {
                alert(`Semi final 1: ${vencedor2Chave10} vs ${vencedor3Chave10}`)

                let vencedorSemi1Chave10 = prompt("Digite o nome do vencedor da semi final 1:").toUpperCase()

                if (vencedorSemi1Chave10 === vencedor2Chave10 || vencedorSemi1Chave10 === vencedor3Chave10) {
                  alert(`Semi final 2: ${vencedor4Chave10} vs ${vencedor6Chave10}`)

                  let vencedorSemi2Chave10 = prompt("Digite o nome do vencedor da semi final 2:").toUpperCase()

                  if (vencedorSemi2Chave10 === vencedor4Chave10 || vencedorSemi2Chave10 === vencedor6Chave10) {
                    alert(`Grande final: ${vencedorSemi1Chave10} vs ${vencedorSemi2Chave10}`)

                    let vencedorFinalChave10 = prompt("Digite o nome do vencedor da final:").toUpperCase()

                    if (vencedorFinalChave10 != vencedorSemi1Chave10 && vencedorFinalChave10 != vencedorSemi2Chave10) {
                      alert("❌ Nome inválido! Essa equipe não participou da partida.")
                    } else {
                      alert(`🏆 Parabéns, ${vencedorFinalChave10}! Vocês são os campeões do torneio!`)
                    }
                  } else {
                    alert("❌ Nome inválido! Essa equipe não participou da Semi final 2.")
                  }
                } else {
                  alert("❌ Nome inválido! Essa equipe não participou da Semi final 1.")
                }
              } else {
                alert("❌ Nome inválido! Essa equipe não participou da partida.")
              }
            } else {
              alert("❌ Nome inválido! Essa equipe não participou da partida.")
            }
          } else {
            alert("❌ Nome inválido! Essa equipe não participou da partida.")
          }
        } else {
          alert("❌ Nome inválido! Essa equipe não participou da partida.")
        }
      } else {
        alert("❌ Nome inválido! Essa equipe não participou da partida.")
      }
    }
  } else if (chave === 4) {
    alert("chaveamento \n 1°Partida: " + equipe4Chave10 + " vs " + equipe5Chave10 + "\n 2°Partida: " + "Vencedor da 1°partida" + " vs " + equipe3Chave10 + "\n 3°Partida: " + equipe1Chave10 + " vs " + equipe2Chave10 + "\n 4°Partida: " + equipe6Chave10 + " vs " + equipe7Chave10 + "\n 5°Partida: " + equipe8Chave10 + " vs " + equipe9Chave10 + "\n 6°Partida: " + "Vencedor da 5°partida" + " vs " + equipe10Chave10)

    alert(`Partida 1: ${equipe4Chave10} vs ${equipe5Chave10}`)

    let vencedor1Chave10 = prompt("Digite o nome do vencedor da primeira partida:").toUpperCase()

    if (vencedor1Chave10 != equipe4Chave10 && vencedor1Chave10 != equipe5Chave10) {
      alert("❌ Nome inválido! Essa equipe não participou da partida.")
    } else {
      alert(`Partida 2: ${vencedor1Chave10} vs ${equipe3Chave10}`)

      let vencedor2Chave10 = prompt("Digite o nome do vencedor da segunda partida:").toUpperCase()

      if (vencedor2Chave10 === vencedor1Chave10 || vencedor2Chave10 === equipe3Chave10) {
        alert(`Partida 3: ${equipe1Chave10} vs ${equipe2Chave10}`)

        let vencedor3Chave10 = prompt("Digite o nome do vencedor da terceira partida:").toUpperCase()


        if (vencedor3Chave10 === equipe1Chave10 || vencedor3Chave10 === equipe2Chave10) {
          alert(`Partida 4: ${equipe6Chave10} vs ${equipe7Chave10}`)

          let vencedor4Chave10 = prompt("Digite o nome do vencedor da quarta partida:").toUpperCase()

          if (vencedor4Chave10 === equipe6Chave10 || vencedor4Chave10 === equipe7Chave10) {
            alert(`Partida 5: ${equipe8Chave10} vs ${equipe9Chave10}`)

            let vencedor5Chave10 = prompt("Digite o nome do vencedor da quinta partida:").toUpperCase()

            if (vencedor5Chave10 === equipe8Chave10 || vencedor5Chave10 === equipe9Chave10) {
              alert(`Partida 6: ${vencedor5Chave10} vs ${equipe10Chave10}`)

              let vencedor6Chave10 = prompt("Digite o nome do vencedor da sexta partida:").toUpperCase()

              if (vencedor6Chave10 === vencedor5Chave10 || vencedor6Chave10 === equipe10Chave10) {
                alert(`Semi final 1: ${vencedor2Chave10} vs ${vencedor3Chave10}`)

                let vencedorSemi1Chave10 = prompt("Digite o nome do vencedor da semi final 1:").toUpperCase()

                if (vencedorSemi1Chave10 === vencedor2Chave10 || vencedorSemi1Chave10 === vencedor3Chave10) {
                  alert(`Semi final 2: ${vencedor4Chave10} vs ${vencedor6Chave10}`)

                  let vencedorSemi2Chave10 = prompt("Digite o nome do vencedor da semi final 2:").toUpperCase()

                  if (vencedorSemi2Chave10 === vencedor4Chave10 || vencedorSemi2Chave10 === vencedor6Chave10) {
                    alert(`Grande final: ${vencedorSemi1Chave10} vs ${vencedorSemi2Chave10}`)

                    let vencedorFinalChave10 = prompt("Digite o nome do vencedor da final:").toUpperCase()

                    if (vencedorFinalChave10 != vencedorSemi1Chave10 && vencedorFinalChave10 != vencedorSemi2Chave10) {
                      alert("❌ Nome inválido! Essa equipe não participou da partida.")
                    } else {
                      alert(`🏆 Parabéns, ${vencedorFinalChave10}! Vocês são os campeões do torneio!`)
                    }
                  } else {
                    alert("❌ Nome inválido! Essa equipe não participou da Semi final 2.")
                  }
                } else {
                  alert("❌ Nome inválido! Essa equipe não participou da Semi final 1.")
                }
              } else {
                alert("❌ Nome inválido! Essa equipe não participou da partida.")
              }
            } else {
              alert("❌ Nome inválido! Essa equipe não participou da partida.")
            }
          } else {
            alert("❌ Nome inválido! Essa equipe não participou da partida.")
          }
        } else {
          alert("❌ Nome inválido! Essa equipe não participou da partida.")
        }
      } else {
        alert("❌ Nome inválido! Essa equipe não participou da partida.")
      }
    }
  } else if (chave === 5) {
    alert("chaveamento \n 1°Partida: " + equipe5Chave10 + " vs " + equipe4Chave10 + "\n 2°Partida: " + "Vencedor da 1°partida" + " vs " + equipe3Chave10 + "\n 3°Partida: " + equipe1Chave10 + " vs " + equipe2Chave10 + "\n 4°Partida: " + equipe6Chave10 + " vs " + equipe7Chave10 + "\n 5°Partida: " + equipe8Chave10 + " vs " + equipe9Chave10 + "\n 6°Partida: " + "Vencedor da 5°partida" + " vs " + equipe10Chave10)

    alert(`Partida 1: ${equipe5Chave10} vs ${equipe4Chave10}`)

    let vencedor1Chave10 = prompt("Digite o nome do vencedor da primeira partida:").toUpperCase()

    if (vencedor1Chave10 != equipe5Chave10 && vencedor1Chave10 != equipe4Chave10) {
      alert("❌ Nome inválido! Essa equipe não participou da partida.")
    } else {
      alert(`Partida 2: ${vencedor1Chave10} vs ${equipe3Chave10}`)

      let vencedor2Chave10 = prompt("Digite o nome do vencedor da segunda partida:").toUpperCase()

      if (vencedor2Chave10 === vencedor1Chave10 || vencedor2Chave10 === equipe3Chave10) {
        alert(`Partida 3: ${equipe1Chave10} vs ${equipe2Chave10}`)

        let vencedor3Chave10 = prompt("Digite o nome do vencedor da terceira partida:").toUpperCase()

        if (vencedor3Chave10 === equipe1Chave10 || vencedor3Chave10 === equipe2Chave10) {
          alert(`Partida 4: ${equipe6Chave10} vs ${equipe7Chave10}`)

          let vencedor4Chave10 = prompt("Digite o nome do vencedor da quarta partida:").toUpperCase()

          if (vencedor4Chave10 === equipe6Chave10 || vencedor4Chave10 === equipe7Chave10) {
            alert(`Partida 5: ${equipe8Chave10} vs ${equipe9Chave10}`)

            let vencedor5Chave10 = prompt("Digite o nome do vencedor da quinta partida:").toUpperCase()

            if (vencedor5Chave10 === equipe8Chave10 || vencedor5Chave10 === equipe9Chave10) {
              alert(`Partida 6: ${vencedor5Chave10} vs ${equipe10Chave10}`)

              let vencedor6Chave10 = prompt("Digite o nome do vencedor da sexta partida:").toUpperCase()

              if (vencedor6Chave10 === vencedor5Chave10 || vencedor6Chave10 === equipe10Chave10) {
                alert(`Semi final 1: ${vencedor2Chave10} vs ${vencedor3Chave10}`)

                let vencedorSemi1Chave10 = prompt("Digite o nome do vencedor da semi final 1:").toUpperCase()

                if (vencedorSemi1Chave10 === vencedor2Chave10 || vencedorSemi1Chave10 === vencedor3Chave10) {
                  alert(`Semi final 2: ${vencedor4Chave10} vs ${vencedor6Chave10}`)

                  let vencedorSemi2Chave10 = prompt("Digite o nome do vencedor da semi final 2:").toUpperCase()

                  if (vencedorSemi2Chave10 === vencedor4Chave10 || vencedorSemi2Chave10 === vencedor6Chave10) {
                    alert(`Grande final: ${vencedorSemi1Chave10} vs ${vencedorSemi2Chave10}`)

                    let vencedorFinalChave10 = prompt("Digite o nome do vencedor da final:").toUpperCase()

                    if (vencedorFinalChave10 != vencedorSemi1Chave10 && vencedorFinalChave10 != vencedorSemi2Chave10) {
                      alert("❌ Nome inválido! Essa equipe não participou da partida.")
                    } else {
                      alert(`🏆 Parabéns, ${vencedorFinalChave10}! Vocês são os campeões do torneio!`)
                    }
                  } else {
                    alert("❌ Nome inválido! Essa equipe não participou da Semi final 2.")
                  }
                } else {
                  alert("❌ Nome inválido! Essa equipe não participou da Semi final 1.")
                }
              } else {
                alert("❌ Nome inválido! Essa equipe não participou da partida.")
              }
            } else {
              alert("❌ Nome inválido! Essa equipe não participou da partida.")
            }
          } else {
            alert("❌ Nome inválido! Essa equipe não participou da partida.")
          }
        } else {
          alert("❌ Nome inválido! Essa equipe não participou da partida.")
        }
      }
    }
  } else if (chave === 6) {
    alert("chaveamento \n 1°Partida: " + equipe6Chave10 + " vs " + equipe7Chave10 + "\n 2°Partida: " + "Vencedor da 1°partida" + " vs " + equipe3Chave10 + "\n 3°Partida: " + equipe1Chave10 + " vs " + equipe2Chave10 + "\n 4°Partida: " + equipe4Chave10 + " vs " + equipe5Chave10 + "\n 5°Partida: " + equipe8Chave10 + " vs " + equipe9Chave10 + "\n 6°Partida: " + "Vencedor da 5°partida" + " vs " + equipe10Chave10)

    alert(`Partida 1: ${equipe6Chave10} vs ${equipe7Chave10}`)

    let vencedor1Chave10 = prompt("Digite o nome do vencedor da primeira partida:").toUpperCase()


    if (vencedor1Chave10 != equipe6Chave10 && vencedor1Chave10 != equipe7Chave10) {
      alert("❌ Nome inválido! Essa equipe não participou da partida.")
    } else {
      alert(`Partida 2: ${vencedor1Chave10} vs ${equipe3Chave10}`)

      let vencedor2Chave10 = prompt("Digite o nome do vencedor da segunda partida:").toUpperCase()

      if (vencedor2Chave10 === vencedor1Chave10 || vencedor2Chave10 === equipe3Chave10) {
        alert(`Partida 3: ${equipe1Chave10} vs ${equipe2Chave10}`)

        let vencedor3Chave10 = prompt("Digite o nome do vencedor da terceira partida:").toUpperCase()


        if (vencedor3Chave10 === equipe1Chave10 || vencedor3Chave10 === equipe2Chave10) {
          alert(`Partida 4: ${equipe4Chave10} vs ${equipe5Chave10}`)

          let vencedor4Chave10 = prompt("Digite o nome do vencedor da quarta partida:").toUpperCase()

          if (vencedor4Chave10 === equipe4Chave10 || vencedor4Chave10 === equipe5Chave10) {
            alert(`Partida 5: ${equipe8Chave10} vs ${equipe9Chave10}`)

            let vencedor5Chave10 = prompt("Digite o nome do vencedor da quinta partida:").toUpperCase()

            if (vencedor5Chave10 === equipe8Chave10 || vencedor5Chave10 === equipe9Chave10) {
              alert(`Partida 6: ${vencedor5Chave10} vs ${equipe10Chave10}`)

              let vencedor6Chave10 = prompt("Digite o nome do vencedor da sexta partida:").toUpperCase()

              if (vencedor6Chave10 === vencedor5Chave10 || vencedor6Chave10 === equipe10Chave10) {
                alert(`Semi final 1: ${vencedor2Chave10} vs ${vencedor3Chave10}`)

                let vencedorSemi1Chave10 = prompt("Digite o nome do vencedor da semi final 1:").toUpperCase()

                if (vencedorSemi1Chave10 === vencedor2Chave10 || vencedorSemi1Chave10 === vencedor3Chave10) {
                  alert(`Semi final 2: ${vencedor4Chave10} vs ${vencedor6Chave10}`)

                  let vencedorSemi2Chave10 = prompt("Digite o nome do vencedor da semi final 2:").toUpperCase()

                  if (vencedorSemi2Chave10 === vencedor4Chave10 || vencedorSemi2Chave10 === vencedor6Chave10) {
                    alert(`Grande final: ${vencedorSemi1Chave10} vs ${vencedorSemi2Chave10}`)

                    let vencedorFinalChave10 = prompt("Digite o nome do vencedor da final:").toUpperCase()

                    if (vencedorFinalChave10 != vencedorSemi1Chave10 && vencedorFinalChave10 != vencedorSemi2Chave10) {
                      alert("❌ Nome inválido! Essa equipe não participou da partida.")
                    } else {
                      alert(`🏆 Parabéns, ${vencedorFinalChave10}! Vocês são os campeões do torneio!`)
                    }
                  } else {
                    alert("❌ Nome inválido! Essa equipe não participou da Semi final 2.")
                  }
                } else {
                  alert("❌ Nome inválido! Essa equipe não participou da Semi final 1.")
                }
              } else {
                alert("❌ Nome inválido! Essa equipe não participou da partida.")
              }
            } else {
              alert("❌ Nome inválido! Essa equipe não participou da partida.")
            }
          } else {
            alert("❌ Nome inválido! Essa equipe não participou da partida.")
          }
        }
      } else {
        alert("❌ Nome inválido! Essa equipe não participou da partida.")
      }
    }
  } else if (chave === 7) {
    alert("chaveamento \n 1°Partida: " + equipe7Chave10 + " vs " + equipe6Chave10 + "\n 2°Partida: " + "Vencedor da 1°partida" + " vs " + equipe3Chave10 + "\n 3°Partida: " + equipe1Chave10 + " vs " + equipe2Chave10 + "\n 4°Partida: " + equipe4Chave10 + " vs " + equipe5Chave10 + "\n 5°Partida: " + equipe8Chave10 + " vs " + equipe9Chave10 + "\n 6°Partida: " + "Vencedor da 5°partida" + " vs " + equipe10Chave10)

    alert(`Partida 1: ${equipe7Chave10} vs ${equipe6Chave10}`)

    let vencedor1Chave10 = prompt("Digite o nome do vencedor da primeira partida:").toUpperCase()

    if (vencedor1Chave10 != equipe7Chave10 && vencedor1Chave10 != equipe6Chave10) {
      alert("❌ Nome inválido! Essa equipe não participou da partida.")
    } else {
      alert(`Partida 2: ${vencedor1Chave10} vs ${equipe3Chave10}`)

      let vencedor2Chave10 = prompt("Digite o nome do vencedor da segunda partida:").toUpperCase()

      if (vencedor2Chave10 === vencedor1Chave10 || vencedor2Chave10 === equipe3Chave10) {
        alert(`Partida 3: ${equipe1Chave10} vs ${equipe2Chave10}`)

        let vencedor3Chave10 = prompt("Digite o nome do vencedor da terceira partida:").toUpperCase()

        if (vencedor3Chave10 === equipe1Chave10 || vencedor3Chave10 === equipe2Chave10) {
          alert(`Partida 4: ${equipe4Chave10} vs ${equipe5Chave10}`)

          let vencedor4Chave10 = prompt("Digite o nome do vencedor da quarta partida:").toUpperCase()

          if (vencedor4Chave10 === equipe4Chave10 || vencedor4Chave10 === equipe5Chave10) {
            alert(`Partida 5: ${equipe8Chave10} vs ${equipe9Chave10}`)

            let vencedor5Chave10 = prompt("Digite o nome do vencedor da quinta partida:").toUpperCase()

            if (vencedor5Chave10 === equipe8Chave10 || vencedor5Chave10 === equipe9Chave10) {
              alert(`Partida 6: ${vencedor5Chave10} vs ${equipe10Chave10}`)

              let vencedor6Chave10 = prompt("Digite o nome do vencedor da sexta partida:").toUpperCase()

              if (vencedor6Chave10 === vencedor5Chave10 || vencedor6Chave10 === equipe10Chave10) {
                alert(`Semi final 1: ${vencedor2Chave10} vs ${vencedor3Chave10}`)

                let vencedorSemi1Chave10 = prompt("Digite o nome do vencedor da semi final 1:").toUpperCase()

                if (vencedorSemi1Chave10 === vencedor2Chave10 || vencedorSemi1Chave10 === vencedor3Chave10) {
                  alert(`Semi final 2: ${vencedor4Chave10} vs ${vencedor6Chave10}`)

                  let vencedorSemi2Chave10 = prompt("Digite o nome do vencedor da semi final 2:").toUpperCase()

                  if (vencedorSemi2Chave10 === vencedor4Chave10 || vencedorSemi2Chave10 === vencedor6Chave10) {
                    alert(`Grande final: ${vencedorSemi1Chave10} vs ${vencedorSemi2Chave10}`)

                    let vencedorFinalChave10 = prompt("Digite o nome do vencedor da final:").toUpperCase()

                    if (vencedorFinalChave10 != vencedorSemi1Chave10 && vencedorFinalChave10 != vencedorSemi2Chave10) {
                      alert("❌ Nome inválido! Essa equipe não participou da partida.")
                    } else {
                      alert(`🏆 Parabéns, ${vencedorFinalChave10}! Vocês são os campeões do torneio!`)
                    }
                  } else {
                    alert("❌ Nome inválido! Essa equipe não participou da Semi final 2.")
                  }
                } else {
                  alert("❌ Nome inválido! Essa equipe não participou da Semi final 1.")
                }
              }
            } else {
              alert("❌ Nome inválido! Essa equipe não participou da partida.")
            }
          } else {
            alert("❌ Nome inválido! Essa equipe não participou da partida.")
          }
        } else {
          alert("❌ Nome inválido! Essa equipe não participou da partida.")
        }
      } else {
        alert("❌ Nome inválido! Essa equipe não participou da partida.")
      }
    }
  } else if (chave === 8) {
    alert("chaveamento \n 1°Partida: " + equipe8Chave10 + " vs " + equipe9Chave10 + "\n 2°Partida: " + "Vencedor da 1°partida" + " vs " + equipe3Chave10 + "\n 3°Partida: " + equipe1Chave10 + " vs " + equipe2Chave10 + "\n 4°Partida: " + equipe4Chave10 + " vs " + equipe5Chave10 + "\n 5°Partida: " + equipe6Chave10 + " vs " + equipe7Chave10 + "\n 6°Partida: " + "Vencedor da 5°partida" + " vs " + equipe10Chave10)

    alert(`Partida 1: ${equipe8Chave10} vs ${equipe9Chave10}`)

    let vencedor1Chave10 = prompt("Digite o nome do vencedor da primeira partida:").toUpperCase()

    if (vencedor1Chave10 != equipe8Chave10 && vencedor1Chave10 != equipe9Chave10) {
      alert("❌ Nome inválido! Essa equipe não participou da partida.")
    } else {
      alert(`Partida 2: ${vencedor1Chave10} vs ${equipe3Chave10}`)

      let vencedor2Chave10 = prompt("Digite o nome do vencedor da segunda partida:").toUpperCase()
      if (vencedor2Chave10 === vencedor1Chave10 || vencedor2Chave10 === equipe3Chave10) {
        alert(`Partida 3: ${equipe1Chave10} vs ${equipe2Chave10}`)

        let vencedor3Chave10 = prompt("Digite o nome do vencedor da terceira partida:").toUpperCase()

        if (vencedor3Chave10 === equipe1Chave10 || vencedor3Chave10 === equipe2Chave10) {
          alert(`Partida 4: ${equipe4Chave10} vs ${equipe5Chave10}`)

          let vencedor4Chave10 = prompt("Digite o nome do vencedor da quarta partida:").toUpperCase()

          if (vencedor4Chave10 === equipe4Chave10 || vencedor4Chave10 === equipe5Chave10) {
            alert(`Partida 5: ${equipe6Chave10} vs ${equipe7Chave10}`)

            let vencedor5Chave10 = prompt("Digite o nome do vencedor da quinta partida:").toUpperCase()

            if (vencedor5Chave10 === equipe6Chave10 || vencedor5Chave10 === equipe7Chave10) {
              alert(`Partida 6: ${vencedor5Chave10} vs ${equipe10Chave10}`)

              let vencedor6Chave10 = prompt("Digite o nome do vencedor da sexta partida:").toUpperCase()

              if (vencedor6Chave10 === vencedor5Chave10 || vencedor6Chave10 === equipe10Chave10) {
                alert(`Semi final 1: ${vencedor2Chave10} vs ${vencedor3Chave10}`)

                let vencedorSemi1Chave10 = prompt("Digite o nome do vencedor da semi final 1:").toUpperCase()

                if (vencedorSemi1Chave10 === vencedor2Chave10 || vencedorSemi1Chave10 === vencedor3Chave10) {
                  alert(`Semi final 2: ${vencedor4Chave10} vs ${vencedor6Chave10}`)

                  let vencedorSemi2Chave10 = prompt("Digite o nome do vencedor da semi final 2:").toUpperCase()

                  if (vencedorSemi2Chave10 === vencedor4Chave10 || vencedorSemi2Chave10 === vencedor6Chave10) {
                    alert(`Grande final: ${vencedorSemi1Chave10} vs ${vencedorSemi2Chave10}`)

                    let vencedorFinalChave10 = prompt("Digite o nome do vencedor da final:").toUpperCase()

                    if (vencedorFinalChave10 != vencedorSemi1Chave10 && vencedorFinalChave10 != vencedorSemi2Chave10) {
                      alert("❌ Nome inválido! Essa equipe não participou da partida.")
                    } else {
                      alert(`🏆 Parabéns, ${vencedorFinalChave10}! Vocês são os campeões do torneio!`)
                    }
                  } else {
                    alert("❌ Nome inválido! Essa equipe não participou da Semi final 2.")
                  }
                } else {
                  alert("❌ Nome inválido! Essa equipe não participou da Semi final 1.")
                }
              } else {
                alert("❌ Nome inválido! Essa equipe não participou da partida.")
              }
            } else {
              alert("❌ Nome inválido! Essa equipe não participou da partida.")
            }
          } else {
            alert("❌ Nome inválido! Essa equipe não participou da partida.")
          }
        } else {
          alert("❌ Nome inválido! Essa equipe não participou da partida.")
        }
      }
    }
  } else if (chave === 9) {
    alert("chaveamento \n 1°Partida: " + equipe9Chave10 + " vs " + equipe8Chave10 + "\n 2°Partida: " + "Vencedor da 1°partida" + " vs " + equipe3Chave10 + "\n 3°Partida: " + equipe1Chave10 + " vs " + equipe2Chave10 + "\n 4°Partida: " + equipe4Chave10 + " vs " + equipe5Chave10 + "\n 5°Partida: " + equipe6Chave10 + " vs " + equipe7Chave10 + "\n 6°Partida: " + "Vencedor da 5°partida" + " vs " + equipe10Chave10)

    alert(`Partida 1: ${equipe9Chave10} vs ${equipe8Chave10}`)

    let vencedor1Chave10 = prompt("Digite o nome do vencedor da primeira partida:").toUpperCase()

    if (vencedor1Chave10 != equipe9Chave10 && vencedor1Chave10 != equipe8Chave10) {
      alert("❌ Nome inválido! Essa equipe não participou da partida.")
    } else {
      alert(`Partida 2: ${vencedor1Chave10} vs ${equipe3Chave10}`)

      let vencedor2Chave10 = prompt("Digite o nome do vencedor da segunda partida:").toUpperCase()

      if (vencedor2Chave10 === vencedor1Chave10 || vencedor2Chave10 === equipe3Chave10) {
        alert(`Partida 3: ${equipe1Chave10} vs ${equipe2Chave10}`)

        let vencedor3Chave10 = prompt("Digite o nome do vencedor da terceira partida:").toUpperCase()

        if (vencedor3Chave10 === equipe1Chave10 || vencedor3Chave10 === equipe2Chave10) {
          alert(`Partida 4: ${equipe4Chave10} vs ${equipe5Chave10}`)

          let vencedor4Chave10 = prompt("Digite o nome do vencedor da quarta partida:").toUpperCase()

          if (vencedor4Chave10 === equipe4Chave10 || vencedor4Chave10 === equipe5Chave10) {
            alert(`Partida 5: ${equipe6Chave10} vs ${equipe7Chave10}`)

            let vencedor5Chave10 = prompt("Digite o nome do vencedor da quinta partida:").toUpperCase()

            if (vencedor5Chave10 === equipe6Chave10 || vencedor5Chave10 === equipe7Chave10) {
              alert(`Partida 6: ${vencedor5Chave10} vs ${equipe10Chave10}`)

              let vencedor6Chave10 = prompt("Digite o nome do vencedor da sexta partida:").toUpperCase()

              if (vencedor6Chave10 === vencedor5Chave10 || vencedor6Chave10 === equipe10Chave10) {
                alert(`Semi final 1: ${vencedor2Chave10} vs ${vencedor3Chave10}`)

                let vencedorSemi1Chave10 = prompt("Digite o nome do vencedor da semi final 1:").toUpperCase()

                if (vencedorSemi1Chave10 === vencedor2Chave10 || vencedorSemi1Chave10 === vencedor3Chave10) {
                  alert(`Semi final 2: ${vencedor4Chave10} vs ${vencedor6Chave10}`)

                  let vencedorSemi2Chave10 = prompt("Digite o nome do vencedor da semi final 2:").toUpperCase()

                  if (vencedorSemi2Chave10 === vencedor4Chave10 || vencedorSemi2Chave10 === vencedor6Chave10) {
                    alert(`Grande final: ${vencedorSemi1Chave10} vs ${vencedorSemi2Chave10}`)

                    let vencedorFinalChave10 = prompt("Digite o nome do vencedor da final:").toUpperCase()

                    if (vencedorFinalChave10 != vencedorSemi1Chave10 && vencedorFinalChave10 != vencedorSemi2Chave10) {
                      alert("❌ Nome inválido! Essa equipe não participou da partida.")
                    } else {
                      alert(`🏆 Parabéns, ${vencedorFinalChave10}! Vocês são os campeões do torneio!`)
                    }
                  } else {
                    alert("❌ Nome inválido! Essa equipe não participou da Semi final 2.")
                  }
                } else {
                  alert("❌ Nome inválido! Essa equipe não participou da Semi final 1.")
                }
              } else {
                alert("❌ Nome inválido! Essa equipe não participou da partida.")
              }
            } else {
              alert("❌ Nome inválido! Essa equipe não participou da partida.")
            }
          } else {
            alert("❌ Nome inválido! Essa equipe não participou da partida.")
          }
        } else {
          alert("❌ Nome inválido! Essa equipe não participou da partida.")
        }
      } else {
        alert("❌ Nome inválido! Essa equipe não participou da partida.")
      }
    }
  } else if (chave === 10) {
    alert("chaveamento \n 1°Partida: " + equipe10Chave10 + " vs " + equipe9Chave10 + "\n 2°Partida: " + "Vencedor da 1°partida" + " vs " + equipe3Chave10 + "\n 3°Partida: " + equipe1Chave10 + " vs " + equipe2Chave10 + "\n 4°Partida: " + equipe4Chave10 + " vs " + equipe5Chave10 + "\n 5°Partida: " + equipe6Chave10 + " vs " + equipe7Chave10 + "\n 6°Partida: " + "Vencedor da 5°partida" + " vs " + equipe8Chave10)

    alert(`Partida 1: ${equipe10Chave10} vs ${equipe9Chave10}`)

    let vencedor1Chave10 = prompt("Digite o nome do vencedor da primeira partida:").toUpperCase()

    if (vencedor1Chave10 != equipe10Chave10 && vencedor1Chave10 != equipe9Chave10) {
      alert("❌ Nome inválido! Essa equipe não participou da partida.")
    } else {
      alert(`Partida 2: ${vencedor1Chave10} vs ${equipe3Chave10}`)

      let vencedor2Chave10 = prompt("Digite o nome do vencedor da segunda partida:").toUpperCase()

      if (vencedor2Chave10 === vencedor1Chave10 || vencedor2Chave10 === equipe3Chave10) {
        alert(`Partida 3: ${equipe1Chave10} vs ${equipe2Chave10}`)

        let vencedor3Chave10 = prompt("Digite o nome do vencedor da terceira partida:").toUpperCase()

        if (vencedor3Chave10 === equipe1Chave10 || vencedor3Chave10 === equipe2Chave10) {
          alert(`Partida 4: ${equipe4Chave10} vs ${equipe5Chave10}`)

          let vencedor4Chave10 = prompt("Digite o nome do vencedor da quarta partida:").toUpperCase()

          if (vencedor4Chave10 === equipe4Chave10 || vencedor4Chave10 === equipe5Chave10) {
            alert(`Partida 5: ${equipe6Chave10} vs ${equipe7Chave10}`)

            let vencedor5Chave10 = prompt("Digite o nome do vencedor da quinta partida:").toUpperCase()

            if (vencedor5Chave10 === equipe6Chave10 || vencedor5Chave10 === equipe7Chave10) {
              alert(`Partida 6: ${vencedor5Chave10} vs ${equipe8Chave10}`)

              let vencedor6Chave10 = prompt("Digite o nome do vencedor da sexta partida:").toUpperCase()

              if (vencedor6Chave10 === vencedor5Chave10 || vencedor6Chave10 === equipe8Chave10) {
                alert(`Semi final 1: ${vencedor2Chave10} vs ${vencedor3Chave10}`)

                let vencedorSemi1Chave10 = prompt("Digite o nome do vencedor da semi final 1:").toUpperCase()

                if (vencedorSemi1Chave10 === vencedor2Chave10 || vencedorSemi1Chave10 === vencedor3Chave10) {
                  alert(`Semi final 2: ${vencedor4Chave10} vs ${vencedor6Chave10}`)

                  let vencedorSemi2Chave10 = prompt("Digite o nome do vencedor da semi final 2:").toUpperCase()

                  if (vencedorSemi2Chave10 === vencedor4Chave10 || vencedorSemi2Chave10 === vencedor6Chave10) {
                    alert(`Grande final: ${vencedorSemi1Chave10} vs ${vencedorSemi2Chave10}`)

                    let vencedorFinalChave10 = prompt("Digite o nome do vencedor da final:").toUpperCase()

                    if (vencedorFinalChave10 != vencedorSemi1Chave10 && vencedorFinalChave10 != vencedorSemi2Chave10) {
                      alert("❌ Nome inválido! Essa equipe não participou da partida.")
                    } else {
                      alert(`🏆 Parabéns, ${vencedorFinalChave10}! Vocês são os campeões do torneio!`)
                    }
                  } else {
                    alert("❌ Nome inválido! Essa equipe não participou da Semi final 2.")
                  }
                } else {
                  alert("❌ Nome inválido! Essa equipe não participou da Semi final 1.")
                }
              } else {
                alert("❌ Nome inválido! Essa equipe não participou da partida.")
              }
            } else {
              alert("❌ Nome inválido! Essa equipe não participou da partida.")
            }
          } else {
            alert("❌ Nome inválido! Essa equipe não participou da partida.")
          }
        } else {
          alert("❌ Nome inválido! Essa equipe não participou da partida.")
        }
      } else {
        alert("❌ Nome inválido! Essa equipe não participou da partida.")
      }
    }
  }
} else if (equipes === "11" || equipes === "11 equipes") {
  let equipe1Chave11 = prompt("Digite o nome da PRIMEIRA equipe:").toUpperCase()
  let equipe2Chave11 = prompt("Digite o nome da SEGUNDA equipe:").toUpperCase()
  let equipe3Chave11 = prompt("Digite o nome da TERCEIRA equipe:").toUpperCase()
  let equipe4Chave11 = prompt("Digite o nome da QUARTA equipe:").toUpperCase()
  let equipe5Chave11 = prompt("Digite o nome da QUINTA equipe:").toUpperCase()
  let equipe6Chave11 = prompt("Digite o nome da SEXTA equipe:").toUpperCase()
  let equipe7Chave11 = prompt("Digite o nome da SÉTIMA equipe:").toUpperCase()
  let equipe8Chave11 = prompt("Digite o nome da OITAVA equipe:").toUpperCase()
  let equipe9Chave11 = prompt("Digite o nome da NONA equipe:").toUpperCase()
  let equipe10Chave11 = prompt("Digite o nome da DÉCIMA equipe:").toUpperCase()
  let equipe11Chave11 = prompt("Digite o nome da DÉCIMA PRIMEIRA equipe:").toUpperCase()

  let chave = Math.floor(Math.random() * 11) + 1

  alert(`Sorteio realizado! Vamos ver o chaveamento...`)

  if (chave === 1) {
    alert("chaveamento \n 1°Partida: " + equipe1Chave11 + " vs " + equipe2Chave11 + "\n 2°Partida: " + "Vencedor da 1°partida" + " vs " + equipe3Chave11 + "\n 3°Partida: " + equipe4Chave11 + " vs " + equipe5Chave11 + "\n 4°Partida: " + equipe6Chave11 + " vs " + equipe7Chave11 + "\n 5°Partida: " + equipe8Chave11 + " vs " + equipe9Chave11 + "\n 6°Partida: " + equipe10Chave11 + " vs " + equipe11Chave11)

    alert(`Partida 1: ${equipe1Chave11} vs ${equipe2Chave11}`)

    let vencedor1Chave11 = prompt("Digite o nome do vencedor da primeira partida:").toUpperCase()

    if (vencedor1Chave11 != equipe1Chave11 && vencedor1Chave11 != equipe2Chave11) {
      alert("❌ Nome inválido! Essa equipe não participou da partida.")
    } else {
      alert(`Partida 2: ${vencedor1Chave11} vs ${equipe3Chave11}`)

      let vencedor2Chave11 = prompt("Digite o nome do vencedor da segunda partida:").toUpperCase()

      if (vencedor2Chave11 === vencedor1Chave11 || vencedor2Chave11 === equipe3Chave11) {
        alert(`Partida 3: ${equipe4Chave11} vs ${equipe5Chave11}`)

        let vencedor3Chave11 = prompt("Digite o nome do vencedor da terceira partida:").toUpperCase()

        if (vencedor3Chave11 === equipe4Chave11 || vencedor3Chave11 === equipe5Chave11) {
          alert(`Partida 4: ${equipe6Chave11} vs ${equipe7Chave11}`)

          let vencedor4Chave11 = prompt("Digite o nome do vencedor da quarta partida:").toUpperCase()

          if (vencedor4Chave11 === equipe6Chave11 || vencedor4Chave11 === equipe7Chave11) {
            alert(`Partida 5: ${equipe8Chave11} vs ${equipe9Chave11}`)

            let vencedor5Chave11 = prompt("Digite o nome do vencedor da quinta partida:").toUpperCase()

            if (vencedor5Chave11 === equipe8Chave11 || vencedor5Chave11 === equipe9Chave11) {
              alert(`Partida 6: ${equipe10Chave11} vs ${equipe11Chave11}`)

              let vencedor6Chave11 = prompt("Digite o nome do vencedor da sexta partida:").toUpperCase()

              if (vencedor6Chave11 === equipe10Chave11 || vencedor6Chave11 === equipe11Chave11) {
                alert(`Semi final 1: ${vencedor2Chave11} vs ${vencedor3Chave11}`)

                let vencedorSemi1Chave11 = prompt("Digite o nome do vencedor da semi final 1:").toUpperCase()

                if (vencedorSemi1Chave11 === vencedor2Chave11 || vencedorSemi1Chave11 === vencedor3Chave11) {
                  alert(`Semi final 2: ${vencedor4Chave11} vs ${vencedor6Chave11}`)

                  let vencedorSemi2Chave11 = prompt("Digite o nome do vencedor da semi final 2:").toUpperCase()

                  if (vencedorSemi2Chave11 === vencedor4Chave11 || vencedorSemi2Chave11 === vencedor6Chave11) {
                    alert(`Grande final: ${vencedorSemi1Chave11} vs ${vencedorSemi2Chave11}`)

                    let vencedorFinalChave11 = prompt("Digite o nome do vencedor da final:").toUpperCase()

                    if (vencedorFinalChave11 != vencedorSemi1Chave11 && vencedorFinalChave11 != vencedorSemi2Chave11) {
                      alert("❌ Nome inválido! Essa equipe não participou da partida.")
                    } else {
                      alert(`🏆 Parabéns, ${vencedorFinalChave11}! Vocês são os campeões do torneio!`)
                    }
                  } else {
                    alert("❌ Nome inválido! Essa equipe não participou da Semi final 2.")
                  }
                } else {
                  alert("❌ Nome inválido! Essa equipe não participou da Semi final 1.")
                }
              } else {
                alert("❌ Nome inválido! Essa equipe não participou da partida.")
              }
            } else {
              alert("❌ Nome inválido! Essa equipe não participou da partida.")
            }
          } else {
            alert("❌ Nome inválido! Essa equipe não participou da partida.")
          }
        } else {
          alert("❌ Nome inválido! Essa equipe não participou da partida.")
        }
      } else {
        alert("❌ Nome inválido! Essa equipe não participou da partida.")
      }
    }
  } else if (chave === 2) {
    alert("chaveamento \n 1°Partida: " + equipe2Chave11 + " vs " + equipe5Chave11 + "\n 2°Partida: " + "Vencedor da 1°partida" + " vs " + equipe4Chave11 + "\n 3°Partida: " + equipe1Chave11 + " vs " + equipe3Chave11 + "\n 4°Partida: " + equipe8Chave11 + " vs " + equipe9Chave11 + "\n 5°Partida: " + equipe6Chave11 + " vs " + equipe7Chave11 + "\n 6°Partida: " + equipe10Chave11 + " vs " + equipe11Chave11)

    alert(`Partida 1: ${equipe2Chave11} vs ${equipe5Chave11}`)

    let vencedor1Chave11 = prompt("Digite o nome do vencedor da primeira partida:").toUpperCase()

    if (vencedor1Chave11 != equipe2Chave11 && vencedor1Chave11 != equipe5Chave11) {
      alert("❌ Nome inválido! Essa equipe não participou da partida.")
    } else {
      alert(`Partida 2: ${vencedor1Chave11} vs ${equipe4Chave11}`)

      let vencedor2Chave11 = prompt("Digite o nome do vencedor da segunda partida:").toUpperCase()

      if (vencedor2Chave11 === vencedor1Chave11 || vencedor2Chave11 === equipe4Chave11) {
        alert(`Partida 3: ${equipe1Chave11} vs ${equipe3Chave11}`)

        let vencedor3Chave11 = prompt("Digite o nome do vencedor da terceira partida:").toUpperCase()

        if (vencedor3Chave11 === equipe1Chave11 || vencedor3Chave11 === equipe3Chave11) {
          alert(`Partida 4: ${equipe8Chave11} vs ${equipe9Chave11}`)

          let vencedor4Chave11 = prompt("Digite o nome do vencedor da quarta partida:").toUpperCase()

          if (vencedor4Chave11 === equipe8Chave11 || vencedor4Chave11 === equipe9Chave11) {
            alert(`Partida 5: ${equipe6Chave11} vs ${equipe7Chave11}`)

            let vencedor5Chave11 = prompt("Digite o nome do vencedor da quinta partida:").toUpperCase()

            if (vencedor5Chave11 === equipe6Chave11 || vencedor5Chave11 === equipe7Chave11) {
              alert(`Partida 6: ${equipe10Chave11} vs ${equipe11Chave11}`)

              let vencedor6Chave11 = prompt("Digite o nome do vencedor da sexta partida:").toUpperCase()

              if (vencedor6Chave11 === equipe10Chave11 || vencedor6Chave11 === equipe11Chave11) {
                alert(`Semi final 1: ${vencedor2Chave11} vs ${vencedor3Chave11}`)

                let vencedorSemi1Chave11 = prompt("Digite o nome do vencedor da semi final 1:").toUpperCase()

                if (vencedorSemi1Chave11 === vencedor2Chave11 || vencedorSemi1Chave11 === vencedor3Chave11) {
                  alert(`Semi final 2: ${vencedor4Chave11} vs ${vencedor6Chave11}`)

                  let vencedorSemi2Chave11 = prompt("Digite o nome do vencedor da semi final 2:").toUpperCase()
                  if (vencedorSemi2Chave11 === vencedor4Chave11 || vencedorSemi2Chave11 === vencedor6Chave11) {
                    alert(`Grande final: ${vencedorSemi1Chave11} vs ${vencedorSemi2Chave11}`)

                    let vencedorFinalChave11 = prompt("Digite o nome do vencedor da final:").toUpperCase()

                    if (vencedorFinalChave11 != vencedorSemi1Chave11 && vencedorFinalChave11 != vencedorSemi2Chave11) {
                      alert("❌ Nome inválido! Essa equipe não participou da partida.")
                    } else {
                      alert(`🏆 Parabéns, ${vencedorFinalChave11}! Vocês são os campeões do torneio!`)
                    }
                  } else {
                    alert("❌ Nome inválido! Essa equipe não participou da Semi final 2.")
                  }
                } else {
                  alert("❌ Nome inválido! Essa equipe não participou da Semi final 1.")
                }
              } else {
                alert("❌ Nome inválido! Essa equipe não participou da partida.")
              }
            } else {
              alert("❌ Nome inválido! Essa equipe não participou da partida.")
            }
          } else {
            alert("❌ Nome inválido! Essa equipe não participou da partida.")
          }
        } else {
          alert("❌ Nome inválido! Essa equipe não participou da partida.")
        }
      } else {
        alert("❌ Nome inválido! Essa equipe não participou da partida.")
      }
    }
  } else if (chave === 3) {
    alert("chaveamento \n 1°Partida: " + equipe3Chave11 + " vs " + equipe6Chave11 + "\n 2°Partida: " + "Vencedor da 1°partida" + " vs " + equipe5Chave11 + "\n 3°Partida: " + equipe1Chave11 + " vs " + equipe2Chave11 + "\n 4°Partida: " + equipe8Chave11 + " vs " + equipe9Chave11 + "\n 5°Partida: " + equipe4Chave11 + " vs " + equipe7Chave11 + "\n 6°Partida: " + equipe10Chave11 + " vs " + equipe11Chave11)

    alert(`Partida 1: ${equipe3Chave11} vs ${equipe6Chave11}`)

    let vencedor1Chave11 = prompt("Digite o nome do vencedor da primeira partida:").toUpperCase()

    if (vencedor1Chave11 != equipe3Chave11 && vencedor1Chave11 != equipe6Chave11) {
      alert("❌ Nome inválido! Essa equipe não participou da partida.")
    } else {
      alert(`Partida 2: ${vencedor1Chave11} vs ${equipe5Chave11}`)

      let vencedor2Chave11 = prompt("Digite o nome do vencedor da segunda partida:").toUpperCase()

      if (vencedor2Chave11 === vencedor1Chave11 || vencedor2Chave11 === equipe5Chave11) {
        alert(`Partida 3: ${equipe1Chave11} vs ${equipe2Chave11}`)

        let vencedor3Chave11 = prompt("Digite o nome do vencedor da terceira partida:").toUpperCase()


        if (vencedor3Chave11 === equipe1Chave11 || vencedor3Chave11 === equipe2Chave11) {
          alert(`Partida 4: ${equipe8Chave11} vs ${equipe9Chave11}`)

          let vencedor4Chave11 = prompt("Digite o nome do vencedor da quarta partida:").toUpperCase()

          if (vencedor4Chave11 === equipe8Chave11 || vencedor4Chave11 === equipe9Chave11) {
            alert(`Partida 5: ${equipe4Chave11} vs ${equipe7Chave11}`)

            let vencedor5Chave11 = prompt("Digite o nome do vencedor da quinta partida:").toUpperCase()

            if (vencedor5Chave11 === equipe4Chave11 || vencedor5Chave11 === equipe7Chave11) {
              alert(`Partida 6: ${equipe10Chave11} vs ${equipe11Chave11}`)

              let vencedor6Chave11 = prompt("Digite o nome do vencedor da sexta partida:").toUpperCase()

              if (vencedor6Chave11 === equipe10Chave11 || vencedor6Chave11 === equipe11Chave11) {
                alert(`Semi final 1: ${vencedor2Chave11} vs ${vencedor3Chave11}`)

                let vencedorSemi1Chave11 = prompt("Digite o nome do vencedor da semi final 1:").toUpperCase()

                if (vencedorSemi1Chave11 === vencedor2Chave11 || vencedorSemi1Chave11 === vencedor3Chave11) {
                  alert(`Semi final 2: ${vencedor4Chave11} vs ${vencedor6Chave11}`)

                  let vencedorSemi2Chave11 = prompt("Digite o nome do vencedor da semi final 2:").toUpperCase()

                  if (vencedorSemi2Chave11 === vencedor4Chave11 || vencedorSemi2Chave11 === vencedor6Chave11) {
                    alert(`Grande final: ${vencedorSemi1Chave11} vs ${vencedorSemi2Chave11}`)

                    let vencedorFinalChave11 = prompt("Digite o nome do vencedor da final:").toUpperCase()

                    if (vencedorFinalChave11 != vencedorSemi1Chave11 && vencedorFinalChave11 != vencedorSemi2Chave11) {
                      alert("❌ Nome inválido! Essa equipe não participou da partida.")
                    } else {
                      alert(`🏆 Parabéns, ${vencedorFinalChave11}! Vocês são os campeões do torneio!`)
                    }
                  } else {
                    alert("❌ Nome inválido! Essa equipe não participou da Semi final 2.")
                  }
                } else {
                  alert("❌ Nome inválido! Essa equipe não participou da Semi final 1.")
                }
              } else {
                alert("❌ Nome inválido! Essa equipe não participou da partida.")
              }
            } else {
              alert("❌ Nome inválido! Essa equipe não participou da partida.")
            }
          } else {
            alert("❌ Nome inválido! Essa equipe não participou da partida.")
          }
        } else {
          alert("❌ Nome inválido! Essa equipe não participou da partida.")
        }
      } else {
        alert("❌ Nome inválido! Essa equipe não participou da partida.")
      }
    }
  } else if (chave === 4) {
    alert("chaveamento \n 1°Partida: " + equipe4Chave11 + " vs " + equipe7Chave11 + "\n 2°Partida: " + "Vencedor da 1°partida" + " vs " + equipe6Chave11 + "\n 3°Partida: " + equipe1Chave11 + " vs " + equipe2Chave11 + "\n 4°Partida: " + equipe8Chave11 + " vs " + equipe9Chave11 + "\n 5°Partida: " + equipe3Chave11 + " vs " + equipe5Chave11 + "\n 6°Partida: " + equipe10Chave11 + " vs " + equipe11Chave11)

    alert(`Partida 1: ${equipe4Chave11} vs ${equipe7Chave11}`)

    let vencedor1Chave11 = prompt("Digite o nome do vencedor da primeira partida:").toUpperCase()

    if (vencedor1Chave11 != equipe4Chave11 && vencedor1Chave11 != equipe7Chave11) {
      alert("❌ Nome inválido! Essa equipe não participou da partida.")
    } else {
      alert(`Partida 2: ${vencedor1Chave11} vs ${equipe6Chave11}`)

      let vencedor2Chave11 = prompt("Digite o nome do vencedor da segunda partida:").toUpperCase()

      if (vencedor2Chave11 === vencedor1Chave11 || vencedor2Chave11 === equipe6Chave11) {
        alert(`Partida 3: ${equipe1Chave11} vs ${equipe2Chave11}`)

        let vencedor3Chave11 = prompt("Digite o nome do vencedor da terceira partida:").toUpperCase()

        if (vencedor3Chave11 === equipe1Chave11 || vencedor3Chave11 === equipe2Chave11) {
          alert(`Partida 4: ${equipe8Chave11} vs ${equipe9Chave11}`)

          let vencedor4Chave11 = prompt("Digite o nome do vencedor da quarta partida:").toUpperCase()

          if (vencedor4Chave11 === equipe8Chave11 || vencedor4Chave11 === equipe9Chave11) {
            alert(`Partida 5: ${equipe3Chave11} vs ${equipe5Chave11}`)

            let vencedor5Chave11 = prompt("Digite o nome do vencedor da quinta partida:").toUpperCase()

            if (vencedor5Chave11 === equipe3Chave11 || vencedor5Chave11 === equipe5Chave11) {
              alert(`Partida 6: ${equipe10Chave11} vs ${equipe11Chave11}`)

              let vencedor6Chave11 = prompt("Digite o nome do vencedor da sexta partida:").toUpperCase()

              if (vencedor6Chave11 === equipe10Chave11 || vencedor6Chave11 === equipe11Chave11) {
                alert(`Semi final 1: ${vencedor2Chave11} vs ${vencedor3Chave11}`)

                let vencedorSemi1Chave11 = prompt("Digite o nome do vencedor da semi final 1:").toUpperCase()

                if (vencedorSemi1Chave11 === vencedor2Chave11 || vencedorSemi1Chave11 === vencedor3Chave11) {
                  alert(`Semi final 2: ${vencedor4Chave11} vs ${vencedor6Chave11}`)

                  let vencedorSemi2Chave11 = prompt("Digite o nome do vencedor da semi final 2:").toUpperCase()

                  if (vencedorSemi2Chave11 === vencedor4Chave11 || vencedorSemi2Chave11 === vencedor6Chave11) {
                    alert(`Grande final: ${vencedorSemi1Chave11} vs ${vencedorSemi2Chave11}`)

                    let vencedorFinalChave11 = prompt("Digite o nome do vencedor da final:").toUpperCase()

                    if (vencedorFinalChave11 != vencedorSemi1Chave11 && vencedorFinalChave11 != vencedorSemi2Chave11) {
                      alert("❌ Nome inválido! Essa equipe não participou da partida.")
                    } else {
                      alert(`🏆 Parabéns, ${vencedorFinalChave11}! Vocês são os campeões do torneio!`)
                    }
                  } else {
                    alert("❌ Nome inválido! Essa equipe não participou da Semi final 2.")
                  }
                } else {
                  alert("❌ Nome inválido! Essa equipe não participou da Semi final 1.")
                }
              } else {
                alert("❌ Nome inválido! Essa equipe não participou da partida.")
              }
            } else {
              alert("❌ Nome inválido! Essa equipe não participou da partida.")
            }
          } else {
            alert("❌ Nome inválido! Essa equipe não participou da partida.")
          }
        } else {
          alert("❌ Nome inválido! Essa equipe não participou da partida.")
        }
      } else {
        alert("❌ Nome inválido! Essa equipe não participou da partida.")
      }
    }
  } else if (chave === 5) {
    alert("chaveamento \n 1°Partida: " + equipe5Chave11 + " vs " + equipe8Chave11 + "\n 2°Partida: " + "Vencedor da 1°partida" + " vs " + equipe7Chave11 + "\n 3°Partida: " + equipe1Chave11 + " vs " + equipe2Chave11 + "\n 4°Partida: " + equipe4Chave11 + " vs " + equipe6Chave11 + "\n 5°Partida: " + equipe3Chave11 + " vs " + equipe9Chave11 + "\n 6°Partida: " + equipe10Chave11 + " vs " + equipe11Chave11)

    alert(`Partida 1: ${equipe5Chave11} vs ${equipe8Chave11}`)

    let vencedor1Chave11 = prompt("Digite o nome do vencedor da primeira partida:").toUpperCase()

    if (vencedor1Chave11 != equipe5Chave11 && vencedor1Chave11 != equipe8Chave11) {
      alert("❌ Nome inválido! Essa equipe não participou da partida.")
    } else {
      alert(`Partida 2: ${vencedor1Chave11} vs ${equipe7Chave11}`)

      let vencedor2Chave11 = prompt("Digite o nome do vencedor da segunda partida:").toUpperCase()

      if (vencedor2Chave11 === vencedor1Chave11 || vencedor2Chave11 === equipe7Chave11) {
        alert(`Partida 3: ${equipe1Chave11} vs ${equipe2Chave11}`)

        let vencedor3Chave11 = prompt("Digite o nome do vencedor da terceira partida:").toUpperCase()

        if (vencedor3Chave11 === equipe1Chave11 || vencedor3Chave11 === equipe2Chave11) {
          alert(`Partida 4: ${equipe4Chave11} vs ${equipe6Chave11}`)

          let vencedor4Chave11 = prompt("Digite o nome do vencedor da quarta partida:").toUpperCase()

          if (vencedor4Chave11 === equipe4Chave11 || vencedor4Chave11 === equipe6Chave11) {
            alert(`Partida 5: ${equipe3Chave11} vs ${equipe9Chave11}`)

            let vencedor5Chave11 = prompt("Digite o nome do vencedor da quinta partida:").toUpperCase()

            if (vencedor5Chave11 === equipe3Chave11 || vencedor5Chave11 === equipe9Chave11) {
              alert(`Partida 6: ${equipe10Chave11} vs ${equipe11Chave11}`)

              let vencedor6Chave11 = prompt("Digite o nome do vencedor da sexta partida:").toUpperCase()

              if (vencedor6Chave11 === equipe10Chave11 || vencedor6Chave11 === equipe11Chave11) {
                alert(`Semi final 1: ${vencedor2Chave11} vs ${vencedor3Chave11}`)

                let vencedorSemi1Chave11 = prompt("Digite o nome do vencedor da semi final 1:").toUpperCase()
                if (vencedorSemi1Chave11 === vencedor2Chave11 || vencedorSemi1Chave11 === vencedor3Chave11) {
                  alert(`Semi final 2: ${vencedor4Chave11} vs ${vencedor6Chave11}`)

                  let vencedorSemi2Chave11 = prompt("Digite o nome do vencedor da semi final 2:").toUpperCase()

                  if (vencedorSemi2Chave11 === vencedor4Chave11 || vencedorSemi2Chave11 === vencedor6Chave11) {
                    alert(`Final: ${vencedorSemi1Chave11} vs ${vencedorSemi2Chave11}`)
                  } else {
                    alert("❌ Nome inválido! Essa equipe não participou da semi final 2.")
                  }
                } else {
                  alert("❌ Nome inválido! Essa equipe não participou da semi final 1.")
                }
              } else {
                alert("❌ Nome inválido! Essa equipe não participou da partida.")
              }
            } else {
              alert("❌ Nome inválido! Essa equipe não participou da partida.")
            }
          } else {
            alert("❌ Nome inválido! Essa equipe não participou da partida.")
          }
        } else {
          alert("❌ Nome inválido! Essa equipe não participou da partida.")
        }
      } else {
        alert("❌ Nome inválido! Essa equipe não participou da partida.")
      }
    }
  } else if (chave === 6) {
    alert("chaveamento \n 1°Partida: " + equipe1Chave11 + " vs " + equipe6Chave11 + "\n 2°Partida: " + "Vencedor da 1°partida" + " vs " + equipe9Chave11 + "\n 3°Partida: " + equipe2Chave11 + " vs " + equipe7Chave11 + "\n 4°Partida: " + equipe3Chave11 + " vs " + equipe8Chave11 + "\n 5°Partida: " + equipe4Chave11 + " vs " + equipe10Chave11 + "\n 6°Partida: " + equipe5Chave11 + " vs " + equipe11Chave11)

    alert(`Partida 1: ${equipe1Chave11} vs ${equipe6Chave11}`)

    let vencedor1Chave11 = prompt("Digite o nome do vencedor da primeira partida:").toUpperCase()

    if (vencedor1Chave11 != equipe1Chave11 && vencedor1Chave11 != equipe6Chave11) {
      alert("❌ Nome inválido! Essa equipe não participou da partida.")
    } else {
      alert(`Partida 2: ${vencedor1Chave11} vs ${equipe9Chave11}`)

      let vencedor2Chave11 = prompt("Digite o nome do vencedor da segunda partida:").toUpperCase()
      if (vencedor2Chave11 === vencedor1Chave11 || vencedor2Chave11 === equipe9Chave11) {
        alert(`Partida 3: ${equipe2Chave11} vs ${equipe7Chave11}`)

        let vencedor3Chave11 = prompt("Digite o nome do vencedor da terceira partida:").toUpperCase()

        if (vencedor3Chave11 === equipe2Chave11 || vencedor3Chave11 === equipe7Chave11) {
          alert(`Partida 4: ${equipe3Chave11} vs ${equipe8Chave11}`)

          let vencedor4Chave11 = prompt("Digite o nome do vencedor da quarta partida:").toUpperCase()

          if (vencedor4Chave11 === equipe3Chave11 || vencedor4Chave11 === equipe8Chave11) {
            alert(`Partida 5: ${equipe4Chave11} vs ${equipe10Chave11}`)

            let vencedor5Chave11 = prompt("Digite o nome do vencedor da quinta partida:").toUpperCase()

            if (vencedor5Chave11 === equipe4Chave11 || vencedor5Chave11 === equipe10Chave11) {
              alert(`Partida 6: ${equipe5Chave11} vs ${equipe11Chave11}`)

              let vencedor6Chave11 = prompt("Digite o nome do vencedor da sexta partida:").toUpperCase()

              if (vencedor6Chave11 === equipe5Chave11 || vencedor6Chave11 === equipe11Chave11) {
                alert(`Semi final 1: ${vencedor2Chave11} vs ${vencedor3Chave11}`)

                let vencedorSemi1Chave11 = prompt("Digite o nome do vencedor da semi final 1:").toUpperCase()

                if (vencedorSemi1Chave11 === vencedor2Chave11 || vencedorSemi1Chave11 === vencedor3Chave11) {
                  alert(`Semi final 2: ${vencedor4Chave11} vs ${vencedor6Chave11}`)

                  let vencedorSemi2Chave11 = prompt("Digite o nome do vencedor da semi final 2:").toUpperCase()

                  if (vencedorSemi2Chave11 === vencedor4Chave11 || vencedorSemi2Chave11 === vencedor6Chave11) {
                    alert(`Grande final: ${vencedorSemi1Chave11} vs ${vencedorSemi2Chave11}`)

                    let vencedorFinalChave11 = prompt("Digite o nome do vencedor da final:").toUpperCase()

                    if (vencedorFinalChave11 != vencedorSemi1Chave11 && vencedorFinalChave11 != vencedorSemi2Chave11) {
                      alert("❌ Nome inválido! Essa equipe não participou da partida.")
                    } else {
                      alert(`🏆 Parabéns, ${vencedorFinalChave11}! Vocês são os campeões do torneio!`)
                    }
                  } else {
                    alert("❌ Nome inválido! Essa equipe não participou da Semi final 2.")
                  }
                } else {
                  alert("❌ Nome inválido! Essa equipe não participou da Semi final 1.")
                }
              } else {
                alert("❌ Nome inválido! Essa equipe não participou da partida.")
              }
            } else {
              alert("❌ Nome inválido! Essa equipe não participou da partida.")
            }
          } else {
            alert("❌ Nome inválido! Essa equipe não participou da partida.")
          }
        } else {
          alert("❌ Nome inválido! Essa equipe não participou da partida.")
        }
      } else {
        alert("❌ Nome inválido! Essa equipe não participou da partida.")
      }
    }
  } else if (chave === 7) {
    alert("chaveamento \n 1°Partida: " + equipe6Chave11 + " vs " + equipe9Chave11 + "\n 2°Partida: " + "Vencedor da 1°partida" + " vs " + equipe8Chave11 + "\n 3°Partida: " + equipe1Chave11 + " vs " + equipe2Chave11 + "\n 4°Partida: " + equipe4Chave11 + " vs " + equipe5Chave11 + "\n 5°Partida: " + equipe3Chave11 + " vs " + equipe7Chave11 + "\n 6°Partida: " + equipe10Chave11 + " vs " + equipe11Chave11)

    alert(`Partida 1: ${equipe6Chave11} vs ${equipe9Chave11}`)

    let vencedor1Chave11 = prompt("Digite o nome do vencedor da primeira partida:").toUpperCase()

    if (vencedor1Chave11 != equipe6Chave11 && vencedor1Chave11 != equipe9Chave11) {
      alert("❌ Nome inválido! Essa equipe não participou da partida.")
    } else {
      alert(`Partida 2: ${vencedor1Chave11} vs ${equipe8Chave11}`)

      let vencedor2Chave11 = prompt("Digite o nome do vencedor da segunda partida:").toUpperCase()

      if (vencedor2Chave11 === vencedor1Chave11 || vencedor2Chave11 === equipe8Chave11) {
        alert(`Partida 3: ${equipe1Chave11} vs ${equipe2Chave11}`)

        let vencedor3Chave11 = prompt("Digite o nome do vencedor da terceira partida:").toUpperCase()


        if (vencedor3Chave11 === equipe1Chave11 || vencedor3Chave11 === equipe2Chave11) {
          alert(`Partida 4: ${equipe4Chave11} vs ${equipe5Chave11}`)

          let vencedor4Chave11 = prompt("Digite o nome do vencedor da quarta partida:").toUpperCase()

          if (vencedor4Chave11 === equipe4Chave11 || vencedor4Chave11 === equipe5Chave11) {
            alert(`Partida 5: ${equipe3Chave11} vs ${equipe7Chave11}`)

            let vencedorsemi1Chave11 = prompt("Digite o nome do vencedor da quinta partida:").toUpperCase()

            if (vencedorsemi1Chave11 === equipe3Chave11 || vencedorsemiChave11 === equipe7Chave11) {
              alert(`Partida 6: ${equipe10Chave11} vs ${equipe11Chave11}`)

              let vencedorsemi2Chave11 = prompt("Digite o nome do vencedor da sexta partida:").toUpperCase()

              if (vencedorsemi2Chave11 === equipe10Chave11 || vencedorsemi2Chave11 === equipe11Chave11) {
                alert(`Grande final: ${vencedorsemi1Chave11} vs ${vencedorsemi2Chave11}`)

                let vencedorFinalChave11 = prompt("Digite o nome do vencedor da final:").toUpperCase()

                if (vencedorFinalChave11 != vencedorsemi1Chave11 && vencedorFinalChave11 != vencedorsemi2Chave11) {
                  alert("❌ Nome inválido! Essa equipe não participou da final.")
                } else {
                  alert(`🏆 Parabéns, ${vencedorFinalChave11}! Vocês são os campeões do torneio!`)
                }
              } else {
                alert("❌ Nome inválido! Essa equipe não participou da semi final 2.")
              }
            } else {
              alert("❌ Nome inválido! Essa equipe não participou da semi final 1.")
            }
          } else {
            alert("❌ Nome inválido! Essa equipe não participou da partida.")
          }
        } else {
          alert("❌ Nome inválido! Essa equipe não participou da partida.")
        }
      } else {
        alert("❌ Nome inválido! Essa equipe não participou da partida.")
      }
    }
  } else if (chave === 8) {
    alert("chaveamento \n 1°Partida: " + equipe7Chave11 + " vs " + equipe10Chave11 + "\n 2°Partida: " + "Vencedor da 1°partida" + " vs " + equipe9Chave11 + "\n 3°Partida: " + equipe1Chave11 + " vs " + equipe2Chave11 + "\n 4°Partida: " + equipe4Chave11 + " vs " + equipe5Chave11 + "\n 5°Partida: " + equipe3Chave11 + " vs " + equipe6Chave11 + "\n 6°Partida: " + equipe8Chave11 + " vs " + equipe11Chave11)

    alert(`Partida 1: ${equipe7Chave11} vs ${equipe10Chave11}`)

    let vencedor1Chave11 = prompt("Digite o nome do vencedor da primeira partida:").toUpperCase()

    if (vencedor1Chave11 != equipe7Chave11 && vencedor1Chave11 != equipe10Chave11) {
      alert("❌ Nome inválido! Essa equipe não participou da partida.")
    } else {
      alert(`Partida 2: ${vencedor1Chave11} vs ${equipe9Chave11}`)

      let vencedor2Chave11 = prompt("Digite o nome do vencedor da segunda partida:").toUpperCase()

      if (vencedor2Chave11 === vencedor1Chave11 || vencedor2Chave11 === equipe9Chave11) {
        alert(`Partida 3: ${equipe1Chave11} vs ${equipe2Chave11}`)

        let vencedor3Chave11 = prompt("Digite o nome do vencedor da terceira partida:").toUpperCase()

        if (vencedor3Chave11 === equipe1Chave11 || vencedor3Chave11 === equipe2Chave11) {
          alert(`Partida 4: ${equipe4Chave11} vs ${equipe5Chave11}`)

          let vencedor4Chave11 = prompt("Digite o nome do vencedor da quarta partida:").toUpperCase()

          if (vencedor4Chave11 === equipe4Chave11 || vencedor4Chave11 === equipe5Chave11) {
            alert(`Partida 5: ${equipe3Chave11} vs ${equipe6Chave11}`)

            let vencedor5Chave11 = prompt("Digite o nome do vencedor da quinta partida:").toUpperCase()

            if (vencedor5Chave11 === equipe3Chave11 || vencedor5Chave11 === equipe6Chave11) {
              alert(`Partida 6: ${equipe8Chave11} vs ${equipe11Chave11}`)

              let vencedor6Chave11 = prompt("Digite o nome do vencedor da sexta partida:").toUpperCase()

              if (vencedor6Chave11 === equipe8Chave11 || vencedor6Chave11 === equipe11Chave11) {
                alert(`Semi final 1: ${vencedor2Chave11} vs ${vencedor3Chave11}`)

                let vencedorSemi1Chave11 = prompt("Digite o nome do vencedor da semi final 1:").toUpperCase()

                if (vencedorSemi1Chave11 === vencedor2Chave11 || vencedorSemi1Chave11 === vencedor3Chave11) {
                  alert(`Semi final 2: ${vencedor4Chave11} vs ${vencedor6Chave11}`)

                  let vencedorSemi2Chave11 = prompt("Digite o nome do vencedor da semi final 2:").toUpperCase()

                  if (vencedorSemi2Chave11 === vencedor4Chave11 || vencedorSemi2Chave11 === vencedor6Chave11) {
                    alert(`Grande final: ${vencedorSemi1Chave11} vs ${vencedorSemi2Chave11}`)

                    let vencedorFinalChave11 = prompt("Digite o nome do vencedor da final:").toUpperCase()

                    if (vencedorFinalChave11 != vencedorSemi1Chave11 && vencedorFinalChave11 != vencedorSemi2Chave11) {
                      alert("❌ Nome inválido! Essa equipe não participou da final.")
                    } else {
                      alert(`🏆 Parabéns, ${vencedorFinalChave11}! Vocês são os campeões do torneio!`)
                    }
                  } else {
                    alert("❌ Nome inválido! Essa equipe não participou da Semi final 2.")
                  }
                } else {
                  alert("❌ Nome inválido! Essa equipe não participou da Semi final 1.")
                }
              } else {
                alert("❌ Nome inválido! Essa equipe não participou da partida.")
              }
            } else {
              alert("❌ Nome inválido! Essa equipe não participou da partida.")
            }
          } else {
            alert("❌ Nome inválido! Essa equipe não participou da partida.")
          }
        } else {
          alert("❌ Nome inválido! Essa equipe não participou da partida.")
        }
      } else {
        alert("❌ Nome inválido! Essa equipe não participou da partida.")
      }
    }
  } else if (chave === 9) {
    alert("chaveamento \n 1°Partida: " + equipe8Chave11 + " vs " + equipe11Chave11 + "\n 2°Partida: " + "Vencedor da 1°partida" + " vs " + equipe10Chave11 + "\n 3°Partida: " + equipe1Chave11 + " vs " + equipe2Chave11 + "\n 4°Partida: " + equipe4Chave11 + " vs " + equipe5Chave11 + "\n 5°Partida: " + equipe3Chave11 + " vs " + equipe6Chave11 + "\n 6°Partida: " + equipe7Chave11 + " vs " + equipe9Chave11)

    alert(`Partida 1: ${equipe8Chave11} vs ${equipe11Chave11}`)

    let vencedor1Chave11 = prompt("Digite o nome do vencedor da primeira partida:").toUpperCase()

    if (vencedor1Chave11 != equipe8Chave11 && vencedor1Chave11 != equipe11Chave11) {
      alert("❌ Nome inválido! Essa equipe não participou da partida.")
    } else {
      alert(`Partida 2: ${vencedor1Chave11} vs ${equipe10Chave11}`)

      let vencedor2Chave11 = prompt("Digite o nome do vencedor da segunda partida:").toUpperCase()

      if (vencedor2Chave11 === vencedor1Chave11 || vencedor2Chave11 === equipe10Chave11) {
        alert(`Partida 3: ${equipe1Chave11} vs ${equipe2Chave11}`)

        let vencedor3Chave11 = prompt("Digite o nome do vencedor da terceira partida:").toUpperCase()

        if (vencedor3Chave11 === equipe1Chave11 || vencedor3Chave11 === equipe2Chave11) {
          alert(`Partida 4: ${equipe4Chave11} vs ${equipe5Chave11}`)

          let vencedor4Chave11 = prompt("Digite o nome do vencedor da quarta partida:").toUpperCase()

          if (vencedor4Chave11 === equipe4Chave11 || vencedor4Chave11 === equipe5Chave11) {
            alert(`Partida 5: ${equipe3Chave11} vs ${equipe6Chave11}`)

            let vencedor5Chave11 = prompt("Digite o nome do vencedor da quinta partida:").toUpperCase()

            if (vencedor5Chave11 === equipe3Chave11 || vencedor5Chave11 === equipe6Chave11) {
              alert(`Partida 6: ${equipe7Chave11} vs ${equipe9Chave11}`)

              let vencedor6Chave11 = prompt("Digite o nome do vencedor da sexta partida:").toUpperCase()

              if (vencedor6Chave11 === equipe7Chave11 || vencedor6Chave11 === equipe9Chave11) {
                alert(`Semi final 1: ${vencedor2Chave11} vs ${vencedor3Chave11}`)

                let vencedorSemi1Chave11 = prompt("Digite o nome do vencedor da semi final 1:").toUpperCase()

                if (vencedorSemi1Chave11 === vencedor2Chave11 || vencedorSemi1Chave11 === vencedor3Chave11) {
                  alert(`Semi final 2: ${vencedor4Chave11} vs ${vencedor6Chave11}`)

                  let vencedorSemi2Chave11 = prompt("Digite o nome do vencedor da semi final 2:").toUpperCase()

                  if (vencedorSemi2Chave11 === vencedor4Chave11 || vencedorSemi2Chave11 === vencedor6Chave11) {
                    alert(`Grande final: ${vencedorSemi1Chave11} vs ${vencedorSemi2Chave11}`)

                    let vencedorFinalChave11 = prompt("Digite o nome do vencedor da final:").toUpperCase()

                    if (vencedorFinalChave11 != vencedorSemi1Chave11 && vencedorFinalChave11 != vencedorSemi2Chave11) {
                      alert("❌ Nome inválido! Essa equipe não participou da final.")
                    } else {
                      alert(`🏆 Parabéns, ${vencedorFinalChave11}! Vocês são os campeões do torneio!`)
                    }
                  } else {
                    alert("❌ Nome inválido! Essa equipe não participou da Semi final 2.")
                  }
                } else {
                  alert("❌ Nome inválido! Essa equipe não participou da Semi final 1.")
                }
              } else {
                alert("❌ Nome inválido! Essa equipe não participou da partida.")
              }
            } else {
              alert("❌ Nome inválido! Essa equipe não participou da partida.")
            }
          } else {
            alert("❌ Nome inválido! Essa equipe não participou da partida.")
          }
        } else {
          alert("❌ Nome inválido! Essa equipe não participou da partida.")
        }
      } else {
        alert("❌ Nome inválido! Essa equipe não participou da partida.")
      }
    }
  } else if (chave === 10) {
    alert("chaveamento \n 1°Partida: " + equipe7Chave11 + " vs " + equipe10Chave11 + "\n 2°Partida: " + "Vencedor da 1°partida" + " vs " + equipe9Chave11 + "\n 3°Partida: " + equipe1Chave11 + " vs " + equipe2Chave11 + "\n 4°Partida: " + equipe4Chave11 + " vs " + equipe5Chave11 + "\n 5°Partida: " + equipe3Chave11 + " vs " + equipe6Chave11 + "\n 6°Partida: " + equipe8Chave11 + " vs " + equipe11Chave11)

    alert(`Partida 1: ${equipe7Chave11} vs ${equipe10Chave11}`)

    let vencedor1Chave11 = prompt("Digite o nome do vencedor da primeira partida:").toUpperCase()

    if (vencedor1Chave11 != equipe7Chave11 && vencedor1Chave11 != equipe10Chave11) {
      alert("❌ Nome inválido! Essa equipe não participou da partida.")
    } else {
      alert(`Partida 2: ${vencedor1Chave11} vs ${equipe9Chave11}`)

      let vencedor2Chave11 = prompt("Digite o nome do vencedor da segunda partida:").toUpperCase()

      if (vencedor2Chave11 === vencedor1Chave11 || vencedor2Chave11 === equipe9Chave11) {
        alert(`Partida 3: ${equipe1Chave11} vs ${equipe2Chave11}`)

        let vencedor3Chave11 = prompt("Digite o nome do vencedor da terceira partida:").toUpperCase()

        if (vencedor3Chave11 === equipe1Chave11 || vencedor3Chave11 === equipe2Chave11) {
          alert(`Partida 4: ${equipe4Chave11} vs ${equipe5Chave11}`)

          let vencedor4Chave11 = prompt("Digite o nome do vencedor da quarta partida:").toUpperCase()

          if (vencedor4Chave11 === equipe4Chave11 || vencedor4Chave11 === equipe5Chave11) {
            alert(`Partida 5: ${equipe3Chave11} vs ${equipe6Chave11}`)

            let vencedor5Chave11 = prompt("Digite o nome do vencedor da quinta partida:").toUpperCase()

            if (vencedor5Chave11 === equipe3Chave11 || vencedor5Chave11 === equipe6Chave11) {
              alert(`Partida 6: ${equipe8Chave11} vs ${equipe11Chave11}`)

              let vencedor6Chave11 = prompt("Digite o nome do vencedor da sexta partida:").toUpperCase()

              if (vencedor6Chave11 === equipe8Chave11 || vencedor6Chave11 === equipe11Chave11) {
                alert(`Semi final 1: ${vencedor2Chave11} vs ${vencedor3Chave11}`)

                let vencedorSemi1Chave11 = prompt("Digite o nome do vencedor da semi final 1:").toUpperCase()

                if (vencedorSemi1Chave11 === vencedor2Chave11 || vencedorSemi1Chave11 === vencedor3Chave11) {
                  alert(`Semi final 2: ${vencedor4Chave11} vs ${vencedor6Chave11}`)

                  let vencedorSemi2Chave11 = prompt("Digite o nome do vencedor da semi final 2:").toUpperCase()

                  if (vencedorSemi2Chave11 === vencedor4Chave11 || vencedorSemi2Chave11 === vencedor6Chave11) {
                    alert(`Grande final: ${vencedorSemi1Chave11} vs ${vencedorSemi2Chave11}`)

                    let vencedorFinalChave11 = prompt("Digite o nome do vencedor da final:").toUpperCase()

                    if (vencedorFinalChave11 != vencedorSemi1Chave11 && vencedorFinalChave11 != vencedorSemi2Chave11) {
                      alert("❌ Nome inválido! Essa equipe não participou da final.")
                    } else {
                      alert(`🏆 Parabéns, ${vencedorFinalChave11}! Vocês são os campeões do torneio!`)
                    }
                  } else {
                    alert("❌ Nome inválido! Essa equipe não participou da Semi final 2.")
                  }
                } else {
                  alert("❌ Nome inválido! Essa equipe não participou da Semi final 1.")
                }
              } else {
                alert("❌ Nome inválido! Essa equipe não participou da partida.")
              }
            } else {
              alert("❌ Nome inválido! Essa equipe não participou da partida.")
            }
          } else {
            alert("❌ Nome inválido! Essa equipe não participou da partida.")
          }
        } else {
          alert("❌ Nome inválido! Essa equipe não participou da partida.")
        }
      } else {
        alert("❌ Nome inválido! Essa equipe não participou da partida.")
      }
    }
  } else if (chave === 11) {
    alert("chaveamento \n 1°Partida: " + equipe8Chave11 + " vs " + equipe11Chave11 + "\n 2°Partida: " + "Vencedor da 1°partida" + " vs " + equipe10Chave11 + "\n 3°Partida: " + equipe1Chave11 + " vs " + equipe2Chave11 + "\n 4°Partida: " + equipe4Chave11 + " vs " + equipe5Chave11 + "\n 5°Partida: " + equipe3Chave11 + " vs " + equipe6Chave11 + "\n 6°Partida: " + equipe7Chave11 + " vs " + equipe9Chave11)

    alert(`Partida 1: ${equipe8Chave11} vs ${equipe11Chave11}`)

    let vencedor1Chave11 = prompt("Digite o nome do vencedor da primeira partida:").toUpperCase()

    if (vencedor1Chave11 != equipe8Chave11 && vencedor1Chave11 != equipe11Chave11) {
      alert("❌ Nome inválido! Essa equipe não participou da partida.")
    } else {
      alert(`Partida 2: ${vencedor1Chave11} vs ${equipe10Chave11}`)

      let vencedor2Chave11 = prompt("Digite o nome do vencedor da segunda partida:").toUpperCase()

      if (vencedor2Chave11 === vencedor1Chave11 || vencedor2Chave11 === equipe10Chave11) {
        alert(`Partida 3: ${equipe1Chave11} vs ${equipe2Chave11}`)

        let vencedor3Chave11 = prompt("Digite o nome do vencedor da terceira partida:").toUpperCase()

        if (vencedor3Chave11 === equipe1Chave11 || vencedor3Chave11 === equipe2Chave11) {
          alert(`Partida 4: ${equipe4Chave11} vs ${equipe5Chave11}`)

          let vencedor4Chave11 = prompt("Digite o nome do vencedor da quarta partida:").toUpperCase()

          if (vencedor4Chave11 === equipe4Chave11 || vencedor4Chave11 === equipe5Chave11) {
            alert(`Partida 5: ${equipe3Chave11} vs ${equipe6Chave11}`)

            let vencedor5Chave11 = prompt("Digite o nome do vencedor da quinta partida:").toUpperCase()

            if (vencedor5Chave11 === equipe3Chave11 || vencedor5Chave11 === equipe6Chave11) {
              alert(`Partida 6: ${equipe7Chave11} vs ${equipe9Chave11}`)

              let vencedor6Chave11 = prompt("Digite o nome do vencedor da sexta partida:").toUpperCase()

              if (vencedor6Chave11 === equipe7Chave11 || vencedor6Chave11 === equipe9Chave11) {
                alert(`Semi final 1: ${vencedor2Chave11} vs ${vencedor3Chave11}`)

                let vencedorSemi1Chave11 = prompt("Digite o nome do vencedor da semi final 1:").toUpperCase()

                if (vencedorSemi1Chave11 === vencedor2Chave11 || vencedorSemi1Chave11 === vencedor3Chave11) {
                  alert(`Semi final 2: ${vencedor4Chave11} vs ${vencedor6Chave11}`)

                  let vencedorSemi2Chave11 = prompt("Digite o nome do vencedor da semi final 2:").toUpperCase()

                  if (vencedorSemi2Chave11 === vencedor4Chave11 || vencedorSemi2Chave11 === vencedor6Chave11) {
                    alert(`Grande final: ${vencedorSemi1Chave11} vs ${vencedorSemi2Chave11}`)

                    let vencedorFinalChave11 = prompt("Digite o nome do vencedor da final:").toUpperCase()

                    if (vencedorFinalChave11 != vencedorSemi1Chave11 && vencedorFinalChave11 != vencedorSemi2Chave11) {
                      alert("❌ Nome inválido! Essa equipe não participou da final.")
                    } else {
                      alert(`🏆 Parabéns, ${vencedorFinalChave11}! Vocês são os campeões do torneio!`)
                    }
                  } else {
                    alert("❌ Nome inválido! Essa equipe não participou da Semi final 2.")
                  }
                } else {
                  alert("❌ Nome inválido! Essa equipe não participou da Semi final 1.")
                }
              } else {
                alert("❌ Nome inválido! Essa equipe não participou da partida.")
              }
            } else {
              alert("❌ Nome inválido! Essa equipe não participou da partida.")
            }
          } else {
            alert("❌ Nome inválido! Essa equipe não participou da partida.")
          }
        } else {
          alert("❌ Nome inválido! Essa equipe não participou da partida.")
        }
      } else {
        alert("❌ Nome inválido! Essa equipe não participou da partida.")
      }
    }
  }
} else if (equipes === "12" || equipes === "12 equipes") {
  let equipe1Chave12 = prompt("Digite o nome da PRIMEIRA equipe:").toUpperCase()
  let equipe2Chave12 = prompt("Digite o nome da SEGUNDA equipe:").toUpperCase()
  let equipe3Chave12 = prompt("Digite o nome da TERCEIRA equipe:").toUpperCase()
  let equipe4Chave12 = prompt("Digite o nome da QUARTA equipe:").toUpperCase()
  let equipe5Chave12 = prompt("Digite o nome da QUINTA equipe:").toUpperCase()
  let equipe6Chave12 = prompt("Digite o nome da SEXTA equipe:").toUpperCase()
  let equipe7Chave12 = prompt("Digite o nome da SÉTIMA equipe:").toUpperCase()
  let equipe8Chave12 = prompt("Digite o nome da OITAVA equipe:").toUpperCase()
  let equipe9Chave12 = prompt("Digite o nome da NONA equipe:").toUpperCase()
  let equipe10Chave12 = prompt("Digite o nome da DÉCIMA equipe:").toUpperCase()
  let equipe11Chave12 = prompt("Digite o nome da DÉCIMA PRIMEIRA equipe:").toUpperCase()
  let equipe12Chave12 = prompt("Digite o nome da DÉCIMA SEGUNDA equipe:").toUpperCase()

  let chave = Math.floor(Math.random() * 12) + 1

  alert(`Sorteio realizado! Vamos ver o chaveamento...`)

  if (chave === 1) {
    alert("chaveamento \n 1°Partida: " + equipe1Chave12 + " vs " + equipe2Chave12 + "\n 2°Partida: " + equipe3Chave12 + " vs " + equipe4Chave12 + "\n 3°Partida: " + equipe5Chave12 + " vs " + equipe6Chave12 + "\n 4°Partida: " + equipe7Chave12 + " vs " + equipe8Chave12 + "\n 5°Partida: " + equipe9Chave12 + " vs " + equipe10Chave12 + "\n 6°Partida: " + equipe11Chave12 + " vs " + equipe12Chave12)

    alert(`Partida 1: ${equipe1Chave12} vs ${equipe2Chave12}`)

    let vencedor1Chave12 = prompt("Digite o nome do vencedor da primeira partida:").toUpperCase()

    if (vencedor1Chave12 != equipe1Chave12 && vencedor1Chave12 != equipe2chave12) {
      alert("❌ Nome inválido! Essa equipe não participou da partida.")
    } else {
      alert(`Partida 2: ${equipe3Chave12} vs ${equipe4Chave12}`)

      let vencedor2Chave12 = prompt("Digite o nome do vencedor da segunda partida:").toUpperCase()

      if (vencedor2Chave12 === equipe3Chave12 || vencedor2Chave12 === equipe4Chave12) {
        alert(`Partida 3: ${equipe5Chave12} vs ${equipe6Chave12}`)

        let vencedor3Chave12 = prompt("Digite o nome do vencedor da terceira partida:").toUpperCase()

        if (vencedor3Chave12 === equipe5Chave12 || vencedor3Chave12 === equipe6Chave12) {
          alert(`Partida 4: ${equipe7Chave12} vs ${equipe8Chave12}`)

          let vencedor4Chave12 = prompt("Digite o nome do vencedor da quarta partida:").toUpperCase()

          if (vencedor4Chave12 === equipe7Chave12 || vencedor4Chave12 === equipe8Chave12) {
            alert(`Partida 5: ${equipe9Chave12} vs ${equipe10Chave12}`)

            let vencedor5Chave12 = prompt("Digite o nome do vencedor da quinta partida:").toUpperCase()

            if (vencedor5Chave12 === equipe9Chave12 || vencedor5Chave12 === equipe10Chave12) {
              alert(`Partida 6: ${equipe11Chave12} vs ${equipe12Chave12}`)

              let vencedor6Chave12 = prompt("Digite o nome do vencedor da sexta partida:").toUpperCase()

              if (vencedor6Chave12 === equipe11Chave12 || vencedor6Chave12 === equipe12Chave12) {

                alert(`Quartas 1: ${vencedor1Chave12} vs ${vencedor2Chave12}`)

                let vencedorQuartas1 = prompt("Digite o vencedor da quartas 1:").toUpperCase()

                if (vencedorQuartas1 === vencedor1Chave12 || vencedorQuartas1 === vencedor2Chave12) {
                  alert(`Quartas 2: ${vencedor3Chave12} vs ${vencedor4Chave12}`)

                  let vencedorQuartas2 = prompt("Digite o vencedor da quartas 2:").toUpperCase()
                  if (vencedorQuartas2 === vencedor3Chave12 || vencedorQuartas2 === vencedor2Chave12) {
                    alert(`Quartas 3: ${vencedor5Chave12} vs ${vencedor6Chave12}`)

                    let vencedorQuartas3 = prompt("Digite o vencedor da quartas 3:").toUpperCase()
                    if (vencedorQuartas3 === vencedor5Chave12 || vencedorQuartas3 === vencedor6Chave12) {

                      alert(`semi final: ${vencedorQuartas1} vs ${vencedorQuartas2}`)

                      let vencedorSemi = prompt("Digite o vencedor da semi final:").toUpperCase()

                      if (vencedorSemi === vencedorQuartas1 || vencedorSemi === vencedorQuartas2) {
                        alert(`Grande final: ${vencedorSemi} vs ${vencedorQuartas3}`)

                        let vencedorFinalChave12 = prompt("Digite o nome do vencedor da final:").toUpperCase()

                        if (vencedorFinalChave12 != vencedorSemi && vencedorFinalChave12 != vencedorQuartas3) {
                          alert("❌ Nome inválido! Essa equipe não participou da final.")
                        } else {
                          alert(`🏆 Parabéns, ${vencedorFinalChave12}! Vocês são os campeões do torneio!`)
                        }
                      } else {
                        alert("❌ Nome inválido! Essa equipe não participou da Semi final")
                      }
                    } else {
                      alert("❌ Nome inválido! Essa equipe não participou das quartas de finais")
                    }
                  } else {
                    alert("❌ Nome inválido! Essa equipe não participou das quartas de finais")
                  }
                } else {
                  alert("❌ Nome inválido! Essa equipe não participou das quartas de finais")
                }
              } else {
                alert("❌ Nome inválido! Essa equipe não participou da partida.")
              }
            } else {
              alert("❌ Nome inválido! Essa equipe não participou da partida.")
            }
          } else {
            alert("❌ Nome inválido! Essa equipe não participou da partida.")
          }
        } else {
          alert("❌ Nome inválido! Essa equipe não participou da partida.")
        }
      } else {
        alert("❌ Nome inválido! Essa equipe não participou da partida.")
      }
    }
  } else if (chave === 2) {
    alert("chaveamento \n 1°Partida: " + equipe1Chave12 + " vs " + equipe3Chave12 + "\n 2°Partida: " + equipe2Chave12 + " vs " + equipe5Chave12 + "\n 3°Partida: " + equipe4Chave12 + " vs " + equipe6Chave12 + "\n 4°Partida: " + equipe7Chave12 + " vs " + equipe9Chave12 + "\n 5°Partida: " + equipe8Chave12 + " vs " + equipe10Chave12 + "\n 6°Partida: " + equipe11Chave12 + " vs " + equipe12Chave12)

    alert(`Partida 1: ${equipe1Chave12} vs ${equipe3Chave12}`)

    let vencedor1Chave12 = prompt("Digite o nome do vencedor da primeira partida:").toUpperCase()

    if (vencedor1Chave12 != equipe1Chave12 && vencedor1Chave12 != equipe3chave12) {
      alert("❌ Nome inválido! Essa equipe não participou da partida.")
    } else {
      alert(`Partida 2: ${equipe2Chave12} vs ${equipe5Chave12}`)

      let vencedor2Chave12 = prompt("Digite o nome do vencedor da segunda partida:").toUpperCase()

      if (vencedor2Chave12 === equipe2Chave12 || vencedor2Chave12 === equipe5Chave12) {
        alert(`Partida 3: ${equipe4Chave12} vs ${equipe6Chave12}`)

        let vencedor3Chave12 = prompt("Digite o nome do vencedor da terceira partida:").toUpperCase()

        if (vencedor3Chave12 === equipe4Chave12 || vencedor3Chave12 === equipe6Chave12) {
          alert(`Partida 4: ${equipe7Chave12} vs ${equipe9Chave12}`)

          let vencedor4Chave12 = prompt("Digite o nome do vencedor da quarta partida:").toUpperCase()

          if (vencedor4Chave12 === equipe7Chave12 || vencedor4Chave12 === equipe9Chave12) {
            alert(`Partida 5: ${equipe8Chave12} vs ${equipe10Chave12}`)

            let vencedor5Chave12 = prompt("Digite o nome do vencedor da quinta partida:").toUpperCase()

            if (vencedor5Chave12 === equipe8Chave12 || vencedor5Chave12 === equipe10Chave12) {
              alert(`Partida 6: ${equipe11Chave12} vs ${equipe12Chave12}`)

              let vencedor6Chave12 = prompt("Digite o nome do vencedor da sexta partida:").toUpperCase()

              if (vencedor6Chave12 === equipe11Chave12 || vencedor6Chave12 === equipe12Chave12) {

                alert(`Quartas 1: ${vencedor1Chave12} vs ${vencedor2Chave12}`)

                let vencedorQuartas1 = prompt("Digite o vencedor da quartas 1:").toUpperCase()

                if (vencedorQuartas1 === vencedor1Chave12 || vencedorQuartas1 === vencedor2Chave12) {
                  alert(`Quartas 2: ${vencedor3Chave12} vs ${vencedor4Chave12}`)

                  let vencedorQuartas2 = prompt("Digite o vencedor da quartas 2:").toUpperCase()
                  if (vencedorQuartas2 === vencedor3Chave12 || vencedorQuartas2 === vencedor2Chave12) {
                    alert(`Quartas 3: ${vencedor5Chave12} vs ${vencedor6Chave12}`)

                    let vencedorQuartas3 = prompt("Digite o vencedor da quartas 3:").toUpperCase()
                    if (vencedorQuartas3 === vencedor5Chave12 || vencedorQuartas3 === vencedor6Chave12) {

                      alert(`semi final: ${vencedorQuartas1} vs ${vencedorQuartas2}`)

                      let vencedorSemi = prompt("Digite o vencedor da semi final:").toUpperCase()

                      if (vencedorSemi === vencedorQuartas1 || vencedorSemi === vencedorQuartas2) {
                        alert(`Grande final: ${vencedorSemi} vs ${vencedorQuartas3}`)

                        let vencedorFinalChave12 = prompt("Digite o nome do vencedor da final:").toUpperCase()

                        if (vencedorFinalChave12 != vencedorSemi && vencedorFinalChave12 != vencedorQuartas3) {
                          alert("❌ Nome inválido! Essa equipe não participou da final.")
                        } else {
                          alert(`🏆 Parabéns, ${vencedorFinalChave12}! Vocês são os campeões do torneio!`)
                        }
                      } else {
                        alert("❌ Nome inválido! Essa equipe não participou da Semi final")
                      }
                    } else {
                      alert("❌ Nome inválido! Essa equipe não participou das quartas de finais")
                    }
                  } else {
                    alert("❌ Nome inválido! Essa equipe não participou das quartas de finais")
                  }
                } else {
                  alert("❌ Nome inválido! Essa equipe não participou das quartas de finais")
                }
              } else {
                alert("❌ Nome inválido! Essa equipe não participou da partida.")
              }
            } else {
              alert("❌ Nome inválido! Essa equipe não participou da partida.")
            }
          } else {
            alert("❌ Nome inválido! Essa equipe não participou da partida.")
          }
        } else {
          alert("❌ Nome inválido! Essa equipe não participou da partida.")
        }
      } else {
        alert("❌ Nome inválido! Essa equipe não participou da partida.")
      }
    }
  } else if (chave === 3) {
    alert("chaveamento \n 1°Partida: " + equipe1Chave12 + " vs " + equipe4Chave12 + "\n 2°Partida: " + equipe2Chave12 + " vs " + equipe6Chave12 + "\n 3°Partida: " + equipe3Chave12 + " vs " + equipe5Chave12 + "\n 4°Partida: " + equipe7Chave12 + " vs " + equipe10Chave12 + "\n 5°Partida: " + equipe8Chave12 + " vs " + equipe9Chave12 + "\n 6°Partida: " + equipe11Chave12 + " vs " + equipe12Chave12)

    alert(`Partida 1: ${equipe1Chave12} vs ${equipe4Chave12}`)

    let vencedor1Chave12 = prompt("Digite o nome do vencedor da primeira partida:").toUpperCase()

    if (vencedor1Chave12 != equipe1Chave12 && vencedor1Chave12 != equipe4chave12) {
      alert("❌ Nome inválido! Essa equipe não participou da partida.")
    } else {
      alert(`Partida 2: ${equipe2Chave12} vs ${equipe6Chave12}`)

      let vencedor2Chave12 = prompt("Digite o nome do vencedor da segunda partida:").toUpperCase()

      if (vencedor2Chave12 === equipe2Chave12 || vencedor2Chave12 === equipe6Chave12) {
        alert(`Partida 3: ${equipe3Chave12} vs ${equipe5Chave12}`)

        let vencedor3Chave12 = prompt("Digite o nome do vencedor da terceira partida:").toUpperCase()

        if (vencedor3Chave12 === equipe3Chave12 || vencedor3Chave12 === equipe5Chave12) {
          alert(`Partida 4: ${equipe7Chave12} vs ${equipe10Chave12}`)

          let vencedor4Chave12 = prompt("Digite o nome do vencedor da quarta partida:").toUpperCase()

          if (vencedor4Chave12 === equipe7Chave12 || vencedor4Chave12 === equipe10Chave12) {
            alert(`Partida 5: ${equipe8Chave12} vs ${equipe9Chave12}`)

            let vencedor5Chave12 = prompt("Digite o nome do vencedor da quinta partida:").toUpperCase()

            if (vencedor5Chave12 === equipe8Chave12 || vencedor5Chave12 === equipe9Chave12) {
              alert(`Partida 6: ${equipe11Chave12} vs ${equipe12Chave12}`)

              let vencedor6Chave12 = prompt("Digite o nome do vencedor da sexta partida:").toUpperCase()

              if (vencedor6Chave12 === equipe11Chave12 || vencedor6Chave12 === equipe12Chave12) {

                alert(`Quartas 1: ${vencedor1Chave12} vs ${vencedor2Chave12}`)

                let vencedorQuartas1 = prompt("Digite o vencedor da quartas 1:").toUpperCase()

                if (vencedorQuartas1 === vencedor1Chave12 || vencedorQuartas1 === vencedor2Chave12) {
                  alert(`Quartas 2: ${vencedor3Chave12} vs ${vencedor4Chave12}`)

                  let vencedorQuartas2 = prompt("Digite o vencedor da quartas 2:").toUpperCase()
                  if (vencedorQuartas2 === vencedor3Chave12 || vencedorQuartas2 === vencedor2Chave12) {
                    alert(`Quartas 3: ${vencedor5Chave12} vs ${vencedor6Chave12}`)

                    let vencedorQuartas3 = prompt("Digite o vencedor da quartas 3:").toUpperCase()
                    if (vencedorQuartas3 === vencedor5Chave12 || vencedorQuartas3 === vencedor6Chave12) {

                      alert(`semi final: ${vencedorQuartas1} vs ${vencedorQuartas2}`)

                      let vencedorSemi = prompt("Digite o vencedor da semi final:").toUpperCase()

                      if (vencedorSemi === vencedorQuartas1 || vencedorSemi === vencedorQuartas2) {
                        alert(`Grande final: ${vencedorSemi} vs ${vencedorQuartas3}`)

                        let vencedorFinalChave12 = prompt("Digite o nome do vencedor da final:").toUpperCase()

                        if (vencedorFinalChave12 != vencedorSemi && vencedorFinalChave12 != vencedorQuartas3) {
                          alert("❌ Nome inválido! Essa equipe não participou da final.")
                        } else {
                          alert(`🏆 Parabéns, ${vencedorFinalChave12}! Vocês são os campeões do torneio!`)
                        }
                      } else {
                        alert("❌ Nome inválido! Essa equipe não participou da Semi final")
                      }
                    } else {
                      alert("❌ Nome inválido! Essa equipe não participou das quartas de finais")
                    }
                  } else {
                    alert("❌ Nome inválido! Essa equipe não participou das quartas de finais")
                  }
                } else {
                  alert("❌ Nome inválido! Essa equipe não participou das quartas de finais")
                }
              } else {
                alert("❌ Nome inválido! Essa equipe não participou da partida.")
              }
            } else {
              alert("❌ Nome inválido! Essa equipe não participou da partida.")
            }
          } else {
            alert("❌ Nome inválido! Essa equipe não participou da partida.")
          }
        } else {
          alert("❌ Nome inválido! Essa equipe não participou da partida.")
        }
      } else {
        alert("❌ Nome inválido! Essa equipe não participou da partida.")
      }
    }
  } else if (chave === 4) {
    alert("chaveamento \n 1°Partida: " + equipe1Chave12 + " vs " + equipe5Chave12 + "\n 2°Partida: " + equipe2Chave12 + " vs " + equipe4Chave12 + "\n 3°Partida: " + equipe3Chave12 + " vs " + equipe6Chave12 + "\n 4°Partida: " + equipe7Chave12 + " vs " + equipe11Chave12 + "\n 5°Partida: " + equipe8Chave12 + " vs " + equipe10Chave12 + "\n 6°Partida: " + equipe9Chave12 + " vs " + equipe12Chave12)

    alert(`Partida 1: ${equipe1Chave12} vs ${equipe5Chave12}`)

    let vencedor1Chave12 = prompt("Digite o nome do vencedor da primeira partida:").toUpperCase()

    if (vencedor1Chave12 != equipe1Chave12 && vencedor1Chave12 != equipe5chave12) {
      alert("❌ Nome inválido! Essa equipe não participou da partida.")
    } else {
      alert(`Partida 2: ${equipe2Chave12} vs ${equipe4Chave12}`)

      let vencedor2Chave12 = prompt("Digite o nome do vencedor da segunda partida:").toUpperCase()

      if (vencedor2Chave12 === equipe2Chave12 || vencedor2Chave12 === equipe4Chave12) {
        alert(`Partida 3: ${equipe3Chave12} vs ${equipe6Chave12}`)

        let vencedor3Chave12 = prompt("Digite o nome do vencedor da terceira partida:").toUpperCase()

        if (vencedor3Chave12 === equipe3Chave12 || vencedor3Chave12 === equipe6Chave12) {
          alert(`Partida 4: ${equipe7Chave12} vs ${equipe11Chave12}`)

          let vencedor4Chave12 = prompt("Digite o nome do vencedor da quarta partida:").toUpperCase()

          if (vencedor4Chave12 === equipe7Chave12 || vencedor4Chave12 === equipe11Chave12) {
            alert(`Partida 5: ${equipe8Chave12} vs ${equipe10Chave12}`)

            let vencedor5Chave12 = prompt("Digite o nome do vencedor da quinta partida:").toUpperCase()

            if (vencedor5Chave12 === equipe8Chave12 || vencedor5Chave12 === equipe10Chave12) {
              alert(`Partida 6: ${equipe9Chave12} vs ${equipe12Chave12}`)

              let vencedor6Chave12 = prompt("Digite o nome do vencedor da sexta partida:").toUpperCase()

              if (vencedor6Chave12 === equipe9Chave12 || vencedor6Chave12 === equipe12Chave12) {

                alert(`Quartas 1: ${vencedor1Chave12} vs ${vencedor2Chave12}`)

                let vencedorQuartas1 = prompt("Digite o vencedor da quartas 1:").toUpperCase()

                if (vencedorQuartas1 === vencedor1Chave12 || vencedorQuartas1 === vencedor2Chave12) {
                  alert(`Quartas 2: ${vencedor3Chave12} vs ${vencedor4Chave12}`)

                  let vencedorQuartas2 = prompt("Digite o vencedor da quartas 2:").toUpperCase()
                  if (vencedorQuartas2 === vencedor3Chave12 || vencedorQuartas2 === vencedor2Chave12) {
                    alert(`Quartas 3: ${vencedor5Chave12} vs ${vencedor6Chave12}`)

                    let vencedorQuartas3 = prompt("Digite o vencedor da quartas 3:").toUpperCase()
                    if (vencedorQuartas3 === vencedor5Chave12 || vencedorQuartas3 === vencedor6Chave12) {

                      alert(`semi final: ${vencedorQuartas1} vs ${vencedorQuartas2}`)

                      let vencedorSemi = prompt("Digite o vencedor da semi final:").toUpperCase()

                      if (vencedorSemi === vencedorQuartas1 || vencedorSemi === vencedorQuartas2) {
                        alert(`Grande final: ${vencedorSemi} vs ${vencedorQuartas3}`)

                        let vencedorFinalChave12 = prompt("Digite o nome do vencedor da final:").toUpperCase()

                        if (vencedorFinalChave12 != vencedorSemi && vencedorFinalChave12 != vencedorQuartas3) {
                          alert("❌ Nome inválido! Essa equipe não participou da final.")
                        } else {
                          alert(`🏆 Parabéns, ${vencedorFinalChave12}! Vocês são os campeões do torneio!`)
                        }
                      } else {
                        alert("❌ Nome inválido! Essa equipe não participou da Semi final")
                      }
                    } else {
                      alert("❌ Nome inválido! Essa equipe não participou das quartas de finais")
                    }
                  } else {
                    alert("❌ Nome inválido! Essa equipe não participou das quartas de finais")
                  }
                } else {
                  alert("❌ Nome inválido! Essa equipe não participou das quartas de finais")
                }
              } else {
                alert("❌ Nome inválido! Essa equipe não participou da partida.")
              }
            } else {
              alert("❌ Nome inválido! Essa equipe não participou da partida.")
            }
          } else {
            alert("❌ Nome inválido! Essa equipe não participou da partida.")
          }
        } else {
          alert("❌ Nome inválido! Essa equipe não participou da partida.")
        }
      } else {
        alert("❌ Nome inválido! Essa equipe não participou da partida.")
      }
    }
  } else if (chave === 5) {
    alert("chaveamento \n 1°Partida: " + equipe1Chave12 + " vs " + equipe6Chave12 + "\n 2°Partida: " + equipe2Chave12 + " vs " + equipe3Chave12 + "\n 3°Partida: " + equipe4Chave12 + " vs " + equipe5Chave12 + "\n 4°Partida: " + equipe7Chave12 + " vs " + equipe12Chave12 + "\n 5°Partida: " + equipe8Chave12 + " vs " + equipe9Chave12 + "\n 6°Partida: " + equipe10Chave12 + " vs " + equipe11Chave12)

    alert(`Partida 1: ${equipe1Chave12} vs ${equipe6Chave12}`)

    let vencedor1Chave12 = prompt("Digite o nome do vencedor da primeira partida:").toUpperCase()

    if (vencedor1Chave12 != equipe1Chave12 && vencedor1Chave12 != equipe6Chave12) {
      alert("❌ Nome inválido! Essa equipe não participou da partida.")
    } else {
      alert(`Partida 2: ${equipe2Chave12} vs ${equipe3Chave12}`)

      let vencedor2Chave12 = prompt("Digite o nome do vencedor da segunda partida:").toUpperCase()

      if (vencedor2Chave12 === equipe2Chave12 || vencedor2Chave12 === equipe3Chave12) {
        alert(`Partida 3: ${equipe4Chave12} vs ${equipe5Chave12}`)

        let vencedor3Chave12 = prompt("Digite o nome do vencedor da terceira partida:").toUpperCase()

        if (vencedor3Chave12 === equipe4Chave12 || vencedor3Chave12 === equipe5Chave12) {
          alert(`Partida 4: ${equipe7Chave12} vs ${equipe12Chave12}`)

          let vencedor4Chave12 = prompt("Digite o nome do vencedor da quarta partida:").toUpperCase()

          if (vencedor4Chave12 === equipe7Chave12 || vencedor4Chave12 === equipe12Chave12) {
            alert(`Partida 5: ${equipe8Chave12} vs ${equipe9Chave12}`)

            let vencedor5Chave12 = prompt("Digite o nome do vencedor da quinta partida:").toUpperCase()

            if (vencedor5Chave12 === equipe8Chave12 || vencedor5Chave12 === equipe9Chave12) {
              alert(`Partida 6: ${equipe10Chave12} vs ${equipe11Chave12}`)

              let vencedor6Chave12 = prompt("Digite o nome do vencedor da sexta partida:").toUpperCase()

              if (vencedor6Chave12 === equipe10Chave12 || vencedor6Chave12 === equipe11Chave12) {

                alert(`Quartas 1: ${vencedor1Chave12} vs ${vencedor2Chave12}`)

                let vencedorQuartas1 = prompt("Digite o vencedor da quartas 1:").toUpperCase()

                if (vencedorQuartas1 === vencedor1Chave12 || vencedorQuartas1 === vencedor2Chave12) {
                  alert(`Quartas 2: ${vencedor3Chave12} vs ${vencedor4Chave12}`)

                  let vencedorQuartas2 = prompt("Digite o vencedor da quartas 2:").toUpperCase()
                  if (vencedorQuartas2 === vencedor3Chave12 || vencedorQuartas2 === vencedor2Chave12) {
                    alert(`Quartas 3: ${vencedor5Chave12} vs ${vencedor6Chave12}`)

                    let vencedorQuartas3 = prompt("Digite o vencedor da quartas 3:").toUpperCase()
                    if (vencedorQuartas3 === vencedor5Chave12 || vencedorQuartas3 === vencedor6Chave12) {

                      alert(`semi final: ${vencedorQuartas1} vs ${vencedorQuartas2}`)

                      let vencedorSemi = prompt("Digite o vencedor da semi final:").toUpperCase()

                      if (vencedorSemi === vencedorQuartas1 || vencedorSemi === vencedorQuartas2) {
                        alert(`Grande final: ${vencedorSemi} vs ${vencedorQuartas3}`)

                        let vencedorFinalChave12 = prompt("Digite o nome do vencedor da final:").toUpperCase()

                        if (vencedorFinalChave12 != vencedorSemi && vencedorFinalChave12 != vencedorQuartas3) {
                          alert("❌ Nome inválido! Essa equipe não participou da final.")
                        } else {
                          alert(`🏆 Parabéns, ${vencedorFinalChave12}! Vocês são os campeões do torneio!`)
                        }
                      } else {
                        alert("❌ Nome inválido! Essa equipe não participou da Semi final")
                      }
                    } else {
                      alert("❌ Nome inválido! Essa equipe não participou das quartas de finais")
                    }
                  } else {
                    alert("❌ Nome inválido! Essa equipe não participou das quartas de finais")
                  }
                } else {
                  alert("❌ Nome inválido! Essa equipe não participou das quartas de finais")
                }
              } else {
                alert("❌ Nome inválido! Essa equipe não participou da partida.")
              }
            } else {
              alert("❌ Nome inválido! Essa equipe não participou da partida.")
            }
          } else {
            alert("❌ Nome inválido! Essa equipe não participou da partida.")
          }
        } else {
          alert("❌ Nome inválido! Essa equipe não participou da partida.")
        }
      } else {
        alert("❌ Nome inválido! Essa equipe não participou da partida.")
      }
    }
  } else if (chave === 6) {
    alert("chaveamento \n 1°Partida: " + equipe1Chave12 + " vs " + equipe7Chave12 + "\n 2°Partida: " + equipe2Chave12 + " vs " + equipe4Chave12 + "\n 3°Partida: " + equipe3Chave12 + " vs " + equipe5Chave12 + "\n 4°Partida: " + equipe6Chave12 + " vs " + equipe10Chave12 + "\n 5°Partida: " + equipe8Chave12 + " vs " + equipe9Chave12 + "\n 6°Partida: " + equipe11Chave12 + " vs " + equipe12Chave12)

    alert(`Partida 1: ${equipe1Chave12} vs ${equipe7Chave12}`)

    let vencedor1Chave12 = prompt("Digite o nome do vencedor da primeira partida:").toUpperCase()

    if (vencedor1Chave12 != equipe1Chave12 && vencedor1Chave12 != equipe7chave12) {
      alert("❌ Nome inválido! Essa equipe não participou da partida.")
    } else {
      alert(`Partida 2: ${equipe2Chave12} vs ${equipe4Chave12}`)

      let vencedor2Chave12 = prompt("Digite o nome do vencedor da segunda partida:").toUpperCase()

      if (vencedor2Chave12 === equipe2Chave12 || vencedor2Chave12 === equipe4Chave12) {
        alert(`Partida 3: ${equipe3Chave12} vs ${equipe5Chave12}`)

        let vencedor3Chave12 = prompt("Digite o nome do vencedor da terceira partida:").toUpperCase()

        if (vencedor3Chave12 === equipe3Chave12 || vencedor3Chave12 === equipe5Chave12) {
          alert(`Partida 4: ${equipe6Chave12} vs ${equipe10Chave12}`)

          let vencedor4Chave12 = prompt("Digite o nome do vencedor da quarta partida:").toUpperCase()

          if (vencedor4Chave12 === equipe6Chave12 || vencedor4Chave12 === equipe10Chave12) {
            alert(`Partida 5: ${equipe8Chave12} vs ${equipe9Chave12}`)

            let vencedor5Chave12 = prompt("Digite o nome do vencedor da quinta partida:").toUpperCase()

            if (vencedor5Chave12 === equipe8Chave12 || vencedor5Chave12 === equipe9Chave12) {
              alert(`Partida 6: ${equipe11Chave12} vs ${equipe12Chave12}`)

              let vencedor6Chave12 = prompt("Digite o nome do vencedor da sexta partida:").toUpperCase()

              if (vencedor6Chave12 === equipe11Chave12 || vencedor6Chave12 === equipe12Chave12) {

                alert(`Quartas 1: ${vencedor1Chave12} vs ${vencedor2Chave12}`)

                let vencedorQuartas1 = prompt("Digite o vencedor da quartas 1:").toUpperCase()

                if (vencedorQuartas1 === vencedor1Chave12 || vencedorQuartas1 === vencedor2Chave12) {
                  alert(`Quartas 2: ${vencedor3Chave12} vs ${vencedor4Chave12}`)

                  let vencedorQuartas2 = prompt("Digite o vencedor da quartas 2:").toUpperCase()
                  if (vencedorQuartas2 === vencedor3Chave12 || vencedorQuartas2 === vencedor2Chave12) {
                    alert(`Quartas 3: ${vencedor5Chave12} vs ${vencedor6Chave12}`)

                    let vencedorQuartas3 = prompt("Digite o vencedor da quartas 3:").toUpperCase()
                    if (vencedorQuartas3 === vencedor5Chave12 || vencedorQuartas3 === vencedor6Chave12) {

                      alert(`semi final: ${vencedorQuartas1} vs ${vencedorQuartas2}`)

                      let vencedorSemi = prompt("Digite o vencedor da semi final:").toUpperCase()

                      if (vencedorSemi === vencedorQuartas1 || vencedorSemi === vencedorQuartas2) {
                        alert(`Grande final: ${vencedorSemi} vs ${vencedorQuartas3}`)

                        let vencedorFinalChave12 = prompt("Digite o nome do vencedor da final:").toUpperCase()

                        if (vencedorFinalChave12 != vencedorSemi && vencedorFinalChave12 != vencedorQuartas3) {
                          alert("❌ Nome inválido! Essa equipe não participou da final.")
                        } else {
                          alert(`🏆 Parabéns, ${vencedorFinalChave12}! Vocês são os campeões do torneio!`)
                        }
                      } else {
                        alert("❌ Nome inválido! Essa equipe não participou da Semi final")
                      }
                    } else {
                      alert("❌ Nome inválido! Essa equipe não participou das quartas de finais")
                    }
                  } else {
                    alert("❌ Nome inválido! Essa equipe não participou das quartas de finais")
                  }
                } else {
                  alert("❌ Nome inválido! Essa equipe não participou das quartas de finais")
                }
              } else {
                alert("❌ Nome inválido! Essa equipe não participou da partida.")
              }
            } else {
              alert("❌ Nome inválido! Essa equipe não participou da partida.")
            }
          } else {
            alert("❌ Nome inválido! Essa equipe não participou da partida.")
          }
        } else {
          alert("❌ Nome inválido! Essa equipe não participou da partida.")
        }
      } else {
        alert("❌ Nome inválido! Essa equipe não participou da partida.")
      }
    }
  } else if (chave === 7) {
    alert("chaveamento \n 1°Partida: " + equipe1Chave12 + " vs " + equipe8Chave12 + "\n 2°Partida: " + equipe2Chave12 + " vs " + equipe5Chave12 + "\n 3°Partida: " + equipe3Chave12 + " vs " + equipe6Chave12 + "\n 4°Partida: " + equipe4Chave12 + " vs " + equipe7Chave12 + "\n 5°Partida: " + equipe9Chave12 + " vs " + equipe10Chave12 + "\n 6°Partida: " + equipe11Chave12 + " vs " + equipe12Chave12)

    alert(`Partida 1: ${equipe1Chave12} vs ${equipe8Chave12}`)

    let vencedor1Chave12 = prompt("Digite o nome do vencedor da primeira partida:").toUpperCase()

    if (vencedor1Chave12 != equipe1Chave12 && vencedor1Chave12 != equipe8chave12) {
      alert("❌ Nome inválido! Essa equipe não participou da partida.")
    } else {
      alert(`Partida 2: ${equipe2Chave12} vs ${equipe5Chave12}`)

      let vencedor2Chave12 = prompt("Digite o nome do vencedor da segunda partida:").toUpperCase()

      if (vencedor2Chave12 === equipe2Chave12 || vencedor2Chave12 === equipe5Chave12) {
        alert(`Partida 3: ${equipe3Chave12} vs ${equipe6Chave12}`)

        let vencedor3Chave12 = prompt("Digite o nome do vencedor da terceira partida:").toUpperCase()

        if (vencedor3Chave12 === equipe3Chave12 || vencedor3Chave12 === equipe6Chave12) {
          alert(`Partida 4: ${equipe4Chave12} vs ${equipe7Chave12}`)

          let vencedor4Chave12 = prompt("Digite o nome do vencedor da quarta partida:").toUpperCase()

          if (vencedor4Chave12 === equipe4Chave12 || vencedor4Chave12 === equipe7Chave12) {
            alert(`Partida 5: ${equipe9Chave12} vs ${equipe10Chave12}`)

            let vencedor5Chave12 = prompt("Digite o nome do vencedor da quinta partida:").toUpperCase()

            if (vencedor5Chave12 === equipe9Chave12 || vencedor5Chave12 === equipe10Chave12) {
              alert(`Partida 6: ${equipe11Chave12} vs ${equipe12Chave12}`)

              let vencedor6Chave12 = prompt("Digite o nome do vencedor da sexta partida:").toUpperCase()

              if (vencedor6Chave12 === equipe11Chave12 || vencedor6Chave12 === equipe12Chave12) {

                alert(`Quartas 1: ${vencedor1Chave12} vs ${vencedor2Chave12}`)

                let vencedorQuartas1 = prompt("Digite o vencedor da quartas 1:").toUpperCase()

                if (vencedorQuartas1 === vencedor1Chave12 || vencedorQuartas1 === vencedor2Chave12) {
                  alert(`Quartas 2: ${vencedor3Chave12} vs ${vencedor4Chave12}`)

                  let vencedorQuartas2 = prompt("Digite o vencedor da quartas 2:").toUpperCase()
                  if (vencedorQuartas2 === vencedor3Chave12 || vencedorQuartas2 === vencedor2Chave12) {
                    alert(`Quartas 3: ${vencedor5Chave12} vs ${vencedor6Chave12}`)

                    let vencedorQuartas3 = prompt("Digite o vencedor da quartas 3:").toUpperCase()
                    if (vencedorQuartas3 === vencedor5Chave12 || vencedorQuartas3 === vencedor6Chave12) {

                      alert(`semi final: ${vencedorQuartas1} vs ${vencedorQuartas2}`)

                      let vencedorSemi = prompt("Digite o vencedor da semi final:").toUpperCase()

                      if (vencedorSemi === vencedorQuartas1 || vencedorSemi === vencedorQuartas2) {
                        alert(`Grande final: ${vencedorSemi} vs ${vencedorQuartas3}`)

                        let vencedorFinalChave12 = prompt("Digite o nome do vencedor da final:").toUpperCase()

                        if (vencedorFinalChave12 != vencedorSemi && vencedorFinalChave12 != vencedorQuartas3) {
                          alert("❌ Nome inválido! Essa equipe não participou da final.")
                        } else {
                          alert(`🏆 Parabéns, ${vencedorFinalChave12}! Vocês são os campeões do torneio!`)
                        }
                      } else {
                        alert("❌ Nome inválido! Essa equipe não participou da Semi final")
                      }
                    } else {
                      alert("❌ Nome inválido! Essa equipe não participou das quartas de finais")
                    }
                  } else {
                    alert("❌ Nome inválido! Essa equipe não participou das quartas de finais")
                  }
                } else {
                  alert("❌ Nome inválido! Essa equipe não participou das quartas de finais")
                }
              } else {
                alert("❌ Nome inválido! Essa equipe não participou da partida.")
              }
            } else {
              alert("❌ Nome inválido! Essa equipe não participou da partida.")
            }
          } else {
            alert("❌ Nome inválido! Essa equipe não participou da partida.")
          }
        } else {
          alert("❌ Nome inválido! Essa equipe não participou da partida.")
        }
      } else {
        alert("❌ Nome inválido! Essa equipe não participou da partida.")
      }
    }
  } else if (chave === 8) {
    alert("chaveamento \n 1°Partida: " + equipe1Chave12 + " vs " + equipe9Chave12 + "\n 2°Partida: " + equipe2Chave12 + " vs " + equipe6Chave12 + "\n 3°Partida: " + equipe3Chave12 + " vs " + equipe4Chave12 + "\n 4°Partida: " + equipe5Chave12 + " vs " + equipe10Chave12 + "\n 5°Partida: " + equipe7Chave12 + " vs " + equipe8Chave12 + "\n 6°Partida: " + equipe11Chave12 + " vs " + equipe12Chave12)

    alert(`Partida 1: ${equipe1Chave12} vs ${equipe9Chave12}`)

    let vencedor1Chave12 = prompt("Digite o nome do vencedor da primeira partida:").toUpperCase()

    if (vencedor1Chave12 != equipe1Chave12 && vencedor1Chave12 != equipe9chave12) {
      alert("❌ Nome inválido! Essa equipe não participou da partida.")
    } else {
      alert(`Partida 2: ${equipe2Chave12} vs ${equipe6Chave12}`)

      let vencedor2Chave12 = prompt("Digite o nome do vencedor da segunda partida:").toUpperCase()

      if (vencedor2Chave12 === equipe2Chave12 || vencedor2Chave12 === equipe6Chave12) {
        alert(`Partida 3: ${equipe3Chave12} vs ${equipe4Chave12}`)

        let vencedor3Chave12 = prompt("Digite o nome do vencedor da terceira partida:").toUpperCase()

        if (vencedor3Chave12 === equipe3Chave12 || vencedor3Chave12 === equipe4Chave12) {
          alert(`Partida 4: ${equipe5Chave12} vs ${equipe10Chave12}`)

          let vencedor4Chave12 = prompt("Digite o nome do vencedor da quarta partida:").toUpperCase()

          if (vencedor4Chave12 === equipe5Chave12 || vencedor4Chave12 === equipe10Chave12) {
            alert(`Partida 5: ${equipe7Chave12} vs ${equipe8Chave12}`)

            let vencedor5Chave12 = prompt("Digite o nome do vencedor da quinta partida:").toUpperCase()

            if (vencedor5Chave12 === equipe9Chave12 || vencedor5Chave12 === equipe10Chave12) {
              alert(`Partida 6: ${equipe11Chave12} vs ${equipe12Chave12}`)

              let vencedor6Chave12 = prompt("Digite o nome do vencedor da sexta partida:").toUpperCase()

              if (vencedor6Chave12 === equipe11Chave12 || vencedor6Chave12 === equipe12Chave12) {

                alert(`Quartas 1: ${vencedor1Chave12} vs ${vencedor2Chave12}`)

                let vencedorQuartas1 = prompt("Digite o vencedor da quartas 1:").toUpperCase()

                if (vencedorQuartas1 === vencedor1Chave12 || vencedorQuartas1 === vencedor2Chave12) {
                  alert(`Quartas 2: ${vencedor3Chave12} vs ${vencedor4Chave12}`)

                  let vencedorQuartas2 = prompt("Digite o vencedor da quartas 2:").toUpperCase()
                  if (vencedorQuartas2 === vencedor3Chave12 || vencedorQuartas2 === vencedor2Chave12) {
                    alert(`Quartas 3: ${vencedor5Chave12} vs ${vencedor6Chave12}`)

                    let vencedorQuartas3 = prompt("Digite o vencedor da quartas 3:").toUpperCase()
                    if (vencedorQuartas3 === vencedor5Chave12 || vencedorQuartas3 === vencedor6Chave12) {

                      alert(`semi final: ${vencedorQuartas1} vs ${vencedorQuartas2}`)

                      let vencedorSemi = prompt("Digite o vencedor da semi final:").toUpperCase()

                      if (vencedorSemi === vencedorQuartas1 || vencedorSemi === vencedorQuartas2) {
                        alert(`Grande final: ${vencedorSemi} vs ${vencedorQuartas3}`)

                        let vencedorFinalChave12 = prompt("Digite o nome do vencedor da final:").toUpperCase()

                        if (vencedorFinalChave12 != vencedorSemi && vencedorFinalChave12 != vencedorQuartas3) {
                          alert("❌ Nome inválido! Essa equipe não participou da final.")
                        } else {
                          alert(`🏆 Parabéns, ${vencedorFinalChave12}! Vocês são os campeões do torneio!`)
                        }
                      } else {
                        alert("❌ Nome inválido! Essa equipe não participou da Semi final")
                      }
                    } else {
                      alert("❌ Nome inválido! Essa equipe não participou das quartas de finais")
                    }
                  } else {
                    alert("❌ Nome inválido! Essa equipe não participou das quartas de finais")
                  }
                } else {
                  alert("❌ Nome inválido! Essa equipe não participou das quartas de finais")
                }
              } else {
                alert("❌ Nome inválido! Essa equipe não participou da partida.")
              }
            } else {
              alert("❌ Nome inválido! Essa equipe não participou da partida.")
            }
          } else {
            alert("❌ Nome inválido! Essa equipe não participou da partida.")
          }
        } else {
          alert("❌ Nome inválido! Essa equipe não participou da partida.")
        }
      } else {
        alert("❌ Nome inválido! Essa equipe não participou da partida.")
      }
    }
  } else if (chave === 9) {
    alert("chaveamento \n 1°Partida: " + equipe1Chave12 + " vs " + equipe10Chave12 + "\n 2°Partida: " + equipe2Chave12 + " vs " + equipe7Chave12 + "\n 3°Partida: " + equipe3Chave12 + " vs " + equipe8Chave12 + "\n 4°Partida: " + equipe4Chave12 + " vs " + equipe9Chave12 + "\n 5°Partida: " + equipe5Chave12 + " vs " + equipe6Chave12 + "\n 6°Partida: " + equipe11Chave12 + " vs " + equipe12Chave12)

    alert(`Partida 1: ${equipe1Chave12} vs ${equipe10Chave12}`)

    let vencedor1Chave12 = prompt("Digite o nome do vencedor da primeira partida:").toUpperCase()

    if (vencedor1Chave12 != equipe1Chave12 && vencedor1Chave12 != equipe10chave12) {
      alert("❌ Nome inválido! Essa equipe não participou da partida.")
    } else {
      alert(`Partida 2: ${equipe2Chave12} vs ${equipe7Chave12}`)

      let vencedor2Chave12 = prompt("Digite o nome do vencedor da segunda partida:").toUpperCase()

      if (vencedor2Chave12 === equipe2Chave12 || vencedor2Chave12 === equipe7Chave12) {
        alert(`Partida 3: ${equipe3Chave12} vs ${equipe8Chave12}`)

        let vencedor3Chave12 = prompt("Digite o nome do vencedor da terceira partida:").toUpperCase()

        if (vencedor3Chave12 === equipe3Chave12 || vencedor3Chave12 === equipe8Chave12) {
          alert(`Partida 4: ${equipe4Chave12} vs ${equipe9Chave12}`)

          let vencedor4Chave12 = prompt("Digite o nome do vencedor da quarta partida:").toUpperCase()

          if (vencedor4Chave12 === equipe4Chave12 || vencedor4Chave12 === equipe9Chave12) {
            alert(`Partida 5: ${equipe5Chave12} vs ${equipe6Chave12}`)

            let vencedor5Chave12 = prompt("Digite o nome do vencedor da quinta partida:").toUpperCase()

            if (vencedor5Chave12 === equipe5Chave12 || vencedor5Chave12 === equipe6Chave12) {
              alert(`Partida 6: ${equipe11Chave12} vs ${equipe12Chave12}`)

              let vencedor6Chave12 = prompt("Digite o nome do vencedor da sexta partida:").toUpperCase()

              if (vencedor6Chave12 === equipe11Chave12 || vencedor6Chave12 === equipe12Chave12) {

                alert(`Quartas 1: ${vencedor1Chave12} vs ${vencedor2Chave12}`)

                let vencedorQuartas1 = prompt("Digite o vencedor da quartas 1:").toUpperCase()

                if (vencedorQuartas1 === vencedor1Chave12 || vencedorQuartas1 === vencedor2Chave12) {
                  alert(`Quartas 2: ${vencedor3Chave12} vs ${vencedor4Chave12}`)

                  let vencedorQuartas2 = prompt("Digite o vencedor da quartas 2:").toUpperCase()
                  if (vencedorQuartas2 === vencedor3Chave12 || vencedorQuartas2 === vencedor2Chave12) {
                    alert(`Quartas 3: ${vencedor5Chave12} vs ${vencedor6Chave12}`)

                    let vencedorQuartas3 = prompt("Digite o vencedor da quartas 3:").toUpperCase()
                    if (vencedorQuartas3 === vencedor5Chave12 || vencedorQuartas3 === vencedor6Chave12) {

                      alert(`semi final: ${vencedorQuartas1} vs ${vencedorQuartas2}`)

                      let vencedorSemi = prompt("Digite o vencedor da semi final:").toUpperCase()

                      if (vencedorSemi === vencedorQuartas1 || vencedorSemi === vencedorQuartas2) {
                        alert(`Grande final: ${vencedorSemi} vs ${vencedorQuartas3}`)

                        let vencedorFinalChave12 = prompt("Digite o nome do vencedor da final:").toUpperCase()

                        if (vencedorFinalChave12 != vencedorSemi && vencedorFinalChave12 != vencedorQuartas3) {
                          alert("❌ Nome inválido! Essa equipe não participou da final.")
                        } else {
                          alert(`🏆 Parabéns, ${vencedorFinalChave12}! Vocês são os campeões do torneio!`)
                        }
                      } else {
                        alert("❌ Nome inválido! Essa equipe não participou da Semi final")
                      }
                    } else {
                      alert("❌ Nome inválido! Essa equipe não participou das quartas de finais")
                    }
                  } else {
                    alert("❌ Nome inválido! Essa equipe não participou das quartas de finais")
                  }
                } else {
                  alert("❌ Nome inválido! Essa equipe não participou das quartas de finais")
                }
              } else {
                alert("❌ Nome inválido! Essa equipe não participou da partida.")
              }
            } else {
              alert("❌ Nome inválido! Essa equipe não participou da partida.")
            }
          } else {
            alert("❌ Nome inválido! Essa equipe não participou da partida.")
          }
        } else {
          alert("❌ Nome inválido! Essa equipe não participou da partida.")
        }
      } else {
        alert("❌ Nome inválido! Essa equipe não participou da partida.")
      }
    }
  } else if (chave === 10) {
    alert("chaveamento \n 1°Partida: " + equipe1Chave12 + " vs " + equipe11Chave12 + "\n 2°Partida: " + equipe2Chave12 + " vs " + equipe8Chave12 + "\n 3°Partida: " + equipe3Chave12 + " vs " + equipe9Chave12 + "\n 4°Partida: " + equipe4Chave12 + " vs " + equipe10Chave12 + "\n 5°Partida: " + equipe5Chave12 + " vs " + equipe6Chave12 + "\n 6°Partida: " + equipe7Chave12 + " vs " + equipe12Chave12)

    alert(`Partida 1: ${equipe1Chave12} vs ${equipe11Chave12}`)

    let vencedor1Chave12 = prompt("Digite o nome do vencedor da primeira partida:").toUpperCase()

    if (vencedor1Chave12 != equipe1Chave12 && vencedor1Chave12 != equipe11chave12) {
      alert("❌ Nome inválido! Essa equipe não participou da partida.")
    } else {
      alert(`Partida 2: ${equipe2Chave12} vs ${equipe8Chave12}`)

      let vencedor2Chave12 = prompt("Digite o nome do vencedor da segunda partida:").toUpperCase()

      if (vencedor2Chave12 === equipe2Chave12 || vencedor2Chave12 === equipe8Chave12) {
        alert(`Partida 3: ${equipe3Chave12} vs ${equipe9Chave12}`)

        let vencedor3Chave12 = prompt("Digite o nome do vencedor da terceira partida:").toUpperCase()

        if (vencedor3Chave12 === equipe3Chave12 || vencedor3Chave12 === equipe9Chave12) {
          alert(`Partida 4: ${equipe4Chave12} vs ${equipe10Chave12}`)

          let vencedor4Chave12 = prompt("Digite o nome do vencedor da quarta partida:").toUpperCase()

          if (vencedor4Chave12 === equipe4Chave12 || vencedor4Chave12 === equipe10Chave12) {
            alert(`Partida 5: ${equipe5Chave12} vs ${equipe6Chave12}`)

            let vencedor5Chave12 = prompt("Digite o nome do vencedor da quinta partida:").toUpperCase()

            if (vencedor5Chave12 === equipe5Chave12 || vencedor5Chave12 === equipe6Chave12) {
              alert(`Partida 6: ${equipe7Chave12} vs ${equipe12Chave12}`)

              let vencedor6Chave12 = prompt("Digite o nome do vencedor da sexta partida:").toUpperCase()

              if (vencedor6Chave12 === equipe7Chave12 || vencedor6Chave12 === equipe12Chave12) {

                alert(`Quartas 1: ${vencedor1Chave12} vs ${vencedor2Chave12}`)

                let vencedorQuartas1 = prompt("Digite o vencedor da quartas 1:").toUpperCase()

                if (vencedorQuartas1 === vencedor1Chave12 || vencedorQuartas1 === vencedor2Chave12) {
                  alert(`Quartas 2: ${vencedor3Chave12} vs ${vencedor4Chave12}`)

                  let vencedorQuartas2 = prompt("Digite o vencedor da quartas 2:").toUpperCase()
                  if (vencedorQuartas2 === vencedor3Chave12 || vencedorQuartas2 === vencedor2Chave12) {
                    alert(`Quartas 3: ${vencedor5Chave12} vs ${vencedor6Chave12}`)

                    let vencedorQuartas3 = prompt("Digite o vencedor da quartas 3:").toUpperCase()
                    if (vencedorQuartas3 === vencedor5Chave12 || vencedorQuartas3 === vencedor6Chave12) {

                      alert(`semi final: ${vencedorQuartas1} vs ${vencedorQuartas2}`)

                      let vencedorSemi = prompt("Digite o vencedor da semi final:").toUpperCase()

                      if (vencedorSemi === vencedorQuartas1 || vencedorSemi === vencedorQuartas2) {
                        alert(`Grande final: ${vencedorSemi} vs ${vencedorQuartas3}`)

                        let vencedorFinalChave12 = prompt("Digite o nome do vencedor da final:").toUpperCase()

                        if (vencedorFinalChave12 != vencedorSemi && vencedorFinalChave12 != vencedorQuartas3) {
                          alert("❌ Nome inválido! Essa equipe não participou da final.")
                        } else {
                          alert(`🏆 Parabéns, ${vencedorFinalChave12}! Vocês são os campeões do torneio!`)
                        }
                      } else {
                        alert("❌ Nome inválido! Essa equipe não participou da Semi final")
                      }
                    } else {
                      alert("❌ Nome inválido! Essa equipe não participou das quartas de finais")
                    }
                  } else {
                    alert("❌ Nome inválido! Essa equipe não participou das quartas de finais")
                  }
                } else {
                  alert("❌ Nome inválido! Essa equipe não participou das quartas de finais")
                }
              } else {
                alert("❌ Nome inválido! Essa equipe não participou da partida.")
              }
            } else {
              alert("❌ Nome inválido! Essa equipe não participou da partida.")
            }
          } else {
            alert("❌ Nome inválido! Essa equipe não participou da partida.")
          }
        } else {
          alert("❌ Nome inválido! Essa equipe não participou da partida.")
        }
      } else {
        alert("❌ Nome inválido! Essa equipe não participou da partida.")
      }
    }
  } else if (chave === 11) {
    alert("chaveamento \n 1°Partida: " + equipe1Chave12 + " vs " + equipe12Chave12 + "\n 2°Partida: " + equipe2Chave12 + " vs " + equipe9Chave12 + "\n 3°Partida: " + equipe3Chave12 + " vs " + equipe10Chave12 + "\n 4°Partida: " + equipe4Chave12 + " vs " + equipe11Chave12 + "\n 5°Partida: " + equipe5Chave12 + " vs " + equipe6Chave12 + "\n 6°Partida: " + equipe7Chave12 + " vs " + equipe8Chave12)

    alert(`Partida 1: ${equipe1Chave12} vs ${equipe12Chave12}`)

    let vencedor1Chave12 = prompt("Digite o nome do vencedor da primeira partida:").toUpperCase()

    if (vencedor1Chave12 != equipe1Chave12 && vencedor1Chave12 != equipe12chave12) {
      alert("❌ Nome inválido! Essa equipe não participou da partida.")
    } else {
      alert(`Partida 2: ${equipe2Chave12} vs ${equipe9Chave12}`)

      let vencedor2Chave12 = prompt("Digite o nome do vencedor da segunda partida:").toUpperCase()

      if (vencedor2Chave12 === equipe2Chave12 || vencedor2Chave12 === equipe9Chave12) {
        alert(`Partida 3: ${equipe53Chave12} vs ${equipe10Chave12}`)

        let vencedor3Chave12 = prompt("Digite o nome do vencedor da terceira partida:").toUpperCase()

        if (vencedor3Chave12 === equipe3Chave12 || vencedor3Chave12 === equipe10Chave12) {
          alert(`Partida 4: ${equipe4Chave12} vs ${equipe11Chave12}`)

          let vencedor4Chave12 = prompt("Digite o nome do vencedor da quarta partida:").toUpperCase()

          if (vencedor4Chave12 === equipe4Chave12 || vencedor4Chave12 === equipe11Chave12) {
            alert(`Partida 5: ${equipe5Chave12} vs ${equipe6Chave12}`)

            let vencedor5Chave12 = prompt("Digite o nome do vencedor da quinta partida:").toUpperCase()

            if (vencedor5Chave12 === equipe6Chave12 || vencedor5Chave12 === equipe6Chave12) {
              alert(`Partida 6: ${equipe7Chave12} vs ${equipe8Chave12}`)

              let vencedor6Chave12 = prompt("Digite o nome do vencedor da sexta partida:").toUpperCase()

              if (vencedor6Chave12 === equipe11Chave12 || vencedor6Chave12 === equipe12Chave12) {

                alert(`Quartas 1: ${vencedor1Chave12} vs ${vencedor2Chave12}`)

                let vencedorQuartas1 = prompt("Digite o vencedor da quartas 1:").toUpperCase()

                if (vencedorQuartas1 === vencedor1Chave12 || vencedorQuartas1 === vencedor2Chave12) {
                  alert(`Quartas 2: ${vencedor3Chave12} vs ${vencedor4Chave12}`)

                  let vencedorQuartas2 = prompt("Digite o vencedor da quartas 2:").toUpperCase()
                  if (vencedorQuartas2 === vencedor3Chave12 || vencedorQuartas2 === vencedor2Chave12) {
                    alert(`Quartas 3: ${vencedor5Chave12} vs ${vencedor6Chave12}`)

                    let vencedorQuartas3 = prompt("Digite o vencedor da quartas 3:").toUpperCase()
                    if (vencedorQuartas3 === vencedor5Chave12 || vencedorQuartas3 === vencedor6Chave12) {

                      alert(`semi final: ${vencedorQuartas1} vs ${vencedorQuartas2}`)

                      let vencedorSemi = prompt("Digite o vencedor da semi final:").toUpperCase()

                      if (vencedorSemi === vencedorQuartas1 || vencedorSemi === vencedorQuartas2) {
                        alert(`Grande final: ${vencedorSemi} vs ${vencedorQuartas3}`)

                        let vencedorFinalChave12 = prompt("Digite o nome do vencedor da final:").toUpperCase()

                        if (vencedorFinalChave12 != vencedorSemi && vencedorFinalChave12 != vencedorQuartas3) {
                          alert("❌ Nome inválido! Essa equipe não participou da final.")
                        } else {
                          alert(`🏆 Parabéns, ${vencedorFinalChave12}! Vocês são os campeões do torneio!`)
                        }
                      } else {
                        alert("❌ Nome inválido! Essa equipe não participou da Semi final")
                      }
                    } else {
                      alert("❌ Nome inválido! Essa equipe não participou das quartas de finais")
                    }
                  } else {
                    alert("❌ Nome inválido! Essa equipe não participou das quartas de finais")
                  }
                } else {
                  alert("❌ Nome inválido! Essa equipe não participou das quartas de finais")
                }
              } else {
                alert("❌ Nome inválido! Essa equipe não participou da partida.")
              }
            } else {
              alert("❌ Nome inválido! Essa equipe não participou da partida.")
            }
          } else {
            alert("❌ Nome inválido! Essa equipe não participou da partida.")
          }
        } else {
          alert("❌ Nome inválido! Essa equipe não participou da partida.")
        }
      } else {
        alert("❌ Nome inválido! Essa equipe não participou da partida.")
      }
    }
  } else if (chave === 12) {
    alert("chaveamento \n 1°Partida: " + equipe2Chave12 + " vs " + equipe3Chave12 + "\n 2°Partida: " + equipe1Chave12 + " vs " + equipe4Chave12 + "\n 3°Partida: " + equipe5Chave12 + " vs " + equipe7Chave12 + "\n 4°Partida: " + equipe6Chave12 + " vs " + equipe8Chave12 + "\n 5°Partida: " + equipe9Chave12 + " vs " + equipe11Chave12 + "\n 6°Partida: " + equipe10Chave12 + " vs " + equipe12Chave12)

    alert(`Partida 1: ${equipe2Chave12} vs ${equipe3Chave12}`)

    let vencedor1Chave12 = prompt("Digite o nome do vencedor da primeira partida:").toUpperCase()

    if (vencedor1Chave12 != equipe2Chave12 && vencedor1Chave12 != equipe3chave12) {
      alert("❌ Nome inválido! Essa equipe não participou da partida.")
    } else {
      alert(`Partida 2: ${equipe1Chave12} vs ${equipe4Chave12}`)

      let vencedor2Chave12 = prompt("Digite o nome do vencedor da segunda partida:").toUpperCase()

      if (vencedor2Chave12 === equipe1Chave12 || vencedor2Chave12 === equipe4Chave12) {
        alert(`Partida 3: ${equipe5Chave12} vs ${equipe7Chave12}`)

        let vencedor3Chave12 = prompt("Digite o nome do vencedor da terceira partida:").toUpperCase()

        if (vencedor3Chave12 === equipe5Chave12 || vencedor3Chave12 === equipe7Chave12) {
          alert(`Partida 4: ${equipe6Chave12} vs ${equipe8Chave12}`)

          let vencedor4Chave12 = prompt("Digite o nome do vencedor da quarta partida:").toUpperCase()

          if (vencedor4Chave12 === equipe6Chave12 || vencedor4Chave12 === equipe8Chave12) {
            alert(`Partida 5: ${equipe9Chave12} vs ${equipe11Chave12}`)

            let vencedor5Chave12 = prompt("Digite o nome do vencedor da quinta partida:").toUpperCase()

            if (vencedor5Chave12 === equipe9Chave12 || vencedor5Chave12 === equipe11Chave12) {
              alert(`Partida 6: ${equipe10Chave12} vs ${equipe12Chave12}`)

              let vencedor6Chave12 = prompt("Digite o nome do vencedor da sexta partida:").toUpperCase()

              if (vencedor6Chave12 === equipe10Chave12 || vencedor6Chave12 === equipe12Chave12) {

                alert(`Quartas 1: ${vencedor1Chave12} vs ${vencedor2Chave12}`)

                let vencedorQuartas1 = prompt("Digite o vencedor da quartas 1:").toUpperCase()

                if (vencedorQuartas1 === vencedor1Chave12 || vencedorQuartas1 === vencedor2Chave12) {
                  alert(`Quartas 2: ${vencedor3Chave12} vs ${vencedor4Chave12}`)

                  let vencedorQuartas2 = prompt("Digite o vencedor da quartas 2:").toUpperCase()
                  if (vencedorQuartas2 === vencedor3Chave12 || vencedorQuartas2 === vencedor2Chave12) {
                    alert(`Quartas 3: ${vencedor5Chave12} vs ${vencedor6Chave12}`)

                    let vencedorQuartas3 = prompt("Digite o vencedor da quartas 3:").toUpperCase()
                    if (vencedorQuartas3 === vencedor5Chave12 || vencedorQuartas3 === vencedor6Chave12) {

                      alert(`semi final: ${vencedorQuartas1} vs ${vencedorQuartas2}`)

                      let vencedorSemi = prompt("Digite o vencedor da semi final:").toUpperCase()

                      if (vencedorSemi === vencedorQuartas1 || vencedorSemi === vencedorQuartas2) {
                        alert(`Grande final: ${vencedorSemi} vs ${vencedorQuartas3}`)

                        let vencedorFinalChave12 = prompt("Digite o nome do vencedor da final:").toUpperCase()

                        if (vencedorFinalChave12 != vencedorSemi && vencedorFinalChave12 != vencedorQuartas3) {
                          alert("❌ Nome inválido! Essa equipe não participou da final.")
                        } else {
                          alert(`🏆 Parabéns, ${vencedorFinalChave12}! Vocês são os campeões do torneio!`)
                        }
                      } else {
                        alert("❌ Nome inválido! Essa equipe não participou da Semi final")
                      }
                    } else {
                      alert("❌ Nome inválido! Essa equipe não participou das quartas de finais")
                    }
                  } else {
                    alert("❌ Nome inválido! Essa equipe não participou das quartas de finais")
                  }
                } else {
                  alert("❌ Nome inválido! Essa equipe não participou das quartas de finais")
                }
              } else {
                alert("❌ Nome inválido! Essa equipe não participou da partida.")
              }
            } else {
              alert("❌ Nome inválido! Essa equipe não participou da partida.")
            }
          } else {
            alert("❌ Nome inválido! Essa equipe não participou da partida.")
          }
        } else {
          alert("❌ Nome inválido! Essa equipe não participou da partida.")
        }
      } else {
        alert("❌ Nome inválido! Essa equipe não participou da partida.")
      }
    }
  }
} else {
  alert("❌ Numero inválido! Coloque um numero entre 1 e 12")
}
