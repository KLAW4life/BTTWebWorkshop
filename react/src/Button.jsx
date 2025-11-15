import React from 'react';

// Functional component for the button
const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

export default Button;

// Explanation:
// Props: The Button component accepts two props:
// text: The text to display on the button (e.g., "More!" or "Less!").
// onClick: The function to call when the button is clicked.

