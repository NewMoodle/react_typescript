import React, {FC, useContext} from 'react';
import {Link, useHistory} from "react-router-dom"
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup"
import illustration from "../assets/images/login-page-illustration.jpg"
import {HOME_PAGE_ROUTE} from "../utils/consts";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const schema = yup.object().shape({
    Email: yup.string().required().email(),
    Password: yup.string().required().min(8)
})

const Login: FC = () => {
    const {authStore, userStore} = useContext(Context)
    const history = useHistory();
    const {register, handleSubmit, formState: {errors}} = useForm(
        {resolver: yupResolver(schema)})

    const onSubmit = (data: any) => authStore.login(data.Email, data.Password).then(() => {
        if (authStore.authenticated) {
            userStore.loadUser().then(() => history.push(HOME_PAGE_ROUTE))
        }
    })

    return (
        <div className="px-64 py-32 flex space-x-16">
            <div className="w-2/3 flex items-center">
                <img src={illustration} alt="Illustration"/>
            </div>
            <div className="w-1/3 flex flex-col justify-center">
                <h1 className="text-2xl font-medium">Log in to your account</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="w-full mt-8 space-y-6">
                    <div className="rounded-md shadow-sm space-y-3">
                        <div>
                            <label className="sr-only" htmlFor="email-address">Password</label>
                            <input
                                {...register("Email")}
                                id="email-address"
                                name="Email"
                                type="email"
                                className={`${errors["Email"]?.message ?
                                    "border-red-500 focus:ring-red-500 focus:border-red-500" :
                                    "border-gray-300 focus:ring-purple-600 focus:border-purple-600"} 
                                    placeholder-gray-500 text-gray-900 focus:outline-none w-full py-2 border-b-2`}
                                placeholder="Email address"/>
                            <p className="mt-2 text-sm text-red-500">{errors["Email"]?.message}</p>
                        </div>
                        <div>
                            <label className="sr-only" htmlFor="password">Password</label>
                            <input
                                {...register("Password")}
                                id="password"
                                name="Password"
                                type="password"
                                className={`${errors["Password"]?.message ?
                                    "border-red-500 focus:ring-red-500 focus:border-red-500" :
                                    "border-gray-300 focus:ring-purple-600 focus:border-purple-600"} 
                                    placeholder-gray-500 text-gray-900 focus:outline-none w-full py-2 border-b-2`}
                                placeholder="Password"/>
                            <p className="mt-2 text-sm text-red-500">{errors["Password"]?.message}</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">Remember
                                me</label>
                        </div>

                        <div className="text-sm">
                            <button className="font-medium text-purple-600 hover:text-purple-500">Forgot
                                your password?
                            </button>
                        </div>
                    </div>

                    <div>
                        <button
                            className="w-full py-2 px-4 text-sm font-semibold rounded-md text-white bg-purple-600 hover:bg-purple-700
                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                            Log in
                        </button>
                    </div>
                </form>
                <Link to={HOME_PAGE_ROUTE}
                      className="mt-2 ml-auto font-medium text-sm text-purple-600 hover:text-purple-500">
                    home page
                </Link>
                {authStore.loading && <p>Loading...</p>}
                {authStore.error.isError &&
                <div className="mt-4 bg-red-100 border border-red-400 text-red-700 px-4 py-1 rounded relative" role="alert">
                    <span className="block sm:inline">{authStore.error.message}</span>
                </div>}
            </div>
        </div>
    );
};

export default observer(Login);