import { useDispatch, useSelector } from 'react-redux';

import { useInput } from '../../hooks/useInput';
import { Form } from '../form';
import { authActions } from '../../redux/auth/auth.slice';
import { getAuthErrorsSelector } from '../../redux/auth/auth.selector';
import { GENDERS } from '../../constants';

export function SignupForm() {
  const dispatch = useDispatch();

  const login = useInput('', { isEmpty: true, minLength: 3 });
  const password = useInput('', { isEmpty: true, minLength: 5 });
  const repeatPassword = useInput('', { isEmpty: true, minLength: 5 });
  const name = useInput('', { isEmpty: true, minLength: 3 });
  const city = useInput('', { isEmpty: true, minLength: 2 });
  const age = useInput('', { isEmpty: true, valueValid: /^\d+$/ });
  const gender = useInput('', { isEmpty: true });
  const description = useInput('', {});

  const errorMessage = useSelector(getAuthErrorsSelector);

  const onSubmit = () => {
    dispatch(authActions.register({
      login: login.value,
      password: password.value,
      name: name.value,
      city: city.value,
      age: age.value,
      gender: gender.value,
      description: description.value,
    }));
  }

  return <Form
    disabled={
      !login.inputValid ||
      !password.inputValid ||
      !repeatPassword.inputValid ||
      !name.inputValid ||
      !city.inputValid ||
      !age.inputValid ||
      !gender.inputValid ||
      !description.inputValid ||
      password.value !== repeatPassword.value
    }
    onSubmit={onSubmit}
    errorMessage={errorMessage}
    inputs={[
      {
        placeholder: 'Enter your login',
        label: 'Login',
        value: login.value,
        onChange: login.onChange,
        onBlur: login.onBlur,
        errorMessage: login.message,
        isDirty: login.isDirty,
      },
      {
        placeholder: 'Enter your password',
        label: 'Password',
        value: password.value,
        onChange: password.onChange,
        onBlur: password.onBlur,
        errorMessage: password.message,
        isDirty: password.isDirty,
        type: 'password',
      },
      {
        placeholder: 'Enter your password',
        label: 'Repeat password',
        value: repeatPassword.value,
        onChange: repeatPassword.onChange,
        onBlur: repeatPassword.onBlur,
        errorMessage: password.value !== repeatPassword.value
          ? 'Passwords mismatch'
          : repeatPassword.message,
        isDirty: repeatPassword.isDirty,
        type: 'password',
      },
      {
        placeholder: 'Enter your name',
        label: 'Name',
        value: name.value,
        onChange: name.onChange,
        onBlur: name.onBlur,
        errorMessage: name.message,
        isDirty: name.isDirty,
      },
      {
        placeholder: 'Enter your city',
        label: 'City',
        value: city.value,
        onChange: city.onChange,
        onBlur: city.onBlur,
        errorMessage: city.message,
        isDirty: city.isDirty,
      },
      {
        placeholder: 'Enter your age',
        label: 'Age',
        value: age.value,
        onChange: age.onChange,
        onBlur: age.onBlur,
        errorMessage: age.message,
        isDirty: age.isDirty,
      },
      {
        label: 'Gender',
        value: gender.value,
        placeholder: 'Please select your gender',
        onChange: gender.onChange,
        onBlur: gender.onBlur,
        errorMessage: gender.message,
        isDirty: gender.isDirty,
        type: 'select',
        items: Object.values(GENDERS).map((gender) => ({ value: gender.toLowerCase(), label: gender })),
      },
      {
        label: 'Description',
        value: description.value,
        onChange: description.onChange,
        onBlur: description.onBlur,
        errorMessage: description.message,
        isDirty: description.isDirty,
      },
    ]}
  />
}

