import PropTypes from 'prop-types';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import DateRangeOutlinedIcon from '@material-ui/icons/DateRangeOutlined';

import './event-info.css';

export const EventInfo = (props) => {
  const { name, description, city, startAt, image } = props;

  return (
    <div
      className="event-info-wrapper"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4) ), url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundColor: '#3f51b5',
      }}
    >
      <div className="event-info-wrapper__header">
        <div className="event-info-wrapper__header__location">
          <LocationOnIcon />
          <span>{city}</span>
        </div>
        <div className="event-info-wrapper__header__date">
          <DateRangeOutlinedIcon />
          <span>{new Date(startAt).toLocaleDateString("en-US")}</span>
        </div>
      </div>
      <div className="event-info-wrapper__info">
        <h2 className="event-info-wrapper__info__name">{name}</h2>
      </div>
    </div>
  );
}

EventInfo.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  city: PropTypes.string,
  startAt: PropTypes.instanceOf(Date),
};
