import { useState } from "react"
import { NavBar } from "./components/NavBar"
import {GifList} from "./components/GifList"
import { Igifs } from "./types/gifs"


export const GiphyApp = () => {
  const [gifs,setGifs]=useState<Igifs[]>([])  
  
  return (
    <>
      <NavBar setGifs={setGifs} />
      <h1>Giphy app</h1>
      <GifList gifs={gifs
      }/>
    </>
  )
}
