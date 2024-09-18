'use client';  // Enable client-side rendering for the form

import { useState } from 'react';

export default function AddLiquor() {
  const [liquorName, setLiquorName] = useState('');
  const [costPerBottle, setCostPerBottle] = useState('');

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    const response = await fetch('/api/liquor', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        liquorName,
        costPerBottle: parseFloat(costPerBottle),
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
    setCostPerBottle('');
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
            value={costPerBottle}
            onChange={(e) => setCostPerBottle(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Liquor</button>
      </form>
    </div>
  );
}