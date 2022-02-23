import { Box, Container, Heading, Text, Stack, Button } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getArticles } from './redux/articlesThunk';
import { Link } from 'react-router-dom';

import { ArticlesTable } from './components';

const Articles = () => {
  const dispatch = useDispatch();
  const { articles, status } = useSelector((state) => state.articles);

  useEffect(() => {
    dispatch(getArticles());
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
        <Button
          as={Link}
          to={`/article/add`}
          colorScheme="blackAlpha"
          variant={'outline'}
          size="sm"
        >
          &#43; Add Articles
        </Button>
      </Stack>

      <ArticlesTable articles={articles} />
    </Box>
  );
};

export default Articles;
