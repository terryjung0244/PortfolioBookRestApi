import React from 'react';
import { useAppDispatch } from '../../../hook/useAppDispatch';
import useAppSelector from '../../../hook/useAppSelector';
import './../getAllAuthor/getAllAuthor.css';

const GetAllAuthor = () => {
  const dispatch = useAppDispatch();
  const { authorResult } = useAppSelector((state) => state.authorReducer);

  const getAllAuthor = () => {};

  return (
    <div className="main">
      <button onClick={getAllAuthor}>GetAllAuthor</button>
    </div>
  );
};

export default GetAllAuthor;
