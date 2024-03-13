import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import fantasy from "../data/fantasy.json";

const AllTheBooks = function () {
  return (
    <>
      {fantasy.map((book) => (
        <Card className="px-0" id="transform" key={book.id} style={{ width: "18rem" }}>
          <Card.Img variant="top" src={book.img} style={{ height: "300px" }} />
          <Card.Body className="d-flex flex-column">
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>Prezzo: {book.price}€</Card.Text>
            <Card.Text className="mt-auto">Genere - {book.category}</Card.Text>
            <Button className="align-items-baseline" variant="primary">
              Aggiungi al carrello
            </Button>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};

export default AllTheBooks;
