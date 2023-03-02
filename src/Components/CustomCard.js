import React from 'react'
import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { SearchForm } from './SearchForm'

export const CustomCard = ({ searchMovie }) => {
    return (
        <Card style={{ width: '18rem', color: 'black' }}>
            <Card.Img variant="top" src={searchMovie?.Poster} />
            <Card.Body>
                <Card.Title>{searchMovie?.Title}</Card.Title>
                <Card.Text>
                    {searchMovie?.Plot}
                </Card.Text>
                <Card.Text>
                    {searchMovie?.Language}
                </Card.Text>
                <Card.Text>
                    {searchMovie?.Production}
                </Card.Text>
                <Card.Text>
                    {searchMovie?.Released}
                </Card.Text>
                <div className='d-flex justify-content-between'>
                    <Button variant="warning">Happy </Button>
                    <Button variant="info">Lazy </Button>
                </div>
                <div className='d-grid mt-2'>
                    <Button variant='danger'>Delete</Button>
                </div>

            </Card.Body>
        </Card >
    )
}
