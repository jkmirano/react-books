import React, { useState } from "react";
import useBooksContext from "../hooks/use-books-context";

const BookCreate = () => {
  const { createBook } = useBooksContext();
  const [title, setTitle] = useState("");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTitle("");
    createBook(title);
  };

  return (
    <div className='book-create'>
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input className='input' value={title} onChange={handleChange} />
        <button className='button'>Create!</button>
      </form>
    </div>
  );
};

export default BookCreate;