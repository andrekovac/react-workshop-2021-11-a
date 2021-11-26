import React from "react";
import useBooks, { BookT } from "../hooks/useBooks";

const Books: React.FC = () => {
  // fetch books
  const [books, fetchData] = useBooks();
  
  const limitHook = React.useState<number>(0);
  const limit = limitHook[0];
  const setLimit = limitHook[1];

  // display books
  return (
    <div style={{ backgroundColor: '#eee', padding: 20 }}>
      <button onClick={() => setLimit(limit + 1)}>Increase limit</button>
      <button onClick={() => fetchData()}>Fetch data</button>
      <p>Limit: <b>{limit}</b></p>
      {books.map((book: BookT) => (
        <p key={book.isbn}>
          <div>{book.title}</div>
          <div>{book.isbn}</div>
        </p>
      ))}
    </div>
  );
};

export default Books;
