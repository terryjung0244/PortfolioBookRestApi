import React, { useState } from 'react';
import './../createBook/CreateBook.css';
import InputComp from '../../resuable/inputComp/InputComp';
import { InputCreateBookType } from './CreateBook.interface';
import useAppSelector from '../../../hook/useAppSelector';
import { useAppDispatch } from '../../../hook/useAppDispatch';
import { createBookRequest } from '../../../service/redux/book/bookAction/bookAction';

const CreateBook = () => {
  const dispatch = useAppDispatch();
  const { selectedAuthorIdForCreateBook } = useAppSelector(
    (state) => state.bookReducer,
  );
  const [inputCreateBook, setInputCreateBook] = useState<InputCreateBookType>({
    title: '',
    content: '',
    genre: '',
  });

  const onChangeCreateBook = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputCreateBook({ ...inputCreateBook, [e.target.name]: e.target.value });
  };

  const onClickForCreateBook = () => {
    if (
      !selectedAuthorIdForCreateBook ||
      inputCreateBook.title === '' ||
      inputCreateBook.content === '' ||
      inputCreateBook.genre === ''
    ) {
      alert('Type something! Stupid');
    } else {
      dispatch(
        createBookRequest({
          authorId: selectedAuthorIdForCreateBook,
          title: inputCreateBook.title,
          content: inputCreateBook.content,
          genre: inputCreateBook.genre,
        }),
      ); // 1
    }
  };

  return (
    <div className="inputMain">
      <InputComp
        className="inputContainer"
        placeholder="title"
        name={'title'}
        value={inputCreateBook.title}
        onChange={onChangeCreateBook}
      />
      <InputComp
        className="inputContainer"
        placeholder="content"
        name={'content'}
        value={inputCreateBook.content}
        onChange={onChangeCreateBook}
      />
      <InputComp
        className="inputContainer"
        placeholder="genre"
        name={'genre'}
        value={inputCreateBook.genre}
        onChange={onChangeCreateBook}
      />
      <div>
        {selectedAuthorIdForCreateBook && selectedAuthorIdForCreateBook}
      </div>
      <button onClick={onClickForCreateBook}>CreateBook</button>
    </div>
  );
};

export default CreateBook;
