import * as React from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useEffect } from 'react';
import { useAction } from '../hooks/useAction';

const UserList: React.FC = () => {
  const { users, error, loading } = useTypedSelector((state) => state.user);
  const { fetchUsers } = useAction();

  useEffect(() => {
    fetchUsers();
  }, []);
  if (loading) {
    return <h1>Идет загрузка</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <div>
      {users.map((user) => (
        <label key={user.id}>{user.name}</label>
      ))}
    </div>
  );
};

export default UserList;
