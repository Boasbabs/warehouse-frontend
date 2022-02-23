import * as Yup from 'yup';

const saleSchema = Yup.object().shape({
  name: Yup.string().max(150).required('Name is required'),
  articles: Yup.array().of(
    Yup.object().shape({
      id: Yup.string().min(4, 'Article Id too short').required('Article Id is required'),
      amountRequired: Yup.number().typeError('You must specify a number')
        .positive('Amount must be greater than zero')
        .integer('Amount must be integer')
        .required('Amount is required')
    })
  )
});

const validationSchema = {
  saleSchema
};

export default validationSchema;
