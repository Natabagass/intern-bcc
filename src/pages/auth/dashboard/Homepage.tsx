import { useNavigate } from "react-router-dom";

const Homepage = () => {
    const logout = () => {
        localStorage.removeItem('auth');
        window.location.replace('/')
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