import React from "react";
import { LoginBG } from "../../assets";
import { Button, Gap, Input, Link } from "../../components/atoms";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="main-page">
      <div className="left">
        <img src={LoginBG} className="bg-image" alt="Backgroud Login" />
      </div>
      <div className="right">
        <p className="title">Login</p>
        <Input label="Email" placeholder="Email" />
        <Gap height={18} />
        <Input label="Password" placeholder="Password" />
        <Gap height={50} />
        <Button title="Login" onClick={() => navigate("/")} />
        <Gap height={100} />
        <Link
          title="Belum punya akun, silahkan daftar"
          onClick={() => navigate("/register")}
        />
      </div>
    </div>
  );
};

export default Login;
