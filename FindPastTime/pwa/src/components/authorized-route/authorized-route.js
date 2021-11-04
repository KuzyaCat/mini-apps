import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import { ROUTES } from '../../constants';

export const AuthorizedRoute = props => {
  const { component: Component, isAuthorized, ...rest } = props;

  return (
    <Route
      {...rest}
      render={(routeProps) => {
        if (isAuthorized) {
          return Component;
        }
        return <Redirect to={ROUTES.LOGIN} />;
      }}
    />
  );
};

AuthorizedRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  isAuthorized: PropTypes.bool,
};
