import React, { useEffect, useState } from 'react';

interface IUserInfos {
  token: string;
  name: string;
  email: string;
}

const Dashboard: React.FC = () => {
  const [user, setUser] = useState<IUserInfos>(() => {
    const userInfos = localStorage.getItem('@Wiser:login');
    if(userInfos) {
      return JSON.parse(userInfos);
    } else {
      return;
    }
  });

  return (
    <>
      <h1>
        Dashboard
      </h1>
      <ul>
        <li>Token: {user.token}</li>
        <li>Nome: {user.name}</li>
        <li>E-mail: {user.email}</li>
      </ul>
    </>
  )
}

export default Dashboard;