import { useState } from "react";
import axios from "axios";

const Login = () => {
    const [forms, setForms] = useState({
        email: '',
        password: '',
    })
    const [validation, setValidation] = useState('')

    const handleLogin = async (e: { preventDefault: () => void }) => {
        e.preventDefault()
        await axios.post('https://reqres.in/api/login', forms)
            .then(res => {
                console.log(res)
                localStorage.setItem('auth', res.data.token);
                window.location.reload();
            })
            .catch(err => {
                // setValidation(err.response.data)
            })
    }
    return (
        <>
            <div className='flex justify-center min-h-screen items-center'>
                <div className='bg-slate-500 p-5 rounded-xl'>
                    <h1 className='text-[20px] font-semibold text-white text-center'>Login Disini!</h1>
                    <div className='flex my-5 text-white flex-col'>
                        <label htmlFor="email">Email</label>
                        <input
                            value={forms.email}
                            onChange={e => setForms({ ...forms, email: e.target.value })}
                            type="text"
                            required
                            id='email'
                            className='mt-2 rounded-lg text-black pl-2 outline-none'
                        />
                    </div>

                    <div className='flex my-5 text-white flex-col'>
                        <label htmlFor="password">Password</label>
                        <input
                            value={forms.password}
                            onChange={e => setForms({ ...forms, password: e.target.value })}
                            type="password"
                            required
                            id='password'
                            className='mt-2 rounded-lg text-black pl-2 outline-none'
                        />
                    </div>

                    <div className='flex justify-center'>
                        <button type='submit' onClick={handleLogin} className='p-2 rounded-lg bg-slate-200 text-slate-600'>Login Ngab!</button>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Login;