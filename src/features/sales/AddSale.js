import {
  Container,
  Box,
  Heading,
  Text,
  Stack,
  Button,
  VStack,
  Select,
  FormControl,
  FormLabel,
  Input,
  FormHelperText
} from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Formik, useFormik, ErrorMessage } from 'formik';

import { useNavigate, Link } from 'react-router-dom';
import { createSale } from './redux/salesThunk';
import { SaleSubForm } from './components';
import { getProducts } from 'features/products/redux/productsThunk';
import validationSchema from './validations/validationSchema';

const FORM_INITIAL_VALUES = {
  name: '',
  articles: [
    {
      id: '',
      amountRequired: 0
    }
  ]
};

const AddSale = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { products, status } = useSelector((state) => state.products);

  const formik = useFormik({
    initialValues: {
      productId: '',
      amountSold: ''
    },
    validationSchema: validationSchema.editArticleSchema,
    onSubmit: async (values, { resetForm }) => {
      await dispatch(
        createSale({
          productId: values.name,
          amountSold: parseInt(values.amountSold)
        })
      );
      resetForm();
      navigate(`/sales`);
    }
  });

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <Container maxW="full" mt={0} centerContent={true} overflow="hidden">
      <Stack
        spacing={4}
        as={Container}
        maxW={'3xl'}
        mb={6}
        textAlign={'center'}
      >
        <Heading fontSize={'3xl'} fontWeight="light">
          Add Sale
        </Heading>
        <Text color={'gray.600'} fontSize={'xl'}>
          <Button
            as={Link}
            to={`/sales`}
            colorScheme="blackAlpha"
            variant={'link'}
            size="sm"
          >
            &#8592; Back to Sales
          </Button>
        </Text>
      </Stack>
      <Box bg="white" borderRadius="md">
        <Box m={8} color="gray.800">
          <VStack w={400} spacing={5}>
            <FormControl>
              <Select
                id="productId"
                placeholder="Select product"
                {...formik.getFieldProps('productId')}
              >
                {products &&
                  products.map((product) => (
                    <option key={product.id} value={product.id}>
                      {product.id}
                    </option>
                  ))}
              </Select>
              {formik.touched.productId && formik.errors.productId ? (
                <FormHelperText color="red.500">
                  {formik.errors.productId}
                </FormHelperText>
              ) : null}
            </FormControl>

            <FormControl>
              <FormLabel>Amount sold:</FormLabel>
              <Input
                type="number"
                id="amountSold"
                {...formik.getFieldProps('amountSold')}
                size="md"
              />
              {formik.touched.amountSold && formik.errors.amountSold ? (
                <FormHelperText color="red.500">
                  {formik.errors.amountSold}
                </FormHelperText>
              ) : null}
            </FormControl>

            <FormControl id="submit" float="right">
              <Button
                colorScheme="blackAlpha"
                size="sm"
                type="submit"
                onClick={formik.handleSubmit}
                isDisabled={formik.errors.amountSold || formik.errors.productId}
              >
                Add Sale
              </Button>
            </FormControl>
          </VStack>
        </Box>
      </Box>
    </Container>
  );
};

export default AddSale;
