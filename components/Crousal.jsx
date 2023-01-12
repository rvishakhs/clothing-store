import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { GrPrevious, GrNext } from "react-icons/gr";

function Crousal() {
  return (
    <Carousel>
      <Carousel.Item>
      <img  
        className='img' 
        src="https://images.freeimages.com/images/large-previews/433/shoe-maker-1241052.jpg"
      />
        <Carousel.Caption>
          <div className='imgcontainer space-y-2'>
                <h2 className='font-sans font-semibold'>-- New Items </h2>
                <h2 className='font-sans font-bold text-2xl'>Summer Sale</h2>
                <h2 className='font-medium text-lg underline'>Discover more</h2>
            </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img 
        className='img' 
        src="https://images.freeimages.com/images/large-previews/6fd/water-pipe-1199810.jpg"
      />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
         <img 
            className='img' 
            src="https://images.freeimages.com/images/large-previews/461/star-is-a-stranger-1157577.jpg" 
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}








export default Crousal