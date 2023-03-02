import React from 'react';
import { useAppDispatch } from '../../../hook/useAppDispatch';
import useAppSelector from '../../../hook/useAppSelector';
import {
  getAllAuthorRequest,
  getSelectedAuthorId,
} from '../../../service/redux/author/authorAction/authorAction';
import { AuthorType } from '../../../service/redux/author/authorReducer/authorReducer.interface';
import UpdateAuthor from '../updateAuthor/UpdateAuthor';
import './../getAllAuthor/getAllAuthor.css';

const GetAllAuthor = () => {
  const dispatch = useAppDispatch();
  const { authorResult, selectedAuthorId } = useAppSelector(
    (state) => state.authorReducer,
  );

  const onClickGetAllAuthor = () => {
    dispatch(getAllAuthorRequest());
  };

  const getSelectAuthorId = (data: AuthorType) => {
    dispatch(getSelectedAuthorId(data.id));
  };

  console.log(selectedAuthorId);

  return (
    <div className="main">
      <button onClick={onClickGetAllAuthor}>GetAllAuthor</button>
      {authorResult.map((author: AuthorType) => {
        return (
          <div key={author.id}>
            <div>
              First Name: {author.firstName} Last Name: {author.lastName}
              <button onClick={() => getSelectAuthorId(author)}>
                Select Id
              </button>
            </div>
          </div>
        );
      })}
      <div>{selectedAuthorId && <UpdateAuthor />}</div>
    </div>
  );
};

export default GetAllAuthor;
