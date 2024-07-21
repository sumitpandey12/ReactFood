import Header from "./Components/Layout/Header";
import React, { useState } from "react";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  function toggleCard(e) {
    setIsCartOpen(!isCartOpen);
  }

  return (
    <React.Fragment>
      {isCartOpen && <Cart onClose={toggleCard} />}
      <Header onCartClicked={toggleCard} />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
