# 🌤️ Weather App

A modern, responsive weather application built with **React**, **React Router**, **Tailwind CSS**, and **React Icons**. The app uses the **OpenWeather API** to provide current weather conditions, daily forecasts, and air-quality information for searched locations.

The application was designed with a clean, modern dashboard interface that makes weather information easy to understand at a glance.

## ✨ Features

* 🔍 **City Search** — Search for weather information by city name.
* 🌡️ **Current Weather** — View the current temperature, weather condition, feels-like temperature, humidity, pressure, visibility, and cloud coverage.
* 📅 **7-Day Forecast** — View minimum and maximum temperatures and weather conditions for the upcoming week.
* 🌬️ **Air Quality** — View OpenWeather AQI information and individual pollutant levels.
* ☀️ **Sunrise & Sunset** — View local sunrise and sunset times.
* 💨 **Wind Information** — View wind speed, direction, and gusts.
* 💧 **Humidity & Dew Point** — Monitor atmospheric moisture levels.
* 🌧️ **Rain Probability** — View the likelihood of precipitation.
* 📱 **Responsive Design** — Optimized for desktop, tablet, and mobile devices.
* ⏳ **Loading States** — Skeleton/shimmer loading states provide visual feedback while weather data is being retrieved.
* ⚠️ **Error Handling** — Displays useful error messages when a location cannot be found or an API request fails.
* 🧭 **Client-Side Routing** — Uses React Router for navigation between application views.

---

## 🛠️ Built With

### Frontend

* **React** — Building the user interface and reusable components.
* **React Router** — Client-side navigation and routing.
* **Tailwind CSS** — Utility-first styling and responsive layouts.
* **React Icons** — Weather dashboard icons and interface icons.
* **JavaScript (ES6+)** — Application logic and API integration.

### API

* **OpenWeather Geocoding API** — Converts city names into geographic coordinates.
* **OpenWeather API** — Retrieves current weather, daily forecasts, wind, humidity, sunrise/sunset, and other weather data.
* **OpenWeather Air Pollution API** — Retrieves AQI and pollutant information.

---

## 📁 Project Structure

```text
src/
│
├── components/
│   ├── AirQuality.jsx
│   ├── CurrentWeather.jsx
│   ├── Highlights.jsx
│   ├── HourlyForecast.jsx
│   ├── SevenDayForecast.jsx
│   ├── SunriseSunset.jsx
│   └── ...
│
├── hooks/
│   └── useWeather.js
│
├── pages/
│   ├── Home.jsx
│   ├── Search.jsx
│   └── Details.jsx
│
├── services/
│   └── weatherApi.js
│
├── utils/
│   ├── airQuality.js
│   └── weather.js
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## 🔑 API Configuration

The application requires an OpenWeather API key.

Create a `.env` file in the root of the project:

```env
VITE_OPENWEATHER_API_KEY=your_api_key_here
```

The API key is accessed through Vite's environment variable system:

```javascript
const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
```

### ⚠️ Security

Do **not** commit your `.env` file to GitHub.

Add it to `.gitignore`:

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/weather-app.git
```

### 2. Navigate to the project

```bash
cd weather-app
```

### 3. Install dependencies

```bash
npm install
```

### 4. Create your environment file

Create:

```text
.env
```

and add:

```env
VITE_OPENWEATHER_API_KEY=your_api_key_here
```

### 5. Start the development server

```bash
npm run dev
```

The application will be available at the local development URL provided by Vite.

---

## 📦 Installation

If you're setting up the project from scratch, the main dependencies include:

```bash
npm install react-router-dom react-icons
```

Tailwind CSS should also be configured according to your project's Vite/Tailwind setup.

---

## 🔄 Weather Data Flow

When a user searches for a city, the application follows this process:

```text
User enters city
       │
       ▼
React Router
       │
       ▼
Home page receives city
       │
       ▼
useWeather(city)
       │
       ▼
Geocoding API
       │
       ▼
Latitude + Longitude
       │
       ├─────────────────────┐
       ▼                     ▼
One Call API          Air Pollution API
       │                     │
       ▼                     ▼
Weather Data               AQI
       │                     │
       └──────────┬──────────┘
                  ▼
          Normalize Data
                  │
                  ▼
             React State
                  │
                  ▼
             UI Components
```

---

## 🌎 Weather Information

The application displays a variety of weather metrics.

### Current Weather

