import { InputHTMLAttributes } from "react"
import { UseFormRegisterReturn } from "react-hook-form";
import BoxInput from "./styles";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  register?: UseFormRegisterReturn;
  typeStyle?: string;
}

const Input = ({ label, register, type, ...rest }:IInput) => {

  return (
    <BoxInput>
      {label && <label htmlFor={label}>{label}</label>}
      <input id={label} {...rest} {...register} type="text"/>
    </BoxInput>
  )
}

export default Input;