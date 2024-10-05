// src/pages/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Login() {
  const [token, setToken] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(token); // Вызываем функцию login с токеном

    if (token === 'myStaticToken123') {
      navigate('/admin'); // Перенаправляем на админку, если токен валиден
    } else {
      alert('Invalid token');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={token}
        onChange={(e) => setToken(e.target.value)}
        placeholder="Enter Token"
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
