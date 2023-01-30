import * as React from 'react';
import Paper from '@mui/material/Button';
import { color } from '@mui/system';
import { red } from '@mui/material/colors';

const Banner = () => {
  return (
    <Paper  sx ={{
      backgroundColor:  'lightblue',
      fontSize: '40px',
      width: '100%',
      padding: '10px',
      justifyContent: 'left'
    }}>
      Sextant
    </Paper>
  );
};

export default Banner