import { useState } from 'react';
import {
  Container,
  Grid,
  Box,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  Fade,
} from '@mui/material';
import { mockUserStats, chartData, activityLog, achievements } from '../../data/mockData';
import StatsCard from './StatsCard';
import ActivityChart from './ActivityChart';
import CalorieChart from './CalorieChart';
import WorkoutChart from './WorkoutChart';
import ActivityLog from './ActivityLog';
import Achievements from './Achievements';

const Dashboard = () => {
  const [timeframe, setTimeframe] = useState('daily');

  const handleTimeframeChange = (event, newTimeframe) => {
    if (newTimeframe !== null) {
      setTimeframe(newTimeframe);
    }
  };

  const currentStats = mockUserStats[timeframe];

  const statsConfig = [
    { type: 'steps', unit: 'steps' },
    { type: 'calories', unit: 'kcal' },
    { type: 'workouts', unit: 'workouts' },
    { type: 'activeTime', unit: 'min' },
    { type: 'heartRate', unit: 'bpm' },
    { type: 'water', unit: 'glasses' },
  ];

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      {/* Time Period Toggle */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
        <ToggleButtonGroup
          value={timeframe}
          exclusive
          onChange={handleTimeframeChange}
          sx={{
            bgcolor: 'background.paper',
            borderRadius: 3,
            '& .MuiToggleButton-root': {
              px: 4,
              py: 1.5,
              border: 'none',
              borderRadius: '20px !important',
              mx: 0.5,
              fontWeight: 600,
              '&.Mui-selected': {
                bgcolor: 'primary.main',
                color: 'white',
                '&:hover': {
                  bgcolor: 'primary.dark',
                },
              },
            },
          }}
        >
          <ToggleButton value="daily">Daily</ToggleButton>
          <ToggleButton value="weekly">Weekly</ToggleButton>
          <ToggleButton value="monthly">Monthly</ToggleButton>
        </ToggleButtonGroup>
      </Box>

      <Fade in={true} timeout={500}>
        <Box>
          {/* Stats Cards */}
          <Grid container spacing={3} sx={{ mb: 4 }}>
            {statsConfig.map((config) => (
              <Grid item xs={12} sm={6} md={4} lg={2} key={config.type}>
                <StatsCard
                  type={config.type}
                  data={currentStats[config.type]}
                  unit={config.unit}
                />
              </Grid>
            ))}
          </Grid>

          {/* Charts Row */}
          <Grid container spacing={3} sx={{ mb: 4 }}>
            <Grid item xs={12} lg={6}>
              <ActivityChart
                data={chartData.activityOverview}
                title="Activity Overview"
                description="Your steps and calories burned over time"
              />
            </Grid>
            <Grid item xs={12} lg={3}>
              <CalorieChart
                data={chartData.calorieDistribution}
                title="Calorie Distribution"
                description="How you burn calories throughout the day"
              />
            </Grid>
            <Grid item xs={12} lg={3}>
              <WorkoutChart
                data={chartData.workoutTrends}
                title="Workout Trends"
                description="Duration and intensity by workout type"
              />
            </Grid>
          </Grid>

          {/* Activity Log and Achievements */}
          <Grid container spacing={3}>
            <Grid item xs={12} lg={8}>
              <ActivityLog activities={activityLog} />
            </Grid>
            <Grid item xs={12} lg={4}>
              <Achievements achievements={achievements} />
            </Grid>
          </Grid>
        </Box>
      </Fade>
    </Container>
  );
};

export default Dashboard;