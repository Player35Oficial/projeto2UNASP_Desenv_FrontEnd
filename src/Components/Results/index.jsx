import React from 'react';
import './Index.css';

export default function Results() {
  return (
    <section className="results">
      <h2>Your Result</h2>

      <div className="score">
        <strong>76</strong>
        <span>of 100</span>
      </div>

      <div>
        <strong>Great</strong>
      </div>
      <p>Your performance exceed 65% of the people conducting the test here!</p>
    </section>
  );
}
