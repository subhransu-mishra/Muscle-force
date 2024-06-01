import React, { useState } from 'react';
import { motion } from 'framer-motion';

const BmiCalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);

  const calculateBMI = () => {
    const weightKg = parseFloat(weight);
    const heightCm = parseFloat(height);
    if (isNaN(weightKg) || isNaN(heightCm) || heightCm === 0) return;

    const heightM = heightCm / 100;
    const bmiValue = weightKg / (heightM * heightM);
    setBMI(bmiValue.toFixed(2));
  };

  const getBMICategory = () => {
    if (bmi === null) return '';
    if (bmi < 18.5) return 'Underweight';
    if (bmi >= 18.5 && bmi < 25) return 'Normal weight';
    if (bmi >= 25 && bmi < 30) return 'Overweight';
    return 'Obesity';
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">BMI Calculator</h2>
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-4">
            <label htmlFor="weight" className="text-gray-800">Weight (kg):</label>
            <input
              id="weight"
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="border rounded-md px-2 py-1"
            />
          </div>
          <div className="flex items-center space-x-4">
            <label htmlFor="height" className="text-gray-800">Height (cm):</label>
            <input
              id="height"
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="border rounded-md px-2 py-1"
            />
          </div>
          <button
            onClick={calculateBMI}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            Calculate
          </button>
          {bmi !== null && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xl font-semibold text-center text-gray-800"
            >
              Your BMI: {bmi} ({getBMICategory()})
            </motion.div>
          )}
          <div className="text-sm text-gray-500 text-center">
            BMI Categories:
            <br />
            Underweight = {"<"}18.5
            <br />
            Normal weight = 18.5–24.9
            <br />
            Overweight = 25–29.9
            <br />
            Obesity = BMI of 30 or greater
          </div>
        </div>
      </div>
    </div>
  );
};

export default BmiCalculator;
