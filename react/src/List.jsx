import React from 'react';

// Functional component to render the list of items
const List = ({ items }) => {
  return (
    <ul>
      {items.map((num) => (
        <li key={num}>{num}</li>
      ))}
    </ul>
  );
};

export default List;

// Explanation:
// Props: The List component accepts a prop items, which is an array of items.
// Rendering: It maps over the items array and generates an <li> for each item.
