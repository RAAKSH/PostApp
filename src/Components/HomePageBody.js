import React, { useReducer, useEffect,useState} from 'react'
import {Container, Row, Col} from 'reactstrap'
import Card from '../Components/Card'
import 'bootstrap/dist/css/bootstrap.css'

import Pagination from '../Components/Pagination';


function HomePageBody({match}) {
 
    const [post,setPost]= useState([]);
   
    useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res)=>res.json())
    .then((data)=>setPost(data))

    },[])

  return (
    <div>
      <Container>
       
        <Row>
          {post.map(user => {
            return (
              <Col key={user.id} md={4} sm={6} xs={12}>
                <Card
                  title={`${user.title} `}
                  id={user.id}
                  body={`${user.body}`}
                />
              </Col>
            )
          })}
        </Row>
        <Pagination page="/" pageNo={post.length} />
      </Container>
    </div>
  )
}
export default HomePageBody
