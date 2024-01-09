import React from "react";
import {Tabs, Tab, Input, Link, Card, CardBody} from "@nextui-org/react";
import { EyeFilledIcon } from "./icon/EyeFilledIcon";
import { EyeSlashFilledIcon } from "./icon/EyeSlashFilledIcon";
import CustomButton from "../component/input/custom-button.tsx";


function Login() {
    const [selected, setSelected] = React.useState<string>("login");

    const [isVisible, setIsVisible] = React.useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);

    return (

        <div className={'flex flex-row justify-center p-10 bg-[#D9D9D9] h-screen'}>
            <div className={'flex flex-col'}>
                <p className={'text-[45px] text-[#071722] pb-6 pt-20 text-center'}>HAPPY LITTLE PAWS!</p>

                <div className={'flex'}>
                <div
                    className={'flex flex-row justify-center max-w-full w-[500px] h-[500px] m-auto bg-white rounded-tr-none rounded-br-none rounded-tl-2xl rounded-bl-2xl'}>
                    <img className={'w-[350px] h-[350px] m-auto '} src={'src/assets/logo-pet-care.png'}
                         alt={'login image'}></img>
                </div>
                <Card className="m-auto max-w-full w-[500px] h-[500px]
                    pr-6 pb-6 pt-10 shadow-none rounded-tr-2xl rounded-br-2xl
                    rounded-tl-none rounded-bl-none">

                    <CardBody className="overflow-hidden shadow-">
                        <Tabs
                            fullWidth
                            size="md"
                            aria-label="Tabs form"
                            selectedKey={selected}
                            onSelectionChange={setSelected}
                        >
                            <Tab key="login" title="Login" className={'text-[18px]'}>
                                <form className="flex flex-col gap-4 text-[18px] pt-3">
                                    <Input isRequired label="Email" placeholder="Enter your email" type="email"/>

                                    <Input
                                        fullWidth
                                        label="Password"
                                        variant="bordered"
                                        placeholder="Enter your password"
                                        endContent={
                                            <button className="focus:outline-none" type="button"
                                                    onClick={toggleVisibility}>
                                                {isVisible ? (
                                                    <EyeSlashFilledIcon
                                                        className="text-xl text-default-400 pointer-events-none"/>
                                                ) : (
                                                    <EyeFilledIcon
                                                        className="text-xl text-default-400 pointer-events-none"/>
                                                )}
                                            </button>
                                        }
                                        type={isVisible ? "text" : "password"}
                                        className="max-w-xs text-[18px]"
                                    />

                                    <p className="text-center text-[18px]">
                                        Need to create an account?{" "}
                                        <Link size="sm" onPress={() => setSelected("sign-up")}
                                              className={'text-[18px]'}>
                                            Sign up
                                        </Link>
                                    </p>
                                    <div className="flex gap-2 justify-center">
                                        {/*<Button fullWidth color="primary" className={'bg-[#071722] h-7 rounded-xl w-4/5 text-[18px]'}>*/}
                                        {/*    Login*/}
                                        {/*</Button>*/}
                                        <CustomButton borderColor={'#071722'} bgColor={'white'}
                                                      hoverColor={'#071722'} textColor={'#071722'}
                                                      textHoverColor={'white'} text={'Login'}/>
                                    </div>
                                </form>
                            </Tab>
                            <Tab key="sign-up" title="Sign up" className={'text-[18px]'}>
                                <form className="flex flex-col gap-4 h-[300px] pt-3">
                                    <Input className={'text-[18px]'} isRequired label="Name"
                                           placeholder="Enter your name" type="text"/>
                                    <Input className={'text-[18px]'} isRequired label="Email"
                                           placeholder="Enter your email" type="email"/>

                                    <Input
                                        label="Password"
                                        variant="bordered"
                                        placeholder="Enter your password"
                                        endContent={
                                            <button className="focus:outline-none" type="button"
                                                    onClick={toggleVisibility}>
                                                {isVisible ? (
                                                    <EyeSlashFilledIcon
                                                        className="text-xl text-default-400 pointer-events-none"/>
                                                ) : (
                                                    <EyeFilledIcon
                                                        className="text-xl text-default-400 pointer-events-none"/>
                                                )}
                                            </button>
                                        }
                                        type={isVisible ? "text" : "password"}
                                        className="max-w-xs text-[18px]"
                                    />


                                    <p className="text-center text-[18px]">
                                        Already have an account?{" "}
                                        <Link size="sm" onPress={() => setSelected("login")}
                                              className={'text-[18px]'}>
                                            Login
                                        </Link>
                                    </p>
                                    <div className="flex gap-2 justify-center">
                                        {/*<Button fullWidth color="primary" className={'bg-[#071722] h-7 rounded-xl w-4/5 text-[18px]'}>*/}
                                        {/*    Sign up*/}
                                        {/*</Button>*/}

                                        <CustomButton borderColor={'#071722'} bgColor={'white'}
                                                      hoverColor={'#071722'} textColor={'#071722'}
                                                      textHoverColor={'white'} text={'Sign Up'}/>

                                    </div>
                                </form>
                            </Tab>
                        </Tabs>
                    </CardBody>
                </Card>
                </div>

            </div>
        </div>


    );
}

export default Login;