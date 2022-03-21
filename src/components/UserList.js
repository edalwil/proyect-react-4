import React from 'react';
import Swal from 'sweetalert2'

const UserList = ( { users, deleteUser,isSelectUser, createUser} ) => {

      const userDelete = id => {
            Swal.fire({
                  title: 'Are you sure?',
                  text: "You won't be able to revert this!",
                  icon: 'warning',
                  showCancelButton: true,
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                  if (result.isConfirmed) {
                        deleteUser(id)
                          Swal.fire(
                              'Deleted!',
                               'Your file has been deleted.',
                              'success'
                         )}
                })
      }

      return (
            <div className='container-list animate__animated animate__slideInDown' >
                  {
                        users?.map( user => (    
                        <div  className='list-user' key={user.id}>
                              <h4>{user?.first_name} {user?.last_name}</h4>
                              <p><b>correo</b><br />{user?.email}</p>
                              <p><b>Cumpleaños</b><br />{user?.birthday}</p><br />
                              <div className='container-button'>
                                    <button onClick={() => isSelectUser(user)} className='button-edit circle'>
                                          <i className="fa-solid fa-pen"></i>
                                    </button>
                                    <button onClick={() =>userDelete(user?.id)} className='button-delete circle'>
                                          <i className="fa-solid fa-trash"></i>
                                    </button>
                              </div>
                        </div>    
                        ))
                   } 
            </div>
      );
};

export default UserList;