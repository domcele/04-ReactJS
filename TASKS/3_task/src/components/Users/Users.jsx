import { useEffect, useState } from "react";
import { fetchUsers } from "../../api/index";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers()
      .then((response) => setUsers(response))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <ol>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}
            {user.surname}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Users;
