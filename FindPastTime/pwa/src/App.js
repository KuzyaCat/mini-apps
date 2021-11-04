import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import { Header } from './components/header';
import { PersonCards } from './components/person-cards';
import { SwipeButtons } from './components/swipe-buttons';
import { AuthorizedRoute } from './components/authorized-route';
import { Chats } from './pages/chats';
import { ChatPage } from './pages/chat-page';
import { LoginPage } from './pages/login';
import { SignupPage } from './pages/signup';
import { EventsPage } from './pages/events-page';
import { EventDetails } from './pages/event-details';
import { PersonCardsPage } from './pages/person-cards-page';
import { ProfilePage } from './pages/profile-page';
import { OrientationWarning } from './pages/orientation-warning';
import { useDeviceOrientation } from './hooks/useDeviceOrientation';
import { ROUTES } from './constants';
import { isAuthorizedSelector } from './redux/auth/auth.selector';
import { authActions } from './redux/auth/auth.slice';

import './App.css';

function App() {
  const dispatch = useDispatch();

  const [showIosBanner, setShowIosBanner] = useState(false);
  const { isPortraitOrientation } = useDeviceOrientation();
  const isAuthorized = useSelector(isAuthorizedSelector);
  console.log('isAuthorized at App', isAuthorized);

  useEffect(() => {
    dispatch(authActions.checkAuthData());

    const isIos = () => {
      const userAgent = window.navigator.userAgent.toLowerCase();
      return /iphone|ipad|ipod/.test(userAgent);
    };
    const isInStandaloneMode = () => 'standalone' in window.navigator && window.navigator.standalone;

    if (isIos() && !isInStandaloneMode()) {
      setShowIosBanner(true);
      setTimeout(() => {
        setShowIosBanner(false);
      }, 10000);
    }
  }, []);

  if (!isPortraitOrientation) {
    return <OrientationWarning />;
  }

  return (
    <div className='App'>
      <Switch>
        <AuthorizedRoute
          path={ROUTES.CHAT_PERSON}
          isAuthorized={isAuthorized}
          component={
            <>
              <Header backButton={ROUTES.CHAT} />
              <ChatPage />
            </>
          }
        />
        <AuthorizedRoute
          path={ROUTES.PROFILE}
          isAuthorized={isAuthorized}
          component={<ProfilePage />}
        />
        <AuthorizedRoute
          path={ROUTES.CHAT}
          isAuthorized={isAuthorized}
          component={
            <>
              <Header backButton={ROUTES.MAIN} />
              <Chats />
            </>
          }
        />
        <Route path={ROUTES.LOGIN}>
          <LoginPage />
        </Route>
        <Route path={ROUTES.REGISTRATION}>
          <SignupPage />
        </Route>
        <AuthorizedRoute
          path={`${ROUTES.EVENT}/:id`}
          isAuthorized={isAuthorized}
          component={<EventDetails />}
        />
        <AuthorizedRoute
          path={`${ROUTES.MATCH}/:id/:gender`}
          isAuthorized={isAuthorized}
          component={<PersonCardsPage />}
        />
        <AuthorizedRoute
          path={ROUTES.MAIN}
          isAuthorized={isAuthorized}
          exact={true}
          component={<EventsPage />}
        />
      </Switch>
    </div>
  );
        //<AuthorizedRoute
          //path={ROUTES.MAIN}
          //isAuthorized={isAuthorized}
          //exact={true}
          //component={
          //<>
            //<Header />
            //<PersonCards />
            //<SwipeButtons />
          //</>
          //}
        ///>
}

export default App;
