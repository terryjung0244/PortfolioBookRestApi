import React from 'react';
import { useAppDispatch } from '../../../hook/useAppDispatch';
import useAppSelector from '../../../hook/useAppSelector';
import { getAllAuthorRequest } from '../../../service/redux/author/authorAction/authorAction';
import { AuthorType } from '../../../service/redux/author/authorReducer/authorReducer.interface';
import './../getAllAuthor/getAllAuthor.css';

const GetAllAuthor = () => {
  const dispatch = useAppDispatch();
  const { authorResult } = useAppSelector((state) => state.authorReducer);

  const onClickGetAllAuthor = () => {
    dispatch(getAllAuthorRequest());
  };

  return (
    <div className="main">
      <button onClick={onClickGetAllAuthor}>GetAllAuthor</button>
      {authorResult.map((author: AuthorType) => {
        return (
          <div key={author.id}>
            <div>
              First Name: {author.firstName} Last Name: {author.lastName}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GetAllAuthor;
