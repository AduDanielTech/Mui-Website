import {Grid,Stack,Paper, Typography,Avatar,colors,Button} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { ScrollReveal } from "reveal-on-scroll-react";

export default function Frontpage6() {
 const theme = useTheme()
   const content =[
      {
        contentimg: "https://media.istockphoto.com/id/1385925154/photo/asian-female-students-holding-for-selection-book-in-library.jpg?b=1&s=170667a&w=0&k=20&c=aHvmSoQ0aY-ZlSIDw4E645LnOoKweapi1F5AoSOil3Y=",
        category:'Category',
        date:'November 3rd',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero deleniti sint officiis tempora quibusdam error unde itaque cumque nihil provident!',
        pofileImg:'https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc=',
        pofileName:'Al Dumbledor',
      },
      {
        contentimg: "https://media.istockphoto.com/id/1342421368/photo/modern-bright-office-space.jpg?b=1&s=170667a&w=0&k=20&c=sm30pJiI6wRu9e1crTD7JE0OnT56LQ1T6Ufe_U6g-ok=",
        category:'Category',
        date:'November 3rd',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero deleniti sint officiis tempora quibusdam error unde itaque cumque nihil provident!',
        pofileImg:'https://media.istockphoto.com/id/1193973176/photo/contemplative-brazilian-businesswoman-looking-out-window.jpg?b=1&s=170667a&w=0&k=20&c=xS39o1BE1QPAFu5EvzWHDazUFaENausSi9YWr7cYg6M=',
        pofileName:'Adaobi Angel',
      },
      {
          contentimg: "https://media.istockphoto.com/id/1346066816/photo/aerial-view-of-suburban-landscape.jpg?b=1&s=170667a&w=0&k=20&c=5iN0v3iQlIvfxGeLsSyl484KkqAndeAoPD14qZSPrRM=",
          category:'Category',
          date:'November 3rd',
          desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero deleniti sint officiis tempora quibusdam error unde itaque cumque nihil provident!',
        pofileImg:'https://media.istockphoto.com/id/1300512215/photo/headshot-portrait-of-smiling-ethnic-businessman-in-office.jpg?b=1&s=170667a&w=0&k=20&c=TXCiY7rYEvIBd6ibj2bE-VbJu0rRGy3MlHwxt2LHt9w=',
        pofileName:'Sola Paul',
      },
    ]
  return (
    <Stack width='100%' >
       <Grid container width='100%' bgcolor='primary' paddingY={3} p ={4}  spacing={2} sx={{color:'primary.main'}}>
          <Grid item  xs={12} textAlign='center' >
              <Box sx={{display:'grid',fontFamily:'Manrope', placeContent:'center'}} height='90   %'>
                  <Typography variant='body2' color='gray' fontWeight='bold' py={2}> Our Blog</Typography>
                  <ScrollReveal.div className="center"> 
                                <ScrollReveal.p animation="fade-in"  className="color-blue">
                  <Typography variant='h3'>Value proposition accelerator product management venture</Typography>
                                    </ScrollReveal.p>
                            </ScrollReveal.div>
              </Box>
          </Grid> 
       </Grid>
       <Grid item  xs={12} marginTop={3}  sx={{fontFamily:'Manrope',
              }}  p={2} spacing={4} width='inherit'>
                <Grid container display='flex'  justifyContent='space-evenly' alignItems='center'>
                     {content.map((cont) => (
                <Grid item  xs={12} md={3} my={2} sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <Paper sx={{
                    width:{
                      lg:'300px', 
                      md:'250px',
                      xs:'350px'
                    }, px:1.6,paddingBottom:2}} elevation={1} > 
                        <Grid container spacing={3} >
                              <Grid item md={12} direction='row' sx={{
                                      display:'flex',
                                      borderRadius:'50%',
                                      placeContent:'center',  
                                      width:'inherit',
                                       height:'100%',
                                        }}> 
                                        <img loading='lazy' className='frontpage6-img' style={{
                                          width:'inherit',
                                          height:'inherit'
                                          
                                          }} src={cont.contentimg} alt="img" />
                              </Grid>
                              
                              <Grid item xs={12} md={12} >
                                <Stack direction='row' sx={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                                  <Typography variant='body1' color='primary.main' fontWeight={600}>{cont.category}</Typography>
                                <Typography variant='body2' color={colors.grey[500]}>{cont.date}</Typography>
                                  </Stack>
                              </Grid>
                              <Grid item xs={12} md={12} >
                                <Stack direction='row' sx={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                                <ScrollReveal.div className="center"> 
                                <ScrollReveal.p animation="fade-in"  className="color-blue">
                                <Typography variant='body1'>{cont.desc}</Typography>
                                    </ScrollReveal.p>
                            </ScrollReveal.div>
                               
                                  </Stack>
                              </Grid>
                              <Grid item xs={12} md={12}  > 
                              <Stack direction='row'>
                                <Avatar sx={{marginRight:2,}} src={cont.pofileImg}/>
                                <Stack  direction='row' sx={{textAlign:'start',}}> 
                                    <>
                                        <Typography variant='body2' color='primary.main '>
                                                        {cont.pofileName}
                                        </Typography>
                                    </>
                                </Stack>
                              </Stack>
                              </Grid>
                        </Grid>
                    </Paper>
              </Grid>
             ))}
             </Grid>
             <Grid item xs={12} >    
              <Box sx={{display:'grid', placeContent:'center'}} height='90%' p={2}>
                          <Button variant='outlined' sx={{color:'primary.main'}}>Load more</Button>
              </Box>
      </Grid> 
      </Grid>
      </Stack>
  );
}