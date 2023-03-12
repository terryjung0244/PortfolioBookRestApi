import React from 'react';
import { useAppDispatch } from '../../../hook/useAppDispatch';
import useAppSelector from '../../../hook/useAppSelector';
import {
  deleteAuthorRequest,
  getAllAuthorRequest,
  getSelectedAuthorId,
} from '../../../service/redux/author/authorAction/authorAction';
import { AuthorType } from '../../../service/redux/author/authorReducer/authorReducer.interface';
import { sendAuthorIdForCreateBook } from '../../../service/redux/book/bookAction/bookAction';
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

  const onClickDeleteAuthor = (selectedAuthorId: string) => {
    dispatch(deleteAuthorRequest(selectedAuthorId));
  };

  const getSelectAuthorId = (data: AuthorType) => {
    dispatch(getSelectedAuthorId(data.id));
  };

  const sendIdForCreateBook = (selectedAuthorId: string) => {
    dispatch(sendAuthorIdForCreateBook(selectedAuthorId));
  };

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
              {selectedAuthorId && selectedAuthorId === author.id && (
                <button onClick={() => onClickDeleteAuthor(selectedAuthorId)}>
                  Delete
                </button>
              )}
              <button onClick={() => sendIdForCreateBook(author.id)}>
                For CreateBook
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
