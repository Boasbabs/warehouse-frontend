import PropTypes from 'prop-types';
import {
  Box,
  Flex,
  Text,
  CloseButton,
  useColorModeValue
} from '@chakra-ui/react';
import { FiLayers, FiPackage, FiShoppingBag } from 'react-icons/fi';
import NavItem from '../NavItem';

const LinkItems = [
  { name: 'Articles', icon: FiLayers },
  { name: 'Products', icon: FiPackage },
  { name: 'Sales', icon: FiShoppingBag }
];

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontWeight="light">
          Warehouse
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem
          color={'gray.900'}
          key={link.name}
          icon={link.icon}
          to={link.name.toLocaleLowerCase()}
        >
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};
export default SidebarContent;

SidebarContent.propTypes = {
  onClose: PropTypes.func.isRequired
};
