// CaloriesCalculator.jsx

import React, { useState } from "react";

const CaloriesCalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [activityLevel, setActivityLevel] = useState("sedentary");
  const [goal, setGoal] = useState("weight_loss");
  const [caloriesResult, setCaloriesResult] = useState(null);

  const calculateCalories = () => {
    let bmr;
    if (gender === "male") {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    let calories;
    if (activityLevel === "sedentary") {
      calories = bmr * 1.2;
    } else if (activityLevel === "lightly_active") {
      calories = bmr * 1.375;
    } else if (activityLevel === "moderately_active") {
      calories = bmr * 1.55;
    } else if (activityLevel === "very_active") {
      calories = bmr * 1.725;
    } else {
      calories = bmr * 1.9;
    }

    if (goal === "weight_loss") {
      calories -= 500; // Deficit of 500 calories per day for weight loss
    } else {
      calories += 500; // Surplus of 500 calories per day for weight gain
    }

    // Round to two decimal places
    calories = Math.round(calories * 100) / 100;

    return calories;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const calories = calculateCalories();
    setCaloriesResult(calories);
  };

  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-2xl font-semibold mb-4">Calories Calculator</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block mb-2">Weight (kg):</label>
            <input required
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="border rounded-md px-2 py-1 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Height (cm):</label>
            <input required
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="border rounded-md px-2 py-1 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Age:</label>
            <input required
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="border rounded-md px-2 py-1 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Gender:</label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="border rounded-md px-2 py-1 w-full"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block mb-2">Activity Level:</label>
            <select
              value={activityLevel}
              onChange={(e) => setActivityLevel(e.target.value)}
              className="border rounded-md px-2 py-1 w-full"
            >
              <option value="sedentary">Sedentary</option>
              <option value="lightly_active">Lightly Active</option>
              <option value="moderately_active">Moderately Active</option>
              <option value="very_active">Very Active</option>
              <option value="extra_active">Extra Active</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block mb-2">Goal:</label>
            <select
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              className="border rounded-md px-2 py-1 w-full"
            >
              <option value="weight_loss">Weight Loss</option>
              <option value="weight_gain">Weight Gain</option>
            </select>
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors mt-4"
        >
          Calculate
        </button>
      </form>
      {caloriesResult && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold">Calories Intake:</h2>
          <p className="mt-2">Daily Calories Needed: {caloriesResult}</p>
        </div>
      )}
    </div>
  );
};

export default CaloriesCalculator;
