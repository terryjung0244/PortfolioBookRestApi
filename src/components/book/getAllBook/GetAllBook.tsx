import React from 'react';
import { useAppDispatch } from '../../../hook/useAppDispatch';
import useAppSelector from '../../../hook/useAppSelector';
import {
  getAllBookRequest,
  sendBookIdForUpdate,
  // sendBookIdForUpdate,
} from '../../../service/redux/book/bookAction/bookAction';
import { BookType } from '../../../service/redux/book/bookReducer/bookReducer.interface';
import UpdateBook from '../updateBook/UpdateBook';

import './../getAllBook/GetAllBook.css';

const GetAllBook = () => {
  const dispatch = useAppDispatch();
  const { bookResult, selectedBookIdForUpdateBook } = useAppSelector(
    (state) => state.bookReducer,
  );
  const onClickGetAllBooks = () => {
    dispatch(getAllBookRequest());
  };
  const onClickSendBookId = (selectedId: string) => {
    dispatch(sendBookIdForUpdate(selectedId));
  };

  return (
    <div className="main">
      <button onClick={onClickGetAllBooks}>GetAllBooks</button>
      {bookResult.map((book: BookType) => {
        return (
          <div key={book.id} style={{ display: 'flex' }}>
            <div className="bookResult">Title: ({book.id})</div>
            <div className="bookResult">Title: ({book.title})</div>
            <div className="bookResult">Content: ({book.content})</div>
            <div className="bookResult">Genre: ({book.genre})</div>
            <button onClick={() => onClickSendBookId(book.id)}>
              SelectedForUpdate
            </button>
          </div>
        );
      })}
      <div>{selectedBookIdForUpdateBook && <UpdateBook />}</div>
    </div>
  );
};

export default GetAllBook;
