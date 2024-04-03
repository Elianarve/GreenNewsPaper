import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault(); //lógica para enviar credenciales al back-end
    try {
      const response = await fetch('introducir la URL del BackEnd/login', {
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
      // Aquí manejamos la respuesta exitosa del backend, recibimos token en el almacenamiento local del navegador para que el usuario esté autenticado mientras navega
      localStorage.setItem('authToken',data.token);
      //Ahora redirigimos al usuario a la Home, después de un login exitoso
      navigate('/home');
    } catch (error){
      console.error('Error:', error);
      // Aquí podemos manejar errores, ejem. mostrar un mensaje al usuario
     }
  };

 return (
    <>
      <form onSubmit={handleSubmit} className="px-8 pt-6 pb-8 mb-4">
        <div className="">
          <label className="block text-white font-poppins mb-2 text-left" htmlFor="email">
            Email
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="font-poppins shadow appearance-none rounded-lg w-full bg-[#222222] py-2 px-3 leading-tight focus:outline-none focus:shadow-outline h-12" id="email" placeholder="hola@gmail.com"/>
          </label>
        </div>

        <div className="mb-6">
          <label className="font-poppins block text-white mb-2 text-left" htmlFor="password">
            Contraseña
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="font-poppins shadow appearance-none bg-[#222222] rounded-lg text-slate-50 w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline h-12" id="password" placeholder="Ingresa tu contraseña"/>
          </label>
        </div>
        <div className="flex flex-col items-center">
          <button className="w-full font-poppins bg-gradient-to-r rounded-lg from-[#B800B0] to-[#FB005A] hover:from- [#FB005A] hover:to-[#B800B0] text-white py-2 px-4 focus:outline-none focus:shadow-outline mb-5 h-12" type="button">
            Iniciar sesión
          </button >
          <p className="font-poppins text-[#9E9E9E] justify-center">¿No tienes cuenta? <Link to="/register" className="text-white">Regístrate</Link></p>
        </div>
      </form>
    </>
 );
}

export default LoginForm;