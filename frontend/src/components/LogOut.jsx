import { useUserContext } from '../context/UserContext';

const LogOut = () => {
    const { setUser, setUserAuth  } = useUserContext();

    const deleteDataUser = () => {
        setUser(null);
        setUserAuth(null);
        localStorage.removeItem('authToken');
    }

  return (

    <button className="text-white bg-[#222222] pl-5 px-4 py-2 rounded-lg hover:bg-[#FB005A] active:bg-[#B800B0] focus:outline-none focus:ring focus:ring-violet-300" onClick={deleteDataUser}>Log Out</button>
  )
}

export default LogOut;