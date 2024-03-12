import "./App.css";
//aggiungiamo l'import del css di bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";

function App() {
  return (
    <div>
      <MyNav subtitle="EpiBooks!"></MyNav>
      <Welcome></Welcome>
      <Container fluid>
        <Row className="justify-content-center gap-2 mb-2">
          <AllTheBooks></AllTheBooks>
        </Row>
      </Container>
      <MyFooter></MyFooter>
    </div>
  );
}

export default App;
