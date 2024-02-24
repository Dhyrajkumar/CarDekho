import React, { useState } from 'react';
import axios from 'axios';

function RefreshToken() {
  const [refreshToken, setRefreshToken] = useState('');

  const handleChange = (e) => {
    setRefreshToken(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8000/users/refresh-token', { refreshToken });
      console.log(res.data);
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <div>
      <h2>Refresh Token</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={refreshToken} onChange={handleChange} />
        <button type="submit">Refresh Token</button>
      </form>
    </div>
  );
}

export default RefreshToken;
