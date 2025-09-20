let equipes = prompt("Digite o número de equipes que vão participar do campeonato (entre 3 e 12):\n\n" + "Exemplos:\n3 equipes   |   8 equipes\n4 equipes   |   9 equipes\n5 equipes   |  10 equipes\n6 equipes   |  11 equipes\n7 equipes   |  12 equipes").toLowerCase()
if (equipes === "3" || equipes === "3 equipes") {


  let equipe1Chave3 = prompt("Digite o nome da PRIMEIRA equipe:").toUpperCase()
  let equipe2Chave3 = prompt("Digite o nome da SEGUNDA equipe:").toUpperCase()
  let equipe3Chave3 = prompt("Digite o nome da TERCEIRA equipe:").toUpperCase()

  let chave = Math.floor(Math.random() * 3) + 1

  alert(`Sorteio realizado! Vamos ver quem joga a primeira partida...`)

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

  alert("Sorteio realizado! Vamos ver quem joga a primeira partida...")

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

  alert("Sorteio realizado! Vamos ver quem joga a primeira partida...")

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

  alert("Sorteio realizado! Vamos ver quem joga a primeira partida...")

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
  }else if (chave === 3) {
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
  }else if (chave === 4) {
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
  }else if (chave === 5) {
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
  }else if (chave === 6) {
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

  alert("Sorteio realizado! Vamos ver quem joga a primeira partida...")

  if (chave === 1) {
    alert("chaveamento \n 1°Partida: " + equipe1Chave7 + " vs " + equipe2Chave7 + "\n 2°Partida: " + equipe3Chave7 + " vs " + equipe4Chave7 + "\n" + equipe5Chave7 + " Passou para proxima fase\n" + equipe6Chave7 + " Passou para proxima fase\n" + equipe7Chave7 + " Passou para proxima fase")

    alert(`Partida 1: ${equipe1Chave7} vs ${equipe2Chave7}`)

    let vencedor1Chave7 = prompt("Digite o nome do vencedor da primeira partida:").toUpperCase()

    if (vencedor1Chave7 != equipe1Chave7 && vencedor1Chave7 != equipe2Chave7) {
      alert("❌ Nome inválido! Essa equipe não participou da partida.")
    } else {
      alert(`Partida 2: ${equipe3Chave7} vs ${equipe4Chave7}`)

      let vencedor2Chave7 = prompt("Digite o nome do vencedor da segunda partida:").toUpperCase()

      if (vencedor2Chave7 === equipe3Chave7 || vencedor2Chave7 === equipe4Chave7) {
        alert(`Semi final 1: ${vencedor1Chave7} vs ${equipe5Chave7}`)

        let vencedorSemi1Chave7 = prompt("Digite o nome do vencedor da semi final 1:").toUpperCase()
        if (vencedorSemi1Chave7 === vencedor1Chave7 || vencedorSemi1Chave7 === equipe5Chave7) {
          alert(`Semi final 2: ${vencedor2Chave7} vs ${equipe6Chave7}`)

          let vencedorSemi2Chave7 = prompt("Digite o nome do vencedor da semi final 2:").toUpperCase()
          if (vencedorSemi2Chave7 === vencedor2Chave7 || vencedorSemi2Chave7 === equipe6Chave7) {
            alert(`Semi final 3: ${equipe7Chave7} vs ${vencedorSemi1Chave7}`)

            let vencedorSemi3Chave7 = prompt("Digite o nome do vencedor da semi final 3:").toUpperCase()
            if (vencedorSemi3Chave7 === equipe7Chave7 || vencedorSemi3Chave7 === vencedorSemi1Chave7) {
              alert(`Grande final: ${vencedorSemi2Chave7} vs ${vencedorSemi3Chave7}`)

              let vencedorFinalChave7 = prompt("Digite o nome do vencedor da final:").toUpperCase()
              if (vencedorFinalChave7 != vencedorSemi2Chave7 && vencedorFinalChave7 != vencedorSemi3Chave7) {
                alert("❌ Nome inválido! Essa equipe não participou da final.")
              } else {
                alert(`🏆 Parabéns, ${vencedorFinalChave7}! Vocês são os campeões do torneio!`)
              }
            } else {
              alert("❌ Nome inválido! Essa equipe não participou da Semi final 3.")
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
    alert("chaveamento \n 1°Partida: " + equipe1Chave7 + " vs " + equipe3Chave7 + "\n 2°Partida: " + equipe2Chave7 + " vs " + equipe4Chave7 + "\n" + equipe5Chave7 + " Passou para proxima fase\n" + equipe6Chave7 + " Passou para proxima fase\n" + equipe7Chave7 + " Passou para proxima fase")

    alert(`Partida 1: ${equipe1Chave7} vs ${equipe3Chave7}`)

    let vencedor1Chave7 = prompt("Digite o nome do vencedor da primeira partida:").toUpperCase()

    if (vencedor1Chave7 != equipe1Chave7 && vencedor1Chave7 != equipe3Chave7) {
      alert("❌ Nome inválido! Essa equipe não participou da partida.")
    } else {
      alert(`Partida 2: ${equipe2Chave7} vs ${equipe4Chave7}`)

      let vencedor2Chave7 = prompt("Digite o nome do vencedor da segunda partida:").toUpperCase()

      if (vencedor2Chave7 === equipe2Chave7 || vencedor2Chave7 === equipe4Chave7) {
        alert(`Semi final 1: ${vencedor1Chave7} vs ${equipe5Chave7}`)

        let vencedorSemi1Chave7 = prompt("Digite o nome do vencedor da semi final 1:").toUpperCase()
        if (vencedorSemi1Chave7 === vencedor1Chave7 || vencedorSemi1Chave7 === equipe5Chave7) {
          alert(`Semi final 2: ${vencedor2Chave7} vs ${equipe6Chave7}`)

          let vencedorSemi2Chave7 = prompt("Digite o nome do vencedor da semi final 2:").toUpperCase()
          if (vencedorSemi2Chave7 === vencedor2Chave7 || vencedorSemi2Chave7 === equipe6Chave7) {
            alert(`Semi final 3: ${equipe7Chave7} vs ${vencedorSemi1Chave7}`)

            let vencedorSemi3Chave7 = prompt("Digite o nome do vencedor da semi final 3:").toUpperCase()
            if (vencedorSemi3Chave7 === equipe7Chave7 || vencedorSemi3Chave7 === vencedorSemi1Chave7) {
              alert(`Grande final: ${vencedorSemi2Chave7} vs ${vencedorSemi3Chave7}`)

              let vencedorFinalChave7 = prompt("Digite o nome do vencedor da final:").toUpperCase()
              if (vencedorFinalChave7 != vencedorSemi2Chave7 && vencedorFinalChave7 != vencedorSemi3Chave7) {
                alert("❌ Nome inválido! Essa equipe não participou da final.")
              } else {
                alert(`🏆 Parabéns, ${vencedorFinalChave7}! Vocês são os campeões do torneio!`)
              }
            } else {
              alert("❌ Nome inválido! Essa equipe não participou da Semi final 3.")
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
    alert("chaveamento \n 1°Partida: " + equipe1Chave7 + " vs " + equipe4Chave7 + "\n 2°Partida: " + equipe2Chave7 + " vs " + equipe5Chave7 + "\n" + equipe3Chave7 + " Passou para proxima fase\n" + equipe6Chave7 + " Passou para proxima fase\n" + equipe7Chave7 + " Passou para proxima fase")

    alert(`Partida 1: ${equipe1Chave7} vs ${equipe4Chave7}`)

    let vencedor1Chave7 = prompt("Digite o nome do vencedor da primeira partida:").toUpperCase()

    if (vencedor1Chave7 != equipe1Chave7 && vencedor1Chave7 != equipe4Chave7) {
      alert("❌ Nome inválido! Essa equipe não participou da partida.")
    } else {
      alert(`Partida 2: ${equipe2Chave7} vs ${equipe5Chave7}`)

      let vencedor2Chave7 = prompt("Digite o nome do vencedor da segunda partida:").toUpperCase()

      if (vencedor2Chave7 === equipe2Chave7 || vencedor2Chave7 === equipe5Chave7) {
        alert(`Semi final 1: ${vencedor1Chave7} vs ${equipe3Chave7}`)

        let vencedorSemi1Chave7 = prompt("Digite o nome do vencedor da semi final 1:").toUpperCase()
        if (vencedorSemi1Chave7 === vencedor1Chave7 || vencedorSemi1Chave7 === equipe3Chave7) {
          alert(`Semi final 2: ${vencedor2Chave7} vs ${equipe6Chave7}`)

          let vencedorSemi2Chave7 = prompt("Digite o nome do vencedor da semi final 2:").toUpperCase()
          if (vencedorSemi2Chave7 === vencedor2Chave7 || vencedorSemi2Chave7 === equipe6Chave7) {
            alert(`Semi final 3: ${equipe7Chave7} vs ${vencedorSemi1Chave7}`)

            let vencedorSemi3Chave7 = prompt("Digite o nome do vencedor da semi final 3:").toUpperCase()
            if (vencedorSemi3Chave7 === equipe7Chave7 || vencedorSemi3Chave7 === vencedorSemi1Chave7) {
              alert(`Grande final: ${vencedorSemi2Chave7} vs ${vencedorSemi3Chave7}`)

              let vencedorFinalChave7 = prompt("Digite o nome do vencedor da final:").toUpperCase()
              if (vencedorFinalChave7 != vencedorSemi2Chave7 && vencedorFinalChave7 != vencedorSemi3Chave7) {
                alert("❌ Nome inválido! Essa equipe não participou da final.")
              } else {
                alert(`🏆 Parabéns, ${vencedorFinalChave7}! Vocês são os campeões do torneio!`)
              }
            } else {
              alert("❌ Nome inválido! Essa equipe não participou da Semi final 3.")
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
    alert("chaveamento \n 1°Partida: " + equipe1Chave7 + " vs " + equipe5Chave7 + "\n 2°Partida: " + equipe2Chave7 + " vs " + equipe6Chave7 + "\n" + equipe3Chave7 + " Passou para proxima fase\n" + equipe4Chave7 + " Passou para proxima fase\n" + equipe7Chave7 + " Passou para proxima fase")

    alert(`Partida 1: ${equipe1Chave7} vs ${equipe5Chave7}`)

    let vencedor1Chave7 = prompt("Digite o nome do vencedor da primeira partida:").toUpperCase()

    if (vencedor1Chave7 != equipe1Chave7 && vencedor1Chave7 != equipe5Chave7) {
      alert("❌ Nome inválido! Essa equipe não participou da partida.")
    } else {
      alert(`Partida 2: ${equipe2Chave7} vs ${equipe6Chave7}`)

      let vencedor2Chave7 = prompt("Digite o nome do vencedor da segunda partida:").toUpperCase()

      if (vencedor2Chave7 === equipe2Chave7 || vencedor2Chave7 === equipe6Chave7) {
        alert(`Semi final 1: ${vencedor1Chave7} vs ${equipe3Chave7}`)

        let vencedorSemi1Chave7 = prompt("Digite o nome do vencedor da semi final 1:").toUpperCase()
        if (vencedorSemi1Chave7 === vencedor1Chave7 || vencedorSemi1Chave7 === equipe3Chave7) {
          alert(`Semi final 2: ${vencedor2Chave7} vs ${equipe4Chave7}`)

          let vencedorSemi2Chave7 = prompt("Digite o nome do vencedor da semi final 2:").toUpperCase()
          if (vencedorSemi2Chave7 === vencedor2Chave7 || vencedorSemi2Chave7 === equipe4Chave7) {
            alert(`Semi final 3: ${equipe7Chave7} vs ${vencedorSemi1Chave7}`)

            let vencedorSemi3Chave7 = prompt("Digite o nome do vencedor da semi final 3:").toUpperCase()
            if (vencedorSemi3Chave7 === equipe7Chave7 || vencedorSemi3Chave7 === vencedorSemi1Chave7) {
              alert(`Grande final: ${vencedorSemi2Chave7} vs ${vencedorSemi3Chave7}`)

              let vencedorFinalChave7 = prompt("Digite o nome do vencedor da final:").toUpperCase()
              if (vencedorFinalChave7 != vencedorSemi2Chave7 && vencedorFinalChave7 != vencedorSemi3Chave7) {
                alert("❌ Nome inválido! Essa equipe não participou da final.")
              } else {
                alert(`🏆 Parabéns, ${vencedorFinalChave7}! Vocês são os campeões do torneio!`)
              }
            } else {
              alert("❌ Nome inválido! Essa equipe não participou da Semi final 3.")
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
    alert("chaveamento \n 1°Partida: " + equipe1Chave7 + " vs " + equipe6Chave7 + "\n 2°Partida: " + equipe2Chave7 + " vs " + equipe7Chave7 + "\n" + equipe3Chave7 + " Passou para proxima fase\n" + equipe4Chave7 + " Passou para proxima fase\n" + equipe5Chave7 + " Passou para proxima fase")

    alert(`Partida 1: ${equipe1Chave7} vs ${equipe6Chave7}`)

    let vencedor1Chave7 = prompt("Digite o nome do vencedor da primeira partida:").toUpperCase()

    if (vencedor1Chave7 != equipe1Chave7 && vencedor1Chave7 != equipe6Chave7) {
      alert("❌ Nome inválido! Essa equipe não participou da partida.")
    } else {
      alert(`Partida 2: ${equipe2Chave7} vs ${equipe7Chave7}`)

      let vencedor2Chave7 = prompt("Digite o nome do vencedor da segunda partida:").toUpperCase()

      if (vencedor2Chave7 === equipe2Chave7 || vencedor2Chave7 === equipe7Chave7) {
        alert(`Semi final 1: ${vencedor1Chave7} vs ${equipe3Chave7}`)

        let vencedorSemi1Chave7 = prompt("Digite o nome do vencedor da semi final 1:").toUpperCase()
        if (vencedorSemi1Chave7 === vencedor1Chave7 || vencedorSemi1Chave7 === equipe3Chave7) {
          alert(`Semi final 2: ${vencedor2Chave7} vs ${equipe4Chave7}`)

          let vencedorSemi2Chave7 = prompt("Digite o nome do vencedor da semi final 2:").toUpperCase()
          if (vencedorSemi2Chave7 === vencedor2Chave7 || vencedorSemi2Chave7 === equipe4Chave7) {
            alert(`Semi final 3: ${equipe5Chave7} vs ${vencedorSemi1Chave7}`)

            let vencedorSemi3Chave7 = prompt("Digite o nome do vencedor da semi final 3:").toUpperCase()
            if (vencedorSemi3Chave7 === equipe5Chave7 || vencedorSemi3Chave7 === vencedorSemi1Chave7) {
              alert(`Grande final: ${vencedorSemi2Chave7} vs ${vencedorSemi3Chave7}`)

              let vencedorFinalChave7 = prompt("Digite o nome do vencedor da final:").toUpperCase()
              if (vencedorFinalChave7 != vencedorSemi2Chave7 && vencedorFinalChave7 != vencedorSemi3Chave7) {
                alert("❌ Nome inválido! Essa equipe não participou da final.")
              } else {
                alert(`🏆 Parabéns, ${vencedorFinalChave7}! Vocês são os campeões do torneio!`)
              }
            } else {
              alert("❌ Nome inválido! Essa equipe não participou da Semi final 3.")
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
    alert("chaveamento \n 1°Partida: " + equipe1Chave7 + " vs " + equipe7Chave7 + "\n 2°Partida: " + equipe2Chave7 + " vs " + equipe3Chave7 + "\n" + equipe4Chave7 + " Passou para proxima fase\n" + equipe5Chave7 + " Passou para proxima fase\n" + equipe6Chave7 + " Passou para proxima fase")

    alert(`Partida 1: ${equipe1Chave7} vs ${equipe7Chave7}`)

    let vencedor1Chave7 = prompt("Digite o nome do vencedor da primeira partida:").toUpperCase()

    if (vencedor1Chave7 != equipe1Chave7 && vencedor1Chave7 != equipe7Chave7) {
      alert("❌ Nome inválido! Essa equipe não participou da partida.")
    } else {
      alert(`Partida 2: ${equipe2Chave7} vs ${equipe3Chave7}`)

      let vencedor2Chave7 = prompt("Digite o nome do vencedor da segunda partida:").toUpperCase()

      if (vencedor2Chave7 === equipe2Chave7 || vencedor2Chave7 === equipe3Chave7) {
        alert(`Semi final 1: ${vencedor1Chave7} vs ${equipe4Chave7}`)

        let vencedorSemi1Chave7 = prompt("Digite o nome do vencedor da semi final 1:").toUpperCase()
        if (vencedorSemi1Chave7 === vencedor1Chave7 || vencedorSemi1Chave7 === equipe4Chave7) {
          alert(`Semi final 2: ${vencedor2Chave7} vs ${equipe5Chave7}`)

          let vencedorSemi2Chave7 = prompt("Digite o nome do vencedor da semi final 2:").toUpperCase()
          if (vencedorSemi2Chave7 === vencedor2Chave7 || vencedorSemi2Chave7 === equipe5Chave7) {
            alert(`Semi final 3: ${equipe6Chave7} vs ${vencedorSemi1Chave7}`)

            let vencedorSemi3Chave7 = prompt("Digite o nome do vencedor da semi final 3:").toUpperCase()
            if (vencedorSemi3Chave7 === equipe6Chave7 || vencedorSemi3Chave7 === vencedorSemi1Chave7) {
              alert(`Grande final: ${vencedorSemi2Chave7} vs ${vencedorSemi3Chave7}`)

              let vencedorFinalChave7 = prompt("Digite o nome do vencedor da final:").toUpperCase()
              if (vencedorFinalChave7 != vencedorSemi2Chave7 && vencedorFinalChave7 != vencedorSemi3Chave7) {
                alert("❌ Nome inválido! Essa equipe não participou da final.")
              } else {
                alert(`🏆 Parabéns, ${vencedorFinalChave7}! Vocês são os campeões do torneio!`)
              }
            } else {
              alert("❌ Nome inválido! Essa equipe não participou da Semi final 3.")
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
  }else if (chave === 7) {
    alert("chaveamento \n 1°Partida: " + equipe1Chave7 + " vs " + equipe2Chave7 + "\n 2°Partida: " + equipe3Chave7 + " vs " + equipe5Chave7 + "\n" + equipe4Chave7 + " Passou para proxima fase\n" + equipe6Chave7 + " Passou para proxima fase\n" + equipe7Chave7 + " Passou para proxima fase")

    alert(`Partida 1: ${equipe1Chave7} vs ${equipe2Chave7}`)

    let vencedor1Chave7 = prompt("Digite o nome do vencedor da primeira partida:").toUpperCase()

    if (vencedor1Chave7 != equipe1Chave7 && vencedor1Chave7 != equipe2Chave7) {
      alert("❌ Nome inválido! Essa equipe não participou da partida.")
    } else {
      alert(`Partida 2: ${equipe3Chave7} vs ${equipe5Chave7}`)

      let vencedor2Chave7 = prompt("Digite o nome do vencedor da segunda partida:").toUpperCase()

      if (vencedor2Chave7 === equipe3Chave7 || vencedor2Chave7 === equipe5Chave7) {
        alert(`Semi final 1: ${vencedor1Chave7} vs ${equipe4Chave7}`)

        let vencedorSemi1Chave7 = prompt("Digite o nome do vencedor da semi final 1:").toUpperCase()
        if (vencedorSemi1Chave7 === vencedor1Chave7 || vencedorSemi1Chave7 === equipe4Chave7) {
          alert(`Semi final 2: ${vencedor2Chave7} vs ${equipe6Chave7}`)

          let vencedorSemi2Chave7 = prompt("Digite o nome do vencedor da semi final 2:").toUpperCase()
          if (vencedorSemi2Chave7 === vencedor2Chave7 || vencedorSemi2Chave7 === equipe6Chave7) {
            alert(`Semi final 3: ${equipe7Chave7} vs ${vencedorSemi1Chave7}`)

            let vencedorSemi3Chave7 = prompt("Digite o nome do vencedor da semi final 3:").toUpperCase()
            if (vencedorSemi3Chave7 === equipe7Chave7 || vencedorSemi3Chave7 === vencedorSemi1Chave7) {
              alert(`Grande final: ${vencedorSemi2Chave7} vs ${vencedorSemi3Chave7}`)

              let vencedorFinalChave7 = prompt("Digite o nome do vencedor da final:").toUpperCase()
              if (vencedorFinalChave7 != vencedorSemi2Chave7 && vencedorFinalChave7 != vencedorSemi3Chave7) {
                alert("❌ Nome inválido! Essa equipe não participou da final.")
              } else {
                alert(`🏆 Parabéns, ${vencedorFinalChave7}! Vocês são os campeões do torneio!`)
              }
            } else {
              alert("❌ Nome inválido! Essa equipe não participou da Semi final 3.")
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
}else if (equipes === "8" || equipes === "8 equipes") {

  let equipe1Chave8 = prompt("Digite o nome da PRIMEIRA equipe:").toUpperCase()
  let equipe2Chave8 = prompt("Digite o nome da SEGUNDA equipe:").toUpperCase()
  let equipe3Chave8 = prompt("Digite o nome da TERCEIRA equipe:").toUpperCase()
  let equipe4Chave8 = prompt("Digite o nome da QUARTA equipe:").toUpperCase()
  let equipe5Chave8 = prompt("Digite o nome da QUINTA equipe:").toUpperCase()
  let equipe6Chave8 = prompt("Digite o nome da SEXTA equipe:").toUpperCase()
  let equipe7Chave8 = prompt("Digite o nome da SÉTIMA equipe:").toUpperCase()
  let equipe8Chave8 = prompt("Digite o nome da OITAVA equipe:").toUpperCase()

  let chave = Math.floor(Math.random() * 8) + 1

  alert("Sorteio realizado! Vamos ver quem joga a primeira partida...")

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
}
