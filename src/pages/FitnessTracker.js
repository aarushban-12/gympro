import React from "react";
import { ProgressBar } from "react-bootstrap";

function FitnessTracker() {
  // Placeholder data
  const data = {
    steps: 7200,         // out of 10,000
    water: 1.8,          // in liters out of 3L
    weight: 70,          // in kg
    height: 175          // in cm
  };

  return (
    <div className="container py-5">
      <h2 className="text-center text-primary mb-4">🏃‍♂️ Fitness Tracker</h2>

      <div className="row gy-4">
        {/* Weight and Height */}
        <div className="col-md-6">
          <div className="card shadow-sm p-4 text-center">
            <h5 className="fw-bold mb-3">🧍 Current Stats</h5>
            <p><strong>Weight:</strong> {data.weight} kg</p>
            <p><strong>Height:</strong> {data.height} cm</p>
          </div>
        </div>

        {/* Steps */}
        <div className="col-md-6">
          <div className="card shadow-sm p-4">
            <h5 className="fw-bold mb-3">🚶 Steps Today</h5>
            <p>{data.steps} / 10,000</p>
            <ProgressBar now={(data.steps / 10000) * 100} label={`${Math.floor((data.steps / 10000) * 100)}%`} />
          </div>
        </div>

        {/* Water */}
        <div className="col-md-6">
          <div className="card shadow-sm p-4">
            <h5 className="fw-bold mb-3">💧 Water Intake</h5>
            <p>{data.water} L / 3 L</p>
            <ProgressBar variant="info" now={(data.water / 3) * 100} label={`${Math.floor((data.water / 3) * 100)}%`} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FitnessTracker;
