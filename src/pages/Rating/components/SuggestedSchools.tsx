import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { 
  Box, 
  CircularProgress, 
  Link, 
  List, 
  ListItem, 
  ListItemAvatar, 
  ListItemText, 
  Typography 
} from '@mui/material';

export interface School {
  uid: number;
  slug: string;
  name: string;
  address: string;
  rating: number;
}

export interface Schools {
  schools: School[];
}

export const SuggestedSchools: React.FC<Schools> = ({ schools }) => {
  return (
    <List>
      {schools.map((school) => {
        return (
          <ListItem key={school.uid}>
            <ListItemAvatar> 
              <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                <CircularProgress variant="determinate" value={school.rating} size={40} color="inherit" thickness={2} />
                <Box
                  sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography variant="subtitle2" component="div">
                    {`${school.rating.toFixed(0)}%`}
                  </Typography>
                </Box>
              </Box>
            </ListItemAvatar>
            <ListItemText
              primary={<Link component={RouterLink} to={`/performance/${school.slug}`}>{school.name}</Link>}
              secondary={school.address}
            />
          </ListItem>
        )
      })}
    </List>
  );
};
