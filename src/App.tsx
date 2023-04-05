import React from 'react';
import './App.css';
import {Paper} from '@mui/material'

import { MainProject } from './components/fullProject';

function App() { 
  return (
    <Paper elevation={3}  className="App">
    <MainProject />
    </Paper>
  );
}

export default App;
