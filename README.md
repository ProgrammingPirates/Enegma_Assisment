# API Dashboard

This project is an API Dashboard designed to track API hits and provide analytics through a web interface. It is built using React for the frontend and Flask for the backend.

## Table of Contents

- [Features](#features)
- [Screenshots](#screenshots)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Folder Structure](#folder-structure)
- [APIs](#apis)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Dashboard View:** Overview of total requests, average response time, and failed requests.
- **Request Type Chart:** Bar chart displaying the number of requests by type (GET, POST, PUT, etc.).
- **Browser Distribution:** Pie chart showing the distribution of requests by browser.
- **Detailed Request Table:** Table listing all API requests with details such as request type, time, payload, content type, IP address, OS, and user agent.

## Screenshots



## Tech Stack

### Frontend

- React
- Tailwind CSS
- Recharts
- Axios

### Backend

- Flask
- PostgreSQL

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed
- Python and pip installed
- PostgreSQL installed and running

## Installation

### Frontend Setup

- npx create-react-app api-dashboard
- cd api-dashboard
- npm install axios recharts
- npm install tailwindcss
- npx tailwindcss init

### Backend Setup

- python -m venv venv
- source venv/bin/activate
- pip install Flask SQLAlchemy psycopg2
