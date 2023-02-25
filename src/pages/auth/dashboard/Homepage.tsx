import { useNavigate } from "react-router-dom";

const Homepage = () => {
    const navigate = useNavigate()
    const logout = () => {
        localStorage.removeItem('auth');
        navigate('/')
    }
    return (
        <>
            <div>
                Ini Home
            </div>
            <button onClick={logout}>
                Logout
            </button>
        </>
    );
}

export default Homepage;