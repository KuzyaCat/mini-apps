import PropTypes from 'prop-types';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import DateRangeOutlinedIcon from '@material-ui/icons/DateRangeOutlined';

import './event.css';

export const Event = (props) => {
  const { name, description, city, startAt, image } = props;

  return (
    <div
      className="event-wrapper"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4) ), url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundColor: '#3f51b5',
      }}
    >
      <div className="event-wrapper__header">
        <div className="event-wrapper__header__location">
          <LocationOnIcon />
          <span>{city}</span>
        </div>
        <div className="event-wrapper__header__date">
          <DateRangeOutlinedIcon />
          <span>{new Date(startAt).toLocaleDateString("en-US")}</span>
        </div>
      </div>
      <div className="event-wrapper__info">
        <h2 className="event-wrapper__info__name">{name}</h2>
        <p className="event-wrapper__info__description">{description}</p>
      </div>
    </div>
  );
}

Event.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  city: PropTypes.string,
  startAt: PropTypes.instanceOf(Date),
};
