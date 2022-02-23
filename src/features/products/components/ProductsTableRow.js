import { Button, Text, Stack, Tr, Td } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const ProductsTableRow = ({ product }) => {
  return (
    <Tr key={product.id}>
      <Td>
        <Text fontSize={{ base: '12px', lg: '14px' }} fontWeight={'500'}>
         {product.name}
        </Text>
      </Td>
      <Td>
        <Text fontSize={{ base: '14px', lg: '16px' }} fontWeight={'600'}>
          {product.articles?.length}
        </Text>
      </Td>
      <Td>
        <Stack spacing={4} direction="row" align="center">
          <Button
            as={Link}
            to={`/products/${product.id}`}
            variant="outline"
            colorScheme="blackAlpha"
            size="sm"
          >
            View
          </Button>
          <Button
            as={Link}
            to={`/product/edit/${product.id}`}
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

export default ProductsTableRow;
