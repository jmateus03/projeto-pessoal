//Pergunta quantas equipes vão estar no campeonato
let equipes = prompt("Digite o número de equipes que você quer: \n\n 3 equipes;   8 equipes; \n 4 equipes;   9 equipes; \n 5 equipes;  10 equipes; \n 6 equipes;  11 equipes; \n 7 equipes;  12 equipes. ").toLowerCase()

if(equipes === "3" || equipes === "3 equipes"){
        //nomes das equipes
        let equipe1 = prompt("Insira o nome da primeira equipe:").toUpperCase()
        let equipe2 = prompt("Insira o nome da segunda equipe:").toUpperCase()
        let equipe3 = prompt("Insira o nome da terceira equipe:").toUpperCase()

        //escolhe um numero aleatorio de 1 a 3 para o chaveamento das equipes
        let posicao = Math.floor(Math.random() * 3) + 1

        if (posicao === 1) {
            alert(`O primeiro jogo é: ${equipe1} X ${equipe2}`)
            let vencedor1 = prompt("Quem foi o vencedor da primeira partida?").toUpperCase()

            if (vencedor1 === equipe1) {
                alert(`A final será: ${equipe1} X ${equipe3}`)
                let vencedor2 = prompt("Quem foi o vencedor da segunda partida?").toUpperCase()

                if (vencedor2 === equipe1 || vencedor2 === equipe3) {
                    alert(`Parabéns ${vencedor2}, vocês são os campeões!`)
                } else {
                    alert("Essa equipe não participou da segunda partida.")
                }

            } else if (vencedor1 === equipe2) {
                alert(`A final será: ${equipe2} X ${equipe3}`)
                let vencedor2 = prompt("Quem foi o vencedor da segunda partida?").toUpperCase()

                if (vencedor2 === equipe2 || vencedor2 === equipe3) {
                    alert(`Parabéns ${vencedor2}, vocês são os campeões!`)
                } else {
                    alert("Essa equipe não participou da segunda partida.")
                }

            } else {
                alert("Essa equipe não participou da primeira partida.")
            }
        }
    }
