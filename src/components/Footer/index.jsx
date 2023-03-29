import * as React from 'react';
import { Box, Typography, Link } from '@mui/material';

export default function Footer() {
  return (
    <Box sx={{
      position: 'relative',
      bottom: 0,
      left: 0,
      right: 0,
      bgcolor: 'black',
      py: 3,
      opacity: 0.9,
      boxShadow: '0px -5px 5px -5px rgba(0,0,0,0.75)',
      minHeight: '10100%0px',
    }}>
      <Typography variant="body2" color= "#c5b9a5" align="center">
        Made by Guillermo Baker
      </Typography>
      <Typography variant="body2" color= "#c5b9a5" align="center">
        <Link href="#" color="inherit">
          Terms and Conditions
        </Link>{' '}
        |{' '}
        <Link href="#" color="inherit">
          Privacy Policy
        </Link>
      </Typography>
    </Box>
  );
}