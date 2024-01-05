import React from "react";
import {Tabs, Tab, Input, Link, Button, Card, CardBody} from "@nextui-org/react";
import { EyeFilledIcon} from "./icon/EyeFilledIcon.jsx";
import { EyeSlashFilledIcon} from "./icon/EyeSlashFilledIcon.jsx";


function Login() {
    const [selected, setSelected] = React.useState("login");

    const [isVisible, setIsVisible] = React.useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);

    return (

        <div className={'flex flex-row justify-center p-10 bg-[#D9D9D9]'}>
            <div className={'flex flex-row bg-white'}>
                <div className={'flex flex-row justify-center max-w-full w-[340px] h-[400px] border-blue-700'}>
                    <img className={'w-[200px] '} src={'src/assets/login-img.png'} alt={'login image'}></img>
                </div>

                <div className="flex flex-col w-[370px]">
                    <Card className="max-w-full w-[37 0px] h-[400px] rounded-none">
                        <CardBody className="overflow-hidden">
                            <Tabs
                                fullWidth
                                size="md"
                                aria-label="Tabs form"
                                selectedKey={selected}
                                onSelectionChange={setSelected}
                            >
                                <Tab key="login" title="Login" className={'text-[18px]'}>
                                    <form className="flex flex-col gap-4 text-[18px]">
                                        <Input isRequired label="Email" placeholder="Enter your email" type="email" />

                                        <Input
                                            label="Password"
                                            variant="bordered"
                                            placeholder="Enter your password"
                                            endContent={
                                                <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                                                    {isVisible ? (
                                                        <EyeSlashFilledIcon className="text-xl text-default-400 pointer-events-none" />
                                                    ) : (
                                                        <EyeFilledIcon className="text-xl text-default-400 pointer-events-none" />
                                                    )}
                                                </button>
                                            }
                                            type={isVisible ? "text" : "password"}
                                            className="max-w-xs text-[18px]"
                                        />

                                        <p className="text-center text-[18px]">
                                            Need to create an account?{" "}
                                            <Link size="sm" onPress={() => setSelected("sign-up")} className={'text-[18px]'}>
                                                Sign up
                                            </Link>
                                        </p>
                                        <div className="flex gap-2 justify-center">
                                            <Button fullWidth color="primary" className={'bg-[#071722] h-7 rounded-xl w-4/5 text-[18px]'}>
                                                Login
                                            </Button>
                                        </div>
                                    </form>
                                </Tab>
                                <Tab key="sign-up" title="Sign up" className={'text-[18px]'}>
                                    <form className="flex flex-col gap-4 h-[300px]">
                                        <Input className={'text-[18px]'} isRequired label="Name" placeholder="Enter your name" type="text"/>
                                        <Input className={'text-[18px]'} isRequired label="Email" placeholder="Enter your email" type="email"/>

                                        <Input
                                            label="Password"
                                            variant="bordered"
                                            placeholder="Enter your password"
                                            endContent={
                                                <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                                                    {isVisible ? (
                                                        <EyeSlashFilledIcon className="text-xl text-default-400 pointer-events-none" />
                                                    ) : (
                                                        <EyeFilledIcon className="text-xl text-default-400 pointer-events-none" />
                                                    )}
                                                </button>
                                            }
                                            type={isVisible ? "text" : "password"}
                                            className="max-w-xs text-[18px]"
                                        />


                                        <p className="text-center text-[18px]">
                                            Already have an account?{" "}
                                            <Link size="sm" onPress={() => setSelected("login")} className={'text-[18px]'}>
                                                Login
                                            </Link>
                                        </p>
                                        <div className="flex gap-2 justify-center">
                                            <Button fullWidth color="primary" className={'bg-[#071722] h-7 rounded-xl w-4/5 text-[18px]'}>
                                                Sign up
                                            </Button>
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