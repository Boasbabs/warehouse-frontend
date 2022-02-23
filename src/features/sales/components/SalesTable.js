import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption
} from '@chakra-ui/react';
import SalesTableRow from './SalesTableRow';

const SalesTable = ({ sales }) => {
  const renderedSales =
    !sales || sales.length < 1 ? (
      <Tr>
        <Td colSpan={4} textAlign="center">
          No sales found
        </Td>
      </Tr>
    ) : (
      sales && sales.map((sale) => <SalesTableRow key={sale.id} sale={sale} />)
    );

  return (
    <Table size="sm" variant="striped" colorScheme="blackAlpha">
      <TableCaption>Sales in the Warehouse</TableCaption>
      <Thead>
        <Tr>
          <Th>Date</Th>
          <Th>Product</Th>
          <Th>Amount Sold</Th>
          <Th>Action</Th>
        </Tr>
      </Thead>
      <Tbody>{renderedSales}</Tbody>
      <Tfoot>
        <Tr>
          <Th>Date</Th>
          <Th>Product</Th>
          <Th>Amount Sold</Th>
          <Th>Action</Th>
        </Tr>
      </Tfoot>
    </Table>
  );
};

export default SalesTable;
