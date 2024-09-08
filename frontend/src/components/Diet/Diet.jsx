import React, { useState } from 'react';
import axios from 'axios';

const DietPlanForm = () => {
  const [rda, setRda] = useState('');
  const [dietPlan, setDietPlan] = useState(null);

  const handleInputChange = (e) => {
    setRda(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/api/get_diet_plan/', {
        rda: rda,
      }, {
        headers: {
          'Content-Type': 'application/json',  // Explicitly set content-type
        }
      });
      setDietPlan(response.data);  // Handle the response from Django
    } catch (error) {
      console.error('Error fetching diet plan:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={rda}
          onChange={handleInputChange}
          placeholder="Enter your RDA"
        />
        <button type="submit">Get Diet Plan</button>
      </form>

      {dietPlan && (
        <div>
          <h3>Your Diet Plan</h3>
          <p>{dietPlan.message}</p>
          <ul>
            {dietPlan.plan.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DietPlanForm;
