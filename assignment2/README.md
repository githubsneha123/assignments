# Assignment 2 - Stock Broker Client Dashboard

## Description
This project is a Stock Broker Client Web Dashboard. Users can log in with their email, subscribe to supported stocks, and see live stock price updates using Socket for real-time communication.

## Features
- Login using email
- Subscribe to supported stocks: ['GOOG', 'TSLA', 'AMZN', 'META', 'NVDA']
- Real-time stock price updates using Socket.io
- Stock prices refresh every second without page reload
- Supports at least two users with different subscriptions
- Data is dynamically generated using a random number generator

## Requirements
- Node.js installed
- Browser to view HTML/JS frontend

## How to Run

1. Clone the repository:
```bash
git clone https://github.com/githubsneha123/assignments.git
2. Navigate to Assignment 2 folder:
cd assignments/assignment2
3. Install dependencies
npm install
4. Start the Socket server:
node server/server.js
5. Open index.html in a browser to access the dashboard.
