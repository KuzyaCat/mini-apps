import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import { getUserIdSelector } from '../../redux/auth/auth.selector';
import { getEventSelector } from '../../redux/events/events.selector';
import { eventsActions } from '../../redux/events/events.slice';
import { Header } from '../../components/header';
import { ROUTES } from '../../constants/routes';

export const EventDetails = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();

  const event = useSelector(getEventSelector);
  const userId = useSelector(getUserIdSelector);

  useEffect(() => {
    dispatch(eventsActions.fetchEventById({ id }));
  }, [dispatch, id]);

  const register = () => {
    dispatch(eventsActions.createUserEvent({ userId, eventId: event.id }));
    //history.push("/match");
  }

  const chooseGender = (gender) => {
    if (!gender) {
      history.push(`/match/${event.id}/all`);
    } else {
      history.push(`/match/${event.id}/${gender}`);
    }
  }

  if (!event) {
    return null;
  }

  return (
    <div>
      <Header backButton={ROUTES.MAIN} />
      <div
        className="profile-page__image"
          style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4) ), url(${event.image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundColor: '#3f51b5',
          }}
      >
      </div>
      <div
        className="profile-page__wrapper"
      >
        <h1 className="profile-page__name">{event.name}</h1>
        <p className="profile-page__description">{event.description}</p>
        {!event.isRegistered && <Button
          style={{ marginTop: '25px', height: '35px', justifySelf: 'flex-end' }}
          color="secondary"
          variant="contained"
          onClick={register}
        >Хочу пойти</Button>}
        {event.isRegistered && (
          <>
            <h3 className="profile-page__name">Выберите пол</h3>
            <Button
              style={{ marginTop: '25px', height: '35px', justifySelf: 'flex-end' }}
              color="primary"
              variant="contained"
              onClick={() => chooseGender("male")}
            >Мужской</Button>
            <Button
              style={{ marginTop: '25px', height: '35px', justifySelf: 'flex-end' }}
              color="primary"
              variant="contained"
              onClick={() => chooseGender("female")}
            >Женский</Button>
          </>
        )}
      </div>
    </div>
  );
}
