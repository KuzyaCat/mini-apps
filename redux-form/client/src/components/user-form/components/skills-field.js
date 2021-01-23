import React from 'react';

const renderSkillsFields = (fields) => (
  <>
    {fields.names && fields.names.map((inputName) => (
      <div key={inputName} className="user-form-item">
        <label htmlFor={inputName}>{inputName} skills</label>
        <input {...fields[inputName].input} type="text" />
        {fields[inputName].meta.error && fields[inputName].meta.touched && <span className="error">{fields[inputName].meta.error}</span>}
      </div>
    ))}
  </>
);

export default renderSkillsFields;
