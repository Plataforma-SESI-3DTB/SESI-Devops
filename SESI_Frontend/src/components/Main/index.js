import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './styleMain.css'
import Logo from '../../assets/logo3.png'
import { Card } from 'react-bootstrap'

export default function Main() {
  return (
    <Card className="main">
      <Card.Body>
        <div className='tipo1'>
          <div className='img1'>
            <img src={ Logo }/>
          </div>
          <div className='text1'>
            <div>
              <h2> O que é ser Hair Tile ?</h2>
              <p>lorem ipsum </p>
            </div>
            
          </div>
        </div>
        <div className='tipo2'>
          <div className='img2'></div>
          <div className='text2'></div>
        </div>
      </Card.Body>
    </Card>
  )
}
