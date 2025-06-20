// Mock data for the fitness tracker
export const mockUserStats = {
  daily: {
    steps: { current: 8547, goal: 10000, percentage: 85 },
    calories: { current: 2156, goal: 2500, percentage: 86 },
    workouts: { current: 1, goal: 1, percentage: 100 },
    activeTime: { current: 45, goal: 60, percentage: 75 },
    heartRate: { current: 72, goal: 80, percentage: 90 },
    water: { current: 6, goal: 8, percentage: 75 }
  },
  weekly: {
    steps: { current: 59829, goal: 70000, percentage: 85 },
    calories: { current: 15092, goal: 17500, percentage: 86 },
    workouts: { current: 5, goal: 7, percentage: 71 },
    activeTime: { current: 315, goal: 420, percentage: 75 },
    heartRate: { current: 74, goal: 80, percentage: 93 },
    water: { current: 42, goal: 56, percentage: 75 }
  },
  monthly: {
    steps: { current: 239316, goal: 300000, percentage: 80 },
    calories: { current: 60368, goal: 75000, percentage: 81 },
    workouts: { current: 18, goal: 30, percentage: 60 },
    activeTime: { current: 1260, goal: 1800, percentage: 70 },
    heartRate: { current: 73, goal: 80, percentage: 91 },
    water: { current: 168, goal: 240, percentage: 70 }
  }
};

export const chartData = {
  activityOverview: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Steps',
        data: [8200, 9500, 7800, 10200, 8547, 9800, 11200],
        borderColor: '#1976d2',
        backgroundColor: 'rgba(25, 118, 210, 0.1)',
        tension: 0.4,
        yAxisID: 'y'
      },
      {
        label: 'Calories',
        data: [2100, 2400, 1950, 2600, 2156, 2300, 2800],
        borderColor: '#ff9800',
        backgroundColor: 'rgba(255, 152, 0, 0.1)',
        tension: 0.4,
        yAxisID: 'y1'
      }
    ]
  },
  calorieDistribution: {
    labels: ['Breakfast', 'Lunch', 'Dinner', 'Snacks'],
    datasets: [{
      data: [450, 650, 800, 256],
      backgroundColor: ['#4caf50', '#ff9800', '#f44336', '#9c27b0'],
      borderWidth: 0
    }]
  },
  workoutTrends: {
    labels: ['Cardio', 'Strength', 'Yoga', 'Sports', 'Walking'],
    datasets: [{
      label: 'Duration (minutes)',
      data: [45, 60, 30, 90, 120],
      backgroundColor: ['#2196f3', '#9c27b0', '#4caf50', '#ff9800', '#f44336'],
      borderRadius: 8,
      borderSkipped: false
    }]
  }
};

export const activityLog = [
  {
    id: 1,
    type: 'Cardio',
    duration: 45,
    calories: 320,
    time: '07:30 AM',
    date: 'Today',
    intensity: 'High'
  },
  {
    id: 2,
    type: 'Strength Training',
    duration: 60,
    calories: 280,
    time: '06:00 PM',
    date: 'Yesterday',
    intensity: 'Medium'
  },
  {
    id: 3,
    type: 'Yoga',
    duration: 30,
    calories: 120,
    time: '08:00 AM',
    date: 'Yesterday',
    intensity: 'Low'
  },
  {
    id: 4,
    type: 'Running',
    duration: 35,
    calories: 350,
    time: '06:30 AM',
    date: '2 days ago',
    intensity: 'High'
  },
  {
    id: 5,
    type: 'Swimming',
    duration: 40,
    calories: 400,
    time: '07:00 PM',
    date: '2 days ago',
    intensity: 'High'
  }
];

export const achievements = [
  {
    id: 1,
    title: '7-day streak',
    description: 'Completed workouts for 7 consecutive days',
    icon: '🔥',
    earned: true,
    date: 'Today'
  },
  {
    id: 2,
    title: 'Step Master',
    description: 'Reached 10,000 steps in a day',
    icon: '👟',
    earned: true,
    date: '2 days ago'
  },
  {
    id: 3,
    title: 'Hydration Hero',
    description: 'Drink 8 glasses of water in a day',
    icon: '💧',
    earned: false,
    progress: 75
  }
];