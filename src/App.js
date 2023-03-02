import './App.css';
import { Button, Container, Row, Col, } from 'react-bootstrap';
import { SearchForm } from './Components/SearchForm';
import { Display } from './Components/Display'
function App() {
  return (

    <div className='wrapper bg-dark text-warning'>
      <Container>
        <Row>
          <Col>
            <h1 className='text-center mt-5'> My Movie collection </h1>
          </Col>
        </Row>
        <hr />


        {/* form  */}
        <SearchForm />

        {/* table */}
        <Display />

      </Container>
    </div>
  )
}
export default App;
