import React from 'react';
import BlockButton from 'Components/Buttons/BlockButton';
import Box from '@material-ui/core/Box';

const ImageSliderContentButtons = () => {

  return (
    <Box
      flexDirection={{ xs: 'row' }}
      p={{ xs: 2, sm: 0 }}
      width='100%'
      justifyContent='center'
      display='flex'
      mt={{ xs: '10px', sm: '40px' }}>
      <Box width={{ xs: '100%', sm: '170px' }} my={{ xs: '8px', sm: '0' }} mx={{ xs: .5, sm: 2 }}>
        <BlockButton>
          READ MORE
        </BlockButton>
      </Box>
      <Box width={{ xs: '100%', sm: '170px' }} my={{ xs: '8px', sm: '0' }} mx={{ xs: 1, sm: 2 }}>
        <BlockButton border='white' background='transparent'>
          Contact US
        </BlockButton>
      </Box>

    </Box>
  );
}

export default ImageSliderContentButtons;