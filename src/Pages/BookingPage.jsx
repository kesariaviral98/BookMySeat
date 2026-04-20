import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

const ROWS = 12;
const SEAT_LETTERS = ["A", "B", "C", "D", "E", "F"];
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

const BookingPage = ({ selectedSeats, setSelectedSeats }) => {
  const navigate = useNavigate();

  const sortedSeats = useMemo(() => sortSeats(selectedSeats), [selectedSeats]);
  const totalPrice = sortedSeats.length * PRICE_PER_SEAT;

  const handleSeatToggle = (seat) => {
    setSelectedSeats((currentSeats) => {
      if (currentSeats.includes(seat)) {
        return currentSeats.filter((currentSeat) => currentSeat !== seat);
      }

      return sortSeats([...currentSeats, seat]);
    });
  };

  return (
    <main className="page-shell">
      <section className="hero-card">
        <p className="eyebrow">Theater Seat Reservation</p>
        <h1>Choose your seats</h1>
        <p className="hero-copy">
          Pick from the layout below, review your selection instantly, and move
          to checkout when you&apos;re ready.
        </p>

        <div className="stats-row">
          <article className="stat-card">
            <span className="stat-label">Seats selected</span>
            <strong>{sortedSeats.length}</strong>
          </article>
          <article className="stat-card">
            <span className="stat-label">Price per seat</span>
            <strong>₹{PRICE_PER_SEAT}</strong>
          </article>
          <article className="stat-card">
            <span className="stat-label">Current total</span>
            <strong>₹{totalPrice}</strong>
          </article>
        </div>
      </section>

      <section className="booking-layout">
        <div className="seat-section">
          <div className="screen">Screen</div>

          <div className="legend">
            <span>
              <i className="legend-box available" />
              Available
            </span>
            <span>
              <i className="legend-box selected" />
              Selected
            </span>
          </div>

          <div className="seat-grid" aria-label="Seat selection grid">
            {Array.from({ length: ROWS }, (_, rowIndex) => {
              const rowNumber = rowIndex + 1;

              return (
                <div className="seat-row" key={rowNumber}>
                  <span className="row-label">Row {rowNumber}</span>

                  {SEAT_LETTERS.map((letter, seatIndex) => {
                    const seat = `${rowNumber}${letter}`;
                    const isSelected = sortedSeats.includes(seat);
                    const isAisleSeat = seatIndex === 2;

                    return (
                      <button
                        key={seat}
                        type="button"
                        className={`seat ${isSelected ? "selected" : ""} ${
                          isAisleSeat ? "aisle-gap" : ""
                        }`}
                        aria-pressed={isSelected}
                        onClick={() => handleSeatToggle(seat)}
                      >
                        {seat}
                      </button>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>

        <aside className="summary-card">
          <h2>Booking summary</h2>
          <p className="summary-copy">
            Your chosen seats will stay saved in the browser until you confirm
            the booking.
          </p>

          <div className="summary-block">
            <span className="summary-label">Selected seats</span>
            <div className="selected-seat-list">
              {sortedSeats.length > 0 ? (
                sortedSeats.map((seat) => (
                  <span className="seat-pill" key={seat}>
                    {seat}
                  </span>
                ))
              ) : (
                <p className="empty-state">No seats selected yet.</p>
              )}
            </div>
          </div>

          <div className="summary-block">
            <span className="summary-label">Amount payable</span>
            <strong className="summary-total">₹{totalPrice}</strong>
          </div>

          <button
            type="button"
            className="primary-button"
            onClick={() => navigate("/checkout")}
            disabled={sortedSeats.length === 0}
          >
            Proceed to checkout
          </button>
        </aside>
      </section>
    </main>
  );
};

export default BookingPage;
