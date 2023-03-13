import React from 'react';
import { useAppDispatch } from '../../../hook/useAppDispatch';
import { getAllBookRequest } from '../../../service/redux/book/bookAction/bookAction';

import './../getAllBook/GetAllBook.css';

const GetAllBook = () => {
  const dispatch = useAppDispatch();
  const onClickGetAllBooks = () => {
    dispatch(getAllBookRequest());
  };

  return (
    <div className="main">
      <button onClick={onClickGetAllBooks}>GetAllBooks</button>
    </div>
  );
};

export default GetAllBook;
