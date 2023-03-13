import React from 'react';
import CreateBook from '../createBook/CreateBook';
import GetAllBook from '../getAllBook/GetAllBook';

const BookComponent = () => {
  return (
    <div>
      <CreateBook />
      <GetAllBook />
    </div>
  );
};

export default BookComponent;
