import { Button, Text, Stack, Tr, Td } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const TableRows = ({ article }) => {
  return (
    <Tr key={article.id}>
      <Td>
        <Text fontSize={{ base: '12px', lg: '14px' }} fontWeight={'500'}>
         {article.name}
        </Text>
      </Td>
      <Td>
        <Text fontSize={{ base: '14px', lg: '16px' }} fontWeight={'600'}>
          {article.amountInStock}
        </Text>
      </Td>
      <Td>
        <Stack spacing={4} direction="row" align="center">
          <Button
            as={Link}
            to={`/articles/${article.id}`}
            variant="outline"
            colorScheme="blackAlpha"
            size="sm"
          >
            View
          </Button>
          <Button
            as={Link}
            to={`/article/edit/${article.id}`}
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

export default TableRows;
