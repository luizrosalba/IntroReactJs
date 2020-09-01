# Introdução ao ReactJS
## Conheça a tecnologia ReactJS
- Não é um framework 
- É uma biblioteca JS para criar interfaces de usuário 

- Criado em 2011 por jordan walke no facebook 
- Baseado em xhp um framework para criação html no php 
- Utilizado no mural de noticias de ferramentas 
- problemas de renderização , escalabilidade , etc 
- 2012 Instragram 
- 2013 Tornou-se Open source 
- 2015 React Native (mobile)
- 2015 UWP Universal windows plataform (desktop)
- Netflix 
- é uma linguagem declarativa (não quer saber se uma condição é satisfeita par ser exibida a interface)
- pode ser usada em celulares , pwa , frontend , backend (nextjs)
## Aprenda a configurar o ReactJS
- Renderização 
- React DOM toda renderização é feita em nós raíz
- a renderização é a menor parte para construir uma interface no react 
- o browse tem o DOM 
- a renderização de um componente React no DOM é feita Utilizando o ReactDOM.render.
- o react nao trabalha em cima do dom diretamente, utiliza o Dom virtual que controla tudo que está no DOM
- Sempre que há uma mudança no html o react faz uma diferença e somente no pedaço onde há atualização é feita uma nova renderização 
## components 
- Deixa tudo modular ? 
- componentes e props 
- tornar componentizavel é bom 
- react trabalha bem com reaproveitamento de código 
- pode trabalhar como função ou classe 
- Js não tem classe , tem protótipo 
- Quando JS é transpilado as classes são transformadas em protótipos 
- components - src - index 
- npm i 
- npm run start 
- 
## Renderizando elementos 
- Estado e ciclo de vida 
- Inicialização 
- Montagem 
- Atualização 
- Desmontagem 
![](img/Capturar.PNG)
- nenhum componente pai ou filho devem saber se outro componente possui estado ou nao 
- o estado é apoenas local ao componente e c aso seja necessário enviar algum atributo para outro então é feito via props
## Ecossistema 
Bibliotecas complementares 
- React Router gerenciamento de estados 
- Redux 
- Material UI criação de interfaces 
- Ant-Design 
- Storybook criação de componentes 
- Gastby 
- Jest    teste 
- React i18n Next  internacionalizacao 
## Configuração 
- React Create App (starta projetos com configuração básica, servidor , Jest ... )
- Utiliza o react Scripts 
- Task Runners e Bundlers Sizers 
- npm init 
- npm install --save react@16.8.6 react-dom@16.8.6 @react-scripts3.0.1
- pasta public -> pasta inicial do projeto 
- - React requer um arquivo css
- react eh uma single page application (SPA) , baixa todo o prohjeto e renderiza uma  vez todas as rotas , toda vez que o user muda de rota , ele renderiza essa rota ( performace ) 
## JSX 
- Não é HTML nem String 
- É uma linguagem de marcação que permite criar estruturas do HTML com o poder do javascript 
- React usa componentes 
- Não é obrigatória a utilização do JSX mas facilita 
- Browser nao intepreta JSX , para isso é necessario um transpilador para a aplicação entender o código (exemplo BABEL) 
- para executar um JS dentro de um JSX deve estar entre chaves 
# O que é webpack 
## Integrando webpack ao desenvolvimento com ReactJS
- Webpack - Eslint
- -e um module bundler ( empacotador de modulos para aplicações js )
- gerar bundler será utilizano no HTML em ES5 
- https://webpack.js.org/
- React script (aquele do facebook) utiliza webpack por trás 
- Suporte : Fontes , CSS , Imagens , HTML , JS (JSON) , Plugins 
- Entry - utilizando grafo , o webpack precisa de um ponto de entrada para buscar todos os modulos e dependencias 
- Output 
- DEtermina os bundlers que o webpack emite 
- loaders - permite que o WP gerencie arquivos nao JS 
- Plugins - Podem ser utilizados para otimizacao de pacotes, minificacao , injecao de scripts 
- mode utilizados para abordagens de configurações. É possivle configurar modulos como production , development ou none 
- production trás otimizacoes internas 
-criacao do webpack.config.js 
- development é utilizado com tres plugins , UglifyJsPligin , ModuleConcatenationPlugin e NoEmitOn ErrosPlugin 
- npm i --save-dev -D webpack webpack-cli
- npm i --save-dev -D webpack webpack-cli "build":"webpack --mode production" 
- Se fazemos no package.json  criamos o bundler.js em modo produção 
-  "scripts": {  
-    "build": "webpack --mode production",
- se mudamos o ponto de entrada no webpack.config.js  para entry: './index.js', /// ponto de entrada
- conseguimos executar node.\dist\bundler.js 
- npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev 
- com o preset env posso transpilar para es5 , es 6 ... para manter a compatibilidade com browsers mais antigos
- para o babel poder transpilar o react para es5 usamos o preset-react
- babelrc ->  como usamos o presetenv e o preset do react para o babel funcionar precisamos do arquivo babel rc
- adicionar os presets lá 
- npm i react react-dom
- babelrc le os plugins e os presets 
- criamos o app (index.js e app.jsx) 
- npm run dev 
- npm i webpack-dev-server 
- "start:dev": "webpack-dev-server", já gera o servidor pra vc 
- hotreloader a cada alteração ele atualiza a pagina automaticamente 
- npm run start:dev
- http://localhost:8080/
-  se vc adiciona um arquivo depois de gerar o bundle ele nao será importado para o projeto 
- 

## Instalação e Configuração do ESLint 

- npm install --save-dev eslint babel-eslint eslint-plugin-react eslint-watch
- npm run eslint
- npm i react react-dom react-scripts
- sourcemap - gera um mapeamento de todos os arquivos de uma forma fácil de  debugar 
- no webpack adicionar devtool: 'source-map',
- npm run start:dev  
# Aula 3 - Conceitos aplicados aos tipos de dados e condições da biblioteca 
- Renderização condicional : Em React você pode criar componentes distintos ,que encapsulam o comportamento que você precisa. Você pode renderizar apenas alguns dos elementos , dependendo do estado da sua aplicação 
- lesson3 - conditional 
-  npm i 
- npm start 
- dentro do app para pular linha < br />
- {hasCustomer &&  (Apresenta_botao) }
- {hasCustomer ?  (Apresenta_botao):(Cadastra_cliente) }
- o ideal é separar apresenta_botao e cadastra_cliente em renders , que serão executados observando o resutlado de hasCustomer 
## Listas e Chaves 
- npm i 

- cada elemento deve ter sua key - neste caso usamos o id de customer para fazer a key . colocar o indice poderia dar problema se estivermos trabalhando com dois vetores . chaves devem ser unicas apenas entre elementos irmaos 

```
import React from "react";

const listCustomer = [
  {
    id: 1,
    name: 'Bruno Carneiro',
    skills: ['React', 'Node', 'CSS', 'Webpack']
  },
  {
    id: 2,
    name: 'Aline Carneiro',
    skills: ['HTML', 'React Native', 'Go', 'JS']
  },
  {
    id: 3,
    name: 'Fulano de Tal',
    skills: ['Assembly']
  },
  {
    id: 4,
    name: 'José Ciclano',
    skills: ['Reason']
  }
]

const App = () => {

  const renderCustomers = (customer, index) => {
    return (
      <div key={`customer-${customer.id}`}>
        <li>{customer.name}</li>
        {customer.skills.map(renderSkills)}
      </div>
    )
  }

  const renderSkills = (skill, index) => {
    return (
      <div style={{ paddingLeft: '30px' }} key={`skill-${index}`}>
        <li>{skill}</li>
      </div>
    )
  }

  return (
    <div>
      <p>Digital Innovation One</p>
      <p>Bem vindo a nossa aula =D.</p>
      <div>
        <ul>
          {listCustomer.map(renderCustomers)}
        </ul>
      </div>
    </div>
  );
};
export default App;
```
## Manipulando Eventos 

- similar a mnanipular elementos do dom 
- diferenças sintaxes: 
- eventos em react são nomeadas usando camelCase ao invés de letras minúsculas 
- com o jsx você passa uma função como manipulador de enventos ao invés de um texto 
### Eventos 
- npm i 
- npm start 

- passando eventos . "e" acessa o prototype do browser daquele elemento 
-  

```
import React from "react";

const showEvent = (e) => {
  console.log('evento clicado');
  console.log(e);
}

const Button = <button onClick={showEvent}> Mostrar Evento </button> 

const App = () => {
  const handleChange = (e) =>  {
    const {value} = e.target; 
    console.log(value);
  }

  return (
    <div>
      <p>Digital Innovation One</p>
      <p>Bem vindo a nossa aula =D.</p>
      <input onChange={handleChange} /> 

      <div>
        <ul>
          {Button}
        </ul>
      </div>
    </div>
  );
};
export default App;
```

Mudando o contexto para dentro do app para acessar sem usar o this 

```
import React from "react";


const App = () => {

  const name = 'Luiz Rosalba '

  const handleChange = (e) =>  {
    const {value} = e.target; 
    console.log(value);
  }

  const showEvent = (e) => {
    console.log('evento clicado');
    console.log(e);
    alert(name );
  }

  const Button = <button onClick={showEvent}> Mostrar Evento </button> 

  return (
    <div>
      <p>Digital Innovation One</p>
      <p>Bem vindo a nossa aula =D.</p>
      <input onChange={handleChange} /> 

      <div>
        <ul>
          {Button}
        </ul>
      </div>
    </div>
  );
};
export default App;
```
Adicionando um botao para deletar cada cliente na lista da aula anterior : 
```
import React from "react";

const listCustomer = [
  {
    id: 1,
    name: 'Bruno Carneiro',
    skills: ['React', 'Node', 'CSS', 'Webpack']
  },
  {
    id: 2,
    name: 'Aline Carneiro',
    skills: ['HTML', 'React Native', 'Go', 'JS']
  },
  {
    id: 3,
    name: 'Fulano de Tal',
    skills: ['Assembly']
  },
  {
    id: 4,
    name: 'José Ciclano',
    skills: ['Reason']
  }
]

const App = () => {

const handleClick = (e) =>{
  console.log('deletar cliente');
}

  const renderCustomers = (customer, index) => {
    return (
      <div key={`customer-${customer.id}`}>
        <li>{customer.name} <button onClick={handleClick}>Deletar Cliente </button>  </li>
        {customer.skills.map(renderSkills)}
      </div>
    )
  }

  const renderSkills = (skill, index) => {
    return (
      <div style={{ paddingLeft: '30px' }} key={`skill-${index}`}>
        <li>{skill}</li>
      </div>
    )
  }

  return (
    <div>
      <p>Digital Innovation One</p>
      <p>Bem vindo a nossa aula =D.</p>
      <div>
        <ul>
          {listCustomer.map(renderCustomers)}
        </ul>
      </div>
    </div>
  );
};
export default App;
```

Passando o id como argumento para o manipilador de eventos 

```
import React from "react";

const listCustomer = [
  {
    id: 1,
    name: 'Bruno Carneiro',
    skills: ['React', 'Node', 'CSS', 'Webpack']
  },
  {
    id: 2,
    name: 'Aline Carneiro',
    skills: ['HTML', 'React Native', 'Go', 'JS']
  },
  {
    id: 3,
    name: 'Fulano de Tal',
    skills: ['Assembly']
  },
  {
    id: 4,
    name: 'José Ciclano',
    skills: ['Reason']
  }
]

const App = () => {

const handleClick = (e,id) =>{
  console.log('deletar cliente');
  alert(`ID do cliente : ${id}`)
}

  const renderCustomers = (customer, index) => {
    return (
      <div key={`customer-${customer.id}`}>
        <li>{customer.name} <button onClick={(e)=>handleClick(e,customer.id)}>Deletar Cliente </button>  </li>
        {customer.skills.map(renderSkills)}
      </div>
    )
  }

  const renderSkills = (skill, index) => {
    return (
      <div style={{ paddingLeft: '30px' }} key={`skill-${index}`}>
        <li>{skill}</li>
      </div>
    )
  }

  return (
    <div>
      <p>Digital Innovation One</p>
      <p>Bem vindo a nossa aula =D.</p>
      <div>
        <ul>
          {listCustomer.map(renderCustomers)}
        </ul>
      </div>
    </div>
  );
};
export default App;
```
### Pensando do jeito React 
- thinking react 
- npm i 
- deixar os componentes da forma mais livre possivel 
- Começar com um mock  (simulam o comportamento de objetos reais de forma controlada. São normalmente criados para testar o comportamento de outros objetos. Em outras palavras, os objetos mock são objetos “falsos” que simulam o comportamento de uma classe ou objeto “real” para que possamos focar o teste na unidade a ser testada.)
- Separar a Ui em páginas (escopos) diferentes por exemplo , colocar listcustomer em um arquivo e importa-lo 
- separar a UI em uma hierarquia de componentes
- Criar uma versão estátia  em react 
- Identificar a representação minima mas completa da UI 
- Identificar onde o state deve ficar 
- adicionar o fluxo de dados inverso 
- react é funcional e modular, deve estar todo separadinho em arquivos 
- rotas do projeto são os containers (Views )

