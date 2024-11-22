import { Link, useNavigate } from "react-router-dom"
import { useForm, SubmitHandler } from "react-hook-form";
import { login } from "../../services/auth"
import 'react-toastify/dist/ReactToastify.css';

type Inputs = {
    username: string,
    password: string,
};


const LoginPage = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors, isSubmitSuccessful } } = useForm<Inputs>();
    const onLogin: SubmitHandler<Inputs> = async (payload) => {
        const isAuth = await login(payload)
        navigate("/admin")
        // if(isAuth)setTimeout(() => {navigate("/admin")}, 2000)
    }


    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100">
            <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
                <h1 className="text-lg font-bold mb-6 text-center">Login</h1>
                <form onSubmit={handleSubmit(onLogin)} >
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">username</label>
                        <input
                            type="text"
                            id="username"
                            className="w-full px-3 py-2 text-sm text-gray-700 bg-gray-100 rounded-md focus:outline-none focus:ring-blue-700"
                            placeholder="username"
                            {...register("username", { required: true })}
                        />
                        {errors.username && <span className="text-red-500">Ban chua nhap ten dang nhap</span>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">password</label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-3 py-2 text-sm text-gray-700 bg-gray-100 rounded-md focus:outline-none focus:ring-blue-700"
                            placeholder="password"
                            {...register("password", { required: true })}
                        />
                        {errors.password && <span className="text-red-500">Ban chua nhap mat khau</span>}
                    </div>
                    <div className="mb-6">
                        <button
                            type="submit" className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-gray-400"
                            disabled={isSubmitSuccessful}
                        >
                            Login
                        </button>
                    </div>
                    <div className="flex justify-center items-center">
                        <Link to={"/"} className="text-blue-700 text-center">forget password?</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginPage