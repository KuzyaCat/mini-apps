import React from 'react';
import { Field } from 'redux-form';

const renderSelectField = ({
  fieldName,
  options,
  label,
  meta: { error, touched },
}) => (
  <div className="user-form-item">
    <label htmlFor={fieldName}>{label}</label>
    <Field name={fieldName} component="select">
      {options.map((option) => (
        <option key={option} value={option}>{option}</option>
      ))}
    </Field>
    {error && touched && <span className="error">{error}</span>}
  </div>
);

export default renderSelectField;
