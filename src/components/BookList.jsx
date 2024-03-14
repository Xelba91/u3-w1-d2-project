import { Component } from "react";
import SingleBook from "./SingleBook";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Form from "react-bootstrap/Form";

// const BookList = function (props) {
//   return props.arrayOfBooks.map((b) => {
//     return <SingleBook key={b.asin} book={b}></SingleBook>;
//   });
// };

// export default BookList;

class BookList extends Component {
  state = {
    searchQuery: "",
  };

  render() {
    return (
      <>
        <Row className="justify-content-center mt-5">
          <Col xs={12} md={4} className="text-center">
            <Form.Group>
              <Form.Control
                type="search"
                placeholder="Cerca un libro"
                value={this.state.searchQuery}
                onChange={(e) => this.setState({ searchQuery: e.target.value })}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className=" g-2 mt-3">
          {this.props.arrayOfBooks
            .filter((b) => b.title.toLowerCase().includes(this.state.searchQuery))
            .map((b) => (
              <Col className="d-flex justify-content-center" key={b.asin}>
                <SingleBook book={b} />
              </Col>
            ))}
        </Row>
      </>
    );

    // this.props.arrayOfBooks
    //   .filter((b) => b.title.toLowerCase().includes(this.state.searchQuery))
    //   .map((b) => <SingleBook book={b} key={b.asin} />);
  }
}
export default BookList;
