import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function BookingPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const car = location.state?.car;

  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [days, setDays] = useState('');

  if (!car) {
    return <div className="text-center mt-5 text-white">No car selected for booking.</div>;
  }

  return (
    <div
      style={{
        backgroundImage: "url('https://img.freepik.com/free-photo/vivid-blurred-colorful-background_58702-2548.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        padding: "2rem"
      }}
    >
      <div className="container my-5">
        <h2 className="text-center mb-4 text-white fw-bold">Booking Details</h2>
        <div className="row">
          <div className="col-md-6 d-flex align-items-center justify-content-center mb-4 mb-md-0">
            <img
              src={car.img}
              alt={car.model}
              className="rounded shadow"
              style={{
                height: "450px",
                width: "100%",
                objectFit: "cover",
                borderRadius: "15px"
              }}
            />
          </div>
          <div className="col-md-6">
            <div className="card p-4 shadow" style={{ backgroundColor: "rgba(255, 255, 255, 0.95)" }}>
              <h4>{car.model}</h4>
              <p className="text-muted">{car.desc}</p>
              <p><strong>Price:</strong> {car.price}</p>
              <p><strong>Contact:</strong> {car.contact}</p>

              <form>
                <div className="mb-3">
                  <label className="form-label">Your Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Booking Date</label>
                  <input
                    type="date"
                    className="form-control"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Number of Days</label>
                  <input
                    type="number"
                    className="form-control"
                    value={days}
                    onChange={(e) => setDays(e.target.value)}
                    min="1"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-success w-100"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/summary", {
                      state: {
                        car,
                        name,
                        date,
                        days: parseInt(days)
                      }
                    });
                  }}
                >
                  View Summary
                </button>
              </form>
              <button
                className="btn btn-outline-secondary mt-3"
                onClick={() => navigate(-1)}
              >
                ⬅ Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingPage;
