import * as React from 'react';
import { Box, Typography, Link } from '@mui/material';

export default function Footer() {
  return (
    <Box sx={{ bgcolor: '#000000', py: 3 }}>
      <Typography variant="body2" color="text.secondary" align="center">
        Made with ❤️ by Your Name
      </Typography>
      <Typography variant="body2" color="text.secondary" align="center">
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