import { Box, Container, Heading, Text, Stack } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getArticles } from './redux/articlesThunk';

import { ArticlesTable, ArticlesTableRow } from './components';

const Articles = () => {
  const dispatch = useDispatch();
  const { articles, status } = useSelector((state) => state.articles);

  const renderedArticles = articles.map((article) => (
    <ArticlesTableRow key={article.id} article={article} />
  ));

  useEffect(() => {
    // dispatch(getArticles());
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
          Articles
        </Heading>
        <Text color={'gray.600'} fontSize={'xl'}>
          {status}
        </Text>
      </Stack>

      <ArticlesTable>{renderedArticles}</ArticlesTable>

    </Box>
  );
};

export default Articles;
