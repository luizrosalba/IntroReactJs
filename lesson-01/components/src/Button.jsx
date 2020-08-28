import React from 'react'

/// deve ser o mais abstrato o possível 
/// props é a entrada 
function Button(props) { 

  const { name, onClick } = props // desestruturação pega um parametro dela
  /// igual a fazer props.name
  
  return (
    <button onClick={onClick}>{name}</button>
  )
}

export default Button
