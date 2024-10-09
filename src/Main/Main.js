import { useEffect, useState } from "react"
  
  const Main = () => {
    const [users, setUsers] = useState([]);
  
    // useEffect(() => {
    //   getAllUsers().then((users) => {
    //     setUsers(users);
    //   });
    // }, []);
  
    return (
      <div>
        <h1>Feature 3 Kickoff</h1>
        This is the stateful parent component.
      </div>
    );
  };
  
  export default Main;
  