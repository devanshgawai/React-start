import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserLists from "./components/Users/UserLists";

function App() {
  const [users, setUsers] = useState([]);
  const onAddUserHandler = (uName, uAge) => {
    // console.log(uName, uAge);
    setUsers((prevUsers) => {
      return [
        ...prevUsers,
        {
          key: Math.random(),
          name: uName,
          age: uAge,
        },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={onAddUserHandler} />
      <UserLists users={users} />
    </div>
  );
}

export default App;
