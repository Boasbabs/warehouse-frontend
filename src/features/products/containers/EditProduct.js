import {
  Container,
  Box,
  Heading,
  Text,
  Stack,
  Button,
  VStack
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { updateProduct } from '../redux/productsThunk';

import { ProductSubForm } from '../components';

const EditProduct = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const product = useSelector(({ products }) =>
    products.products.find((product) => product.id === productId)
  );

  const handleSubmit = async (values) => {
    await dispatch(
      updateProduct({
        id: product.id,
        ...values
      })
    );
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
          Edit Product
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
            {product ? (
              <ProductSubForm
                name={product.name}
                articles={product.articles}
                submitFunc={handleSubmit}
                isCreate={false}
              />
            ) : (
              <Heading fontSize={'3xl'} fontWeight="light">
                No product found
              </Heading>
            )}
          </VStack>
        </Box>
      </Box>
    </Container>
  );
};

export default EditProduct;
