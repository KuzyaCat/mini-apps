import React from 'react';

const renderTextField = ({
  input,
  label,
  name,
  type,
  meta: { error, touched },
}) => (
  <div className="user-form-item">
    <label htmlFor={name}>{label}</label>
    <input {...input} placeholder={label} type={type} />
    {error && touched && <span className="error">{error}</span>}
  </div>
);

export default renderTextField;
