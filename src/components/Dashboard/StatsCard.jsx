import {
  Card,
  CardContent,
  Typography,
  Box,
  LinearProgress,
  Avatar,
  Chip,
} from '@mui/material';
import {
  DirectionsWalk,
  LocalFireDepartment,
  FitnessCenter,
  AccessTime,
  Favorite,
  WaterDrop,
} from '@mui/icons-material';

const iconMap = {
  steps: DirectionsWalk,
  calories: LocalFireDepartment,
  workouts: FitnessCenter,
  activeTime: AccessTime,
  heartRate: Favorite,
  water: WaterDrop,
};

const colorMap = {
  steps: '#2196f3',
  calories: '#ff9800',
  workouts: '#4caf50',
  activeTime: '#9c27b0',
  heartRate: '#f44336',
  water: '#00bcd4',
};

const StatsCard = ({ type, data, unit }) => {
  const IconComponent = iconMap[type];
  const color = colorMap[type];
  
  const getChangeIndicator = () => {
    const changes = {
      steps: 12.5,
      calories: -3.2,
      workouts: 0,
      activeTime: 8.7,
      heartRate: -2.1,
      water: 15.3,
    };
    
    const change = changes[type] || 0;
    const isPositive = change > 0;
    
    return (
      <Chip
        label={`${isPositive ? '+' : ''}${change}%`}
        size="small"
        color={isPositive ? 'success' : change < 0 ? 'error' : 'default'}
        sx={{ fontSize: '0.75rem', height: 20 }}
      />
    );
  };

  return (
    <Card sx={{ height: '100%', position: 'relative', overflow: 'visible' }}>
      <CardContent sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
          <Avatar
            sx={{
              bgcolor: color,
              width: 48,
              height: 48,
            }}
          >
            <IconComponent />
          </Avatar>
          {getChangeIndicator()}
        </Box>

        <Typography variant="h3" component="div" sx={{ fontWeight: 700, color: color, mb: 1 }}>
          {data.current.toLocaleString()}
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {type.charAt(0).toUpperCase() + type.slice(1)} • {unit}
        </Typography>

        <Box sx={{ mb: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography variant="body2" color="text.secondary">
              Goal: {data.goal.toLocaleString()}
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 600 }}>
              {data.percentage}%
            </Typography>
          </Box>
          <LinearProgress
            variant="determinate"
            value={data.percentage}
            sx={{
              height: 8,
              borderRadius: 4,
              backgroundColor: 'rgba(0,0,0,0.1)',
              '& .MuiLinearProgress-bar': {
                backgroundColor: color,
                borderRadius: 4,
              },
            }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default StatsCard;