import * as yup from 'yup';

export const schemaCreateComment = yup.object().shape({
  message: yup.string().required('Comentário obrigatório!'),
});
