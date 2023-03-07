import React, { useState } from 'react';
import './../createBook/CreateBook.css';
import InputComp from '../../resuable/inputComp/InputComp';
import { InputCreateBookType } from './CreateBook.interface';
// import useAppSelector from '../../../hook/useAppSelector';

const CreateBook = () => {
  // const { selectedAuthorId } = useAppSelector((state) => state.authorReducer);
  const [inputCreateBook, setInputCreateBook] = useState<InputCreateBookType>({
    title: '',
    content: '',
    genre: '',
  });

  const onChangeCreateBook = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputCreateBook({ ...inputCreateBook, [e.target.name]: e.target.value });
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
      {/* <div>{selectedAuthorId && selectedAuthorId}</div> */}
    </div>
  );
};

export default CreateBook;
