import React from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function ThankYou() {
  const navigate = useNavigate();

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{
        height: "100vh",
        backgroundImage: "url('https://img.freepik.com/free-photo/vivid-blurred-colorful-background_58702-2548.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="card p-5 shadow-lg text-center" style={{ backgroundColor: "rgba(255, 255, 255, 0.95)" }}>
        <h1 className="text-success mb-3">🎉 Order Confirmed!</h1>
        <p className="fs-5">Thank you for booking with <strong>Rapid Rides</strong>.</p>
        <p>We’ll contact you soon with further details.</p>
        <button
          className="btn btn-primary mt-4"
          onClick={() => navigate("/brands")}
        >
          Back to Brands
        </button>
      </div>
    </div>
  );
}

export default ThankYou;
