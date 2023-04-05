import {Box,Stack,colors,createTheme,ThemeProvider,CssBaseline,Paper} from '@mui/material';
import { Frontpage1 } from './frontpage/frontpage1';
import { MuiNavBar } from './frontpage/MuiNavBar';
import { Frontpage2 } from './frontpage/frontpage2';
import './muifrontpage.css';
import { FrontPage3 } from './frontpage/frontpage3';
import { Frontpage4 } from './frontpage/frontpage4';
import Frontpage5 from './frontpage/frontPage5';
import Frontpage6 from './frontpage/frontPage6';
import { useState } from 'react';
import { MyComponent } from './frontpage/testpage';
import { Frontpage7 } from './frontpage/frontpage7';

interface Props {
  mode: boolean | undefined;
  toggleProp3?: () => void;
}


export const MuiFrontpage : React.FC<Props> = ({mode,toggleProp3 }) => {
    return(
      <Paper sx={{paddingBottom:6}} className='firstpage-main'> 
       <Stack spacing={4}>
       <Stack>
          <MuiNavBar  toggleProp3={toggleProp3} />
          <Frontpage1 />
        </Stack> 
        <Frontpage2 />
        <FrontPage3  mode={mode}/>
        <Frontpage4  mode={mode}/>
        <Frontpage5 />   
        <Frontpage6 />
        <Frontpage7 mode={mode}/>  
       </Stack>
       </Paper>
    )
}