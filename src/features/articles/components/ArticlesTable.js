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
import ArticlesTableRow from './ArticlesTableRow';

const ArticlesTable = ({ articles }) => {
  const renderedArticles =
    !articles || articles.length < 1 ? (
      <Tr>
        <Td colSpan={3} textAlign="center">
          No articles found
        </Td>
      </Tr>
    ) : (
      articles.map((article) => (
        <ArticlesTableRow key={article.id} article={article} />
      ))
    );

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
      <Tbody>{renderedArticles}</Tbody>
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
