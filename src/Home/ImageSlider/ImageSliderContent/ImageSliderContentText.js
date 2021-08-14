import React from 'react';
import Box from '@material-ui/core/Box';
import Text from 'Components/Text';

const ImageSliderContentText = () => {

  return (
    <div>
      <div>
        <Text
          fontSize='40px'
          fontSizeMd='26px'
          fontWeight='700'
          lineHeight='60px'
          lineHeightMd='32px'
          color='white'
          textAlign='center'
          component='h2'
        >
          We Do Software Development
        </Text>
      </div>
      <Box mt={{ xs: '10px', md: '20px' }}>
        <Text
          fontSize='16px'
          fontSizeMd='14px'
          fontWeight='700'
          lineHeight='24px'
          color='white'
          textAlign='center'
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.
        </Text>
      </Box>
    </div>
  );
}

export default ImageSliderContentText;