import React from 'react';
import Text from 'Components/Text';
import Box from '@material-ui/core/Box';

const HeaderMenu = () => {

  return (
    <Box
      flexDirection={{ xs: 'column', sm: 'row' }}
      justifyContent={{ xs: 'center', sm: 'baseline' }}
      width={{ xs: '100%', sm: 'auto' }}
      height={{ xs: 'auto', sm: '40px' }}
      alignItems='center'
      display='flex'
      ml={{ xs: 0, sm: 'auto' }}>
      {links.map((link, i) => (
        <Box key={i} m={.25} ml={{ xs: '0', sm: '40px' }}>
          <Text
            fontSize='18px'
            lineHeight='24px'
            color='white'
          >
            {link}
          </Text>
        </Box>
      ))}
    </Box>
  );
}

const links = [
  'About',
  'Services',
  'Projects',
  'Team',
  'Contact',
]

export default HeaderMenu;