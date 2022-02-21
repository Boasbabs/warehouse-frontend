import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  TableCaption
} from '@chakra-ui/react';

const ArticlesTable = ({ children }) => {
  return (
    <Table size="sm" variant="striped" colorScheme="blackAlpha">
      <TableCaption>Articles in the Warehouse</TableCaption>
      <Thead>
        <Tr>
          <Th>Article</Th>
          <Th>Amount in stock</Th>
          <Th>Action</Th>
        </Tr>
      </Thead>
      <Tbody>{children}</Tbody>
      <Tfoot>
        <Tr>
          <Th>Article</Th>
          <Th>Amount in stock</Th>
          <Th>Action</Th>
        </Tr>
      </Tfoot>
    </Table>
  );
};

export default ArticlesTable;
