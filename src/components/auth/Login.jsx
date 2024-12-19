import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((u) => u.email === data.email && u.password === data.password);

    if (user) {
      // Navigate to account page after successful login
      navigate("/account", { state: { user } });
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email", { required: true })} placeholder="Email" />
      <input {...register("password", { required: true })} placeholder="Password" type="password" />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
