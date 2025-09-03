//Pergunta quantas equipes vão estar no campeonato
let EQUIPES = prompt(`
Digite o número de equipes que você quer:

    3 equipes;   8 equipes 
    4 equipes;   9 equipes 
    5 equipes;  10 equipes 
    6 equipes;  11 equipes 
    7 equipes;  12 equipes 
`)

switch (EQUIPES) {
    case "3":
        //nomes das equipes
        let EQUIPE1 = prompt("Qual o nome da primeira equipe?").toUpperCase()
        let EQUIPE2 = prompt("Qual o nome da segunda equipe?").toUpperCase()
        let EQUIPE3 = prompt("Qual o nome da terceira equipe?").toUpperCase()
        //escolhe um numero aleatorio de 1 a 3 para o chaveamento das equipes
        let POSICAO = Math.floor(Math.random() * 3) + 1

        if (POSICAO === 1) {
            alert(`O primeiro jogo é: ${EQUIPE1} X ${EQUIPE2}`)
            let VENCEDOR1 = prompt("Quem foi o vencedor da primeira partida?").toUpperCase()

            if (VENCEDOR1 === EQUIPE1) {
                alert(`A segunda partida é: ${EQUIPE1} X ${EQUIPE3}`)
                let VENCEDOR2 = prompt("Quem foi o vencedor da segunda partida?").toUpperCase()

                if (VENCEDOR2 === EQUIPE1 || VENCEDOR2 === EQUIPE3) {
                    alert(`Parabéns ${VENCEDOR2}, vocês são os campeões!`)
                } else {
                    alert("Essa equipe não participou da segunda partida.")
                }

            } else if (VENCEDOR1 === EQUIPE2) {
                alert(`A segunda partida é: ${EQUIPE2} X ${EQUIPE3}`)
                let VENCEDOR2 = prompt("Quem foi o vencedor da segunda partida?").toUpperCase()

                if (VENCEDOR2 === EQUIPE2 || VENCEDOR2 === EQUIPE3) {
                    alert(`Parabéns ${VENCEDOR2}, vocês são os campeões!`)
                } else {
                    alert("Essa equipe não participou da segunda partida.")
                }

            } else {
                alert("Essa equipe não participou da primeira partida.")
            }

        } else if (POSICAO === 2) {
            alert(`O primeiro jogo é: ${EQUIPE1} X ${EQUIPE3}`)
            let VENCEDOR1 = prompt("Quem foi o vencedor da primeira partida?").toUpperCase()

            if (VENCEDOR1 === EQUIPE1) {
                alert(`A segunda partida é: ${EQUIPE1} X ${EQUIPE2}`)
                let VENCEDOR2 = prompt("Quem foi o vencedor da segunda partida?").toUpperCase()

                if (VENCEDOR2 === EQUIPE1 || VENCEDOR2 === EQUIPE2) {
                    alert(`Parabéns ${VENCEDOR2}, vocês são os campeões!`)
                } else {
                    alert("Essa equipe não participou da segunda partida.")
                }

            } else if (VENCEDOR1 === EQUIPE3) {
                alert(`A segunda partida é: ${EQUIPE3} X ${EQUIPE2}`)
                let VENCEDOR2 = prompt("Quem foi o vencedor da segunda partida?").toUpperCase()

                if (VENCEDOR2 === EQUIPE3 || VENCEDOR2 === EQUIPE2) {
                    alert(`Parabéns ${VENCEDOR2}, vocês são os campeões!`)
                } else {
                    alert("Essa equipe não participou da segunda partida.")
                }

            } else {
                alert("Essa equipe não participou da primeira partida.")
            }

        } else if (POSICAO === 3) {
            alert(`O primeiro jogo é: ${EQUIPE2} X ${EQUIPE3}`)
            let VENCEDOR1 = prompt("Quem foi o vencedor da primeira partida?").toUpperCase()

            if (VENCEDOR1 === EQUIPE2) {
                alert(`A segunda partida é: ${EQUIPE2} X ${EQUIPE1}`)
                let VENCEDOR2 = prompt("Quem foi o vencedor da segunda partida?").toUpperCase()

                if (VENCEDOR2 === EQUIPE2 || VENCEDOR2 === EQUIPE1) {
                    alert(`Parabéns ${VENCEDOR2}, vocês são os campeões!`)
                } else {
                    alert("Essa equipe não participou da segunda partida.")
                }

            } else if (VENCEDOR1 === EQUIPE3) {
                alert(`A segunda partida é: ${EQUIPE3} X ${EQUIPE1}`)
                let VENCEDOR2 = prompt("Quem foi o vencedor da segunda partida?").toUpperCase()

                if (VENCEDOR2 === EQUIPE3 || VENCEDOR2 === EQUIPE1) {
                    alert(`Parabéns ${VENCEDOR2}, vocês são os campeões!`)
                } else {
                    alert("Essa equipe não participou da segunda partida.")
                }

            } else {
                alert("Essa equipe não participou da primeira partida.")
            }
        }

        break

    default:
        alert("Número de equipes ainda não suportado no momento")
}
