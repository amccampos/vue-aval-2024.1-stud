# FwJs - Avaliação de Vue - 2024.1

Avaliação sobre Vue no semestre 2024.1

A atividade consiste em reproduzir o storybook apresentado na pasta storybook-static. Para consultá-la, execute o script abaixo:

```
npm run target-storybook
```

Para tal, você deverá:

1) Altere o componente `Match` para que receba as seguintes propriedades:
  - `teamA`: do tipo TeamId
  - `teamB`: do tipo TeamId
2) Insira no componente `Match` um objeto compartilhado usando a chave `matches`. O objeto compartilhado deve ser armazenado numa variável com o mesmo nome da chave.
3) Será buscada no objeto anterior a partida com os identificadores dos times passados. Faça com que o componente `Match` apresente a mensagem "Partida inválida" se a partida não existir.
4) Altere o componente `Round` para que receba uma propriedade de nome `num` do tipo numérico.
5) A variável `roundMatches` terá todas as partidas da rodada passada na propriedade. Faça com que o componente `Round` apresente todas suas partidas.
6) Altere o componente Rounds para que receba uma propriedade de nome `max` do tipo numérico e que possua valor default 1.
7) Em `Rounds`, crie uma variável reativa com o valor inicial de 1 e passe seu valor para o componente-filho `Round` através da propriedade `num`. Insira também o valor dessa variável no cabeçalho da rodada.
8) Escreva funções para incrementar e decrementar a variável reativa criada, assegurando que ela fique no intervalo [1 ; max], onde `max` é o valor da propriedade passada.
9) Chame essas funções quando o usuário clicar nos botões para decrementar (à esquerda) ou incrementar (à direita).
10) No componente Championship, compartilhe o conteúdo da variável `matches` usando como chave o mesmo nome.
