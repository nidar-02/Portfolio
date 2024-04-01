import React from 'react';

function HeaderComponent() {
  return (
    <header className="header-container">
    <div className="navbar">
        <a href="#">About</a>
        <a href='#'>Eduction</a>
        <a href="#">Projects</a>
        <a href="#">Contact</a>
      </div>

      <div className="header-content">
        <h3>Welcome</h3>
        <h1>Nidarshan K V</h1>
      </div>

      <hr />
    </header>
  );
}

export default HeaderComponent;
