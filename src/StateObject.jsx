import React from "react";
import { useState } from "react";

const StateObject = () => {
  const [user, setUser] = useState({
    name: "Иван",
    age: 25,
    isActive: true,
  });

  const changeName = () => {
    setUser((prevUser) => ({
      ...prevUser,
      name: prevUser.name === "Иван" ? "Петр" : "Иван",
    }));
  };

  const increaseAge = () => {
    setUser((prevUser) => ({
      ...prevUser,
      age: prevUser.age + 1,
    }));
  };

  const changeActive = () => {
    setUser((prevUser) => ({
      ...prevUser,
      isActive: prevUser.isActive ? false : true,
    }));
  };
  return (
    <>
      <h3>Профиль пользователя</h3>
      <div>
        <p>Имя:{user.name}</p>
      </div>
      <div>
        <p>Возраст:{user.age}</p>
      </div>
      <div>
        <p>Активен:{user.isActive ? "да" : "нет"}</p>
      </div>
      <button onClick={changeName}>Сменить имя</button>
      <button onClick={increaseAge}>Увеличить возраст</button>
      <button onClick={changeActive}>Переключить активность</button>
    </>
  );
};

export default StateObject;
