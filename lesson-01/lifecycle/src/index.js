import React, { Component } from "react"
import ReactDOM from "react-dom"
import "./styles.css"

class App extends Component {

  constructor(props) {  /// inicializacao 
    super(props)

    this.state = {  /// parametro state 
      clock: 1000,
      copo: 'água'
    }
  }

  componentDidMount() { /// sdepois de mointado 
    window.setTimeout(() => {
      this.setState({
        copo: 'suco'
      })
    }, 3000)
  }

  alterarCopo = () => {
    this.setState({ /// posso passar qquer parametro para o state alterar sempre que  for alterar algum state use set state 
      copo: 'refrigerante'
    })
  }

  render() {
    const { clock, copo } = this.state /// desestruturando para nao ficar verboso 
    return (
      <div>
        <h1>{clock}</h1>
        <button onClick={() => this.alterarCopo()}><h1>{copo}</h1></button>
      </div>
    )
  }
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
