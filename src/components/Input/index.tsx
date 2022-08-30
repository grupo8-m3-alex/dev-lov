import { InputHTMLAttributes } from "react"
import { UseFormRegisterReturn } from "react-hook-form";
import BoxInput from "./styles";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  register?: UseFormRegisterReturn;
  widthInput?: number;
}

const Input = ({ label, register, widthInput, ...rest }:IInput) => {

  return (
    <BoxInput widthInput={widthInput || 100} >
      {label && <label htmlFor={label}>{label}</label>}
      <input id={label} {...rest} {...register} type="text"/>
    </BoxInput>
  )
}

export default Input;