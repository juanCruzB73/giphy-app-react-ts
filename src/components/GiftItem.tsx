import React,{FC} from 'react'
import Card from 'react-bootstrap/Card';
interface Igif{
  id:string,
  title:string,
  url:string,
}

interface IPropsGifsItem{
  gif:Igif
}

export const GiftItem: FC<IPropsGifsItem> = ({gif}) => {
  return (
    <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src={gif.url} />
      <Card.Body>
        <Card.Title>{gif.title}</Card.Title>
      </Card.Body>
    </Card>
  )
}
