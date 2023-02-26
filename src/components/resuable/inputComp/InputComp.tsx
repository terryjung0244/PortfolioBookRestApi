// import React, { useState } from 'react';
import React from 'react';
import { InputCompPropsType } from './inputComp.interface';
import './../inputComp/inputComp.css';
// import { InputCreateAuthortype } from './inputComp.interface';

const InputComp = ({
  className,
  placeholder,
  name,
  value,
  onChange,
  onKeyDown,
}: InputCompPropsType) => {
  return (
    <div>
      <input
        className={className}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onKeyDown={onKeyDown}
      />
    </div>
  );
};

export default InputComp;
