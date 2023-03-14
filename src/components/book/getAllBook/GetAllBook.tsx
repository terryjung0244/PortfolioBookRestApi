import React from 'react';
import { useAppDispatch } from '../../../hook/useAppDispatch';
import useAppSelector from '../../../hook/useAppSelector';
import { getAllBookRequest } from '../../../service/redux/book/bookAction/bookAction';
import { BookType } from '../../../service/redux/book/bookReducer/bookReducer.interface';
// import { BookType } from '../../../service/redux/book/bookReducer/bookReducer.interface';

import './../getAllBook/GetAllBook.css';

const GetAllBook = () => {
  const dispatch = useAppDispatch();
  const { bookResult } = useAppSelector((state) => state.bookReducer);
  const onClickGetAllBooks = () => {
    dispatch(getAllBookRequest());
  };
  console.log(bookResult);

  return (
    <div className="main">
      <button onClick={onClickGetAllBooks}>GetAllBooks</button>
      {bookResult.map((book: BookType) => {
        return (
          <div key={book.id} style={{ display: 'flex' }}>
            <div className="bookResult">Title: ({book.title})</div>
            <div className="bookResult">Content: ({book.content})</div>
            <div className="bookResult">Genre: ({book.genre})</div>
          </div>
        );
      })}
    </div>
  );
};

export default GetAllBook;
