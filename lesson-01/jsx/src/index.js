import React from "react"
import ReactDOM from "react-dom"
import "./styles.css"

function sum(a, b) {
  return a + b
}

/// para usar class no react usamos classname pois o react usa a palavra reservada class 
function primeiroJSX() {
  return (
    <div className="teste"> 
      Luiz Rosalba  - Introdução ao ReactJS
      <h1>Soma: {sum(10, 20)}</h1>
    </div>
  )
}


const App = () => {

  return (
    <div className="App">
      {primeiroJSX()} /// para executar um JS dentro de um JSX deve estar entre chaves 
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
