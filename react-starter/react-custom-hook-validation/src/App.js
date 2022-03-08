import { useState, useEffect } from 'react';
import './App.css';

const useValidation = (value, validations) => {
  const [isEmpty, setIsEmpty] = useState(true);
  const [minLengthError, setMinLengthError] = useState(false);
  const [inputValid, setInputValid] = useState(false);

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case 'minLength':
          value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false);
          break;
        case 'isEmpty':
          value ? setIsEmpty(false) : setIsEmpty(true);
          break;
        default:
          break;
      }
    }
  }, [value]);

  useEffect(() => {
    if (isEmpty || minLengthError) {
      setInputValid(false);
    } else {
      setInputValid(true);
    }
  }, [isEmpty, minLengthError]);

  return { isEmpty, minLengthError, inputValid };
}

const useInput = (initialValue, validations) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setIsDirty] = useState(false);
  const valid = useValidation(value, validations);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onBlur = (e) => {
    setIsDirty(true);
  };

  return {
    value,
    onChange,
    onBlur,
    isDirty,
    ...valid,
  };
}

function App() {
  const email = useInput('', { isEmpty: true, minLength: 3 });
  const password = useInput('', { isEmpty: true, minLength: 5 });

  // Hardcoded errors, move it to hook
  return (
    <div className="App">
      <form>
        <h1>Registration</h1>
        <input onChange={email.onChange} onBlur={email.onBlur} value={email.value} name="email" type="text" placeholder='Enter your email' />
        {email.isDirty && email.isEmpty && <div style={{ color: 'red' }}>Field cannot be empty</div>}
        {email.isDirty && email.minLengthError && <div style={{ color: 'red' }}>Wrong length</div>}

        <input onChange={password.onChange} onBlur={password.onBlur} value={password.value} name="password" type="password" placeholder='Enter your password' />
        {password.isDirty && password.isEmpty && <div style={{ color: 'red' }}>Field cannot be empty</div>}
        {password.isDirty && password.minLengthError && <div style={{ color: 'red' }}>Wrong length</div>}

        <button disabled={!email.inputValid || !password.inputValid} type="submit">Registration</button>
      </form>
    </div>
  );
}

export default App;
