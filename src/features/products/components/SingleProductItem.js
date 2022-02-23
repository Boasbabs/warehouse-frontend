import {
  Heading,
  Text,
  List,
  ListItem,
  FormControl,
  Button,
  FormHelperText
} from '@chakra-ui/react';
import PropTypes from 'prop-types';

const SingleProductItem = ({ product, handleDelete }) => {
  return (
    <List spacing={4}>
      <Heading fontSize={'2xl'} fontWeight="normal">
        {product.name}
      </Heading>
      {product.articles.map((article) => {
        return (
          <List key={article.id} spacing={4}>
            <ListItem>
              <Text fontSize={{ base: '14px' }} as={'span'} fontWeight={'bold'}>
                Article ID:
              </Text>{' '}
              {article.id}
            </ListItem>
            <ListItem mb={'10'}>
              <Text fontSize={{ base: '14px' }} as={'span'} fontWeight={'bold'}>
                Amount Required:
              </Text>{' '}
              {article.amountRequired}
            </ListItem>{' '}
          </List>
        );
      })}
      <ListItem>
        <FormControl id="submit">
          <Button
            colorScheme="red"
            variant="outline"
            size="sm"
            onClick={handleDelete}
          >
            Delete product
          </Button>
          <FormHelperText color="red.200">
            WARNING: Action is irreversible
          </FormHelperText>
        </FormControl>
      </ListItem>
    </List>
  );
};

export default SingleProductItem;

SingleProductItem.propTypes = {
  product: PropTypes.object.isRequired,
  handleDelete: PropTypes.func.isRequired
};
