import React, { useEffect, useState } from 'react';

interface IUserInfos {
  token: string;
  name: string;
  email: string;
}

const Dashboard: React.FC = () => {
  const [user, setUser] = useState<IUserInfos>();

  useEffect(() => {
    const userInfos = localStorage.getItem('@Wiser:login');
    if(userInfos) {
      setUser(JSON.parse(userInfos));
    }
  },[]);

  return (
    <>
      <h1>
        Dashboard
      </h1>
      { user && (
        <ul>
          <li>Token: {user.token}</li>
          <li>Nome: {user.name}</li>
          <li>E-mail: {user.email}</li>
        </ul>
      )}
    </>
  )
}

export default Dashboard;