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
        <p className="eyebrow">Complete Booking</p>
        <h1>Order Summary</h1>

        {isConfirmed ? (
          <>
            <p className="success-banner">
              Your booking is confirmed. Enjoy the show — your seats are
              reserved and waiting.
            </p>
            <button
              type="button"
              className="primary-button"
              onClick={() => navigate("/")}
            >
              Book More Seats
            </button>
          </>
        ) : sortedSeats.length === 0 ? (
          <>
            <p className="empty-state">
              No seats selected. Head back and choose at least one seat before
              proceeding.
            </p>
            <button
              type="button"
              className="secondary-button"
              onClick={() => navigate("/")}
            >
              Back to Booking
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
                Confirm Booking
              </button>
              <button
                type="button"
                className="secondary-button"
                onClick={() => navigate("/")}
              >
                Back to Booking
              </button>
            </div>
          </>
        )}
      </section>
    </main>
  );
};

export default CheckoutPage;
