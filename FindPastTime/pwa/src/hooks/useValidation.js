import { useState, useEffect } from 'react';

export const useValidation = (value, validations) => {
  const [isEmpty, setIsEmpty] = useState(true);
  const [minLengthError, setMinLengthError] = useState(false);
  const [valueInvalid, setValueInvalid] = useState(false);
  const [inputValid, setInputValid] = useState(false);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case 'minLength':
          if (value.length < validations[validation]) {
            setMinLengthError(true);
            setMessage(`Min length must be ${validations[validation]}`);
          } else {
            setMinLengthError(false);
            setMessage(null);
          }
          break;
        case 'isEmpty':
          if (value) {
            setIsEmpty(false);
            setMessage(null);
          } else {
            setIsEmpty(true)
            setMessage('Cannot be empty');
          }
          break;
        case 'valueValid':
          if (validations[validation].test(value)) {
            setValueInvalid(false);
            setMessage(null);
          } else {
            setValueInvalid(true)
            setMessage('Wrong value');
          }
          break;
        default:
          break;
      }
    }
  }, [value, validations]);

  useEffect(() => {
    if (isEmpty || minLengthError || valueInvalid) {
      setInputValid(false);
    } else {
      setInputValid(true);
    }
  }, [isEmpty, minLengthError, valueInvalid]);

  return { isEmpty, minLengthError, valueInvalid, inputValid, message };
}

