/*
Agora é a sua hora de brilhar e construir um perfil de destaque na DIO! Explore todos os conceitos explorados até aqui e replique (ou melhore, porque não?) este projeto prático. Para isso, crie seu próprio repositório e aumente ainda mais seu portfólio de projetos no GitHub, o qual pode fazer toda diferença em suas entrevistas técnicas 😎
 
Neste repositório, insira todos os links e arquivos necessários para seu projeto, seja um arquivo de banco de dados ou um link para o template no Figma.
 
Dica: Se o expert forneceu um repositório Github, você pode dar um "fork" no repositório dele para organizar suas alterações e evoluções mantendo uma referência direta ao código-fonte original.
Instruções para entrega
# 1️⃣ Desafio Classificador de nível de Herói

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões

## Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"

 
 
 
Bons estudos 😉
*/


let heroi = "";
let experiencia = 0;

// Adiciona heróis ao array
do {
  heroi = prompt("Qual nome do herói?");
  if (!isNaN(heroi)) {
    alert("Por favor, digite um nome válido (apenas letras e não vazio).");
  }
} while (!isNaN(heroi));

do {
  experiencia = parseFloat(prompt("Quanto de experiência ele tem?"));
  if (experiencia <= 0 || isNaN(experiencia)) {
    alert("Por favor, insira uma quantidade válida de experiência.");
  }
} while (experiencia <= 0 || isNaN(experiencia));


  if (experiencia <= 1000) {
    alert(
      heroi + " tem " + experiencia + " pontos, portanto está no nível Ferro."
    );
  } else if (experiencia > 1000 && experiencia <= 2000) {
    alert(
      heroi + " tem " + experiencia + " pontos, portanto está no nível Bronze."
    );
  } else if (experiencia > 2000 && experiencia <= 5000) {
    alert(
      heroi + " tem " + experiencia + " pontos, portanto está no nível Prata."
    );
  } else if (experiencia > 5000 && experiencia <= 7000) {
    alert(
      heroi + " tem " + experiencia + " pontos, portanto está no nível Ouro."
    );
  } else if (experiencia > 7000 && experiencia <= 8000) {
    alert(
      heroi + " tem " + experiencia + " pontos, portanto está no nível Platina."
    );
  } else if (experiencia > 8000 && experiencia <= 9000) {
    alert(
      heroi +
        " tem " +
        experiencia +
        " pontos, portanto está no nível Ascendente."
    );
  } else if (experiencia > 9000 && experiencia <= 10000) {
    alert(
      heroi + " tem " + experiencia + " pontos, portanto está no nível Imortal."
    );
  } else {
    alert(
      heroi +" tem " +experiencia +" pontos, portanto está no nível Radiante."
    );
  }

