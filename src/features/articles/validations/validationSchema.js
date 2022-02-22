import * as Yup from 'yup';

const editArticleSchema = Yup.object().shape({
  name: Yup.string().max(150).required('Name is required'),
  amountInStock: Yup.number()
    .typeError('You must specify a number')
    .positive('Amount must be greater than zero')
    .integer('Amount must be integer')
    .required('Amount is required')
});

const validationSchema = {
  editArticleSchema
};

export default validationSchema;
