import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Component } from "react";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  handleCardClick = () => {
    this.setState((prevState) => ({
      selected: !prevState.selected,
    }));
  };

  // fetchComments = () => {
  // fetch("https://striveschool-api.herokuapp.com/api/comments/", {
  //   headers: {
  //     Authorization:
  //       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWYzMTFhMDcxYWZhZjAwMTkxNTY2ZWYiLCJpYXQiOjE3MTA0Mjg1NzYsImV4cCI6MTcxMTYzODE3Nn0.P9iro7jpWRHV5ciBePMfX4Cl20zYvs-Y5pGNs037EVI",
  //   },
  //   })
  //     .then((response) => {
  //       if (response.ok) {
  //         return response.json();
  //       } else {
  //         throw new Error("Problema nella chiamata API");
  //       }
  //     })
  //     .then((commentsFromAPI) => {
  //       console.log("COMMENTS", commentsFromAPI);

  //       this.setState({
  //         reservations: commentsFromAPI,
  //         isLoading: false,
  //       });
  //     })
  //     .catch((error) => {
  //       console.log("ERRORE", error);
  //       this.setState({
  //         isLoading: false,
  //         isError: true,
  //       });
  //     });
  // };

  // componentDidMount() {
  //   console.log("IO SONO COMPONENTDIDMOUNT");

  //   this.fetchComments();
  // }

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

          {this.state.selected === true && <CommentArea asin={this.props.book.asin} />}
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
