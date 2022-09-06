import * as yup from 'yup';

export const schemaEditProfile = yup.object().shape({
  name: yup.string().required('Campo nome é obrigatório!'),
  url_avatar: yup
    .string()
    .required('Campo url é obrigatório!')
    .url('A url contém caminho inválido'),

  city: yup.string().required('Campo cidade é obrigatório'),
  state: yup.string().required('Campo estado é obrigatório'),
  bio: yup.string().required('Campo bio é obrigatório'),
});
