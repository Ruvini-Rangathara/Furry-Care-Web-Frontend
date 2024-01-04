// import {Button} from "@nextui-org/react";
import './App.css'
import NavBar from "./view/NavBar.tsx";
import Footer from "./view/Footer.tsx";
import Login from "./view/Login.tsx";
import About from "./view/About.tsx";
import PetForm from "./view/PetForm.tsx";

function App() {

    return (
        <div>
            <NavBar></NavBar>
            <div className={'h-56 w-full bg-red-500'}></div>
            <Login></Login>
            <div className={'h-56 w-full bg-red-500'}></div>
            <About></About>

            <PetForm></PetForm>

            <Footer></Footer>
        </div>)
}

export default App
