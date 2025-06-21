FitTracker Dashboard  - Personal Fitness Tracker Dashboard

Welcome to FitTracker Dashboard , a modern, fully responsive fitness tracking dashboard built with "React", "Material UI", and "Chart.js". This project allows users to monitor their health metrics, analyze workout trends, and track goal progress through clean UI components, theme toggling, and user authentication.

🔗 Live Demo: [https://fitnesstrackerdashboards.netlify.app/dashboard]

---

## Project Preview

![Dashboard Preview](https://fitnesstrackerdashboards.netlify.app/dashboard)


##  Features

- 🔁 Toggle View (Daily / Weekly / Monthly)
- 👤 User Authentication (Sign In / Sign Up + Redirect to Dashboard)
- 🌓 Dark Mode / Light Mode – Automatically adapts or toggle manually
- 📈 Interactive Charts (Chart.js)
- 🎯 Goal Tracking Cards for calories, workouts, water intake, etc.
- 📋 Workout & Activity Logs
- 💻 Material UI Cards & Layout
- 📱 Fully Responsive Design – Works on all screen sizes
- 🌐 Hosted on Netlify

---

##  Project Structure
src/
├── assets/
│ └── react.svg
├── components/
│ ├── Auth/
│ │ ├── SignIn.jsx
│ │ └── SignUp.jsx
│ ├── Dashboard/
│ │ ├── Achievements.jsx
│ │ ├── ActivityChart.jsx
│ │ ├── ActivityLog.jsx
│ │ ├── CalorieChart.jsx
│ │ ├── Dashboard.jsx
│ │ ├── StatsCard.jsx
│ │ └── WorkoutChart.jsx
│ └── Layout/
│ └── Header.jsx
├── contexts/
│ ├── AuthContext.jsx
│ └── ThemeContext.jsx
├── data/
│ └── mockData.js
├── App.jsx
├── App.css
├── index.css
├── main.jsx

## Tech Stack
React.js + Vite: Fast and efficient frontend framework.
Material UI (MUI): Components & theming.
Chart.js: Graphs and visual data.
Context API: State management for auth & theme
Netlify: Live deployment.
React Router: Navigation and redirection.
# How to Run Locally

1. Clone the Repository
```bash
https://github.com/Rithika-172/Fitness-Tracker-Dashboard
cd fittracker-project

2. Install Dependencies
npm install

3. Start the Dev Server
npm run dev
Highlights
Toggle View: Easily switch between Daily / Weekly / Monthly data using tabs
Stat Cards: Steps, Calories, Heart Rate, Active Time, Water Intake

Visual progress bars + percentage completion
Charts
ActivityChart: Line chart of steps & calories
WorkoutChart: Bar chart of duration by workout type
CalorieChart: Doughnut chart for calorie distribution

Activity Log
View activity history in a tabular format

👤 Auth (Sign In / Sign Up)
Protected dashboard route

User redirected post-login

🌓 Dark / Light Mode
Auto-switches based on system theme or toggle button (in Header)
