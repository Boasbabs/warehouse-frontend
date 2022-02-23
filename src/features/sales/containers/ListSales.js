import { Box, Container, Heading, Text, Stack, Button } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSales } from '../redux/salesThunk';
import { Link } from 'react-router-dom';

import { SalesTable } from '../components';

const ListSales = () => {
  const dispatch = useDispatch();
  const { sales, status } = useSelector((state) => state.sales);

  useEffect(() => {
    dispatch(getSales());
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
          Sales
        </Heading>
        <Text color={'gray.600'} fontSize={'xl'}>
          {status}
        </Text>
        <Button
          as={Link}
          to={`/sale/add`}
          colorScheme="blackAlpha"
          variant={'outline'}
          size="sm"
        >
          &#43; Add Sales
        </Button>
      </Stack>

      <SalesTable sales={sales} />
    </Box>
  );
};

export default ListSales;
