import React from 'react'
import { Sidenavbar } from '../Component/Sidenav';
import { Header } from '../Component/Header';
//import Content from '../../Component/Course/CourseContent';
import { Row,Col } from 'react-bootstrap';
import Login from './login';
import axios from 'axios';
export const Final = () => {
  return (
    <>
    <Row>
      <Col md={12}></Col>
      <Col md={12}><Sidenavbar/>
      <Login/>
      
      </Col>
    </Row>
    </>
  )
}