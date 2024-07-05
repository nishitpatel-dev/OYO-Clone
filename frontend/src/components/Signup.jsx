import React, { useEffect, useState } from "react";
import Logo from "/logo.png";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Signup = () => {
  const navigate = useNavigate();

  const [userdata, setuserdata] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [showpassword, setshowpassword] = useState(false);

  const handleUserData = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setuserdata({
      ...userdata,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log(userdata);

    const response = await fetch("http://localhost:8000/api/signup", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: userdata.name,
        email: userdata.email,
        password: userdata.password,
      }),
    });

    const jsonRes = await response.json();

    if (jsonRes.token) {
      toast.success("Registered Successfully");
      setuserdata({
        name: "",
        email: "",
        password: "",
      });

      localStorage.setItem("jwtToken", jsonRes.token);
      navigate("/");
    } else {
      toast.error(jsonRes.errMessage);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("jwtToken")) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <div className="signup">
        <div className="signup-header">
          <div className="signup-header-image">
            <Link to={"/"}>
              <img src={Logo} alt="Logo" />
            </Link>
          </div>

          <div className="signup-header-text">
            Hotels and homes across 800 cities, 24+ countries
          </div>
        </div>

        <div className="signup-main">
          <div className="left-content">
            <span>There's a smarter way to OYO around</span>
            <span>
              Sign up with your email and get exclusive access to discounts and
              savings on OYO stays and with our many travel partners.
            </span>
          </div>

          <div className="right-form">
            <div className="form-banner">Sign up & Get ₹500 OYO Money</div>
            <div className="form-container">
              <div>Signup / Login</div>
              <div>Please enter your email and password to continue</div>
              <div>
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    name="name"
                    onChange={handleUserData}
                    value={userdata.name}
                    required
                  />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    onChange={handleUserData}
                    value={userdata.email}
                    required
                  />

                  <div className="parenteye">
                    <input
                      type={showpassword ? "text" : "password"}
                      placeholder="Enter your password"
                      onChange={handleUserData}
                      name="password"
                      value={userdata.password}
                    />
                    <div className="iconeye2">
                      {showpassword ? (
                        <FaEye onClick={() => setshowpassword(false)} />
                      ) : (
                        <FaEyeSlash onClick={() => setshowpassword(true)} />
                      )}
                    </div>
                  </div>
                  <button type="submit">Register</button>
                </form>
              </div>

              <p>
                Already have an account?
                <Link to={"/login"}>
                  <button>Click Here</button>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
