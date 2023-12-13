import React from "react";

export default function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));

  console.log("User Data:", user); // Add this line to check the structure

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h1 className="text-center mb-4">Profile</h1>
          <div className="text-center mb-4">
            {/* Add profile information or avatar here if needed */}
            <p>Welcome</p>
          </div>
          <div className="d-grid">
            <button onClick={handleLogout} className="btn btn-danger">Logout</button>
          </div>
        </div>
      </div>
    </div>
  );
}
