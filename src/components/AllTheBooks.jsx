import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import fantasy from "../data/fantasy.json";

const AllTheBooks = function () {
  return (
    <>
      {fantasy.map((book) => (
        <Card key={book.id} style={{ width: "18rem" }}>
          <Card.Img variant="top" src={book.img} />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>{book.price} €</Card.Text>
            <Card.Text>Genere - {book.category}</Card.Text>
            <Button variant="primary">Aggiungi al carrello</Button>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};

export default AllTheBooks;
