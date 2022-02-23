import {
  Container,
  Box,
  Heading,
  Text,
  Stack,
  Button,
  VStack
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { createProduct } from '../redux/productsThunk';

import { ProductSubForm } from '../components';

const FORM_INITIAL_VALUES = {
  name: '',
  articles: [
    {
      id: '',
      amountRequired: 0
    }
  ]
};

const AddProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    await dispatch(createProduct(values));
    navigate(`/products`);
  };

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
          Add Product
        </Heading>
        <Text color={'gray.600'} fontSize={'xl'}>
          <Button
            as={Link}
            to={`/products`}
            colorScheme="blackAlpha"
            variant={'link'}
            size="sm"
          >
            &#8592; Back to Products
          </Button>
        </Text>
      </Stack>
      <Box bg="white" borderRadius="md">
        <Box m={8} color="gray.800">
          <VStack w={400} spacing={5}>
            <ProductSubForm
              name={FORM_INITIAL_VALUES.name}
              articles={FORM_INITIAL_VALUES.articles}
              submitFunc={handleSubmit}
              isCreate={true}
            />
          </VStack>
        </Box>
      </Box>
    </Container>
  );
};

export default AddProduct;
