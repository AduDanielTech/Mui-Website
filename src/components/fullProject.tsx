import {Box,Stack,colors,createTheme,ThemeProvider,CssBaseline,Paper} from '@mui/material';
import { MuiNavBar } from './frontpage/MuiNavBar';
import { useState } from 'react';
import { MuiFrontpage } from './MuiFrontPage';
import { Footer } from './footer';




export const MainProject = () => {
 const [mode,setMode] = useState<boolean | undefined>(true)

 const lightTheme = createTheme({
  typography: {
    fontFamily: 'Manrope',
    fontWeightRegular: '590'
 },
   palette: {
     mode:'light',
     primary: {
      main: '#0A2640'
   },
   secondary:{
      main:'#69E6A6'
   },
   } 
 })
 
 lightTheme.typography.h3 = {
  fontSize: '2rem',
  '@media (min-width:600px)': {
    fontSize: '2.7rem',
  },
  [lightTheme.breakpoints.up('md')]: {
    fontSize: '3rem',
  },
};


 const Darktheme = createTheme({
  typography: {
    fontFamily: 'Manrope',
    fontWeightRegular: '590'
 },
   palette: {
     mode:'dark',
     primary: {
      main: '#69E6A6'
    },
   secondary: {
     main: '#9999'
   },
  
   } 
 }) 
 Darktheme.typography.h3 = {
  fontSize: '2rem',
  '@media (min-width:600px)': {
    fontSize: '2.7rem',
  },
  [Darktheme.breakpoints.up('md')]: {
    fontSize: '3rem',
  },
};


    return(

 <ThemeProvider theme={!mode ? Darktheme : lightTheme}>
        <MuiFrontpage mode={mode} toggleProp3={() => setMode(!mode)} />
        <Footer  mode={mode}/>
 </ThemeProvider>

    )
}
