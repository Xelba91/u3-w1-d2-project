import "./App.css";
//aggiungiamo l'import del css di bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import SingleBook from "./components/SingleBook";
import BookList from "./components/BookList";
import fantasy from "./data/fantasy.json";
import horror from "./data/horror.json";
import history from "./data/history.json";
import romance from "./data/romance.json";
import scifi from "./data/scifi.json";
function App() {
  return (
    <div>
      <MyNav subtitle="EpiBooks!"></MyNav>
      <Welcome></Welcome>

      {/* <SingleBook book={fantasy[0]} /> */}

      <Container fluid>
        <Row className="justify-content-center gap-4 mb-2">
          {/* <AllTheBooks></AllTheBooks> */}
          {/* <BookList arrayOfBooks={fantasy}> </BookList> */}
          <BookList arrayOfBooks={horror}> </BookList>
          {/* <BookList arrayOfBooks={fantasy}> </BookList>
          <BookList arrayOfBooks={fantasy}> </BookList> */}
        </Row>
      </Container>
      <MyFooter></MyFooter>
    </div>
  );
}

export default App;
