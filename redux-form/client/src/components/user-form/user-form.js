import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm, Fields } from 'redux-form';

import * as fieldComponents from './components';
import './user-form.css';

const userFormValidator = {
  required: (value) => ((value || typeof value === 'string') && value.length ? undefined : 'Required'),
  minLength: (value) => (value && value.length < 3 ? 'Must be 3 characters or more' : undefined),
};

const UserForm = reduxForm({
  form: 'user',
})((props) => {
  const { handleSubmit, submitHandler } = props;

  const [showSkills, setShowSkills] = useState(false);
  const [questionFieldsNames, setQuestionFieldsNames] = useState([]);

  const handleAddQuestions = () => {
    setQuestionFieldsNames([...questionFieldsNames, `question-${questionFieldsNames.length + 1}`, `question-${questionFieldsNames.length + 2}`]);
  };

  const handleClearQuestions = () => {
    setQuestionFieldsNames([]);
  };

  const handleShowSkills = () => {
    setShowSkills(!showSkills);
  };

  return (
    <form className="user-form" method="POST" onSubmit={handleSubmit(submitHandler)}>
      <div className="user-form-required">
        <Field
          component={fieldComponents.renderTextField}
          name="firstName"
          type="text"
          label="First Name"
          validate={[userFormValidator.required, userFormValidator.minLength]}
        />
        <Field
          component={fieldComponents.renderTextField}
          name="lastName"
          type="text"
          label="Last Name"
          validate={[userFormValidator.required, userFormValidator.minLength]}
        />
        <Field
          component={fieldComponents.renderTextField}
          name="email"
          type="email"
          label="Email"
          validate={[userFormValidator.required, userFormValidator.minLength]}
        />
        <Field
          component={fieldComponents.renderTextField}
          name="role"
          type="text"
          label="Role"
          validate={[userFormValidator.required, userFormValidator.minLength]}
        />
        <Field
          component={fieldComponents.renderSelectField}
          name="gender"
          fieldName="gender"
          label="Gender"
          options={['', 'male', 'female']}
          validate={userFormValidator.required}
        />
      </div>
      <div className="user-form-skills">
        <Field
          component={fieldComponents.renderRadioField}
          name="showSkills"
          label="Show skills info"
          onClick={handleShowSkills}
          checked={showSkills}
        />
        {showSkills
        && (
        <Fields
          names={['front', 'back']}
          component={fieldComponents.renderSkillsFields}
          validate={[userFormValidator.minLength]}
        />
        )}
      </div>
      <div className="user-form-questions">
        <h2>Your questions</h2>
        <Fields
          names={questionFieldsNames}
          component={fieldComponents.renderQuestionFields}
          validate={[userFormValidator.minLength]}
        />
        <div className="questions-btns">
          <button className="add-question-btn" onClick={handleAddQuestions} type="button">Add more questions</button>
          <button className="clear-question-btn" onClick={handleClearQuestions} type="button">Clear questions</button>
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
});

UserForm.propTypes = {
  submitHandler: PropTypes.func.isRequired,
};

export default UserForm;
