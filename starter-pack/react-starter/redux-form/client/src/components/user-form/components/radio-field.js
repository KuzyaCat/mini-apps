import React from 'react';

export const renderRadioField = ({
  name,
  value,
  onClick,
  checked,
  label,
}) => (
  <div className="user-form-item-inline">
    <label htmlFor={name}>{label}</label>
    <input name={name} type="radio" value={value} onClick={onClick} checked={checked} />
  </div>
);
