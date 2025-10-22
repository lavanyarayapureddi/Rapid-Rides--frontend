import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function BookingSummary() {
  const location = useLocation();
  const navigate = useNavigate();
  const { car, name, date, days } = location.state || {};

  if (!car || !name || !days) {
    return <div className="text-center mt-5">Missing booking details.</div>;
  }

  const pricePerDay = parseInt(car.price.replace(/[^\d]/g, '')); // ₹2500 → 2500
  const total = pricePerDay * days;

  let discount = 0;
  if (days >= 3 && days < 7) {
    discount = 0.05 * total;
  } else if (days >= 7) {
    discount = 0.10 * total;
  }

  const finalAmount = total - discount;

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        backgroundImage: "url('https://img.freepik.com/free-photo/vivid-blurred-colorful-background_58702-2548.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="card p-4 shadow-lg" style={{ width: '450px', backgroundColor: "rgba(255, 255, 255, 0.95)" }}>
        <h2 className="text-success text-center mb-3">Booking Summary</h2>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Car:</strong> {car.model}</p>
        <p><strong>Booking Date:</strong> {date}</p>
        <p><strong>Days:</strong> {days}</p>
        <p><strong>Price per Day:</strong> ₹{pricePerDay}</p>
        <p><strong>Total:</strong> ₹{total}</p>
        <p><strong>Discount:</strong> ₹{discount}</p>
        <hr />
        <h4 className="text-primary">Final Amount: ₹{finalAmount}</h4>
        <button
  className="btn btn-success mt-3 w-100"
  onClick={() => navigate("/thankyou")}
        >

          Confirm & Proceed
        </button>
      </div>
    </div>
  );
}

export default BookingSummary;
