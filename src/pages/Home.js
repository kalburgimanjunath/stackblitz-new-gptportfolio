import React from 'react';
const Introduction = () => {
  return (
    <div>
      {/* Name, profession, and a brief tagline. */}
      <h1>Manjunath Kalburgi</h1>
      <h5>Technical Architect</h5>
      <h4>Live a life to the fullest and help others</h4>
      <div>
        <button>Know more</button>
        <button>Hire me!</button>
      </div>
    </div>
  );
};
export default function Home() {
  return (
    <div>
      <Introduction />
    </div>
  );
}
