import {
  Container,
  Box,
  Heading,
  Text,
  Stack,
  Button,
  VStack,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams, Link } from 'react-router-dom';

import { deleteProduct } from '../redux/productsThunk';
import { SingleProductItem } from '../components';

const SingleProduct = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const product = useSelector(({ products }) =>
    products.products.find((product) => product.id === productId)
  );

  const handleDelete = async () => {
    let check = window.confirm('Do you want to delete product??');
    if (check) {
      const response = await dispatch(
        deleteProduct({
          id: product.id
        })
      );
      if (response) {
        navigate(`/products`);
      }
    }
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
          Single Product
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
          <VStack
            textAlign={'left'}
            justifyContent={'center'}
            w={400}
            spacing={5}
          >
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color="gray.300"
                fontWeight={'500'}
                mb={'4'}
              >
                Product Details
              </Text>

              {!product ? (
                <Heading fontSize={'1xl'} fontWeight="light">
                  No product found :(
                </Heading>
              ) : (
                <SingleProductItem
                  product={product}
                  handleDelete={handleDelete}
                />
              )}
            </Box>
          </VStack>
        </Box>
      </Box>
    </Container>
  );
};

export default SingleProduct;
