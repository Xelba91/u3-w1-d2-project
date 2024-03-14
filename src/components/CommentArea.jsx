import { Component } from "react";
import { ListGroup } from "react-bootstrap";

class CommentArea extends Component {
  state = {
    commentsFromAPI: [],
  };

  //fetch
  fetchComments = () => {
    fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.asin}`, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWYzMTFhMDcxYWZhZjAwMTkxNTY2ZWYiLCJpYXQiOjE3MTA0Mjg1NzYsImV4cCI6MTcxMTYzODE3Nn0.P9iro7jpWRHV5ciBePMfX4Cl20zYvs-Y5pGNs037EVI",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Problema nella chiamata API");
        }
      })
      .then((commentsFromAPI) => {
        this.setState({ commentsFromAPI });
        console.log("COMMENTS", commentsFromAPI);
      })

      .catch((error) => {
        console.log("ERRORE", error);
      });
  };

  componentDidMount() {
    this.fetchComments();
  }

  render() {
    return (
      <div>
        <ListGroup>
          <h1>Comments</h1>
          {this.state.commentsFromAPI.map((comment, index) => (
            <ListGroup.Item key={index}>
              <p>{comment.comment}</p>
              <p>By: {comment.author}</p>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    );
  }
}
export default CommentArea;
