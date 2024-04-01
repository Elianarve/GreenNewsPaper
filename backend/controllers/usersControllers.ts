import { Request, Response } from 'express';
import UserModel from '../models/usersModel';

// Obtener todos los usuarios
export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await UserModel.findAll();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener los usuarios' });
  }
};

// Obtener un usuario por su ID
export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await UserModel.findByPk(id);
    if (!user) {
      res.status(404).json({ message: 'Usuario no encontrado' });
      return;
    }
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener el usuario' });
  }
};

// Crear un nuevo usuario
export const createUser = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  try {
    const user = await UserModel.create({ username, email, password });
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear el usuario' });
  }
};

// Actualizar un usuario
export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { username, email, password } = req.body;
  try {
    const user = await UserModel.findByPk(id);
    if (!user) {
      res.status(404).json({ message: 'Usuario no encontrado' });
      return;
    }
    await user.update({ username, email, password });
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al actualizar el usuario' });
  }
};

// Eliminar un usuario
export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const user = await UserModel.findByPk(id);
      if (!user) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }
      await user.destroy();
      res.json({ message: 'Usuario eliminado exitosamente' });
    } catch (error) {
      console.error('Error al eliminar usuario:', error);
      res.status(500).json({ message: 'Error al eliminar usuario' });
    }
  };
