import { Button, Text, Stack, Tr, Td } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const SalesTableRow = ({ sale }) => {
  return (
    <Tr key={sale.id}>
      <Td>
        <Text fontSize={{ base: '12px', lg: '14px' }} fontWeight={'500'}>
         {sale.name}
        </Text>
      </Td>
      <Td>
        <Text fontSize={{ base: '14px', lg: '16px' }} fontWeight={'600'}>
          {sale.articles?.length}
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
