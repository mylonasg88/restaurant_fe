import React, { useState, useEffect } from "react";
import { bookRestaurant } from "./services/api";

function App() {
  const [message, setMessage] = useState("");

  const makeABooking = async () => {
    const res = await bookRestaurant("");

    // @ts-ignore
    setMessage(res);
  };

  return (
    <div className='App'>
      <h3>Book a restaurant</h3>
      <h4>{message && message}</h4>
      <button onClick={makeABooking}>Book</button>
    </div>
  );
}

export default App;
