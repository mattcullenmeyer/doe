import React from 'react';
import { 
  AppBar, 
  Box, 
  Toolbar,
  Typography
} from '@mui/material';
import { AutocompleteSearch } from '../AutocompleteSearch';
import './index.css';

export const Header: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='inherit'>
        <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className='header-title'>
              Denver School Choice
            </Typography>
            <AutocompleteSearch />
        </Toolbar>
      </AppBar>
    </Box>
  );
};