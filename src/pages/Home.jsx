// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>
        This is a public page. You can go to the <Link to="/admin">Admin Dashboard</Link> if you are logged in.
      </p>
      <p>
        If you don't have an account, please <Link to="/login">Login</Link> to access the admin panel.
      </p>
    </div>
  );
}

export default Home;
    