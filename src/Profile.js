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
    <div>
      <h1>Profile</h1>
      <div>
        <button onClick={handleLogout}>Logout</button>
      </div>
      {user && (
        <div>
          <img src={user.avatar} alt="User Avatar" />
        </div>
      )}
      {user && (
        <div>
          <h5>
            Welcome {user.fname} {user.lname}
          </h5>
          <p>Email: {user.email}</p>
          {/* Add more details based on your user data structure */}
        </div>
      )}
    </div>
  );
}
