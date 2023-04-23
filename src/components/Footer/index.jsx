import * as React from 'react';
import { Box, Typography, Link } from '@mui/material';

export default function Footer() {
  return (
<Box sx={{
  position: 'relative',
  bottom: 0,
  left: 0,
  right: 0,
  bgcolor: '#212121',
  py: 3,
  opacity: 0.9,
  boxShadow: '0px -5px 5px -5px rgba(0,0,0,0.75)',
  minHeight: '10vh',
}}>
  <Typography variant="body2" color= "#ffffff" align="center" sx={{ fontWeight: 'bold', mb: 1 }}>
    Made by Guillermo Baker
  </Typography>
  <Typography variant="body2" color= "#ffffff" align="center">
    <Link href="#" color="inherit" sx={{ mr: 1 }}>
      Terms and Conditions
    </Link>
    <span>|</span>
    <Link href="#" color="inherit" sx={{ ml: 1 }}>
      Privacy Policy
    </Link>
  </Typography>
</Box>

  );
}