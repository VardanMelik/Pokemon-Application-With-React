import React, { useState, useEffect } from 'react';
import PokemonList from './PokemonList'
import axios from 'axios'
import Pagination from './Pagination'

function App() {
  //Hooks
  const [pokemon, setPokemon] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()
  const [loading, setLoading] = useState(true)

  useEffect( () => {
    setLoading(true)
    let cancel
    axios.get(currentPageUrl, {
      cancelToken: new axios.CancelToken(c => cancel = c )
    })
  .then(res => {
    setLoading(false)
    setNextPageUrl(res.data.next)
    setPrevPageUrl(res.data.previous)
    setPokemon(res.data.results.map(p => p.name))
    console.log(res.data.results)
  })
  return () => cancel()
  }, [currentPageUrl]) 
  // It will call one time, if we will add argument, it will 
  // call, when that arguments changed

  function gotoNextPage() {
    setCurrentPageUrl(nextPageUrl)
  }
  function gotoNPrevPage() {
    setPrevPageUrl(prevPageUrl)
  }
  if(loading) return "Loading..."

  return (
    <PokemonList pokemon={pokemon}/>
    ); // 18:47 minutes
}
export default App;
