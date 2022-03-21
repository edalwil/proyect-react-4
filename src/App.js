import { useEffect, useState } from 'react';
import './App.css';
import UserForm from './components/UserForm';
import 'animate.css';
import UserList from './components/UserList';
import axios from 'axios';

function App() {

      const [createUser, setCreateUser] = useState(false);
      const [user, setUser] = useState([]);
      const [isSelect, setIsSelect] = useState(null);

      const getUser = () => {                                                 
            axios.get("https://users-crud1.herokuapp.com/users/")             // solicita a la pi que muestre el contenido 
                  .then(res => setUser(res.data))
      }

      const addUser = data => {
            axios.post("https://users-crud1.herokuapp.com/users/", data )          //se anexa a la api nuevo contenido
                  .then(() => getUser())
      }

      const deleteUser = id => {                      
            axios.delete(`https://users-crud1.herokuapp.com/users/${id}`)     // borra contenido de la api
                  .then(() => getUser())
      }

      const modifyUser = (id, data) => {
            axios.put(`https://users-crud1.herokuapp.com/users/${id}/`, data)
                  .then(() => {
                  getUser()
                  setUser(null)
                  setIsSelect(null)
            })}

      const closeUserTab = () => {
            setCreateUser(false)
            setIsSelect(null)
      }

      const isSelectUser = user => {
            setIsSelect(user)
            setCreateUser(!createUser)

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
                  createUser && <UserForm addUser={addUser} closeUserTab={closeUserTab} isSelect={isSelect} modifyUser={modifyUser}/>
            }
    </div>
    {
    !createUser &&  <UserList users={user} deleteUser={deleteUser}  isSelectUser={isSelectUser}/>
    }
    
    </>
  );
}

export default App;
