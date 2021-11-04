import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getUserIdSelector } from '../../redux/auth/auth.selector';
import { getEventsSelector } from '../../redux/events/events.selector';
import { eventsActions } from '../../redux/events/events.slice';
import { Header } from '../../components/header';
import { Event } from '../../components/event';
import { NoEvents } from '../../components/no-events';
import { ROUTES } from '../../constants/routes';

export const EventsPage = () => {
  const dispatch = useDispatch();

  const userId = useSelector(getUserIdSelector);
  const events = useSelector(getEventsSelector);

  useEffect(() => {
    dispatch(eventsActions.fetchEvents({ userId }));
  }, [dispatch, userId]);

  return (
    <>
      <Header />
      {
        events?.length
          ? (
            <div className="events-page__body">
              {events.map((event) => (
                <Link to={`${ROUTES.EVENT}/${event.id}`}>
                  <Event
                    name={event.name}
                    city={event.city}
                    startAt={event.startAt}
                    description={event.description}
                    image={event.image}
                  />
                </Link>
              ))}
            </div>
          )
        : <NoEvents />
      }
    </>
  );
}
