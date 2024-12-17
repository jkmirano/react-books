import React from "react";
import BookShow from "./BookShow";
import useBooksContext from "../hooks/use-books-context";

const BookList = () => {
  const { books } = useBooksContext();

  return (
    <div className='book-list'>
      {books.map((book) => (
        <BookShow book={book} key={book.id} />
      ))}
    </div>
  );
};

export default BookList;
