import React from 'react'
import '../styles/common-section.css'
import { Container, Col, Row} from 'reactstrap'



const CommonSection = ({title}) => {
  return (
 <section className='common__section'>
    <Container>
        <Row>
            <Col lg='12'><h1>{title}</h1></Col>
        </Row>
    </Container>
 </section>
  )
}

export default CommonSection
