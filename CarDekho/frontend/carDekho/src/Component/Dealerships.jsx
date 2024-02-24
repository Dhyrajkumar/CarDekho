import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Dealerships() {
  const [dealerships, setDealerships] = useState([]);

  useEffect(() => {
    const fetchDealerships = async () => {
      try {
        const res = await axios.get('http://localhost:8000/dealerships/from-json');
        setDealerships(res.data);
      } catch (error) {
        console.error(error.response.data);
      }
    };

    fetchDealerships();
  }, []);

  return (
    <div>
      <h2>Dealerships</h2>
      <ul>
        {dealerships.map(dealership => (
          <li key={dealership._id}>
            <div>Email: {dealership.dealership_email}</div>
            <div>Name: {dealership.dealership_name}</div>
            <div>Location: {dealership.dealership_location}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dealerships;