* Temperature
* Feels-like temperature
* Weather condition
* Humidity
* Pressure
* Dew point
* Visibility
* Cloud coverage
* Wind speed
* Wind direction
* Wind gusts
* Rain probability
* Precipitation
* Sunrise
* Sunset

### Daily Forecast

* Day
* Minimum temperature
* Maximum temperature
* Weather condition
* Wind speed
* Humidity
* Cloud coverage

### Air Quality

* AQI
* PM2.5
* PM10
* O₃
* NO₂
* SO₂
* CO
* Other available pollutants

---

## 🎨 UI & Design

The application uses a modern dashboard aesthetic featuring:

* Glassmorphism-inspired cards
* Rounded UI elements
* Subtle borders
* Responsive grid layouts
* Semantic Tailwind color tokens
* Loading skeletons
* Horizontal forecast scrolling
* Responsive typography
* Reusable components
* Minimal visual clutter

The styling is centralized in `index.css`, allowing reusable utility classes to be shared throughout the application.

---

## 📱 Responsive Design

The interface adapts to different screen sizes.

```text
Desktop
┌──────────────────────────────────────────┐
│              Weather Dashboard           │
│                                          │
│  Current Weather                         │
│                                          │
│  Highlights  Highlights  Highlights     │
│                                          │
│  Air Quality       Sunrise & Sunset      │
│                                          │
│  7-Day Forecast                          │
└──────────────────────────────────────────┘


Mobile
┌────────────────────┐
│  Weather Dashboard │
│                    │
│  Current Weather   │
│                    │
│  Highlights        │
│                    │
│  Air Quality       │
│                    │
│  Sunrise/Sunset     │
│                    │
│  7-Day Forecast    │
└────────────────────┘
```

---

## 🧠 What I Learned

This project helped strengthen my understanding of several real-world React concepts.

### React

* Building reusable functional components
* Managing state with `useState`
* Managing side effects with `useEffect`
* Creating custom hooks
* Passing data through component props
* Separating presentation from application logic
* Handling asynchronous API requests
* Managing loading and error states

### React Router

* Creating client-side routes
* Navigating between pages
* Reading query parameters
* Creating search-driven URLs

For example:

```text
/?city=Cape%20Town
```

can be used to determine which city's weather should be displayed.

### API Integration

The project provided practical experience with:

* Fetch API
* REST APIs
* Query parameters
* API authentication
* Geocoding
* Multiple API requests
* JSON responses
* Error handling
* `AbortController`

### React Architecture

One of the main architectural lessons from the project was learning to avoid putting API logic directly inside UI components.

Instead:

```text
API
 ↓
Service
 ↓
Custom Hook
 ↓
Page
 ↓
Components
```

This makes the application easier to test, maintain, and extend.

---

## 🔮 Future Improvements

Possible improvements include:

* Detect the user's current location
* Add hourly forecast
* Add weather maps
* Add severe weather alerts
* Add more detailed weather charts
* Add temperature graphs
* Add precipitation charts
* Add wind charts
* Add multiple saved cities
* Add a favorites system
* Persist recently searched cities
* Add dark/light theme switching
* Add weather animations
* Add internationalization
* Add unit switching between °C and °F
* Add offline/error caching
* Deploy the application

---

## 📚 API Documentation

Weather data is provided by **OpenWeather**.

[OpenWeather API](https://openweathermap.org/api?utm_source=chatgpt.com)

[OpenWeather Air Pollution API](https://openweathermap.org/api/air-pollution?utm_source=chatgpt.com)

---

## 📄 License

This project is available under the **MIT License**.

You can add a `LICENSE` file to the repository if you intend to distribute the project under this license.

---

## 👨‍💻 Author

**Emihle Makala**

If this project helped you or you found it interesting, consider giving the repository a ⭐ on GitHub.

---

## ⭐ Project Highlights

This project demonstrates practical experience with:

```text
React
├── Functional Components
├── Hooks
├── Custom Hooks
├── State Management
├── Component Composition
└── API Integration

React Router
├── Client-side Routing
├── Navigation
└── URL Search Parameters

Tailwind CSS
├── Responsive Design
├── Utility Classes
├── Reusable Styles
└── Modern UI

OpenWeather
├── Geocoding
├── Current Weather
├── Hourly Forecast
├── Daily Forecast
└── Air Quality

JavaScript
├── Async/Await
├── Fetch API
├── Error Handling
├── AbortController
└── Data Transformation
```
