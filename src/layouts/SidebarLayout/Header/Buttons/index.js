import { Box, Button } from '@mui/material';
import HeaderSearch from './Search';

function HeaderButtons() {
  return (
    <Box sx={{ mr: 1 }}>
      <HeaderSearch />
      <Box sx={{ mx: 0.5 }} component="span">
        <Button>Get Quote</Button>
      </Box>
    </Box>
  ); 
}

export default HeaderButtons;
