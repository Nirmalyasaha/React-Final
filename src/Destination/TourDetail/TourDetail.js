import React from 'react'
import { useParams } from 'react-router-dom';
import TourJson from '../Tour.json'
import { Container, Row, Col } from 'react-bootstrap';

import './Tour.css'

const TourDetail = () => {

  let { subId, deId } = useParams();
  // console.log("colled id:",subId,deId);

  let data = TourJson.travel.find((tour) => tour.id === subId);
  console.log("data in id:;", data);

  let detaildata = data.tour_place.find((data) => data.sub_id === deId);
  console.log("detail:", detaildata);




  return (
    <div className='grandpa1'>
      <Container>
        <Row>
          <Col>
            <figure>
              <img src={detaildata.first_img} className='img-fluid detailimg' />
            </figure>
          </Col>
          <Col>
          <h2 >{detaildata.title1}</h2>
            <p className='p' >{detaildata.first_desc}</p>
          </Col>
        </Row>

        <Row>
          <Col>
            <figure>
              <img src={detaildata.second_img} className='img-fluid detailimg' />
            </figure>
          </Col>
          <Col>
          <h2>{detaildata.title2}</h2>
            <p className='p'>{detaildata.second_desc}</p>
          </Col>
        </Row>

        <Row>
          <Col>
          <figure>
            <img src={detaildata.third_img} className='img-fluid detailimg'/>
          </figure>
          </Col>
          <Col>
          <h2>{detaildata.title3}</h2>
          <p className='p'>{detaildata.third_desc}</p>
          </Col>
        </Row>

        <Row>
          <Col>
          <figure>
            <img src={detaildata.fourth_img} className='img-fluid detailimg'/>
          </figure>
          </Col>
          <Col>
          <h2>{detaildata.title4}</h2>
          <p className='p'>{detaildata.fourth_desc}</p>
          </Col>
        </Row>




      </Container>

    </div>
  )
}

export default TourDetail