import React, { useState } from 'react'
import { useRef } from 'react'
import Col from 'react-bootstrap/Col';
import { Alert, Form } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap'
import { CustomCard } from './CustomCard';
import { Helper } from './Helped';


export const SearchForm = () => {

    const strRef = useRef('');
    const [searchMovie, setSeaarchMovie] = useState({})
    const [error, setError] = useState(false);


    const handelOnsumbit = async (e) => {
        e.preventDefault();
        error && setError(false);
        const str = strRef.current.value;
        const data = await Helper(str);
        if (data.Response = 'True') {
            setSeaarchMovie(data)
        } else {
            setError(true)
        }
    }
    return (
        <div className='bg-black p-5 rounded shadow-lg'>
            <Form onSubmit={handelOnsumbit}>
                <Row className='gap-1'>
                    <Col md='9'>
                        <Form.Control
                            ref={strRef}
                            placeholder="First name" />
                    </Col>
                    <Col>
                        <div className='d-grid'>
                            <Button variant='warning' type='submit'>Search Movie</Button>
                        </div>

                    </Col>

                </Row>
            </Form>
            <div className='d-flex justify-content-center mt-5'>
                {error ? (
                    <Alert variant='danger'> Movie not found!</Alert>) : (
                    <CustomCard searchMovie={searchMovie} />)}
            </div>
        </div>

    )
}
