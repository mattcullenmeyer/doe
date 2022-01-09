import React from 'react';
import { 
  Card, 
  CardContent, 
  CircularProgress, 
  Typography
} from '@mui/material';
import { Box } from '@mui/system';

export interface RatingCardProps {
  title: string;
  rating: number;
  pointsEarned: number;
  pointsAvailable: number;
  majorColor: string;
  minorColor: string;
  order: number;
  minor?: boolean;
}

export const RatingCard: React.FC<RatingCardProps> = ({
  title,
  rating,
  pointsEarned,
  pointsAvailable,
  majorColor,
  minorColor,
  order,
  minor=false,
}) => {
  const size = minor ? 95 : 125;
  const thickness = minor ? 3 : 4;
  const titleVariant = minor ? "h4" : "h3";
  const ratingVariant = minor ? "h5" : "h4";

  return (
    <Card sx={{ order, flex: '1 0 auto' }} raised>
      <CardContent> 
        <Typography variant="h6" component="div" gutterBottom> 
          {title}
        </Typography>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
          <div>
            <Typography variant={titleVariant} component="div">
              {`${Number(pointsEarned).toFixed(0)}/${Number(pointsAvailable).toFixed(0)}`}
            </Typography>
          </div>
          <div>
            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
              <CircularProgress 
                variant="determinate" 
                value={rating} 
                size={size} 
                // sx={{ color: majorColor }} 
                color='info'
                thickness={thickness} 
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
                <Typography variant={ratingVariant} component="div">
                  {`${Number(rating).toFixed(0)}%`}
                </Typography>
              </Box>
            </Box>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
