import React from 'react'
import { Carousel } from 'react-bootstrap'

function Banner (props) {

  return <Carousel className="mt-2">
    {
      props.images.map((image) => {
        return <Carousel.Item>
          <img
            className="d-block w-100 h-50"
            src={image}
          />
        </Carousel.Item>
      })
    }

  </Carousel>
}

export default Banner