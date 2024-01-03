// import {IconGoogle} from '../../src/icon-google.png'
import IconGoogle from '../../src/icon-google.png'
import { Link, useNavigate } from "react-router-dom"
import { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginAction } from '../redux/action/auth.action';

const LoginComponent=()=>{
    const [form,setForm]=useState({ username: "",password:""})
    const [loading,setLoading]=useState(false)
    const dispatch:any = useDispatch()

    const onChange = (
        e: React.FormEvent<HTMLInputElement | HTMLSelectElement>,
    ) => {
        e.preventDefault()
        const { name, value } = e.currentTarget;
        setForm({
            ...form,
            [name]: value,
        });
    };

    const SubmitForm = async (e: FormEvent) => {
        debugger;
        e.preventDefault();
        try {
            const userDataObject = {
                username: "",password:""
              }
              dispatch(loginAction(form))
            // await dispatch(loginAction(userDataObject));
            // if (!hasError) {
            //     console.log("submit");
            //     const userDataObject = {
            //         username: form.username,
            //         email: form.email,
            //         password: form.password,
            //       }
            //     await dispatch(registerUserAction(userDataObject));
            //     alert("please check your email")
            //     // setLoading(false);
            //     // navigate("/dashboard");
            //     // Continue with your form submission logic
            // }
        } catch (error:any) {
            debugger
            if(error?.response?.data?.message === "username or email already used"){
                alert(error?.response?.data?.message)
            }
        }finally{
            setLoading(false)
        }
        
    };

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                            Login
                        </h1>
                        <form className="space-y-4 md:space-y-6" >
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                <input type="email" name="username" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" onChange={onChange}/>
                            </div>
                            <div>
                                <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={onChange} />
                            </div>
                            <div style={{display:"flex",justifyContent:"space-between"}}>
                                <Link to="/register" className="register">Create an account</Link>
                                <Link to="/register">Forget Password</Link>
                            </div>
                            <button type="button" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={SubmitForm}>Login</button>
                            <button type="button" className="w-full text-black  hover:bg-primary-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 border border-black" 
                            // onClick={() => 
                                // googleLogin()}
                            >
                                
                               Sign In with Google
                            </button> <br/>
                            {/* <FacebookLogin
                            appId="2479847988864072"
                            onSuccess={(response) => {
                                console.log('Login Success!', response);
                            }}
                            onFail={(error) => {
                                console.log('Login Failed!', error);
                            }}
                            onProfileSuccess={(response) => {
                                console.log('Get Profile Success!', response);
                            }}
                            /> */}
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                {/* <Link to="/register">Create an account</Link> */}
                                {/* <a  className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a> */}
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LoginComponent