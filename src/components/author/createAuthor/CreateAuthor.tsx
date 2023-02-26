import React, { useState } from 'react';
import { useAppDispatch } from '../../../hook/useAppDispatch';
import useAppSelector from '../../../hook/useAppSelector';
import { createAuthorRequest } from '../../../service/redux/author/authorAction/authorAction';
import InputComp from '../../resuable/inputComp/InputComp';
import { InputCreateAuthortype } from '../../resuable/inputComp/inputComp.interface';
import '../createAuthor/createAuthor.css';

const CreateAuthor = () => {
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.authorReducer);
  const [inputCreateAuthor, setInputCreateAuthor] =
    useState<InputCreateAuthortype>({
      authorFirstName: '',
      authorLastName: '',
    });

  const onChangeCreateAuthor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputCreateAuthor({
      ...inputCreateAuthor,
      [e.target.name]: e.target.value,
    });
  };

  const onKeyDownCreateAuthor = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      createAuthor();
    }
  };

  const createAuthor = () => {
    if (
      !inputCreateAuthor.authorFirstName ||
      !inputCreateAuthor.authorLastName
    ) {
      alert('Please check all input fields');
      return; // 위 두개의 조건이 충족되면 밑에 콘솔 실행, 아니면 alert
    }

    console.log('go dispatch!');
    dispatch(createAuthorRequest(inputCreateAuthor));
  };

  return (
    <div>
      <div className="inputMain">
        <InputComp
          className="inputContainer"
          placeholder="Search Author's first name"
          name={'authorFirstName'}
          value={inputCreateAuthor.authorFirstName}
          onChange={onChangeCreateAuthor}
          onKeyDown={onKeyDownCreateAuthor}
        />
        <InputComp
          className="inputContainer"
          placeholder="Search Author's last name"
          name={'authorLastName'}
          value={inputCreateAuthor.authorLastName}
          onChange={onChangeCreateAuthor}
          onKeyDown={onKeyDownCreateAuthor}
        />
        <button className="createAuthorButton" onClick={createAuthor}>
          Create Author
        </button>
        {loading && (
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
      </div>

      {/* {loading ? <div>loading...</div> : null} */}
    </div>
  );
};

export default CreateAuthor;
