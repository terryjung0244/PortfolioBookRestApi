import React, { useState } from 'react';
import { useAppDispatch } from '../../../hook/useAppDispatch';
import useAppSelector from '../../../hook/useAppSelector';
import { updateAuthorRequest } from '../../../service/redux/author/authorAction/authorAction';
import InputComp from '../../resuable/inputComp/InputComp';
import { AuthorUpdateType } from './updateAuthor.interface';

const UpdateAuthor = () => {
  const dispatch = useAppDispatch();
  const { selectedAuthorId } = useAppSelector((state) => state.authorReducer);
  const [authorUpdate, setAuthorUpdate] = useState<AuthorUpdateType>({
    authorFirstName: '',
    authorLastName: '',
  });

  const authorUpdateFunc = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuthorUpdate({ ...authorUpdate, [e.target.name]: e.target.value });
  };

  const onClickAuthorUpdate = (newInputData: AuthorUpdateType) => {
    const authorData: AuthorUpdateType = {
      authorFirstName: newInputData.authorFirstName,
      authorLastName: newInputData.authorLastName,
      selectedId: selectedAuthorId,
    };

    dispatch(updateAuthorRequest(authorData));
  };

  return (
    <div>
      <InputComp
        className={''}
        placeholder={'FirstName'}
        name={'authorFirstName'}
        value={authorUpdate.authorFirstName}
        onChange={authorUpdateFunc}
      />
      <InputComp
        className={''}
        placeholder={'LastName'}
        name={'authorLastName'}
        value={authorUpdate.authorLastName}
        onChange={authorUpdateFunc}
      />
      <button onClick={() => onClickAuthorUpdate(authorUpdate)}>UPDATE</button>
    </div>
  );
};

export default UpdateAuthor;
