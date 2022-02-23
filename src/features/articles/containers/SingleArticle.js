import {
  Container,
  Box,
  Heading,
  Text,
  Stack,
  Button,
  VStack,
  FormControl,
  List,
  ListItem,
  FormHelperText
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams, Link } from 'react-router-dom';

import { deleteArticle } from '../redux/articlesThunk';

const SingleArticle = () => {
  const { articleId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const article = useSelector(({ articles }) =>
    articles.articles.find((article) => article.id === articleId)
  );

  const handleDelete = async () => {
    let check = window.confirm("Do you want to delete article??");
    if(check) {
      const response = await dispatch(
        deleteArticle({
          id: article.id
        })
      );
      if(response) {
        navigate(`/articles`);
      }
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
          Single Article
        </Heading>
        <Text color={'gray.600'} fontSize={'xl'}>
          <Button
            as={Link}
            to={`/articles`}
            colorScheme="blackAlpha"
            variant={'link'}
            size="sm"
          >
            &#8592; Back to Articles
          </Button>
        </Text>
      </Stack>
      <Box bg="white" borderRadius="md">
        <Box m={8} color="gray.800">
          <VStack
            textAlign={'center'}
            justifyContent={'center'}
            w={400}
            spacing={5}
          >
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color="gray.800"
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}
              >
                Article Details
              </Text>

              {
                
                (!article) ? <Heading fontSize={'1xl'} fontWeight="light">
                No article found :(
              </Heading> :
              <List spacing={4}>
                <ListItem>
                  <Text
                    fontSize={{ base: '14px' }}
                    as={'span'}
                    fontWeight={'bold'}
                  >
                    Name:
                  </Text>{' '}
                  {article.name}
                </ListItem>
                <ListItem mb={'10'}>
                  <Text
                    fontSize={{ base: '14px' }}
                    as={'span'}
                    fontWeight={'bold'}
                  >
                    Amount In Stock:
                  </Text>{' '}
                  {article.amountInStock}
                </ListItem>
                <ListItem>
                  <FormControl id="submit">
                    <Button
                      colorScheme="red"
                      variant="outline"
                      size="sm"
                      onClick={handleDelete}
                    >
                      Delete article
                    </Button>
                    <FormHelperText color="red.200">
                      WARNING: Action is irreversible
                    </FormHelperText>
                  </FormControl>
                </ListItem>
              </List>
              }

            </Box>
          </VStack>
        </Box>
      </Box>
    </Container>
  );
};

export default SingleArticle;
