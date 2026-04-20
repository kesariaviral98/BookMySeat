# Seat Booking App

A simple React + Vite application for selecting theater seats and completing a basic checkout flow.

## Features

- Interactive seat selection layout
- Live booking summary with selected seats and total amount
- Checkout page with booking confirmation flow
- Selected seats persisted in the browser with `localStorage`
- Responsive UI for desktop and mobile screens

## Tech Stack

- React
- Vite
- React Router
- ESLint

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

### 4. Run lint checks

```bash
npm run lint
```

## Project Structure

```text
src/
  App.jsx
  index.css
  main.jsx
  Pages/
    BookingPage.jsx
    CheckoutPage.jsx
```

## Improvements Made

- Replaced the default Vite README with project-specific documentation
- Improved the seat booking UI and overall styling
- Added seat sorting and cleaner state updates
- Prevented checkout from proceeding with no selected seats
- Added a confirmation state on checkout
- Persisted selected seats in browser storage

## Add This Project To GitHub

Initialize Git locally:

```bash
git init
git add .
git commit -m "Initial commit"
```

Create a new empty repository on GitHub, then connect and push:

```bash
git remote add origin <your-github-repo-url>
git branch -M main
git push -u origin main
```

Example remote URL:

```bash
https://github.com/your-username/seat_booking.git
```

## Notes

- `node_modules` should not be committed to GitHub.
- This project currently uses a fixed ticket price of `₹1000` per seat.
