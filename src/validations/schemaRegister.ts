import * as yup from "yup";

const schemaRegister = yup.object().shape({
  name: yup.string().required("Nome é obrigatorio"),
  email: yup.string().required("Email é obrigatorio").email("Não corresponde a um email"),
  url_avatar: yup.string().required("Avatar obrigatorio").url("Tem que ser uma url"),
  password: yup.string().required("Senha obrigatoria").min(8, "A senha precisa ter no minimo 8 caracteres"),
  confirmPassword: yup.string().required('Confirme sua senha').oneOf([yup.ref('password'), null], "Senhas não correspondem"),
  age: yup.string().required("Idade obrigatoria"),
  sexo: yup.string(),
  bio: yup.string().required("Bio obrigatoria"),
  city: yup.string().required("Cidade obrigatoria"),
  state: yup.string().required("Estado obrigatorio")
})

export default schemaRegister;