import React from 'react';

const Button = ({ label, onClick }) => (
  <button onClick={onClick} style={{ padding: '10px 20px', background: '#007bff', color: 'white', border: 'none', borderRadius: '4px' }}>
    {label}
  </button>
);

export default Button;