// Reviews.js
import React, { useState } from 'react';
import Review from './Review';
import './Review.css';

const Reviews = () => {
  const [reviews] = useState([
    {
      name: "Alisa Baumann",
      text: "Die Aromaöl-Massage war herrlich entspannend – der Duft war fantastisch und hat die Erfahrung perfekt abgerundet.",
    },
    {
      name: "Tobias Kraft",
      text: "Sehr gute Massage, aber etwas kürzer als erwartet. Freundliches Personal!",
    },
    {
      name: "Helena Müller",
      text: "Nach der Massage fühlte ich mich so entspannt und energiegeladen wie seit Monaten nicht mehr. Mein Rücken bedankt sich!",
    },
    {
      name: "Monica Bauer",
      text: "Das gesamte Team ist unglaublich freundlich und zuvorkommend. Man fühlt sich von der ersten Minute an gut aufgehoben.",
    },
    {
      name: "Alexander Mann",
      text: "Ich hätte nie gedacht, dass eine Massage so eine Wirkung haben kann. Ich fühle mich wie ein neuer Mensch!",
    },
  ]);

  return (
    <div className="reviews">
      <h2>Was unsere Kunden sagen</h2>
      {reviews.map((review, index) => (
        <Review
          key={index}
          name={review.name}
          text={review.text}
        />
      ))}
    </div>
  )
};

export default Reviews;
