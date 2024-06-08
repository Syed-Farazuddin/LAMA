import React from "react";
import logo from "../assets/logo.png";
export default function Navbar() {
  return (
    <div className="flex items-center justify-start px-6 py-2">
      <img className="w-10 h-10" src={logo} alt="" />
      <h2>LAMA</h2>
    </div>
  );
}
