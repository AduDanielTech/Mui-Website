import React, { useState, useEffect, useRef } from 'react';
import { Box, Stack } from '@mui/system';
import { Card, CardContent, Typography, CardActions, Button, CardMedia } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { ScrollReveal } from "reveal-on-scroll-react";


interface Props {
  content: {
    headerText: string;
    descText: string;
    img: string[];
  };
  toggleProp3?: () => void;
  index: number;
}

export const Frontpage2Card: React.FC<Props> = React.memo(({index, content, toggleProp3 }) => {

  const [imageIndex, setImageIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex: number) => {
        const newIndex = (prevIndex + 1) % content.img.length;
        return newIndex;
      });
    }, 8000);

    return () => clearInterval(interval);
  }, [content.img]);

  const imageSrc = content.img[imageIndex];
const fadeinAnimation =() => {
  if(index == 1){
    return 'slide-in-bottom'
  }else if(index == 2){
    return 'slide-in-left'
  }else{
    return 'slide-in-left'
  }
}

  return (
    <Box sx={{ width: { xs: '100%', sm: '200px', md: '270px', lg: '350px' } }}>
      <ScrollReveal.div className="center" style={{width:'100%'}}> 
            <ScrollReveal.h1 animation={fadeinAnimation()} className="color-blue">
            <Card style={{ borderRadius: 8, height: '100%' }}>
        <CardMedia component="img" height="230px" image={imageSrc} loading="lazy" width="inherit" />
        <CardContent sx={{ borderRadius: '20px 0px 0px 20px' }}>
          <Typography gutterBottom variant="h4" color="primary.main" component="div" sx={{ fontWeight: '400' }}>
            {content.headerText}
          </Typography>
          <Typography gutterBottom variant="body1" color="primary.main">
            {content.descText}
          </Typography>
        </CardContent>
        <Box mb={1}>
          <CardActions>
            <Button
              variant="contained"
              sx={{
                marginLeft: '1rem',
                marginTop: 5.7,
                backgroundColor: '#69E6A6',
              }}
              size="large"
            >
              explore
            </Button>
          </CardActions>
        </Box>
      </Card>
            </ScrollReveal.h1>
        </ScrollReveal.div>
     
    </Box>
  );
});
