import { Link } from 'react-router-dom';

import { LoginForm } from '../../components/login-form';
import { AuthHeader } from '../../components/auth-header';
import { ROUTES } from '../../constants';
import './login.css';

export function LoginPage() {
  // TODO: Move span to separate component
  return (
    <div className='login-page__wrapper'>
      <AuthHeader  headerText='Sign In to continue' />
      <LoginForm />
      <span className='login-page__link'>
        Do not have an account?
        <Link to={ROUTES.REGISTRATION}>
          <span className="login-page__link_span">Sign Up</span>
        </Link>
      </span>
    </div>
  );
}


