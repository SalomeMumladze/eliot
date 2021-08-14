import React from 'react';
import Text from 'Components/Text';
import Box from '@material-ui/core/Box';

const NavbarMenu = () => {

  return (
    <Box
      alignItems='center'
      justifyContent={{ xs: 'center', lg: 'baseline' }}
      flexDirection={{ xs: 'column', md: 'row' }}
      display='flex'>
      {links.map((link, i) => (
        <Box key={i} my={{ xs: .25, md: 0 }} mx={{ xs: '0', md: '16px' }}>
          <Text
            fontSize='18px'
            lineHeight='24px'
            color='white'
          >
            {link}
          </Text>
        </Box>
      ))
      }
    </Box >
  );
}

const links = [
  'Privacy Policy',
  'Terms of Use',
]

export default NavbarMenu;