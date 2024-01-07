// import {Button} from "@nextui-org/react";
import './App.css'
import NavBar from "./view/NavBar.tsx";
import Footer from "./view/Footer.tsx";
import ViewLostAndFound from "./view/detail-view/ViewLostAndFound.tsx";
// import AnswerForm from "./view/AnswerForm.tsx";
// import LostAndFoundForm from "./view/LostAndFoundForm.tsx";
// import ViewQA from "./view/detail-view/ViewQ-A.tsx";
// import Login from "./view/Login.tsx";
// import About from "./view/About.tsx";
// import PetForm from "./view/PetForm.tsx";
// import VetForm from "./view/VetForm.tsx";
// import OrgForm from "./view/OrgForm.tsx";
// import EventForm from "./view/EventForm.tsx";
// import DonationForm from "./view/DonationForm.tsx";
// import ComplaintForm from "./view/ComplaintForm.tsx";
// import QForm from "./view/QForm.tsx";

function App() {

    return (
        <div>
            <NavBar></NavBar>
            <div className={'h-56 w-full bg-red-500'}></div>


            {/*ViewLostAndFound with sample data*/}
            <ViewLostAndFound list={[
                {
                    title: "Colombo",
                    img: "src/assets/dog2.png",
                    id: "L-0001",
                    petId: "P-0001",
                    petName: "Rex",
                    date: "2021-09-10"
                },
                {
                    title: "Galle",
                    img: "src/assets/dog2.png",
                    id: "L-0002",
                    petId: "P-0002",
                    petName: "Max",
                    date: "2021-09-11"
                },
                {
                    title: "Kandy",
                    img: "src/assets/dog2.png",
                    id: "L-0003",
                    petId: "P-0003",
                    petName: "Tom",
                    date: "2021-09-12"
                },
                {
                    title: "Jaffna",
                    img: "src/assets/dog2.png",
                    id: "L-0004",
                    petId: "P-0004",
                    petName: "Jerry",
                    date: "2021-09-13"
                },
                {
                    title: "Negombo",
                    img: "src/assets/dog2.png",
                    id: "L-0005",
                    petId: "P-0005",
                    petName: "Spike",
                    date: "2021-09-14"
                },
                {
                    title: "Matara",
                    img: "src/assets/dog2.png",
                    id: "L-0006",
                    petId: "P-0006",
                    petName: "Scooby",
                    date: "2021-09-15"
                },
                {
                    title: "Kurunegala",
                    img: "src/assets/dog2.png",
                    id: "L-0007",
                    petId: "P-0007",
                    petName: "Rover",
                    date: "2021-09-16"
                },
                {
                    title: "Anuradhapura",
                    img: "src/assets/dog2.png",
                    id: "L-0008",
                    petId: "P-0008",
                    petName: "Bruno",
                    date: "2021-09-17"
                },
                ]}></ViewLostAndFound>


            {/*<Login></Login>*/}
            {/*<div className={'h-56 w-full bg-red-500'}></div>*/}
            {/*<About></About>*/}

            {/*<PetForm></PetForm>*/}
            <div className={'h-56 w-full bg-red-500'}></div>

            {/*<VetForm></VetForm>*/}

            {/*<OrgForm></OrgForm>*/}

            {/*<EventForm></EventForm>*/}

            {/*<DonationForm></DonationForm>*/}

            {/*<ComplaintForm></ComplaintForm>*/}

            {/*<QForm></QForm>*/}

            {/*<AnswerForm></AnswerForm>*/}

            {/*<LostAndFoundForm></LostAndFoundForm>*/}

            {/*<ViewQA></ViewQA>*/}

            <Footer></Footer>
        </div>)
}

export default App
