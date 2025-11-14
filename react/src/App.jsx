// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

// Importing React's useState hook and the CSS styles
import { useState } from 'react';  // useState is a React hook used to manage state
import './styles.css'; // Importing the styles you previously had in style.css

// Defining the App component — this is the main part of your React application
export default function App() {
  
  // Defining the 'items' state and the 'setItems' function to update the state
  // React will automatically update the DOM when the state changes
  const [items, setItems] = useState([1, 2]); // useState hook initializes the state to [1, 2]

  // 'add' function to add a new item to the list
  // This function updates the state by spreading the existing items and adding a new one
  const add = () => {
    setItems([...items, items.length + 1]); // Adds a new number to the items array
  };

  // 'remove' function to remove the last item from the list
  // It slices the array to remove the last element
  const remove = () => {
    if (items.length > 0) {  // Prevents trying to remove an item from an empty list
      setItems(items.slice(0, -1)); // Removes the last item by creating a new array
    }
  };

  return (
    // JSX Syntax: JSX is similar to HTML but can also include JavaScript expressions
    <div>
      {/* Static content — unchanged */}
      <h1>Hello!</h1>
      <p>How art thow?</p>

      {/* Dynamic content — this part comes from React's state */}
      <ul>
        {/* Mapping over 'items' array to create a <li> for each item */}
        {/* This is where React takes over and renders each item */}
        {items.map((num) => (
          // 'key' is important for performance when working with lists in React
          <li key={num}>{num}</li> // Displaying each number in a <li> element
        ))}
      </ul>

      {/* Buttons that trigger 'add' and 'remove' functions */}
      {/* OnClick handlers trigger React functions instead of direct DOM manipulation */}
      <button onClick={add}>More!</button>  {/* 'add' function is called when clicked */}
      <button onClick={remove}>Less!</button>  {/* 'remove' function is called when clicked */}
    </div>
  );
}

