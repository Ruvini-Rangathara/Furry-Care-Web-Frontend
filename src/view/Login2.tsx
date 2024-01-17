import React, { useState } from "react";
import AxiosInstance from '../config/AxiosInstance.ts';
import { Link } from "react-router-dom";
import Input from "../component/input/input.tsx";
import CustomButton from "../component/input/custom-button.tsx";

const Login: React.FC = () => {
    const [username, setUsername]=useState('');
    const [password, setPassword]=useState('');


    const login=async ()=>{
        try{
            const response = await AxiosInstance.post('/user/login',{
                username,password
            });

            const expirationDate = new Date();
            expirationDate.setDate(expirationDate.getDate()+2);

            const cookieValue=encodeURIComponent('token')+'='
                +encodeURIComponent(response.data)+'; expires='+expirationDate.toUTCString()+'; path=/';

            document.cookie=cookieValue;
            console.log(response.data);

            setUsername('');
            setPassword('');

        }catch (e){
            console.log(e)
        }
    }

    const handleUsernameChange = (newValue: string) => {
        setUsername(newValue);
    };


    const handlePasswordChange = (newValue: string) => {
        setPassword(newValue);
    };


    return (
        <>
            <br />

            <p className={'text-[35px] text-[#071722] text-center mt-32'}>Login</p>
            <p className={'text-[25px] text-[#071722] text-center'}>Happy Little Paws!</p>
            <div className="w-2/5 m-auto border border-gray-200 rounded-xl flex bg-gray-50">
                <div className={'m-10 w-40 h-40 ml-20 mt-24'}>
                    <img src={'src/assets/logo-pet-care.png'} alt="Pet Care Logo" />
                </div>
                <div className="flex flex-col justify-center items-center mt-10">
                    <div className="col-6">
                        <div className="form-group">
                            <Input
                                type="text"
                                name="username"
                                label="Username"
                                optional={false}
                                onChange={handleUsernameChange}
                                placeholder='Username : '
                            />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-group">
                            <Input
                                type="password"
                                name="password"
                                label="Password"
                                optional={false}
                                onChange={handlePasswordChange}
                                placeholder='Password : '
                            />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <br />
                        <CustomButton
                            borderColor={'#071722'}
                            bgColor={'white'}
                            hoverColor={'#071722'}
                            textColor={'#071722'}
                            textHoverColor={'white'}
                            text={'Login'}
                            onClick={login}
                        />
                        <br />
                        <p className={'mb-10'}>
                            Do you have no account ?
                            <Link to="/signup" className='btn btn-outline-dark col-12'> <span className={'text-blue-500'}> Sign up</span></Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
