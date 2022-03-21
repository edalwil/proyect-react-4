import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2'

const UserForm = ( {addUser, closeUserTab} ) => {

      const { register, handleSubmit } = useForm();

      const submit = (event, e) => {
            const data = {
                  first_name:event?.first_name,
                  last_name:event?.last_name,
                  email:event?.email,
                  password:event?.password,
                  birthday:event?.birthday
            }
            addUser(data)
            e.target.reset()
      }

      const addUserAlert = () => {
            Swal.fire({
                  title: 'Do you want to save the changes?',
                  showDenyButton: true,
                  showCancelButton: false,
                  confirmButtonText: 'Save',
                  denyButtonText: `Don't save`,
                }).then((result) => {
                  /* Read more about isConfirmed, isDenied below */
                  if (result.isConfirmed) {
                        closeUserTab()
                  } else if (result.isDenied) {
                        closeUserTab()
                  }
                })
      }

      return (
            <div className='container-form animate__animated animate__slideInDown'>
                  <div className='cancel-user-creation'>
                        <h3>Nuevo usuario</h3>
                        <button onClick={() => closeUserTab()}><i className="fa-solid fa-x"></i></button>
                  </div>
                  <form onSubmit={handleSubmit(submit)} className='form-user'>
                        <div className='user-form'>
                              <label htmlFor="first name">Nombre</label><br />
                              <input type="text" name='first name' placeholder=" first name" id=' first name'{...register("first_name")}/>
                        </div>
                        <div className='user-form'>
                              <label htmlFor="last name">Apellido</label><br />
                              <input type="text" name='last-name' placeholder="last name" id='last name'{...register("last_name")}/>
                        </div>
                        <div className='user-form'>
                              <label htmlFor="email">Correo</label><br />
                              <input type="email" name='email' placeholder="email" id='email' {...register("email")}/>
                        </div>
                        <div className='user-form'>
                              <label htmlFor="password">Contraseña</label><br />
                              <input type="password" name='password' placeholder="password" id='password' {...register("password")}/>
                        </div>
                        <div className='user-form'>
                              <label htmlFor="birtgday">Cumpleaños</label><br />
                              <input type="date" name='birthday' placeholder="birthday" id='birthday' {...register("birthday")}/>
                        </div>
                        <button onClick={() => addUserAlert()} className='button-creation-user'>Agregar nuevo usuario</button>
                  </form>
            </div>
      );
};

export default UserForm;