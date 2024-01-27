import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../component/input/input.tsx";
import CustomButton from "../component/input/custom-button.tsx";

const Login: React.FC = () => {
    const [username, setUsername]=useState('');
    const [password, setPassword]=useState('');

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const login = async ()=>{
        if(password && username){
            const user = {
                username : username,
                password : password
            }

            console.log(JSON.stringify(user))

            try{
                const response = await fetch('http://localhost:3000/api/user/login',{
                    method : 'POST',
                    headers : {
                        'Content-Type' : 'application/json'
                    },
                    body : JSON.stringify(user)
                })
                const data = await response.json()
                console.log(data)
                if(data.status === 'success'){
                    localStorage.setItem('username',data.username)
                    window.location.href = '/'
                }else{
                    alert(data.message)
                }
            }catch (e){
                console.log(e)
            }
        }
    }


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
                                callBack={handleUsernameChange}
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
                                callBack={handlePasswordChange}
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
