export interface InputCreateAuthortype {
  authorFirstName: string;
  authorLastName: string;
}

export interface InputCompPropsType {
  className: string;
  placeholder: string;
  name: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}
