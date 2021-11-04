import { useDispatch, useSelector } from 'react-redux';

import { useInput } from '../../hooks/useInput';
import { Form } from '../form';
import { authActions } from '../../redux/auth/auth.slice';
import { getAuthErrorsSelector } from '../../redux/auth/auth.selector';

export function LoginForm() {
  const dispatch = useDispatch();

  const login = useInput('', { isEmpty: true, minLength: 3 });
  const password = useInput('', { isEmpty: true, minLength: 5 });

  const errorMessage = useSelector(getAuthErrorsSelector);

  const onSubmit = () => {
    dispatch(authActions.login({ login: login.value, password: password.value }));
  }

  return <Form
    disabled={!login.inputValid || !password.inputValid}
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
    ]}
  />
}


