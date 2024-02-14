const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas: [
        "Uma linguagem de programação de servidor",
        "Uma linguagem de marcação para criar páginas web",
        "Uma linguagem de programação de alto nível para desenvolvimento web",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função do comando 'console.log()' em JavaScript?",
      respostas: [
        "Exibir mensagens de erro no console",
        "Imprimir mensagens no console para depuração",
        "Criar um novo objeto no console",
      ],
      correta: 1
    },
    {
      pergunta: "Como declarar uma variável em JavaScript?",
      respostas: [
        "var myVar = 10;",
        "let myVar = 10;",
        "const myVar = 10;",
      ],
      correta: 2
    },
    {
      pergunta: "O que é uma função em JavaScript?",
      respostas: [
        "Um tipo de dado primitivo",
        "Um bloco de código reutilizável",
        "Um operador lógico",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o operador de comparação estrita em JavaScript?",
      respostas: [
        "==",
        "===",
        "!=",
      ],
      correta: 2
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Um modelo de desenvolvimento orientado a objetos",
        "Uma linguagem de script",
        "Uma representação da estrutura da página web",
      ],
      correta: 0
    },
    {
      pergunta: "O que é um evento em JavaScript?",
      respostas: [
        "Uma expressão regular",
        "Um método de console",
        "Uma ação que ocorre em resposta a uma interação do usuário",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a diferença entre 'let' e 'const' na declaração de variáveis?",
      respostas: [
        "Nenhuma, são sinônimos",
        "'let' é usado para variáveis mutáveis e 'const' para variáveis imutáveis",
        "'const' é usado apenas para números",
      ],
      correta: 2
    },
    {
      pergunta: "O que é um array em JavaScript?",
      respostas: [
        "Uma expressão regular",
        "Um tipo de dado primitivo",
        "Uma estrutura de dados que armazena elementos de forma ordenada",
      ],
      correta: 2
    },
    {
      pergunta: "Como comentar uma linha de código em JavaScript?",
      respostas: [
        "// Este é um comentário",
        "/* Este é um comentário */",
        "# Este é um comentário",
      ],
      correta: 0
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totaldePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#Acertos span')
  mostrarTotal.textContent = corretas.size + 'de' + totaldePerguntas
  
  //looping ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
    
  for(let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name','pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta //true or false somente
     
     corretas.delete(item)
      if(estaCorreta){
        corretas.add(item)
      }
      mostrarTotal.textContent = corretas.size + 'de ' + totaldePerguntas
    }
  
  
  
     quizItem.querySelector('dl').appendChild(dt)
    }
  
    quizItem.querySelector('dl dt').remove()
     
    //coloca a pergunta na tela
    quiz.appendChild(quizItem)
  
  }