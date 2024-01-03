import React from "react";
import {Tabs, Tab, Input, Link, Button, Card, CardBody} from "@nextui-org/react";

function Login() {
    const [selected, setSelected] = React.useState("login");

    return (

        <div className={'flex flex-row justify-center p-10 bg-[#D9D9D9]'}>
            <div className={'flex flex-row bg-white'}>
                <div className={'flex flex-row justify-center max-w-full w-[340px] h-[400px] border-blue-700'}>
                    <img className={'w-[200px] '} src={'src/assets/login-img.png'} alt={'login image'}></img>
                </div>

                <div className="flex flex-col w-[340px]">
                    <Card className="max-w-full w-[340px] h-[400px] rounded-none">
                        <CardBody className="overflow-hidden">
                            <Tabs
                                fullWidth
                                size="md"
                                aria-label="Tabs form"
                                selectedKey={selected}
                                onSelectionChange={setSelected}
                            >
                                <Tab key="login" title="Login">
                                    <form className="flex flex-col gap-4">
                                        <Input isRequired label="Email" placeholder="Enter your email" type="email"/>
                                        <Input
                                            isRequired
                                            label="Password"
                                            placeholder="Enter your password"
                                            type="password"
                                        />
                                        <p className="text-center text-small">
                                            Need to create an account?{" "}
                                            <Link size="sm" onPress={() => setSelected("sign-up")}>
                                                Sign up
                                            </Link>
                                        </p>
                                        <div className="flex gap-2 justify-center">
                                            <Button fullWidth color="primary" className={'bg-[#071722] h-7 rounded-xl w-4/5'}>
                                                Login
                                            </Button>
                                        </div>
                                    </form>
                                </Tab>
                                <Tab key="sign-up" title="Sign up">
                                    <form className="flex flex-col gap-4 h-[300px]">
                                        <Input isRequired label="Name" placeholder="Enter your name" type="password"/>
                                        <Input isRequired label="Email" placeholder="Enter your email" type="email"/>
                                        <Input
                                            isRequired
                                            label="Password"
                                            placeholder="Enter your password"
                                            type="password"
                                        />
                                        <p className="text-center text-small">
                                            Already have an account?{" "}
                                            <Link size="sm" onPress={() => setSelected("login")}>
                                                Login
                                            </Link>
                                        </p>
                                        <div className="flex gap-2 justify-center">
                                            <Button fullWidth color="primary" className={'bg-[#071722] h-7 rounded-xl w-4/5'}>
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