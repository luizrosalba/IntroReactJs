import React from 'react'
/// se nao chamar o props.children nao renderiza o botao 

function ComponenteB(props) {
  return (
    <div>Componente B =D {props.children} </div>
  )
}

export default ComponenteB
