import { InputHTMLAttributes, ReactNode } from "react";
import {
  DeepMap,
  FieldError,
  FieldErrorsImpl,
  Merge,
  UseFormRegisterReturn,
} from "react-hook-form";
import BoxInput from "./styles";

export interface FormDataDefault {
  name: string;
  email: string;
  url_avatar: string;
  password: string;
  confirmPassword?: string;
  friendsList?: [];
  unFriendsList?: [];
  age: string;
  bio: string;
  city: string;
  state: string;
  gender: string;
  likeList: number[];
}
interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  register?: UseFormRegisterReturn;
  widthInput?: number;
  error: string | undefined;
}

const Input = ({ label, register, widthInput, error, ...rest }: IInput) => {
  return (
    <BoxInput widthInput={widthInput || 100}>
      {label && <label htmlFor={label}>{label}</label>}
      <input id={label} {...rest} {...register} />
      {error && <span>{error as ReactNode}</span>}
    </BoxInput>
  );
};

export default Input;
