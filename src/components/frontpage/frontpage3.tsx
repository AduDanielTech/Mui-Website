import {Stack,Typography,List, ListItem, ListItemText,ListItemIcon, Button,Box} from '@mui/material'
import CheckIcon from '@mui/icons-material/Check';
import LanIcon from '@mui/icons-material/Lan';
import CelebrationIcon from '@mui/icons-material/Celebration';
import BusinessIcon from '@mui/icons-material/Business';
import { ScrollReveal } from "reveal-on-scroll-react";

const topContext = [
{ text:'We connect our customers with the best',},
{text:'Advisor success customer launch party'},
{text:'Buisness to consumer long tail'}

]


interface Props {
    mode: boolean | undefined;      
}


export const FrontPage3 : React.FC<Props> = ({mode}) => {
  
    return(
        <Stack width='100%'>
            <Stack p={{xs:0,sm:0,md:4,lg:4}}  spacing={3} px={{xs:2,sm:0,md:7,lg:7}} direction={{xs:'column', sm:'row'}} sx={{marginBottom:'40px    '}}
            width='1oo%' height='60vh'>
                <Stack width={{xs:0,sm:0,md:'50%'}} height={{xs:'500px',sm:'100%',}} sx={{borderRadius:'20px',backgroundImage:'url(https://media.istockphoto.com/id/1414162938/photo/call-center.jpg?b=1&s=170667a&w=0&k=20&c=KWCBhXsg7FrM6Fcru8dFTinITaHDGIE3uQQzHhfDzIg=)',backgroundRepeat:'no-repeat',backgroundPosition:'contain',}}></Stack>
                <Stack width={{sm:'100%',md:'50%'}}  spacing={2} sx={{display:'flex', alignItems:'center',marginTop:{sm:'0px',md:'3rem',lg:'0px'}}}>  
                        <Typography variant='h5' color='primary.main'>
                            We connect our customers with the best, and help them keep up-and stay open.
                        </Typography>
                        <Box sx={{  color:'black'}}>
                            <List sx={{width:'100%',color:'primary.main',}} >
                                {
                                    topContext.map((item,index) => (
                                        <ScrollReveal.div className="center"> 
                                        <ScrollReveal.h1 animation="slide-in-right"  className="color-blue">

                                        <ListItem sx={{height:'60px',paddingY:'5px',}} disablePadding>
                                        <ListItemIcon >
                                            <CheckIcon sx={{color:'primary.main'}}/>
                                        </ListItemIcon>
                                    <ListItemText sx={{color:'primary.main'}} primary={
                                    item.text
                                    }/>
                                    </ListItem>
                                    </ScrollReveal.h1>
                        </ScrollReveal.div>
                                    ))
                                }
                            </List>
                        </Box>
                        <Stack width='70%' paddingBottom={5}>
                                <Button size='large'variant="contained"sx={{backgroundColor:'primary.main',borderRadius:'30px','&:hover' :  {backgroundColor:  ' #65E4A3',color:'white',}}}>start now</Button>
                        </Stack>
                </Stack>
            </Stack>
            <Stack p={3}  spacing={4} px={3} direction={{xs:'column', sm:'row'}}  width='1oo%' >
                <Stack width='100%'  spacing={4}>  
                    <Typography variant='h5' color='primary.main'>
                            Business to customer interaction
                    </Typography>
                {[1,2,3].map((listitem) =>(
                    <ScrollReveal.div className="center"style={{width:'90%', height:'60px'}}> 
                        <ScrollReveal.h1 animation="slide-in-left"  className="color-blue">
                            <Stack sx={{'&:hover' :  {backgroundColor:  ' #65E4A3',color:'white',},color:'primary.main',
                    display:'flex' ,alignItems:'center', boxShadow:`${mode ? '1px 1px 20px 1px   #e9eff5' : '1px 1px 20px 1px  black' }`,padding:'4px',paddingX:'10px'}}
                    width='100%' height='100%'direction='row' spacing={3}>
                    <Box>
                        {
                            listitem === 1 ? <CelebrationIcon/> : listitem === 2 ?  <LanIcon /> : <BusinessIcon/>
                        }
                    </Box>
                    <Typography variant='body1'>
                    {listitem === 1 ? ' Advisor success customer launch party.' 
                    : listitem === 2 ? ' We connect our customers with the best.' : '  Customers to company'}
                    </Typography>    
                </Stack>
                            </ScrollReveal.h1>
                        </ScrollReveal.div>
                    
                ))}</Stack>


                    <Stack width='100%'  sx={{
                            backgroundImage:'url(https://media.istockphoto.com/id/1414162938/photo/call-center.jpg?b=1&s=170667a&w=0&k=20&c=KWCBhXsg7FrM6Fcru8dFTinITaHDGIE3uQQzHhfDzIg=)',
                            backgroundRepeat:'no-repeat',
                            backgroundPosition:'contain',
                            borderRadius:'30px',
                            }}>
                    </Stack>
            
            </Stack>
        </Stack>
    )
}