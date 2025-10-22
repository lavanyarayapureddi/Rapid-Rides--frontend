import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function BrandDetails() {
  const { name } = useParams();
  const navigate = useNavigate();

  const carData = {
    Toyota: [
      {
        model: "Innova Crysta",
        price: "₹2500/day",
        contact: "9999999991",
        desc: "Spacious and comfortable for family trips.",
        img: "https://tse4.mm.bing.net/th/id/OIP.V9EpLfBUmCppCF_6ZknETQHaEK?pid=Api&P=0&h=180"
      },
      {
        model: "Fortuner",
        price: "₹3000/day",
        contact: "9999999992",
        desc: "Premium SUV with power and luxury.",
        img: "https://tse1.mm.bing.net/th/id/OIP.2Es7aUCtdrTEeDPMMxxaVQHaE8?pid=Api&P=0&h=180"
      },
      {
        model: "Glanza",
        price: "₹1500/day",
        contact: "9999999993",
        desc: "Affordable hatchback with good mileage.",
        img: "https://tse3.mm.bing.net/th/id/OIP.JIpkT064OtVlbE2LF8ewiAHaEd?pid=Api&P=0&h=180"
      }
    ],
    Hyundai: [
      {
        model: "Creta",
        price: "₹2300/day",
        contact: "8888888881",
        desc: "Stylish compact SUV for all terrains.",
        img: "https://tse1.mm.bing.net/th/id/OIP.ubi19LkJsWwZ5pGZ-bpanQHaE_?pid=Api&P=0&h=180"
      },
      {
        model: "i20",
        price: "₹1600/day",
        contact: "8888888882",
        desc: "Premium hatchback with smooth drive.",
        img: "https://tse4.mm.bing.net/th/id/OIP.O7f1gXQEIAQxydAMxPIPkwHaE8?pid=Api&P=0&h=180"
      },
      {
        model: "Verna",
        price: "₹2000/day",
        contact: "8888888883",
        desc: "Sleek sedan with advanced features.",
        img: "https://tse4.mm.bing.net/th/id/OIP.S2iCDoScUwT271wDp-KsQwHaEK?pid=Api&P=0&h=180"
      }
    ],
    Tata: [
      {
        model: "Nexon",
        price: "₹2200/day",
        contact: "7777777771",
        desc: "Safe and modern compact SUV.",
        img: "https://img.indianautosblog.com/2022/10/11/tata-tiago-ev-front-quarter-081b.jpg"
      },
      {
        model: "Tiago",
        price: "₹1300/day",
        contact: "7777777772",
        desc: "Budget-friendly city car.",
        img: "https://images.carandbike.com/car-images/gallery/tata/nexon-ev/exterior/tata-nexon-ev-glacier_white.jpg?v=2020-02-03"
      },
      {
        model: "Harrier",
        price: "₹2700/day",
        contact: "7777777773",
        desc: "Bold SUV with strong performance.",
        img: "https://imgd-ct.aeplcdn.com/1056x660/n/cw/ec/139669/harrier-ev-left-front-three-quarter.jpeg?isig=0&q=75"
      }
    ]
  };

  const selectedCars = carData[name] || [];

  return (
    <div
      style={{
        backgroundImage: "url('https://tse4.mm.bing.net/th/id/OIP.SMCUJFseUd44e5WaqCSizAHaEK?pid=Api&P=0&h=180')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        padding: "2rem"
      }}
    >
      <div className="container py-4">
        <h2 className="text-white mb-4 text-center">{name} Cars</h2>
        <div className="row g-4">
          {selectedCars.map((car, index) => (
            <div className="col-md-4 d-flex" key={index}>
              <div
                className="card shadow w-100 h-100"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  border: "none"
                }}
              >
                <img
                  src={car.img}
                  className="card-img-top"
                  alt={car.model}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column justify-content-between">
                  <div>
                    <h5 className="card-title">{car.model}</h5>
                    <p className="card-text text-muted">{car.desc}</p>
                    <p className="mb-1"><strong>{car.price}</strong></p>
                    <p className="mb-2">📞 {car.contact}</p>
                  </div>
                  <button
                    className="btn btn-primary mt-3"
                    onClick={() => navigate("/booking", { state: { car } })}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <button className="btn btn-outline-light fw-bold" onClick={() => navigate("/brands")}>
            ⬅ Back to Car Brands
          </button>
        </div>
      </div>
    </div>
  );
}

export default BrandDetails;
