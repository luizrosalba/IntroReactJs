import React from "react" 
import ReactDOM from "react-dom"
import "./styles.css"


const App = () => {

  return (
    <div className="App">
      Hello World
    </div>
  )
}

const rootElement = document.getElementById("root")  /// pega o elemento root criado no public
ReactDOM.render(<App />, rootElement) /// executa o elemento app 


