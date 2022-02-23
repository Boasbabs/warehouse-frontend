import { Box, Container, Heading, Text, Stack, Button } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../redux/productsThunk';
import { Link } from 'react-router-dom';

import { ProductsTable } from '../components';

const ListProducts = () => {
  const dispatch = useDispatch();
  const { products, status } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <Box p={4}>
      <Stack
        spacing={4}
        as={Container}
        maxW={'3xl'}
        mb={6}
        textAlign={'center'}
      >
        <Heading fontSize={'3xl'} fontWeight="light">
          Products
        </Heading>
        <Text color={'gray.600'} fontSize={'xl'}>
          {status}
        </Text>
        <Button
          as={Link}
          to={`/product/add`}
          colorScheme="blackAlpha"
          variant={'outline'}
          size="sm"
        >
          &#43; Add Products
        </Button>
      </Stack>

      <ProductsTable products={products} />
    </Box>
  );
};

export default ListProducts;
