import PropTypes from 'prop-types';
import { Flex, Icon, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const NavItem = ({ icon, children, to, ...rest }) => {
  return (
    <Link
      to={to}
      as={RouterLink}
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="3"
        mx="4"
        borderRadius="md"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'gray.200',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

export default NavItem;

NavItem.propTypes = {
  icon: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
};
