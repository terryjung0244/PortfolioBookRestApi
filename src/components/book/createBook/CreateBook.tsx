import React, { useState } from 'react';
import InputComp from '../../resuable/inputComp/InputComp';
import { InputCreateBookType } from './CreateBook.interface';

const CreateBook = () => {
  const [inputCreateBook, setInputCreateBook] = useState<InputCreateBookType>({
    title: '',
    content: '',
    genre: '',
  });

  const onChangeCreateBook = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputCreateBook({ ...inputCreateBook, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <InputComp
        className=""
        placeholder="title"
        name={'title'}
        value={inputCreateBook.title}
        onChange={onChangeCreateBook}
      />
      <InputComp
        className="content"
        placeholder="content"
        name={'content'}
        value={inputCreateBook.content}
        onChange={onChangeCreateBook}
      />
      <InputComp
        className="genre"
        placeholder="genre"
        name={'genre'}
        value={inputCreateBook.genre}
        onChange={onChangeCreateBook}
      />
    </div>
  );
};

export default CreateBook;
