import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/brands");
  }

  return (
    <div style={{
      backgroundImage: "url('https://t4.ftcdn.net/jpg/07/71/74/31/360_F_771743170_ImU66eSW1ZUlbBGmvdRc95tpLLTACtZU.jpg')",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
    }}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            
            <div className="mb-4 text-light">
              <h1 className="fw-bold">Welcome to Rapid Rides</h1>
              <p className="fs-5">Book reliable cars in Vijayawada</p>
            </div>


            <div className="card p-4 shadow" style={{ backgroundColor: "#f8f9fa", maxWidth: "400px" }}>
              <h3 className="text-center mb-3">{isLogin ? "Login" : "Register"}</h3>
              <form onSubmit={handleSubmit}>
                {!isLogin && (
                  <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Name"
                    required
                  />
                )}
                <input
                  type="email"
                  className="form-control mb-2"
                  placeholder="Email"
                  required
                />
                <input
                  type="password"
                  className="form-control mb-2"
                  placeholder="Password"
                  required
                />
                <button type="submit" className="btn btn-success w-100">
                  {isLogin ? "Login" : "Register"}
                </button>
              </form>
              <div className="text-center mt-3">
                {isLogin ? "New user?" : "Already registered?"}{" "}
                <button className="btn btn-link" onClick={() => setIsLogin(!isLogin)}>
                  {isLogin ? "Register" : "Login"}
                </button>
              </div>
            </div>
          </div>

          
          <div className="col-md-6 d-none d-md-block"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
