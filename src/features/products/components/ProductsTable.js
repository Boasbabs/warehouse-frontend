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
import ProductsTableRow from './ProductsTableRow';

const ProductsTable = ({ products }) => {
  const renderedProducts =
    !products || products.length < 1 ? (
      <Tr>
        <Td colSpan={3} textAlign="center">
          No products found
        </Td>
      </Tr>
    ) : (
      products.map((product) => (
        <ProductsTableRow key={product.id} product={product} />
      ))
    );

  return (
    <Table size="sm" variant="striped" colorScheme="blackAlpha">
      <TableCaption>Products in the Warehouse</TableCaption>
      <Thead>
        <Tr>
          <Th>Product</Th>
          <Th>No. of Articles</Th>
          <Th>Action</Th>
        </Tr>
      </Thead>
      <Tbody>{renderedProducts}</Tbody>
      <Tfoot>
        <Tr>
          <Th>Product</Th>
          <Th>No. of Articles</Th>
          <Th>Action</Th>
        </Tr>
      </Tfoot>
    </Table>
  );
};

export default ProductsTable;
