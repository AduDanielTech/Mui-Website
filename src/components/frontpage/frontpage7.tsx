import {Stack,Typography,Button,TextField,Box,colors} from '@mui/material'


interface Props {
    mode: boolean | undefined;
  }

  export const Frontpage7 : React.FC<Props> = ({mode}) => {
    return(
        <Stack fontFamily='Manrope' spacing={3} px={{sm:0 , md:9}}  sx={{color:'white',}}
             width='1oo%' >
            <Stack direction={{sm:'column',md:'row'}}  bgcolor='primary.main' py={{sm:0 , md:9}} width='1oo%' height='100%'  className='email-us-cont' borderRadius={{sm:0,md:'30px'}}>
                <Stack spacing={3} px={{sm:4 , md:9}} py={{xs:5 , md:0}}   sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <Typography textAlign='center' variant='h3'>An enterprise template to ramp up your company website</Typography>
                    <Stack spacing={{xs:3,md:3}} width={{sm:'100%',md:'70%'}} height={{sm:'10rem',md:'inherit'}} direction={{sm:'column',md:'row'}}   sx={{display:'flex',justifyContent:'center',alignItems:'center'}}> 
                    <TextField label='Enter your email address' color='warning' sx={{backgroundColor:`${mode ? 'white' : 'black'}`,borderRadius:'30px',width:{sm:'100%',md:'70%'}}} variant='outlined'/>
                    <Button variant="contained" color='secondary'  sx={{borderRadius:'30px',width:{sm:'100%',md:'8rem'},height:{xs:'3rem',sm:'30%',md:'100%'}}}>
                        <Typography textTransform='capitalize' textAlign='center' variant='body1' fontFamily='Open Sans' fontWeight="bold">Start now</Typography>
                        </Button>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    )
}

