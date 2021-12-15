import './App.css';
import axios from 'axios';
import {useState,useEffect} from 'react'
import UserList from './UserList'
function App() {
  const [user, setuser] = useState([]);
 useEffect(() => {
  axios.get("https://jsonplaceholder.typicode.com/users")
  .then(function (response) {

    setuser(response.data);
    console.log(response.data)
  })



},
[])
  return (
    <div className="App">
      <UserList user={user}/>
    </div>
  );
}

export default App;
