import React, { useState } from 'react'
import axios from 'axios'

function Food({ food, isFood }) {
  if (!isFood) {
    return null
  }
  return (
    <ul>
      {food.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  )
}

function DbConnect() {
  const [food, setFood] = useState(null);


  const handleClick = async (e) => {
    try {
      const response = await axios.get("http://localhost:8000/api/get_good_food/");
      console.log(response.data.map(x => x.food))
      setFood(response.data.map(x => x.food))
    } catch (error) {
      console.log(`Error making request for good food: ${error}`)
    }
  }
  return (
    <>
      <button type="submit" onClick={handleClick}>Get Good Food</button>
      <Food food={food} isFood={food != null} />
    </>
  )
}

export default DbConnect