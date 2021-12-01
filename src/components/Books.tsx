import React, { useEffect } from "react";
import { useLimit } from "../context/limit";
import { BookT, BooksT } from "../hooks/useBooks";

// Child component
const Books: React.FC = () => {
  // fetch books
  const [books, setBooks] = React.useState<BooksT>([]);

  // consume context
  const { limit, setLimit } = useLimit();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "http://localhost:4730/books?_limit=" + limit
      );
      const result = await response.json();
      setTimeout(() => {
        setBooks(result);
      }, 3000);
    };
    fetchData();
  }, [limit]);

  // display books
  return (
    <div style={{ backgroundColor: "#eee", padding: 20 }}>
      <p>
        <em>
          <b>Note</b>: Make sure the bookmonkey API is running on port 4730.
        </em>
      </p>
      <button
        onClick={() => {
          const newCount = limit + 1;
          setLimit(newCount);
        }}
      >
        Increase limit
      </button>
      <p>
        Limit: <b>{limit}</b>
      </p>
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
