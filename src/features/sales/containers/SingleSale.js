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

import { deleteSale } from '../redux/salesThunk';

const SingleSale = () => {
  const { saleId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const sale = useSelector(({ sales }) =>
    sales.sales.find((sale) => sale.id === saleId)
  );

  const handleDelete = async () => {
    let check = window.confirm('Do you want to delete sale??');
    if (check) {
      const response = await dispatch(
        deleteSale({
          id: sale.id
        })
      );
      if (response) {
        navigate(`/sales`);
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
          Single Sale
        </Heading>
        <Text color={'gray.600'} fontSize={'xl'}>
          <Button
            as={Link}
            to={`/sales`}
            colorScheme="blackAlpha"
            variant={'link'}
            size="sm"
          >
            &#8592; Back to Sales
          </Button>
        </Text>
      </Stack>
      <Box bg="white" borderRadius="md">
        <Box m={8} color="gray.800">
          <VStack
            textAlign={'left'}
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
                Sales Details
              </Text>

              {!sale ? (
                <Heading fontSize={'1xl'} fontWeight="light">
                  No sale found :(
                </Heading>
              ) : (
                <List spacing={4}>
                  <ListItem>
                    <Text
                      fontSize={{ base: '14px' }}
                      as={'span'}
                      fontWeight={'bold'}
                    >
                      Product:
                    </Text>{' '}
                    {sale.productId}
                  </ListItem>
                  <ListItem>
                    <Text
                      fontSize={{ base: '14px' }}
                      as={'span'}
                      fontWeight={'bold'}
                    >
                      Amount sold:
                    </Text>{' '}
                    {sale.amountSold}
                  </ListItem>
                  <ListItem mb={'10'}>
                    <Text
                      fontSize={{ base: '14px' }}
                      as={'span'}
                      fontWeight={'bold'}
                    >
                      Date sold:
                    </Text>{' '}
                    {new Date(sale.createdAt).toDateString()}
                  </ListItem>
                  <ListItem>
                    <FormControl id="submit">
                      <Button
                        colorScheme="red"
                        variant="outline"
                        size="sm"
                        onClick={handleDelete}
                      >
                        Delete sale
                      </Button>
                      <FormHelperText color="red.200">
                        WARNING: Action is irreversible
                      </FormHelperText>
                    </FormControl>
                  </ListItem>
                </List>
              )}
            </Box>
          </VStack>
        </Box>
      </Box>
    </Container>
  );
};

export default SingleSale;
