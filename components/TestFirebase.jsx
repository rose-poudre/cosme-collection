import { useState, useEffect } from "react";
import { db } from "../public/src/firebase-config";
import { collection, getDocs } from "firebase/firestore";

function testfirebase() {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);

  return (
    <div className="App">
      {users.map((user) => {
        return (
          <div>
            {""}
            <h1>Name: {user.Name}</h1>
            <h1>Place: {user.Age}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default testfirebase;
