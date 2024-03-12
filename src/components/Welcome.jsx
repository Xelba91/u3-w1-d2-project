import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

const Welcome = function () {
  const [show, setShow] = useState(true);

  return (
    <>
      <Alert show={show} variant="success" className="my-2">
        <Alert.Heading className="text-center">Benvenuto nella mia libreria</Alert.Heading>
        <p className="text-center">Libreria Digitale </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close me
          </Button>
        </div>
      </Alert>
      <div className="d-flex justify-content-center my-2">
        {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
      </div>
    </>
  );
};

export default Welcome;
