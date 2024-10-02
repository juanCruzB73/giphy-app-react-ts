import {GiftItem} from './GiftItem'
import { useAppSelector } from '../hooks/redux'


export const GifList = () => {
  
  const gifs = useAppSelector(state=>state.gif.gifs);
  
  return (
    <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'2vh'}}>
      {
        gifs.map((e)=>(
          <GiftItem key={e.id} gif={e} />
        ))
      }
    </div>
  )
}
