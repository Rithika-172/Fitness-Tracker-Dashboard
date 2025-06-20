import {
  Card,
  CardContent,
  Typography,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  LinearProgress,
  Chip,
} from '@mui/material';
import { EmojiEvents, Lock } from '@mui/icons-material';

const Achievements = ({ achievements }) => {
  return (
    <Card>
      <CardContent sx={{ p: 3 }}>
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" component="h2" sx={{ fontWeight: 600, mb: 1 }}>
            Achievements
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Your fitness milestones and accomplishments
          </Typography>
        </Box>

        <List sx={{ p: 0 }}>
          {achievements.map((achievement, index) => (
            <ListItem
              key={achievement.id}
              sx={{
                px: 0,
                py: 2,
                borderBottom: index < achievements.length - 1 ? '1px solid' : 'none',
                borderColor: 'divider',
              }}
            >
              <ListItemAvatar>
                <Avatar
                  sx={{
                    bgcolor: achievement.earned ? 'success.main' : 'grey.400',
                    width: 48,
                    height: 48,
                  }}
                >
                  {achievement.earned ? (
                    <span style={{ fontSize: '1.5rem' }}>{achievement.icon}</span>
                  ) : (
                    <Lock />
                  )}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                      {achievement.title}
                    </Typography>
                    {achievement.earned && (
                      <Chip
                        label={achievement.date}
                        size="small"
                        color="success"
                        variant="outlined"
                      />
                    )}
                  </Box>
                }
                secondary={
                  <Box>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                      {achievement.description}
                    </Typography>
                    {!achievement.earned && achievement.progress && (
                      <Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                          <Typography variant="caption" color="text.secondary">
                            Progress
                          </Typography>
                          <Typography variant="caption" sx={{ fontWeight: 600 }}>
                            {achievement.progress}%
                          </Typography>
                        </Box>
                        <LinearProgress
                          variant="determinate"
                          value={achievement.progress}
                          sx={{
                            height: 6,
                            borderRadius: 3,
                            backgroundColor: 'rgba(0,0,0,0.1)',
                          }}
                        />
                      </Box>
                    )}
                  </Box>
                }
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default Achievements;