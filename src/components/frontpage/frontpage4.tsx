import { Box,Stack,Typography,Button, Avatar, } from "@mui/material";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { createTheme,  styled } from '@mui/material/styles';
import { ScrollReveal } from "reveal-on-scroll-react";





const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    lineHeight: '60px',
  }));
  
  const lightTheme = createTheme({ palette: { mode: 'light' } });
  

  interface Props {
    mode: boolean | undefined;      
}


export const Frontpage4: React.FC<Props> = ({mode }) => {
    return (
       <Stack className="landing-page-cont" sx={{ borderRadius:'30px', backgroundColor:'primary.main' }} width='100%' >
                <Stack height='90%' my={4} p={4}  spacing={5}>
                    <Stack direction={{xs:'column', sm:'row'}} spacing={3}>
                    <Stack> <Typography color='white' variant='h3'  fontFamily='Manrope'>An enterprise template To ramp up your company website</Typography></Stack>
                    <Stack spacing={3} direction='row' width={{xs:'20%', sm:'inherit'}} height='60px'>

                        <Button  variant='contained' sx={{
                            backgroundColor:'white',
                            borderRadius:'50%',
                            '&:hover' :  {backgroundColor:  ' #65E4A3',color:'white',}
                        }}>
                            <ArrowLeftIcon fontSize="large" sx={{color:'primary.main','&:hover' :  {backgroundColor:  ' #65E4A3',color:'white',}}}  />
                        </Button>
                        <Button  variant='contained' sx={{
                            backgroundColor:'white',
                            borderRadius:'50%',
                            '&:hover' :  {backgroundColor:  ' #65E4A3',color:'white',}
                        }}>
                       <ArrowRightOutlinedIcon fontSize="large"sx={{color:'primary.main','&:hover' :  {backgroundColor:  ' #65E4A3',color:'white',}}} />
                        </Button>      
                    </Stack>
                   
                    </Stack>
                    
                    <Stack direction='row'bgcolor='primary' spacing={3} >
                      <Grid container bgcolor='primary'  spacing={2} >
                          <Grid item xs={12}>
                                      <Box
                                      bgcolor='primary'
                                        sx={{
                                          p: 2,   
                                          display: 'grid',
                                          gridTemplateRows:{md: '1fr'},
                                          gridTemplateColumns: { md: '1fr 1fr 1fr' },
                                          gap: 6,}}
                                      >
                                        {[ 1, 2, 3,].map((elevation) => (
                                             <ScrollReveal.div className="center"> 
                                                <ScrollReveal.h1 animation="slide-in-bottom" className="color-blue">
                                          <Item key={elevation} elevation={elevation}  sx={{p: 2, boxShadow:`${mode ? '2px 2px 20px 10px #072037' : '0px' }`,borderRadius:'30px'
                                          }} >
                                                <Stack  spacing={6}>

                                                                <Typography variant='h5' color='primary.main'  fontFamily='Manrope'>
                                                            {
                                                                (elevation === 1) 
                                                                ? '“Buyer buzz partner network disruptive non-disclosure agreement business” '
                                                                : (elevation === 2) 
                                                                ? '“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”'
                                                                : '“Release facebook responsive web design business model canvas seed money monetization.”'
                                                                }
                                                                </Typography>
                                                                <Box width='100%' >
                                                                    <Stack direction='row'
                                                                        spacing={1}
                                                                        sx={{
                                                                            width: '100%',  
                                                                            marginLeft:'20px'
                                                                        }}> 
                                                                        <Avatar  src={
                                                                            
                                                                            (elevation === 1) 
                                                                            ? 'https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc='
                                                                            : (elevation === 2) 
                                                                            ? 'https://media.istockphoto.com/id/1193973176/photo/contemplative-brazilian-businesswoman-looking-out-window.jpg?b=1&s=170667a&w=0&k=20&c=xS39o1BE1QPAFu5EvzWHDazUFaENausSi9YWr7cYg6M='
                                                                            : 'https://media.istockphoto.com/id/1300512215/photo/headshot-portrait-of-smiling-ethnic-businessman-in-office.jpg?b=1&s=170667a&w=0&k=20&c=TXCiY7rYEvIBd6ibj2bE-VbJu0rRGy3MlHwxt2LHt9w='

                                                                        }/>
                                                                        <Stack sx={{width: '100%',
                                                                                    textAlign:'start',}}> 
                                                                            <>
                                                                            <Typography variant='body2' color='primary.main'>
                                                                                            {(elevation === 1) 
                                                                                                ? 'Albus Dumbledore'
                                                                                                : (elevation === 2) 
                                                                                                    ? 'Adaobi Angel'
                                                                                                    : 'Sola Paul'}
                                                                                            </Typography>
                                                                                        <Typography variant='body2'>
                                                                                        {(elevation === 1) 
                                                                                                ? ' Manager @ Howarts'
                                                                                                : (elevation === 2) 
                                                                                                    ? 'Manager @ meta'
                                                                                                    : 'Project Manager'}
                                                                                            </Typography>
                                                                            </>
                                                                        </Stack>
                                                                    </Stack>
                                                                </Box>
                                                                </Stack>

                                          </Item>
                                                    </ScrollReveal.h1> 
                                                    </ScrollReveal.div>  
                                        ))}
                                      </Box>
                          </Grid>
                        </Grid>
                    </Stack>
                </Stack>
       </Stack>
    )
}