import React from 'react';

const renderQuestionFields = (fields) => (
  <>
    {fields.names && fields.names.map((question) => (
      <>
        <input key={question} className="question" {...fields[question].input} type="text" />
        {fields[question].meta.error && fields[question].meta.touched && <span className="error">{fields[question].meta.error}</span>}
      </>
    ))}
  </>
);

export default renderQuestionFields;
