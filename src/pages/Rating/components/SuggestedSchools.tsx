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
import { NearbySchools } from '..';

export interface SuggestedSchoolsProps {
  schools: NearbySchools[];
}

export const SuggestedSchools: React.FC<SuggestedSchoolsProps> = ({ schools }) => {
  return (
    <List>
      {schools.slice(0, 4).map((school) => {
        return (
          <ListItem key={school.id}>
            <ListItemAvatar> 
              <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                <CircularProgress 
                  variant="determinate" 
                  value={Number(school.nearby.rating)} 
                  size={40} 
                  color="inherit" 
                  thickness={2} 
                />
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
                    {`${school.nearby.rating.toFixed(0)}%`}
                  </Typography>
                </Box>
              </Box>
            </ListItemAvatar>
            <ListItemText
              primary={<Link component={RouterLink} to={`/ratings/${school.nearby.slug}`}>{school.nearby.name}</Link>}
              secondary={school.nearby.address}
            />
          </ListItem>
        )
      })}
    </List>
  );
};
