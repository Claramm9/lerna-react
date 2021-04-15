import React from 'react'

const buttonStyle = {
  padding: '10px 20px'
};

const Button = ({ label, onClick }) => {
  return (
    <button
    className="btn btn-default"
    style={buttonStyle}
    onClick={onClick}>{label}</button>
  )
}

export default Button;