import React, { useState, useContext } from "react";
import API from "../api";
import { AuthContext } from "../context/AuthContext";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ email: "", password: "" });

  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = isLogin ? "/auth/login" : "/auth/register";
    const res = await API.post(url, form);

    if (isLogin) login(res.data.token);
    else alert("Registered! Now login.");
  };

  return (
    <div className="card p-4">
      <h4>{isLogin ? "Login" : "Register"}</h4>

      <input
        className="form-control my-2"
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <input
        type="password"
        className="form-control my-2"
        placeholder="Password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />

      <button className="btn btn-primary w-100" onClick={handleSubmit}>
        Submit
      </button>

      <p className="mt-2 text-center">
        {isLogin ? "No account?" : "Already have one?"}
        <span
          style={{ cursor: "pointer", color: "blue" }}
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? " Register" : " Login"}
        </span>
      </p>
    </div>
  );
};

export default AuthForm;