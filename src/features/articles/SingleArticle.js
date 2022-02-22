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
  FormHelperText,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

const SingleArticle = () => {
  const { articleId } = useParams();

  const article = useSelector(({ articles }) =>
    articles.articles.find((article) => article.id === articleId)
  );

  if (!article) {
    return (
      <Container>
        <h2>Article not found!</h2>
      </Container>
    );
  }

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
          <VStack textAlign={'center'} justifyContent={'center'} w={400} spacing={5}>
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
                    // onClick={""}
                    // isDisabled={""}
                  >
                    Delete article
                  </Button>
                  <FormHelperText color="red.200">
                   WARNING: Action is irreversible
                  </FormHelperText>
                  </FormControl>
                </ListItem>
              </List>
            </Box>
           
          </VStack>
        </Box>
      </Box>
    </Container>
  );
};

export default SingleArticle;
