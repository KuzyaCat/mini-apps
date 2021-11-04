import { Link } from 'react-router-dom';

import { SignupForm } from '../../components/signup-form';
import { AuthHeader } from '../../components/auth-header';
import { ROUTES } from '../../constants';
import './signup.css';

export function SignupPage() {
  // TODO: Move span to separate component
  return (
    <div className='signup-page__wrapper'>
      <AuthHeader headerText='Welcome to FindPasttime!' />
      <SignupForm />
      <span className='signup-page__link'>
        Already have an account?
        <Link to={ROUTES.LOGIN}>
          <span className="signup-page__link_span">Sign In</span>
        </Link>
      </span>
    </div>
  );
}

