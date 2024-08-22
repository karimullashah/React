import { useEffect, useState } from "react";

const User = ({name}) => {
  const [count] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Namaste OP");
    },1000);

    //we can return a function in useEffect as shown below, is called when unmounting a component
    return () => {
      clearInterval(interval);
    }

  },[]);

  return (
    <div className="user-card">
      <h1>Count: {count}</h1>
      <h2>Name: {name}</h2>
      <h3>Location: Dehradun</h3>
      <h4>Contact: @karim</h4>
    </div>
  );
};

export default User;
