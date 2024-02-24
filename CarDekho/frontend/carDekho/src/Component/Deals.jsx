import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Deals() {
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    const fetchDeals = async () => {
      try {
        const res = await axios.get('http://localhost:8000/deals/from-json');
        setDeals(res.data);
      } catch (error) {
        console.error(error.response.data);
      }
    };

    fetchDeals();
  }, []);

  return (
    <div>
      <h2>Deals</h2>
      <ul>
        {deals.map(deal => (
          <li key={deal._id}>
            <div>Car ID: {deal.car_id}</div>
            <div>Info: {deal.deal_info}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Deals;
