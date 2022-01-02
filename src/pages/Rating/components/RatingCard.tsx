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
  pointsEarned: string;
  pointsAvailable: string;
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
  const size = minor ? 75 : 200;
  const thickness = minor ? 3 : 6;
  const titleVariant = minor ? "h4" : "h2";
  const ratingVariant = minor ? "h6" : "h3";

  return (
    <Card sx={{ order, flex: '1 0 auto', backgroundColor: {minorColor} }} raised>
      <CardContent> 
        <Typography variant="h6" component="div"> 
          {title}
        </Typography>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
          <div>
            <Typography variant={titleVariant} component="div">
              {`${pointsEarned}/${pointsAvailable}`}
            </Typography>
          </div>
          <div>
            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
              <CircularProgress variant="determinate" value={rating} size={size} sx={{ color: majorColor }} thickness={thickness} />
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
                  {`${rating.toFixed(0)}%`}
                </Typography>
              </Box>
            </Box>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
