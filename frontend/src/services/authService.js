import React from 'react'
import axios from 'axios'

export const registerUser = async (userData) => {
    try {
        const response = await fetch('http://localhost:8000/auth/register',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });
    if (!response.ok) {
        throw new Error('Error en el registro');
    }
    
    const data = await response.json();
    return data; //devuelve los datos recibidos del backend
    } catch (error) {
    console.error('Error:', error);
    throw error; //Lanza el error para que pueda ser manejado por el componente que llama a esta función
    }
};