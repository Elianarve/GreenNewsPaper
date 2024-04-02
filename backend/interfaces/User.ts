export interface User {
    id?: number;
    name: string;
    email: string;
    password: string;
    rol?: string;
  }


 export interface sessionData {
  token: string,
  mensaje: string,
  data?: User
 }