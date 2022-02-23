import {
  Container,
  Box,
  Heading,
  Text,
  Stack,
  Button,
  VStack,
  FormControl,
  FormLabel,
  FormHelperText,
  Input
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import validationSchema from './validations/validationSchema';
import { createArticle } from './redux/articlesThunk';

const AddArticle = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: '',
      amountInStock: ''
    },
    validationSchema: validationSchema.editArticleSchema,
    onSubmit: async (values, { resetForm }) => {
      await dispatch(
        createArticle({
          name: values.name,
          amountInStock: parseInt(values.amountInStock)
        })
      )
      resetForm();
      navigate(`/articles`);
    }
  });

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
          Add Article
        </Heading>
        <Text color={'gray.600'} fontSize={'xl'}>
          <Button
            as={Link}
            to={`/articles`}
            colorScheme="blackAlpha"
            variant={'link'}
            size="sm"
          >
            &#8592; Back to Articles
          </Button>
        </Text>
      </Stack>
      <Box bg="white" borderRadius="md">
        <Box m={8} color="gray.800">
          <VStack w={400} spacing={5}>
            <FormControl id="name">
              <FormLabel>Name:</FormLabel>
              <Input
                type="text"
                id="name"
                name="name"
                {...formik.getFieldProps('name')}
                size="md"
              />
              {formik.touched.name && formik.errors.name ? (
                <FormHelperText color="red.500">
                  {formik.errors.name}
                </FormHelperText>
              ) : null}
            </FormControl>
            <FormControl id="amountInStock">
              <FormLabel>Amount in stock:</FormLabel>
              <Input
                type="number"
                id="amountInStock"
                {...formik.getFieldProps('amountInStock')}
                size="md"
              />
              {formik.touched.amountInStock && formik.errors.amountInStock ? (
                <FormHelperText color="red.500">
                  {formik.errors.amountInStock}
                </FormHelperText>
              ) : null}
            </FormControl>

            <FormControl id="submit" float="right">
              <Button
                colorScheme="blackAlpha"
                size="sm"
                onClick={formik.handleSubmit}
                isDisabled={formik.errors.amountInStock || formik.errors.name}
              >
                Create Article
              </Button>
            </FormControl>
          </VStack>
        </Box>
      </Box>
    </Container>
  );
};

export default AddArticle;
