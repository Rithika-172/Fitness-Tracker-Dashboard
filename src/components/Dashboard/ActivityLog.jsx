import {
  Card,
  CardContent,
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Avatar,
} from '@mui/material';
import {
  FitnessCenter,
  DirectionsRun,
  SelfImprovement,
  Pool,
  DirectionsWalk,
} from '@mui/icons-material';

const iconMap = {
  'Cardio': DirectionsRun,
  'Strength Training': FitnessCenter,
  'Yoga': SelfImprovement,
  'Running': DirectionsRun,
  'Swimming': Pool,
  'Walking': DirectionsWalk,
};

const colorMap = {
  'High': 'error',
  'Medium': 'warning',
  'Low': 'success',
};

const ActivityLog = ({ activities }) => {
  return (
    <Card>
      <CardContent sx={{ p: 3 }}>
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" component="h2" sx={{ fontWeight: 600, mb: 1 }}>
            Recent Activities
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Your latest workout sessions and activities
          </Typography>
        </Box>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Activity</TableCell>
                <TableCell align="center">Duration</TableCell>
                <TableCell align="center">Calories</TableCell>
                <TableCell align="center">Intensity</TableCell>
                <TableCell align="right">Time</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {activities.map((activity) => {
                const IconComponent = iconMap[activity.type] || FitnessCenter;
                return (
                  <TableRow key={activity.id} hover>
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Avatar
                          sx={{
                            bgcolor: 'primary.main',
                            width: 32,
                            height: 32,
                          }}
                        >
                          <IconComponent fontSize="small" />
                        </Avatar>
                        <Box>
                          <Typography variant="body2" sx={{ fontWeight: 600 }}>
                            {activity.type}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            {activity.date}
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell align="center">
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        {activity.duration} min
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        {activity.calories} kcal
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Chip
                        label={activity.intensity}
                        size="small"
                        color={colorMap[activity.intensity]}
                        variant="outlined"
                      />
                    </TableCell>
                    <TableCell align="right">
                      <Typography variant="body2" color="text.secondary">
                        {activity.time}
                      </Typography>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default ActivityLog;