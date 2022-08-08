import React, { useState } from "react";

import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

import classes from "./AddUser.module.css";

const AddUser = (props) => {
  // // // // // // // // // // // // // // // // // // // // // // //
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const usernameChangeHandler = function (event) {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = function (event) {
    setEnteredAge(event.target.value);
  };
  // // // // // // // // // // // // // // // // // // // // // // // //

  // const [input, setInput] = useState({
  //   enteredUsername: "",
  //   enteredAge: "",
  // });
  // const usernameChangeHandler = function (event) {
  //   setInput({
  //     ...input,
  //     enteredUsername: event.target.value,
  //   });
  // };

  // const ageChangeHandler = function (event) {
  //   setInput({
  //     ...input,
  //     enteredAge: event.target.value,
  //   });
  // };

  const addUserHandler = function (event) {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Something went wrong",
        message: "Username or User-age can't be empty",
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredAge("");
    setEnteredUsername("");
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onClick={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            id="age"
            min="1"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};
export default AddUser;
