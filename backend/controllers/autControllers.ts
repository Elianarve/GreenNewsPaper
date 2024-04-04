import { Request, Response } from 'express';
import bcrypt from 'bcryptjs'; // Corrección en la importación
import UsersModel from '../models/usersModel';
import jwt from 'jsonwebtoken';
import { body } from 'express-validator';

// Función para generar un token JWT
const generateToken = (userId: number) => {
  return jwt.sign({ userId }, 'mi_clave_secreta', { expiresIn: '1h' });
};


// Controlador para registrar nuevos usuarios // al crear el usuario genera un token / de la linea 13 a la linea 33
export const register = async (req: Request, res: Response) => {
  try {
    // Hashear la contraseña antes de guardarla en la base de datos
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    req.body.password = hashedPassword;

    // Crear un nuevo usuario con la contraseña hasheada
    const newUser: any = await UsersModel.create(req.body);


    // Generar un token JWT para el nuevo usuario
    const token = generateToken(newUser.id);

    // Enviar respuesta con el token JWT
    res.status(201).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};


// Controlador para iniciar sesión de usuarios
export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // Buscar al usuario por su email en la base de datos
    const user: any = await UsersModel.findOne({ where: { email } });

    // Si el usuario no existe, devolver un error de usuario no encontrado
    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    // Comparar la contraseña ingresada con la contraseña almacenada en la base de datos
    const passwordMatch = await bcrypt.compare(password, user.password);

    // Si las contraseñas no coinciden, devolver un error de contraseña incorrecta
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Contraseña incorrecta' });
    }

    // Si las contraseñas coinciden, generar un token JWT y enviarlo como respuesta
    const token = generateToken(user.id);
    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};


