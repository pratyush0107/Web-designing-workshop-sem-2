import React from 'react'
// rfce always make file name with capital letters
function Index({name,marks,course}) {
  return (
    
    <div>
      <h1>{name}</h1>
      <h2>{course}</h2>
      <p>Marks: {marks}</p>
      
    </div>

  )
}

export default Index
