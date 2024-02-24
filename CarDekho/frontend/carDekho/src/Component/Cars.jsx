import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Cars() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const res = await axios.get('http://localhost:8000/cars/from-json');
        setCars(res.data);
      } catch (error) {
        console.error(error.response.data);
      }
    };

    fetchCars();
  }, []);

  return (
    <div>
      <h2>Cars</h2>
      <ul>
        {cars.map(car => (
          <li key={car._id}>
            <div>Type: {car.type}</div>
            <div>Name: {car.name}</div>
            <div>Model: {car.model}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cars;
