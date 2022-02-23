import {
  Box,
  Stack,
  Button,
  FormControl,
  FormLabel,
  Input,
  SimpleGrid,
  IconButton,
  HStack,
  FormHelperText
} from '@chakra-ui/react';
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import { FiMinus, FiPlus } from 'react-icons/fi';
import validationSchema from '../validations/validationSchema';

const SaleSubForm = ({ name, articles, submitFunc, isCreate }) => {
  return (
    <FormControl>
      <Formik
        initialValues={{
          articles: articles,
          name: name
        }}
        validationSchema={validationSchema.productSchema}
        onSubmit={(values) => {
          submitFunc(values);
        }}
        children={({ values, handleSubmit }) => (
          <Form>
            <FormControl id="name">
              <FormLabel>Name:</FormLabel>
              <Field as={Input} type="text" id="name" name="name" />
              <ErrorMessage
                component={FormHelperText}
                style={{ color: 'red' }}
                name="name"
              />
            </FormControl>
            <FieldArray
              name="articles"
              render={(arrayHelpers) => (
                <Stack spacing="5px">
                  {values.articles.map((article, index) => (
                    <SimpleGrid
                      key={index}
                      templateColumns="repeat(2, 1fr)"
                      spacing={1}
                    >
                      <Box>
                        <FormControl key={index}>
                          <FormLabel fontSize="12">Article Id</FormLabel>
                          <Field as={Input} name={`articles[${index}].id`} />
                          <ErrorMessage
                            component={FormHelperText}
                            style={{ color: 'red' }}
                            name={`articles[${index}].id`}
                          />

                          <FormLabel fontSize="12">Amount Required</FormLabel>
                          <Field
                            as={Input}
                            type="number"
                            name={`articles.${index}.amountSold`}
                          />
                          <ErrorMessage
                            component={FormHelperText}
                            style={{ color: 'red' }}
                            name={`articles.${index}.amountSold`}
                          />
                        </FormControl>
                      </Box>
                      <HStack
                        direction="row"
                        spacing={4}
                        align="flex-start"
                        pt="6"
                        pl="3"
                      >
                        {index > 0 && (
                          <IconButton
                            width={'10'}
                            icon={<FiMinus />}
                            onClick={() => arrayHelpers.remove(index)}
                          />
                        )}
                        <IconButton
                          icon={<FiPlus />}
                          width={'10'}
                          onClick={() =>
                            arrayHelpers.push({ id: '', amountSold: '' })
                          }
                        />
                      </HStack>
                    </SimpleGrid>
                  ))}
                </Stack>
              )}
            />
            <FormControl id="submit" float="right">
              <Button
                colorScheme="blackAlpha"
                size="sm"
                type="submit"
                onClick={handleSubmit}
              >
                {isCreate ? 'Create' : 'Update'}
              </Button>
            </FormControl>
          </Form>
        )}
      />
    </FormControl>
  );
};

export default SaleSubForm;
