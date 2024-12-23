import React from 'react'
import './footer.css'
import { Col, Container, ListGroup, ListGroupItem, Row } from 'reactstrap'

import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png' ;

const quick__links=[
  {
    path:'/home',
    display:'Home'
  },
  {
    path:'/about',
    display:'About'
  },
  {
    path:'/tours',
    display:'Tours'
  },

];
const quick__links2=[
  {
    path:'/gallery',
    display:'Gallery'
  },
  {
    path:'/login',
    display:'Login'
  },
  {
    path:'/register',
    display:'Register'
  },

];

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <Container>
      <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur exercitationem provident ab ratione tempora laboriosam porro fugit labore quis quasi nostrum natus consequuntur placeat, accusamus aspernatur ullam non illum aperiam quam suscipit dicta reiciendis ad. Non officiis officia quia, sed earum reprehenderit consequatur quidem voluptas nobis eaque, natus doloremque cum nam commodi quis eveniet sequi fugit ipsum inventore magni. Beatae architecto odit, placeat nesciunt blanditiis tempora sint commodi quos sunt esse repudiandae reiciendis voluptates autem saepe nostrum quam perferendis magnam. Rem omnis impedit a magnam voluptates? Rerum, alias. Officia, vitae autem ipsum laudantium animi nesciunt vel eligendi nisi veritatis ab.</div>
        <Row>
          <Col lg='3'>
          <div className="logo">
          <img src={logo} alt="" />
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
             Possimus, necessitatibus.</p>
          </div>
          <div className="social__links d-flex align-items-center gap-4">
          <span>
            <Link tp='#'><i class="ri-youtube-line"></i></Link>
          </span>
          <span>
            <Link tp='#'><i class="ri-github-fill"></i></Link>
          </span>
          <span>
            <Link tp='#'><i class="ri-facebook-circle-line"></i></Link>
          </span>
          <span>
            <Link tp='#'><i class="ri-instagram-line"></i></Link>
          </span>
          </div>
          </Col>
          <Col lg='3'>
          <h5 className="footer__link-title">Discover</h5>

            <ListGroup className='footer__quick-links'>
              {
                quick__links.map((item, index) => (
                  <ListGroupItem key={index} className='ps-0 border-0'>
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>

          </Col>
          <Col lg='3'>
            <h5 className="footer__link-title">Quick Links</h5>

            <ListGroup className='footer__quick-links'>
              {
                quick__links2.map((item, index) => (
                  <ListGroupItem key={index} className='ps-0 border-0'>
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>
          <Col lg='3'>
          <h5 className="footer__link-title">Contact</h5>

<ListGroup className='footer__quick-links'>

      <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
    <h6 className='mb-0 d-flex align-items-center gap-2'>
      <span><i class="ri-map-pin-line"></i></span>
      Address:
    </h6>
    <p className='mb-0'>Sylhet, Bangladesh</p>
      </ListGroupItem>
  
      <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
    <h6 className='mb-0 d-flex align-items-center gap-2'>
      <span><i class="ri-mail-line"></i></span>
      Email:
    </h6>
    <p className='mb-0'>email01@gmail.com</p>
      </ListGroupItem>
      <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
    <h6 className='mb-0 d-flex align-items-center gap-2'>
      <span><i class="ri-phone-fill"></i></span>
      Phone:
    </h6>
    <p className='mb-0'>+0123456789</p>
      </ListGroupItem>
</ListGroup>
          </Col>
          <Col lg='12' className='text-center pt-5'>
          <p className='copyright'>
            Copyright {year}, design and develop by </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
