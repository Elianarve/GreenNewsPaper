import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import * as Yup from 'yup';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate(); 

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('El email debe ser válido.').required('El email es requerido.'),
    password: Yup.string().required('La constraseña es requerida').min(8, 'La contraseña debe tener al menos 8 caracteres')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/,
      'La contraseña debe contener al menos una minúscula, una mayúscula, un número y un caracter especial (!@#$%^&*(),.?":{}|<>) y debe tener al menos 8 caracteres.'
    ),
});

  const handleSubmit = async (e) => {
    e.preventDefault(); //lógica para enviar credenciales al back-end
    try {
      await validationSchema.validate({email, password}, {abortEarly: false});
      const response = await fetch('http://localhost:8000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if(!response.ok) {
        throw new Error('Error en el inicio de sesión');
      }

      const data = await response.json();
      alert(`Bienvenid@ ${data.data.name}`)
      // Aquí manejamos la respuesta exitosa del backend, recibimos token en el almacenamiento local del navegador para que el usuario esté autenticado mientras navega
      localStorage.setItem('authToken', data.token);
      //Ahora redirigimos al usuario a la Home, después de un login exitoso
      navigate('/home', {
        state: {
          name: data.data.name
        }
      });
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
  };

 return (
    <>
      <form onSubmit={handleSubmit} className="bg-gray-900 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-white text-md font-bold mb-2 text-left" htmlFor="email">
            Email
            <input type="email" value={email} onChange={(e) => {
              setEmail(e.target.value);
              setEmailError('');}} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" placeholder="hola.soy.bea@gmail.com"/>
              {emailError && <p>{emailError}</p>}
          </label>
        </div>

        <div className="mb-6">
          <label className="block text-white text-md font-bold mb-2 text-left" htmlFor="password">
            Contraseña
            <input type="password" value={password} onChange={(e) =>{
               setPassword(e.target.value);
               setPasswordError('');}} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" placeholder="Ingresa tu contraseña"/>
               {passwordError && <p>{passwordError}</p>}
          </label>
        </div>
        <div className="flex flex-col items-center">
          <button className="w-full bg-gradient-to-r from-fuchsia-600 to-purple-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-5" type="submit">
            Iniciar sesión
          </button>
          <p className="text-white bg-gray-900 justify-center">¿No tienes cuenta? <Link to="/register" className="text-white">Regístrate</Link></p>
        </div>
      </form>
    </>
 );
}

export default LoginForm;