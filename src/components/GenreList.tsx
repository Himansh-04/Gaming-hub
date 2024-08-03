import React from 'react'
import UseGenre from '../hooks/UseGenre'

const GenreList = () => {
    const {genres}=UseGenre();
  return (
    <ul>
        {genres.map(genre=><li key={genre.id}>{genre.name}</li>)}
    </ul>
  )
}

export default GenreList