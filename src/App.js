import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col} from 'react-bootstrap'

import FormComponent from './components/FormComponent';

function App() {
  return (
    <Container>
      <Row>
        <Col md={6} sm={12} className="mt-5" >

          
              <FormComponent />
          
        </Col>
      </Row>
    </Container>
  );
}

export default App;
