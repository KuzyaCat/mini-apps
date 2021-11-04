import EventIcon from '@material-ui/icons/Event';

import './no-events.css';

export const NoEvents = () => {
  return (
    <div className="no-events">
      <EventIcon className="no-events__icon" style={{ width: '45%', height: '45%' }} />
      <h1 className="no-events__header">There are no events in your city yet</h1>
    </div>
  );
}
