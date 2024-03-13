import SingleBook from "./SingleBook";
const BookList = function (props) {
  return props.arrayOfBooks.map((b) => {
    return <SingleBook book={b}></SingleBook>;
  });
};

export default BookList;
