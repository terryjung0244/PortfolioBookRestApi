import React, { useState } from 'react';
import { useAppDispatch } from '../../../hook/useAppDispatch';
import useAppSelector from '../../../hook/useAppSelector';
import InputComp from '../../resuable/inputComp/InputComp';
import { BookStateType } from './UpdateBook.interface';

const UpdateBook = () => {
  const dispatch = useAppDispatch();
  const { selectedBookIdForUpdateBook } = useAppSelector(
    (state) => state.bookReducer,
  );
  const [bookUpdate, setBookUpdate] = useState<BookStateType>({
    title: '',
    content: '',
    genre: '',
  });

  const onChangeBookUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBookUpdate({ ...bookUpdate, [e.target.name]: e.target.value });
  };

  const bookUpdateFunc = (inputUpdateData: BookStateType) => {
    const bookUpdateData = {
      selectedId: selectedBookIdForUpdateBook,
      bookTitle: bookUpdate.title,
      bookContent: bookUpdate.content,
      bookGenre: bookUpdate.genre,
    };
    dispatch();
  };

  return (
    <div>
      <InputComp
        className={''}
        placeholder={'Title For Update'}
        name={'title'}
        value={bookUpdate.title}
        onChange={onChangeBookUpdate}
      />
      <InputComp
        className={''}
        placeholder={'Content For Update'}
        name={'content'}
        value={bookUpdate.content}
        onChange={onChangeBookUpdate}
      />
      <InputComp
        className={''}
        placeholder={'Genre For Update'}
        name={'genre'}
        value={bookUpdate.genre}
        onChange={onChangeBookUpdate}
      />
      <button onClick={() => bookUpdateFunc(bookUpdate)}>Update</button>
    </div>
  );
};

export default UpdateBook;
