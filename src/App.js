import { useEffect, useState } from 'react';
import './App.css';
import UserForm from './components/UserForm';
import 'animate.css';
import UserList from './components/UserList';
import axios from 'axios';

function App() {

      const [createUser, setCreateUser] = useState(false);
      const [user, setUser] = useState([]);

      const getUser = () => {
            axios.get("https://users-crud1.herokuapp.com/users/")
                  .then(res => setUser(res.data))
      }

      const addUser = data => {
            axios.post("https://users-crud1.herokuapp.com/users/", data )
                  .then(() => getUser())
      }

      const deleteUser = id => {
            axios.delete(`https://users-crud1.herokuapp.com/users/${id}`)
                  .then(() => getUser())
      }

      const closeUserTab = () => {
            setCreateUser(false)
      }

      useEffect(() => {
           getUser()
      }, []);

  return (
        <>
    <div className='user'>
          <h1>Usuarios</h1>
          <button onClick={() => setCreateUser(!createUser)} className='button-new-user'>
                <i className="fa-solid fa-plus"></i>crear nuevo usuario 
            </button>  
    </div>
    <div className='cointenier-userform'>
            {
                  createUser && <UserForm addUser={addUser} closeUserTab={closeUserTab}/>
            }
    </div>
    {
    !createUser && <UserList users={user} deleteUser={deleteUser}/>
    }
    
    </>
  );
}

export default App;
