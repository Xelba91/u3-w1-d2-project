import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Component } from "react";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  handleCardClick = () => {
    this.setState((prevState) => ({
      selected: !prevState.selected,
    }));
  };

  //   render() {
  //     const { id, img, title, price, category } = this.props.book;
  //     const cardStyle = this.state.selected ? { border: "2px solid red" } : {};

  // return (
  //   <Card
  //     onClick={this.handleCardClick}
  //     id="transform"
  //     className="px-0"
  //     key={id}
  //     style={{ width: "18rem", ...cardStyle }}
  //   >

  render() {
    const { id, img, title, price, category } = this.props.book;
    const cardStyle = this.state.selected ? { border: "2px solid red" } : {};
    return (
      <Card
        onClick={this.handleCardClick}
        //   this.setState({
        //     selected: true,
        //   });
        //   console.log("cliccato");
        // }}
        className="px-0"
        id="transform"
        key={id}
        style={{ width: "18rem", ...cardStyle }}
      >
        <Card.Img variant="top" src={img} style={{ height: "300px" }} />
        <Card.Body className="d-flex flex-column">
          <Card.Title>{title}</Card.Title>
          <Card.Text className="mt-auto">Genere - {category}</Card.Text>
          <Card.Text>Prezzo: {price}€</Card.Text>
          <Button className="align-items-baseline" variant="primary">
            Aggiungi al carrello
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;

// const SingleBook = function (props) {
//   return (
//     <Card className="px-0" id="transform" key={props.book.id} style={{ width: "18rem" }}>
//       <Card.Img variant="top" src={props.book.img} style={{ height: "300px" }} />
//       <Card.Body className="d-flex flex-column">
//         <Card.Title>{props.book.title}</Card.Title>
//         <Card.Text>Prezzo: {props.book.price}€</Card.Text>
//         <Card.Text className="mt-auto">Genere - {props.book.category}</Card.Text>
//         <Button className="align-items-baseline" variant="primary">
//           Aggiungi al carrello
//         </Button>
//       </Card.Body>
//     </Card>
//   );
// };
// export default SingleBook;
