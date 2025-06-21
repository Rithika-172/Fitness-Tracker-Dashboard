FitTracker Dashboard  - Personal Fitness Tracker Dashboard

Welcome to FitTracker Dashboard , a modern, fully responsive fitness tracking dashboard built with "React", "Material UI", and "Chart.js". This project allows users to monitor their health metrics, analyze workout trends, and track goal progress through clean UI components, theme toggling, and user authentication.

🔗 Live Demo: [https://fitnesstrackerdashboards.netlify.app/]

---

## Project Preview


![Screenshot 2025-06-21 211928](https://github.com/user-attachments/assets/a03c60a1-c380-41a4-8b4a-fdca64149689)

## 🚀 Features

- 🔁 Toggle View (Daily / Weekly / Monthly)
- 👤 User Authentication (Sign In / Sign Up with redirect to Dashboard)
- 🌓 Dark Mode / Light Mode – Auto-detects or toggle manually
- 📈 Interactive Charts using Chart.js
- 🎯 Goal Tracking Cards for calories, workouts, water intake, etc.
- 📋 Workout & Activity Logs
- 💻 Material UI Cards & Layout
- 📱 Fully Responsive Design – Optimized for mobile/tablet/desktop
- 🌐 Hosted on Netlify

---

## 🛠️ Tech Stack

- **React.js + Vite** – Fast and efficient frontend framework
- **Material UI (MUI)** – UI components and theming
- **Chart.js** – Graphs and visualizations
- **Context API** – Global state for auth & theme
- **React Router** – Navigation and route protection
- **Netlify** – Live deployment

---

## 💻 How to Run Locally

### 1. Clone the Repository
```bash
git clone https://github.com/Rithika-172/Fitness-Tracker-Dashboard.git
cd Fitness-Tracker-Dashboard
2. Install Dependencies
npm install
3. Start the Development Server
npm run dev
Then visit: http://localhost:5173

✨ Highlights
🔁 Toggle View
Switch between Daily, Weekly, and Monthly statistics using tabs

📊 Charts
ActivityChart: Line chart showing calories and steps

WorkoutChart: Bar chart visualizing workout durations

CalorieChart: Doughnut chart of calorie breakdown

🧾 Stat Cards
Cards for steps, calories, heart rate, water intake, and active time

Visual progress bars and completion percentage

📋 Activity Log
View workout and activity history in a dynamic table

👤 Authentication
Sign In / Sign Up pages using React Router

Redirect to dashboard after login

Protected dashboard route (only visible to authenticated users)

🌓 Dark Mode / Light Mode
Theme switches based on system preference or user toggle

Implemented using MUI theming and Context API


src/
├── assets/                  # Images, logos
├── components/
│   ├── Auth/               # SignIn, SignUp
│   ├── Dashboard/          # Charts, Stats, Logs
│   └── Layout/             # Header, Navigation
├── contexts/               # AuthContext, ThemeContext
├── data/                   # mockData.js
├── App.jsx
├── main.jsx



