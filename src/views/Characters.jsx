import React, { useEffect, useState } from 'react'

const Characters = () => {
  const [characters, setCharacters] = useState([])
  useEffect(() => {
    window
      .fetch('https://rickandmortyapi.com/api/character')
      .then((res) => res.json())
      .then(({ results }) => {
        setCharacters(results)
      })
  }, [])

  return (
    <div>
      {characters.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <img src={item.image} alt='' />
        </div>
      ))}
    </div>
  )
}

export default Characters
