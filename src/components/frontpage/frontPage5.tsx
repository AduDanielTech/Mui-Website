import { ScrollReveal } from "reveal-on-scroll-react";

import {Grid,Stack, Typography} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

export default function Frontpage5() {
 const theme = useTheme()
  return (
         <Stack width='100%'  >
           <Grid container bgcolor='primary' paddingY={3} p={5} height='100%' spacing={2} >
           <Grid item  height={{xs:'400px',sm:'450px',lg:'500px'}} xs={12} borderRadius={7}  className='frontpage5pic'>
            <Box
              sx={{display:'grid',fontFamily:'Manrope', placeContent:'center'}}
               height='90%'
             p={2}>
            </Box>
        </Grid>
        <Grid item  height='40%' sm={6} marginTop={4} xs={12}>
            <Box
             sx={{display:'grid', placeContent:'center'}}
               height='90%'
             p={2}
            >
               <ScrollReveal.div className="center"> 
                                <ScrollReveal.p animation="fade-in"  className="color-blue">
                                <Typography variant='h3' fontFamily='Manrope'>We connect our customers with the best, and help them keep up-and stay open.</Typography>
                                    </ScrollReveal.p>
                            </ScrollReveal.div>
           
            </Box>
        </Grid>
        <Grid item  height='40%' sm={6} xs={12}>
            <Stack spacing={3} sx={{display:'grid',  placeContent:'center'}}
               height='90%'
             p={2}
            >
              
                
              {[ 1, 2,].map((elevation) => (
                <Stack width='100%' direction='row' py={1} spacing={2} borderBottom='1px solid #65E4A3'>
                <Typography variant='h6' fontFamily='Manrope' fontWeight='light'> 
                {(elevation === 1) 
                                                    ? ' We connect our customers with the best?'
                                                    : ' Android research & development rockstar?'} </Typography> 
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="14" cy="14" r="14" fill="primary.main"/>
  <path d="M8 12L14 18L20 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>                   </Stack>
               ))}
            </Stack>
        </Grid>
           </Grid>
         </Stack>
  );
}
