import React from "react";

export type BookT = {
  title: string;
  isbn: string;
};

type BooksT = Array<BookT>;

const useBooks = (): readonly [BooksT, () => Promise<void>] => {
  const [books, setBooks] = React.useState<BooksT>([]);

  const fetchData = async () => {
    const response = await fetch("http://localhost:4730/books?_limit=5");
    const result = await response.json();
    setTimeout(() => {
      setBooks(result);
    }, 3000);
  };

  // ! Uncomment to fetch data on mount
  //   React.useEffect(() => {
  //     fetchData();
  //   }, []);

  return [books, fetchData];
};

export default useBooks;
