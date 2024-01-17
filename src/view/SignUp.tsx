import React, { useState } from "react";
import AxiosInstance from '../config/AxiosInstance.ts';
import { Link, useNavigate } from "react-router-dom";
import Input from "../component/input/input.tsx";
import CustomButton from "../component/input/custom-button.tsx";
import { Radio, RadioGroup } from "@nextui-org/react";
import Swal from "sweetalert2";

const Signup: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [selectedRole, setSelectedRole] = useState('other');
    const navigate = useNavigate();

    const handleFullNameChange = (newValue: string) => {
        setUsername(newValue);
    };

    const handlePasswordChange = (newValue: string) => {
        setPassword(newValue);
    };

    const handleRoleChange = (value: string) => {
        setSelectedRole(value);
    };

    const signup = async () => {
        try {
            await AxiosInstance.post('/user/register', {
                username,
                password,
                role: selectedRole,
            });

            Swal.fire({
                title: 'Success!',
                text: 'You have successfully registered!',
                icon: 'success',
                confirmButtonText: 'Ok',
            });

            // Redirect to login page after successful registration
            navigate('/login');
        } catch (error) {
            // Extract and display more specific error messages
            // const errorMessage = error.response?.data?.message || 'Something went wrong!';
            Swal.fire({
                title: 'Error!',
                text: 'Something went wrong!',
                icon: 'error',
                confirmButtonText: 'Ok',
            });

            console.error(error);
        }
    };

    return (
        <>
            <br />
            <p className={'text-[35px] text-[#071722] text-center mt-32'}>Sign Up</p>
            <p className={'text-[25px] text-[#071722] text-center'}>Create an account to continue</p>
            <div className="w-2/5 m-auto border border-gray-200 rounded-xl flex bg-gray-50">
                <div className={'m-10 w-40 h-40 ml-20 mt-24'}>
                    <img src={'src/assets/logo-pet-care.png'} alt="Pet Care Logo" />
                </div>
                <div className="flex flex-col justify-center items-center mt-10">
                    <div className="col-4">
                        <div className="form-group">
                            <Input
                                type="text"
                                name="fullName"
                                label="Full Name"
                                optional={false}
                                onChange={handleFullNameChange}
                                placeholder='Full Name here'
                            />
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="form-group">
                            <Input
                                type="password"
                                name="password"
                                label="Password"
                                optional={false}
                                onChange={handlePasswordChange}
                                placeholder='Password here'
                            />
                        </div>
                    </div>
                    <div className="col-4 mt-6">
                        <div className="form-group">
                            <RadioGroup
                                label="Select Your Role To Furry Care"
                                orientation="horizontal"
                                value={selectedRole}
                                onChange={event => handleRoleChange(event.target.value)}
                            >
                                <Radio value="vet">Vet</Radio>
                                <Radio value="org">Org</Radio>
                                <Radio value="other">Other</Radio>
                            </RadioGroup>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-center">
                        <br/>
                        <CustomButton
                            borderColor={'#071722'}
                            bgColor={'white'}
                            hoverColor={'#071722'}
                            textColor={'#071722'}
                            textHoverColor={'white'}
                            text={'Register Now'}
                            onClick={signup}
                        />
                        <br/>
                        <p className={'mb-10'}>
                            Already have an account?
                            <Link to="/login" className='btn btn-outline-dark col-12'> <span
                                className={'text-blue-500'}> Login</span></Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;
