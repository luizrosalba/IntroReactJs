import React, { Fragment } from "react"
import ReactDOM from "react-dom"
import "./styles.css"

const element = 'Digital Innovation' /// nao é um componente é a menor parte do react 
const element2 = <h1>Olá Turma =D</h1>

function App() { /// retorna os dois elementos renderizado 
  return (  
    <div>  
      {element}
      {element2}
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
