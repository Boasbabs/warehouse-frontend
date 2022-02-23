import * as Yup from 'yup';

const saleSchema = Yup.object().shape({
  productId: Yup.string().max(150).required('Name is required'),
  amountSold: Yup.number()
    .typeError('You must specify a number')
    .positive('Amount must be greater than zero')
    .integer('Amount must be integer')
    .required('Amount is required')
});

const validationSchema = {
  saleSchema
};

export default validationSchema;
