import React, { useState } from "react";

async function loginUser(credentials) {
  return fetch("https://developer.yogeemedia.cloud/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function Signin() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await loginUser({
      email,
      password,
    });

    if (response.status && response.data && response.data.access_token) {
      alert("Success: " + response.message); // Use alert or console.log for simplicity
      localStorage.setItem("accessToken", response.data.access_token);
      // Assuming user data is available in the response, you can store it in localStorage as well
      localStorage.setItem("user", JSON.stringify(response.data));
      window.location.href = "/profile";
    } else {
      alert("Failed: " + response.message); // Use alert or console.log for simplicity
    }
  };

  return (
    <div>
      <h1>Sign in</h1>
      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor="email">Email Address</label>
        <input
          type="text"
          id="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}
