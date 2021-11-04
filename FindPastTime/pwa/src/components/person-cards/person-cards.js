import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUsersSelector } from '../../redux/users/users.selector';
import { usersActions } from '../../redux/users/users.slice';
import TinderCard from 'react-tinder-card';

import './person-cards.css';

export function PersonCards() {
  const persons = useSelector(getUsersSelector);
  const dispatch = useDispatch();

  const { id, gender } = useParams();

  useEffect(() => {
    dispatch(usersActions.fetchUsers({
      eventId: id,
      gender: gender === 'all' ? null : gender,
    }));
  }, [dispatch, id, gender]);

  console.log('persons', persons);
  if (!persons) {
    return null;
  }

  return (
    <div>
      <div className='tinderCards__cardContainer'>
        {persons.map((person) => (
          <TinderCard
            className='swipe'
            key={person.name}
            preventSwipe={['up', 'down']}
          >
            <div
              className='card'
              style={{ backgroundImage: `url(${person.image})` }}
            >
              <h3>{person.name}, {person.age}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

