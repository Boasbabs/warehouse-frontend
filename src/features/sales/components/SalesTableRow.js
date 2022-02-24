import { Button, Text, Stack, Tr, Td } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const SalesTableRow = ({ sale }) => {
  return (
    <Tr data-testid={`sales-row-item`} key={sale.id}>
      <Td>
        <Text fontSize={{ base: '12px', lg: '14px' }} fontWeight={'500'}>
          {new Date(sale.createdAt).toDateString()}
        </Text>
      </Td>
      <Td>
        <Text fontSize={{ base: '12px', lg: '14px' }} fontWeight={'500'}>
          {sale.productId}
        </Text>
      </Td>
      <Td>
        <Text fontSize={{ base: '12px', lg: '14px' }} fontWeight={'500'}>
          {sale.amountSold}
        </Text>
      </Td>
      <Td>
        <Stack spacing={4} direction="row" align="center">
          <Button
            as={Link}
            to={`/sales/${sale.id}`}
            variant="outline"
            colorScheme="blackAlpha"
            size="sm"
          >
            View
          </Button>
          <Button
            as={Link}
            to={`/sale/edit/${sale.id}`}
            colorScheme="blackAlpha"
            size="sm"
          >
            Edit
          </Button>
        </Stack>
      </Td>
    </Tr>
  );
};

export default SalesTableRow;
