import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function Brands() {
  const brands = [
    {
      name: "Toyota",
      image:"https://cdn.mos.cms.futurecdn.net/WpcTavg99b5XpK6STzSLZ8.jpg"
    },
    {
      name: "Hyundai",
      image: "http://listcarbrands.com/wp-content/uploads/2016/03/hyundai-logo-white.jpg"
    },
    {
      name: "Tata",
      image: "https://wallpaperaccess.com/full/6578158.png"
    }
  ];

  return (
    <div style={{
      minHeight: "100vh",
      padding: "2rem",
      backgroundImage: "url('https://wallpaperaccess.com/full/5387.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    }}>
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="text-light bg-dark p-2 rounded" style={{ display: "inline-block" }}>
            Explore Car Brands
          </h2>
        </div>

        <div className="row justify-content-center">
          {brands.map((brand) => (
            <div className="col-md-4 mb-4 text-center" key={brand.name}>
              <div
                className="card h-100 shadow-sm brand-card"
                style={{
                  transition: 'transform 0.3s',
                  minHeight: '420px',
                  padding: '1rem'
                }}
              >
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="card-img-top p-3"
                  style={{
                    height: '220px',
                    objectFit: 'contain'
                  }}
                />
                <div className="card-body">
                  <h4 className="card-title">{brand.name}</h4>
                  <Link to={`/brands/${brand.name}`} className="btn btn-primary mt-3">
                    View {brand.name} Cars
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-4 mb-4">
        <Link
          to="/"
          className="btn"
          style={{
            backgroundColor: '#007bff',
            color: 'white',
            padding: '12px 24px',
            fontWeight: 'bold',
            fontSize: '1rem',
            borderRadius: '6px',
            textDecoration: 'none',
          }}
        >
          ← Back to Home
        </Link>
      </div>

      <style>
        {`
          .brand-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 6px 14px rgba(0,0,0,0.2);
          }
        `}
      </style>
    </div>
  );
}

export default Brands;
