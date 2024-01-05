// import {Button} from "@nextui-org/react";
import './App.css'
import NavBar from "./view/NavBar.tsx";
import Footer from "./view/Footer.tsx";
// import Login from "./view/Login.tsx";
// import About from "./view/About.tsx";
// import PetForm from "./view/PetForm.tsx";
// import VetForm from "./view/VetForm.tsx";
// import OrgForm from "./view/OrgForm.tsx";
// import EventForm from "./view/EventForm.tsx";
import DonationForm from "./view/DonationForm.tsx";

function App() {

    return (
        <div>
            <NavBar></NavBar>
            <div className={'h-56 w-full bg-red-500'}></div>
            {/*<Login></Login>*/}
            {/*<div className={'h-56 w-full bg-red-500'}></div>*/}
            {/*<About></About>*/}

            {/*<PetForm></PetForm>*/}
            <div className={'h-56 w-full bg-red-500'}></div>

            {/*<VetForm></VetForm>*/}

            {/*<OrgForm></OrgForm>*/}

            {/*<EventForm></EventForm>*/}

            <DonationForm></DonationForm>
            <Footer></Footer>
        </div>)
}

export default App
