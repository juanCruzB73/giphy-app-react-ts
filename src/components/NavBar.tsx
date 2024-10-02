import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FormEvent, useState } from 'react';
import { useAppDispatch } from '../hooks/redux';
import { setGifs } from '../redux/slices/gifs';

 
export const NavBar = () => {

  const dispatch = useAppDispatch();

    const fetchGifs=async(query:string)=>{
        try{
            const response=await fetch(`https://api.giphy.com/v1/gifs/search?api_key=9XpiQcJoJ7u89jC9k2Z1sfQHM5RAwdyN&q=${query}&limit=30`);
            const {data}=await response.json();
            const parseData=data.map((e:any)=>({
                id:e.id,
                title:e.title,
                url:e.images.fixed_height.url,
            }));
            dispatch(setGifs(parseData));
        }catch(error){}
    }

    const [queryInput,setQueryInput]=useState('');

    //const [newCtegory,setNewCategory]=useState('');

    const submit=(e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        fetchGifs(queryInput)
    }
  return (
    <Navbar className="bg-body-tertiary justify-content-center">
      <Form onSubmit={submit}>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
              onChange={e=>setQueryInput(e.target.value)} value={queryInput}
            />
          </Col>
          <Col xs="auto">
            <Button type="submit" >Submit</Button>
          </Col>
        </Row>
      </Form>
    </Navbar>
  )
}