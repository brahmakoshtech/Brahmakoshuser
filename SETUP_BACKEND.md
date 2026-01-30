# Backend Setup Instructions

## Quick Start

1. **Navigate to backend folder:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the backend server:**
   ```bash
   npm start
   ```
   
   Or for development with auto-reload:
   ```bash
   npm run dev
   ```

4. **The backend will run on:** `http://localhost:3001`

## Frontend Setup

The frontend is already configured to connect to the backend. Make sure:

1. Backend is running on port 3001
2. Frontend dev server is running (usually on port 5173)
3. The proxy in `vite.config.js` will automatically forward `/api` requests to the backend

## Environment Variables (Optional)

Create a `.env` file in the `backend` folder if you want to change the port:

```
PORT=3001
```

## Testing

1. Start the backend server
2. Start the frontend dev server (`npm run dev` in root)
3. Open the Coming Soon page
4. Enter an email and click "Join the Waitlist"
5. The count should increment and a popup should appear

## Data Storage

All registrations are stored in `backend/data/registrations.json`. This file is created automatically.

