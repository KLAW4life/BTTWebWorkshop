
import { useState } from 'react';
import './styles.css';

// Importing the components we created
import List from './List'; // List component for rendering the list of items
import Button from './Button'; // Button component for the "More!" and "Less!" buttons

export default function App() {
  const [items, setItems] = useState([1, 2]); // State to store the items

  // Function to add a new item
  const add = () => {
    setItems([...items, items.length + 1]);
  };

  // Function to remove the last item
  const remove = () => {
    if (items.length > 0) {
      setItems(items.slice(0, -1));
    }
  };

  return (
    <div>
      <h1>Hello!</h1>
      <p>How art thow?</p>

      {/* Use the List component and pass 'items' as a prop */}
      <List items={items} />

      {/* Use the Button component for both "More!" and "Less!" buttons */}
      <Button text="More!" onClick={add} />
      <Button text="Less!" onClick={remove} />
    </div>
  );
}


