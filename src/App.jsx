import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookingPage from "./Pages/BookingPage";
import CheckoutPage from "./Pages/CheckoutPage";

const STORAGE_KEY = "seat-booking:selected-seats";

const App = () => {
  const [selectedSeats, setSelectedSeats] = useState(() => {
    const storedSeats = localStorage.getItem(STORAGE_KEY);

    if (!storedSeats) {
      return [];
    }

    try {
      const parsedSeats = JSON.parse(storedSeats);
      return Array.isArray(parsedSeats) ? parsedSeats : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(selectedSeats));
  }, [selectedSeats]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <BookingPage
              selectedSeats={selectedSeats}
              setSelectedSeats={setSelectedSeats}
            />
          }
        />
        <Route
          path="/checkout"
          element={
            <CheckoutPage
              selectedSeats={selectedSeats}
              setSelectedSeats={setSelectedSeats}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
