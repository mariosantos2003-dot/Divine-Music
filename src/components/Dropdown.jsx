import React, { useState } from 'react';
import './Dropdown.css'; // Importa el archivo CSS para estilos

function Dropdown() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    console.log("Toggle dropdown");
    setShowDropdown(!showDropdown);
  };

  const handleClickOutside = (event) => {
    if (event && event.target && !event.target.classList.contains('dropbtn')) {
      setShowDropdown(false);
    }
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className={`dropbtn ${showDropdown ? 'active' : ''}`}>
        <img src="/src/images/icons/shopping-cart.svg" alt="Shopping Cart" />
      </button>

      <p className="text-center text-4xl mt-6 mr-5" id="counter"></p>

      {/* Muestra el menú desplegable si showDropdown es true */}
      {showDropdown && (
        <div className="dropdown-content" onClick={handleClickOutside}>
          <div>
            <h1>Pay Now</h1>
            <button>Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
