import {
  Container,
  Box,
  Heading,
  Text,
  Stack,
  Button,
  VStack,
  FormControl,
  FormLabel,
  Input
} from '@chakra-ui/react';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { updateArticle } from './redux/articlesThunk';

const EditArticle = () => {
  const { articleId } = useParams();

  const article = useSelector(({ articles }) =>
    articles.articles.find((article) => article.id === articleId)
  );
  const [name, setName] = useState(article.name);
  const [amountInStock, setAmountInStock] = useState(article.amountInStock);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNameChange = (e) => setName(e.target.value);
  const handleAmountChange = (e) => setAmountInStock(e.target.value);

  const handleSubmit = () => {
    if (name && amountInStock) {
      dispatch(updateArticle({ id: article.id, name, amountInStock }));
    //   navigate(`/articles`);
    }
  };

  return (
    <Container maxW="full" mt={0} centerContent={true} overflow="hidden">
      <Stack
        spacing={4}
        as={Container}
        maxW={'3xl'}
        mb={6}
        textAlign={'center'}
      >
        <Heading fontSize={'3xl'} fontWeight="light">
          Edit Article
        </Heading>
        <Text color={'gray.600'} fontSize={'xl'}>
          status
        </Text>
      </Stack>
      <Box bg="white" borderRadius="md">
        <Box m={8} color="gray.800">
          <VStack spacing={5}>
            <FormControl id="name">
              <FormLabel>Name:</FormLabel>
              <Input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={handleNameChange}
                size="md"
              />
            </FormControl>
            <FormControl id="amountInStock">
              <FormLabel>Amount in stock:</FormLabel>
              <Input
                type="number"
                id="amountInStock"
                name="amountInStock"
                value={amountInStock}
                onChange={handleAmountChange}
                size="md"
              />
            </FormControl>

            <FormControl id="submit" float="right">
              <Button colorScheme="blackAlpha" size="sm" onClick={handleSubmit}>
                Update
              </Button>
            </FormControl>
          </VStack>
        </Box>
      </Box>
    </Container>
  );
};

export default EditArticle;
