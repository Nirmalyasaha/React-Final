import React from 'react'
import { useParams } from 'react-router-dom'
import ProdJson from '../prod.json'
import { Container,Row,Col } from 'react-bootstrap';
import './ProdDetail.css'

const ProdDetail = () => {

    let {prodId}=useParams();
   // console.log("detail id:",prodId);

   let data=ProdJson.product.find((prod)=>(prod.prod_id === prodId));
   console.log("detail data:",data);





    
  return (
    <div className='maindetail'>
      <Container>
      <Row>
        <Col>
        <figure>
          <img src={data.prod_image} className='pdetailimg'/>
        </figure>
        </Col>
        <Col>
        <h2 className='content'>Product Detail</h2>
        <p className='content-p'>{data.prod_desc}</p>
        </Col>
        </Row> 
      </Container>
      
    </div>
  )
}

export default ProdDetail