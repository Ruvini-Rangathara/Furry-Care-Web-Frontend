// import {Button} from "@nextui-org/react";
import './App.css'
import NavBar from "./view/NavBar.tsx";
import Footer from "./view/Footer.tsx";
// import ViewLostAndFound from "./view/detail-view/ViewLostAndFound.tsx";
// import ViewComplaint from "./view/detail-view/ViewComplaint.tsx";
// import ViewLostAndFound from "./view/detail-view/ViewLostAndFound.tsx";
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

    // for complaint regenerate the sample data with the following code
    // const data = [
    //     {
    //         ComplaintID: "C-0001",
    //         UserID: "U-0001",
    //         PetID: "P-0001",
    //         PetName: "Rex",
    //         Date: "2021-09-10",
    //         Description: "Dog is sick",
    //         Status: "Pending"
    //
    //     },
    //     {
    //         ComplaintID: "C-0002",
    //         UserID: "U-0002",
    //         PetID: "P-0002",
    //         PetName: "Max",
    //         Date: "2021-09-11",
    //         Description: "Dog is sick",
    //         Status: "Pending"
    //
    //     },
    //     {
    //         ComplaintID: "C-0003",
    //         UserID: "U-0003",
    //         PetID: "P-0003",
    //         PetName: "Tom",
    //         Date: "2021-09-12",
    //         Description: "Dog is sick",
    //         Status: "Pending"
    //
    //     },
    //     {
    //         ComplaintID: "C-0004",
    //         UserID: "U-0004",
    //         PetID: "P-0004",
    //         PetName: "Jerry",
    //         Date: "2021-09-13",
    //         Description: "Dog is sick",
    //         Status: "Pending"
    //
    //     },
    //     {
    //         ComplaintID: "C-0005",
    //         UserID: "U-0005",
    //         PetID: "P-0005",
    //         PetName: "Spike",
    //         Date: "2021-09-14",
    //         Description: "Dog is sick",
    //         Status: "Pending"
    //
    //     },
    //     {
    //         ComplaintID: "C-0006",
    //         UserID: "U-0006",
    //         PetID: "P-0006",
    //         PetName: "Scooby",
    //         Date: "2021-09-15",
    //         Description: "Dog is sick",
    //         Status: "Pending"
    //
    //     },
    //     {
    //         ComplaintID: "C-0007",
    //         UserID: "U-0007",
    //         PetID: "P-0007",
    //         PetName: "Rover",
    //         Date: "2021-09-16",
    //         Description: "Dog is sick",
    //         Status: "Pending"
    //
    //     },
    //     {
    //         ComplaintID: "C-0008",
    //         UserID: "U-0008",
    //         PetID: "P-0008",
    //         PetName: "Bruno",
    //         Date: "2021-09-17",
    //         Description: "Dog is sick",
    //         Status: "Pending"
    //     },
    //     {
    //         ComplaintID: "C-0009",
    //         UserID: "U-0009",
    //         PetID: "P-0009",
    //         PetName: "Bruno",
    //         Date: "2021-09-17",
    //         Description: "Dog is sick",
    //         Status: "Pending"
    //     }
    // ];

    //  for lost & found  sample data for lost and found const data, title, img , id , petid , petname , date
    //
    // const data = [
    //     {
    //         title: "Lost Dog",
    //         img: "src/assets/dog2.png",
    //         id: "L-0001",
    //         petName: "P-0001",
    //         location: "Rex",
    //         date: "2021-09-10",
    //     },
    //     {
    //         title: "Lost Dog",
    //         img: "src/assets/dog2.png",
    //         id: "L-0002",
    //         petName: "P-0002",
    //         location: "Max",
    //         date: "2021-09-11",
    //     },
    //     {
    //         title: "Lost Dog",
    //         img: "src/assets/dog2.png",
    //         id: "L-0003",
    //         petName: "P-0003",
    //         location: "Tom",
    //         date: "2021-09-12",
    //     },
    //     {
    //         title: "Lost Dog",
    //         img: "src/assets/dog2.png",
    //         id: "L-0004",
    //         petName: "P-0004",
    //         location: "Jerry",
    //         date: "2021-09-13",
    //     },
    //     {
    //         title: "Lost Dog",
    //         img: "src/assets/dog2.png",
    //         id: "L-0005",
    //         petName: "P-0005",
    //         location: "Spike",
    //         date: "2021-09-14",
    //     },
    //     {
    //         title: "Lost Dog",
    //         img: "src/assets/dog2.png",
    //         id: "L-0006",
    //         petName: "P-0006",
    //         location: "Scooby",
    //         date: "2021-09-15",
    //     },
    //     {
    //         title: "Lost Dog",
    //         img: "src/assets/dog2.png",
    //         id: "L-0007",
    //         petName: "P-0007",
    //         location: "Rover",
    //         date: "2021-09-16",
    //     },
    //     {
    //         title: "Lost Dog",
    //         img: "src/assets/dog2.png",
    //         id: "L-0008",
    //         petName: "P-0008",
    //         location: "Bruno",
    //         date: "2021-09-17",
    //     },
    //     {
    //         title: "Lost Dog",
    //         img: "src/assets/dog2.png",
    //         id: "L-0009",
    //         petName: "P-0009",
    //         location: "Bruno",
    //         date: "2021-09-17",
    //     },
    //     {
    //         title: "Lost Dog",
    //         img: "src/assets/dog2.png",
    //         id: "L-0010",
    //         petName: "P-0010",
    //         location: "Bruno",
    //         date: "2021-09-17",
    //     },
    //     {
    //         title: "Lost Dog",
    //         img: "src/assets/dog2.png",
    //         id: "L-0011",
    //         petName: "P-0011",
    //         location: "Bruno",
    //         date: "2021-09-17",
    //     },
    //     {
    //         title: "Lost Dog",
    //         img: "src/assets/dog2.png",
    //         id: "L-0012",
    //         petName: "P-0012",
    //         location: "Bruno",
    //         date: "2021-09-17",
    //     },
    //     {
    //         title: "Lost Dog",
    //         img: "src/assets/dog2.png",
    //         id: "L-0013",
    //         petName: "P-0013",
    //         location: "Bruno",
    //         date: "2021-09-17",
    //     },
    //     {
    //         title: "Lost Dog",
    //         img: "src/assets/dog2.png",
    //         id: "L-0014",
    //         petName: "P-0014",
    //         location: "Bruno",
    //         date: "2021-09-17",
    //     }
    // ];


    return (<div>
        <NavBar></NavBar>
        <div className={'h-56 w-full bg-red-500'}></div>


        {/*<ViewLostAndFound list={data}></ViewLostAndFound>*/}


        {/*<ViewComplaint data={data} columns={sampleColumns} />*/}


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
