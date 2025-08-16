import React from 'react';
import { Box, Grid, Paper, Typography, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import TimerIcon from '@mui/icons-material/Timer';
import LoopIcon from '@mui/icons-material/Loop';

const CardContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  borderRadius: 8,
}));

const IconContainer = styled(Avatar)(({ color }) => ({
  backgroundColor: color || '#f5f5f5',
  width: 40,
  height: 40,
  padding: 8,
}));

const TrendIndicator = styled(Box)(({ trend }) => ({
  display: 'flex',
  alignItems: 'center',
  color: trend === 'up' ? '#4caf50' : '#f44336',
  marginTop: 8,
  fontSize: '0.875rem',
}));

const MetricCard = ({ title, value, trendValue, trendDirection, period, icon, iconColor }) => {
  return (
    <CardContainer elevation={0}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <IconContainer color={iconColor}>
          {icon}
        </IconContainer>
        <Typography variant="subtitle2" color="text.secondary" sx={{ ml: 1 }}>
          {title}
        </Typography>
      </Box>
      
      <Typography variant="h4" component="div" fontWeight="bold">
        {value}
      </Typography>
      
      <TrendIndicator trend={trendDirection}>
        {trendDirection === 'up' ? 
          <TrendingUpIcon fontSize="small" sx={{ mr: 0.5 }} /> : 
          <TrendingDownIcon fontSize="small" sx={{ mr: 0.5 }} />
        }
        <Typography variant="body2" component="span">
          {trendValue} From The {period}
        </Typography>
      </TrendIndicator>
    </CardContainer>
  );
};

const MetricsCarousel = () => {
  const metrics = [
    { 
      title: 'Total Orders', 
      value: '123', 
      trendValue: '28%', 
      trendDirection: 'up', 
      period: 'Last Month',
      icon: <ShoppingBagIcon style={{ color: '#ff7043' }} />,
      iconColor: '#fff8e1'
    },
    { 
      title: 'Total Taken', 
      value: '123', 
      trendValue: '15%', 
      trendDirection: 'down', 
      period: 'Last Month',
      icon: <LocalMallIcon style={{ color: '#ec407a' }} />,
      iconColor: '#fce4ec'
    },
    { 
      title: 'Total Revenue', 
      value: '123', 
      trendValue: '28%', 
      trendDirection: 'up', 
      period: 'Last Month',
      icon: <AttachMoneyIcon style={{ color: '#26a69a' }} />,
      iconColor: '#e0f2f1'
    },
    { 
      title: 'Pending Orders', 
      value: '$1234.99', 
      trendValue: '28%', 
      trendDirection: 'up', 
      period: 'Last Month',
      icon: <TimerIcon style={{ color: '#7e57c2' }} />,
      iconColor: '#ede7f6'
    },
    { 
      title: 'Pending Returns', 
      value: '$1234.99', 
      trendValue: '28%', 
      trendDirection: 'up', 
      period: 'Last Month',
      icon: <LoopIcon style={{ color: '#ec407a' }} />,
      iconColor: '#fce4ec'
    }
  ];

  return (
    <Grid container spacing={3}>
      {metrics.map((metric, index) => (
        <Grid item xs={12} sm={6} md={4} lg={2.4} key={index}>
          <MetricCard {...metric} />
        </Grid>
      ))}
    </Grid>
  );
};

export default MetricsCarousel;