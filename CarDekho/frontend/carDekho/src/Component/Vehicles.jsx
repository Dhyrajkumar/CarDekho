import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Vehicles() {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const res = await axios.get('http://localhost:8000/vehicles/from-json');
        setVehicles(res.data);
      } catch (error) {
        console.error(error.response.data);
      }
    };

    fetchVehicles();
  }, []);

  return (
    <div>
      <h2>Vehicles</h2>
      <ul>
        {vehicles.map(vehicle => (
          <li key={vehicle._id}>
            <div>Car ID: {vehicle.car_id}</div>
            <div>Info: {vehicle.vehicle_info}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Vehicles;
