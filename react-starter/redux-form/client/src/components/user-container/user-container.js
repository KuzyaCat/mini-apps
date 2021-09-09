import React, { useState, useEffect } from 'react';

import './user-container.css';
import { getUserFormData, postUserFormData } from '../../resources/api/user.api';
import UserForm from '../user-form';

const UserContainer = () => {
  const submit = async (formData) => {
    console.log(formData);
    await postUserFormData(formData);
  };

  const [initialUserFormData, setInitialUserFormData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getUserFormData();
      setInitialUserFormData(data);
    };
    fetchData();
  }, []);

  return (
    <div className="user-container">
      <h1>Setup user</h1>
      <UserForm submitHandler={submit} initialValues={initialUserFormData} />
    </div>
  );
};

export default UserContainer;
