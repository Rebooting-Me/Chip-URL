import Boy from "../assets/sign-up-boy.svg";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import { useState } from "react";
import "./Common.css";

const SignupPage = () => {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("http://localhost:8000/urls/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userEmail, password, userName }),
    });

    if (response.ok) {
      // Signup successful!
      console.log("User signed up successfully!");
    } else {
      // Signup failed!
      console.error("Signup failed!");
    }
  };

  return (
    <>
      <Navbar />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "5rem",
          position: "relative",
          top: "45px",
        }}
      >
        <img
          style={{
            width: "28em"
          }}
          src={Boy}
          alt="Welcome boy"
        />
        <div
          className="signUpForm"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontFamily: "Inter",
          }}
        >
          <h1>
            Sign<span style={{ color: "#FF5E3A" }}> up</span>
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="nameAndEmail">
              <label>
                Email
                <input
                  placeholder="yourid@mail.com"
                  type="email"
                  value={userEmail}
                  onChange={(event) => setUserEmail(event.target.value)}
                  required
                />
              </label>
              <br />
              <label>
                Username
                <input
                  placeholder="ChiplyMonster69"
                  type="text"
                  value={userName}
                  onChange={(event) => setUserName(event.target.value)}
                  required
                />
              </label>
              <br />
            </div>
            <label>
              Password
              <input
                placeholder="At least 8 character long"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </label>
            <br />
            <button id="chips" type="submit">
              {"->"}
            </button>
          </form>
          <p>
            Already have an account?
            <Link
              id="login"
              style={{
                color: "#FF5E3A",
                paddingLeft: "5px",
                fontWeight: "normal",
                textDecoration: "none",
              }}
              to="/login"
            >
              Login
            </Link>
          </p>{" "}
          {/*make this a route*/}
        </div>
      </div>
    </>
  );
};

export default SignupPage;
