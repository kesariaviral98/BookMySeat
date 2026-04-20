import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const PRICE_PER_SEAT = 1000;

const sortSeats = (seats) =>
  [...seats].sort((firstSeat, secondSeat) => {
    const firstRow = Number.parseInt(firstSeat, 10);
    const secondRow = Number.parseInt(secondSeat, 10);

    if (firstRow !== secondRow) {
      return firstRow - secondRow;
    }

    return firstSeat.localeCompare(secondSeat);
  });

const CheckoutPage = ({ selectedSeats, setSelectedSeats }) => {
  const navigate = useNavigate();
  const [isConfirmed, setIsConfirmed] = useState(false);

  const sortedSeats = useMemo(() => sortSeats(selectedSeats), [selectedSeats]);
  const total = sortedSeats.length * PRICE_PER_SEAT;

  const handleConfirmBooking = () => {
    setIsConfirmed(true);
    setSelectedSeats([]);
  };

  return (
    <main className="page-shell">
      <section className="checkout-card">
        <p className="eyebrow">Final step</p>
        <h1>Checkout</h1>

        {isConfirmed ? (
          <>
            <p className="success-banner">
              Booking confirmed successfully. Your seats are reserved.
            </p>
            <button
              type="button"
              className="primary-button"
              onClick={() => navigate("/")}
            >
              Book more seats
            </button>
          </>
        ) : sortedSeats.length === 0 ? (
          <>
            <p className="empty-state">
              No seats have been selected yet. Go back and choose at least one
              seat to continue.
            </p>
            <button
              type="button"
              className="secondary-button"
              onClick={() => navigate("/")}
            >
              Back to booking
            </button>
          </>
        ) : (
          <>
            <div className="checkout-list">
              {sortedSeats.map((seat) => (
                <div className="checkout-row" key={seat}>
                  <span>{seat}</span>
                  <span>₹{PRICE_PER_SEAT}</span>
                </div>
              ))}
            </div>

            <div className="checkout-total">
              <span>Total</span>
              <strong>₹{total}</strong>
            </div>

            <div className="button-row">
              <button
                type="button"
                className="primary-button"
                onClick={handleConfirmBooking}
              >
                Confirm booking
              </button>
              <button
                type="button"
                className="secondary-button"
                onClick={() => navigate("/")}
              >
                Back
              </button>
            </div>
          </>
        )}
      </section>
    </main>
  );
};

export default CheckoutPage;
