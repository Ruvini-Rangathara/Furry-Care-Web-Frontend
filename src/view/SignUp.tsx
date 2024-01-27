import React, {useState} from "react";
import {Link} from "react-router-dom";
import Input from "../component/input/input.tsx";
import CustomButton from "../component/input/custom-button.tsx";
import {Radio, RadioGroup} from "@nextui-org/react";
import Swal from "sweetalert2";
import axios from "axios";

const Signup: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [selectedRole, setSelectedRole] = useState('other');

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };


    const handleRoleChange = (value: string) => {
        setSelectedRole(value);
    };


    const addUser = async () => {
        try {
            if (validateSubmission()) {
                const newUser = {
                    username: username, password: password, role: selectedRole, activeState: true,
                };

                console.log("user", newUser); // Log the object directly without stringify

                const response = await axios.post("http://localhost:3000/api/user/add", newUser);
                console.log(response);

                if (response.status === 200) {
                    Swal.fire({
                        icon: "success", title: "Success!", text: "User added successfully!",
                    }).then(() => {
                        clearForm();
                    });

                } else {
                    Swal.fire({
                        icon: "error", title: "Sorry!", text: "Something went wrong. Please try again.",
                    }).then(() => {
                        clearForm();
                    })
                }
            }
        } catch (error) {
            // Handle errors during the user addition process
            console.error('Error during user addition:', error);

            // Show an error message based on the type of error
            Swal.fire({
                icon: "error",
                title: "Error!",
                text: "Error during user addition",
            }).then(() => {
                clearForm();
            });
        }
    };

    const clearForm = () => {
        setUsername("");
        setPassword("");
        setSelectedRole("other");
    };

    const validateSubmission = () => {
        if (username && password && selectedRole) {
            // You can add more validation logic if needed
            console.log("Valid Inputs");
            return true;
        } else {
            Swal.fire({
                icon: "error", title: "Invalid Inputs", text: "Please enter valid inputs",
            });
            return false;
        }
    };


    return (<>
        <br/>
        <p className={'text-[35px] text-[#071722] text-center mt-32'}>Sign Up</p>
        <p className={'text-[25px] text-[#071722] text-center'}>Create an account to continue</p>
        <div className="w-2/5 m-auto border border-gray-200 rounded-xl flex bg-gray-50">
            <div className={'m-10 w-40 h-40 ml-20 mt-24'}>
                <img src={'src/assets/logo-pet-care.png'} alt="Pet Care Logo"/>
            </div>
            <div className="flex flex-col justify-center items-center mt-10">
                <div className="col-4">
                    <div className="form-group">
                        <Input
                            type="text"
                            name="username"
                            label="Username"
                            optional={false}
                            callBack={handleUsernameChange}
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
                            callBack={handlePasswordChange}
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
                        onClick={addUser}
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
        <br/>
        <br/>
    </>);
};

export default Signup;
