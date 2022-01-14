import React, { useState } from 'react';
import { 
  Box,
  Card, 
  CardContent, 
  CircularProgress, 
  IconButton, 
  Tooltip, 
  Typography
} from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';

export interface RatingCardProps {
  title: string;
  rating: number;
  pointsEarned: number;
  pointsAvailable: number;
  majorColor: string;
  minorColor: string;
  order: number;
  tooltip: string;
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
  tooltip,
  minor=false,
}) => {
  const size = minor ? 95 : 125;
  const thickness = minor ? 4 : 4;
  const titleVariant = minor ? "h4" : "h3";
  const ratingVariant = minor ? "h5" : "h4";

  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };
  const handleTooltipOpen = () => {
    setOpen(true);
  };

  return (
    <Card sx={{ order, flex: '1 0 auto' }} raised>
      <CardContent> 
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h6" component="div"> 
            {title}
          </Typography>
          <div>
            <Tooltip 
              title={<Typography variant="body2">{tooltip}</Typography>} 
              sx={{ fontSize: '30px' }}
              PopperProps={{ disablePortal: true, }}
              onClose={handleTooltipClose}
              open={open}
            >
              <IconButton onClick={handleTooltipOpen}>
                <HelpIcon />
              </IconButton>
            </Tooltip>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', gap: '15px' }}>
          <div>
            <Typography variant={titleVariant} component="div">
              {`${Number(pointsEarned).toFixed(1)}/${Number(pointsAvailable).toFixed(0)}`}
            </Typography>
          </div>
          <div>
            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
              <CircularProgress 
                variant="determinate" 
                value={Number(rating)} 
                size={size} 
                // sx={{ color: majorColor }} 
                color='primary'
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
