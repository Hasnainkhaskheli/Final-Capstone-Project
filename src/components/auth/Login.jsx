import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import headerImage from "../../assets/login-header-img.svg"; 

const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.email === data.email && u.password === data.password
    );

    if (user) {
      alert("Login Successful!");
      localStorage.setItem("currentUser", JSON.stringify(user));
      navigate("/account");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "16px" }}>
      <img src={headerImage} alt="Login" style={{ width: "100%", marginBottom: 20 }} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("email", { required: true })}
          placeholder="Email"
          style={{
            display: "block",
            width: "100%",
            marginBottom: "8px",
            padding: "8px",
          }}
        />
        <input
          {...register("password", { required: true })}
          type="password"
          placeholder="Password"
          style={{
            display: "block",
            width: "100%",
            marginBottom: "8px",
            padding: "8px",
          }}
        />
        <button
          type="submit"
          style={{
            display: "block",
            width: "100%",
            padding: "10px",
            background: "#1976d2",
            color: "white",
            border: "none",
            borderRadius: "4px",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
