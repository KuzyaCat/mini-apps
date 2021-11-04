import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';

import { Header } from '../../components/header';
import { ROUTES } from '../../constants/routes';
import { authActions } from '../../redux/auth/auth.slice';
import { getUserSelector } from '../../redux/users/users.selector';
import { usersActions } from '../../redux/users/users.slice';

import './profile-page.css';

export const ProfilePage = ()  => {
  const dispatch = useDispatch();

  const user = useSelector(getUserSelector);

  useEffect(() => {
    dispatch(usersActions.fetchUser());
  }, [dispatch]);

  const onLogout = () => {
    dispatch(authActions.logout());
  }

  return (
    <div>
      <Header backButton={ROUTES.MAIN} />
      {
        user
          ? (
            <>
              <div
                className="profile-page__image"
                  style={{
                    background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4) ), url(${user.image})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundColor: '#3f51b5',
                  }}
              >
              </div>
              <div
                className="profile-page__wrapper"
              >
                <h1 className="profile-page__name">{user.name}, {user.age}</h1>
                <h3 className="profile-page__location">{user.city}</h3>
                <p className="profile-page__description">{user.description}</p>
                <Button
                  style={{ marginTop: '25px', height: '35px', justifySelf: 'flex-end' }}
                  color="secondary"
                  variant="contained"
                  onClick={(e) => onLogout()}
                >Log Out</Button>
              </div>
            </>
          )
        : null
      }
    </div>
  );
}

