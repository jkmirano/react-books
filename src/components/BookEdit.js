import React, { useState } from "react";
import useBooksContext from "../hooks/use-books-context";

const BookEdit = ({ book, onSubmit }) => {
  const [title, setTitle] = useState(book.title);
  const { editBookById } = useBooksContext();

  const handleSubmit = (event) => {
    event.preventDefault();
    editBookById(book.id, title);
    onSubmit();
  };

  return (
    <form className='book-edit' onSubmit={handleSubmit}>
      <label>Title</label>
      <input
        className='input'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button className='button is-primary'>Save</button>
    </form>
  );
};

export default BookEdit;
