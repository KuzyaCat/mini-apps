import { FC } from 'react';
import { IUser } from '../types';

interface IUserListProps {
  users: IUser[];
}

export const UserList: FC<IUserListProps> = (props) => {
  const { users }: IUserListProps = props;

  return (
    <div>
      {users.map(user => 
        <div key={user.id} style={{ padding: 15, border: '1px solid gray' }}>
          {user.id}. {user.name} проживает в городе {user.address.city} на улице {user.address.street}
        </div>
      )}
    </div>
  );
}
