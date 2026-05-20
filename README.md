# BookMySeat

A theater seat reservation app built with React and Vite. Select seats from an interactive layout, review your order, and confirm your booking in one clean flow.

## Features

- Interactive seat grid with aisle separation
- Live booking summary — seats and total update as you pick
- Checkout page with order confirmation
- Selected seats persisted in `localStorage`
- Responsive layout for desktop and mobile
- Dark cinematic theme with Playfair Display headings, gold accents, and crimson seat highlights

## Tech Stack

- React 19
- Vite 7
- React Router v7
- Google Fonts (Playfair Display, Inter)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Other commands

```bash
npm run build    # production build
npm run preview  # preview the build locally
npm run lint     # run ESLint
```

## Project Structure

```
src/
  index.css           # global styles and design tokens
  main.jsx
  App.jsx
  Pages/
    BookingPage.jsx   # seat selection + live summary
    CheckoutPage.jsx  # order review + confirmation
```

## Notes

- Ticket price is fixed at ₹1 000 per seat.
- `node_modules/` and `dist/` are excluded from version control.
