import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded card'>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' className='card__image' />
      </Link>

      <Card.Body className='card__body'>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div' className='name'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={product.rating}
          />
        </Card.Text>

        <Card.Text as='h3' className='price'>${product.price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
