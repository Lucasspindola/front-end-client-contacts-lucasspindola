import { Routes, Route, Navigate } from "react-router-dom";
import { Register } from "../../Pages/Register";
import { Login } from "../../Pages/Login";
import { Dashboard } from "../../Pages/Dashboard";

export const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/login"} />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/dashboard"
        element={<Dashboard/>}
      />
    </Routes>
  );
};
