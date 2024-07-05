import React, { useEffect, useState } from "react";
import Logo from "/logo.png";
import { Link, useNavigate, useRoutes } from "react-router-dom";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();

  const [loginData, setloginData] = useState({
    email: "",
    password: "",
  });
  const [showpassword, setshowpassword] = useState(false);

  const handleLogin = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setloginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:8000/api/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email: loginData.email,
        password: loginData.password,
      }),
    });

    const jsonRes = await response.json();

    if (jsonRes.token) {
      localStorage.setItem("jwtToken", jsonRes.token);

      toast.success("Login Success");
      navigate("/");
    } else {
      toast.error(jsonRes.errMessage);
      setloginData({
        email: "",
        password: "",
      });
    }
  };

  useEffect(() => {

    if(localStorage.getItem("jwtToken"))
    {
      navigate("/");
    }

  }, [])
  

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
              Login with your email and get exclusive access to discounts and
              savings on OYO stays and with our many travel partners.
            </span>
          </div>

          <div className="right-form">
            <div className="form-banner">Sign up & Get ₹500 OYO Money</div>
            <div className="form-container">
              <div>Login / Signup</div>
              <div>Please enter your email and password to continue</div>
              <div>
                <form onSubmit={handleSubmit} className="logineye">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    onChange={handleLogin}
                    value={loginData.email}
                  />
                  <div className="parenteye">
                    <input
                      type={showpassword ? "text" : "password"}
                      placeholder="Enter your password"
                      onChange={handleLogin}
                      name="password"
                      value={loginData.password}
                    />
                    <div className="iconeye">
                      {showpassword ? (
                        <FaEye onClick={() => setshowpassword(false)} />
                      ) : (
                        <FaEyeSlash onClick={() => setshowpassword(true)} />
                      )}
                    </div>
                  </div>
                  <button type="submit">Login</button>
                </form>
              </div>
              <p>
                Haven't created an account?
                <Link to={"/signup"}>
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

export default Login;
