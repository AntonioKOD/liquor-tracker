'use client';  // Enable client-side rendering for the form

import { useState } from 'react';

export default function AddLiquor() {
  const [liquorName, setLiquorName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    const response = await fetch('/api/liquor/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        liquorName,
        price: parseFloat(price),
      }),
    });

    const data = await response.json();
    if (data.success) {
      alert('Liquor added successfully!');
    } else {
      alert('Failed to add liquor.');
    }

    // Clear form fields after submission
    setLiquorName('');
    setPrice('');
  };

  return (
    <div>
      <h1>Add a Liquor</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Liquor Name:</label>
          <input
            type="text"
            value={liquorName}
            onChange={(e) => setLiquorName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Cost per Bottle:</label>
          <input
            type="number"
            step="0.01"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Liquor</button>
      </form>
    </div>
  );
}