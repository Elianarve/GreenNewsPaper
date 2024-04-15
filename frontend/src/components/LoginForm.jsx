import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';
import { loginUser } from '../services/logReg';

import * as Yup from 'yup';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate(); 
  const { userAuth, setUserAuth  } = useUserContext();
  const { user, setUser  } = useUserContext();

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('El email debe ser válido.').required('El email es requerido.'),
    password: Yup.string().required('La constraseña es requerida').min(8, 'La contraseña debe tener al menos 8 caracteres')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/,
      'La contraseña debe contener al menos una minúscula, una mayúscula, un número y un caracter especial (!@#$%^&*(),.?":{}|<>) y debe tener al menos 8 caracteres.'
    ),
});

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await validationSchema.validate({email, password}, {abortEarly: false});
      const data = await loginUser(email, password);
      alert(`Bienvenid@ ${data.data.name}`)
      localStorage.setItem('authToken', data.token);
      console.log(data);
      setUser(data.data);
      setUserAuth(true);
      navigate('/home');
    } catch (error){
      console.error('Error:', error);

      error.inner.forEach((err) => {
        if (err.path === 'email') {
          setEmailError(err.message);
        } else if (err.path === 'password') {
          setPasswordError(err.message)
        }
      });
      // Aquí podemos manejar errores, ejem. mostrar un mensaje al usuario
     }

     //onResetForm();
  };


 return (
    <>
      <form onSubmit={handleSubmit} className="px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-white font-poppins mb-2 text-left" htmlFor="email">
            Email
            <input type="email" value={email} onChange={(e) => {
              setEmail(e.target.value);
              setEmailError('');}} required className="font-poppins shadow appearance-none rounded-lg w-full bg-[#222222] py-2 px-3 leading-tight focus:outline-none focus:shadow-outline h-12" id="email" placeholder="hola.soy.bea@gmail.com"/>
              {emailError && <p>{emailError}</p>}
          </label>
        </div>

        <div className="mb-6">
          <label className="font-poppins block text-white mb-2 text-left" htmlFor="password">
            Contraseña
            <input type="password" value={password} onChange={(e) =>{
               setPassword(e.target.value);
               setPasswordError('');}} required className="font-poppins shadow appearance-none bg-[#222222] rounded-lg text-slate-50 w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline h-12" id="password" placeholder="Ingresa tu contraseña"/>
               {passwordError && <p>{passwordError}</p>}
          </label>
        </div>
        <div className="flex flex-col items-center">
          <button className="w-full font-poppins bg-gradient-to-r rounded-lg from-[#B800B0] to-[#FB005A] hover:from- [#FB005A] hover:to-[#B800B0] text-white py-2 px-4 focus:outline-none focus:shadow-outline mb-5 h-12" type="submit">
            Iniciar sesión
          </button>
          <p className="font-poppins text-[#9E9E9E] justify-center">¿No tienes cuenta? <Link to="/register" className="text-white">Regístrate</Link></p>
        </div>
      </form>
    </>
 );
}

export default LoginForm;