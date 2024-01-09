// import {Button} from "@nextui-org/react";
import './App.css'
import NavBar from "./view/NavBar.tsx";
import Footer from "./view/Footer.tsx";
// import ViewLostAndFound from "./view/detail-view/ViewLostAndFound.tsx";
import ViewComplaint from "./view/detail-view/ViewComplaint.tsx";
import ViewDonation from "./view/detail-view/ViewDonation.tsx";
import ViewPetEvent from "./view/detail-view/ViewPetEvent.tsx";
import ViewOrganization from "./view/detail-view/ViewOrganization.tsx";
import ViewVet from "./view/detail-view/ViewVet.tsx";
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
import ViewPet from "./view/detail-view/ViewPet.tsx";

function App() {

    // for complaint regenerate the sample data with the following code
    const data = [
        {
            ComplaintID: "C-0001",
            Date: "2021-09-10",
            Location: "Panadura",
            Title: "Dog Harassment",
            Status: "Not Resolved",
        },
        {
            ComplaintID: "C-0002",
            Date: "2021-09-11",
            Location: "Colombo",
            Title: "Dog Harassment",
            Status: "Resolved",
        },
        {
            ComplaintID: "C-0003",
            Date: "2021-09-12",
            Location: "Galle",
            Title: "Dog Harassment",
            Status: "Not Resolved",
        },
        {
            ComplaintID: "C-0004",
            Date: "2021-09-13",
            Location: "Kandy",
            Title: "Dog Harassment",
            Status: "Not Resolved",
        },
        {
            ComplaintID: "C-0005",
            Date: "2021-09-14",
            Location: "Kurunegala",
            Title: "Dog Harassment",
            Status: "Resolved",
        },
        {
            ComplaintID: "C-0006",
            Date: "2021-09-15",
            Location: "Kegalle",
            Title: "Dog Harassment",
            Status: "Resolved",
        },
        {
            ComplaintID: "C-0007",
            Date: "2021-09-16",
            Location: "Gampaha",
            Title: "Dog Harassment",
            Status: "Not Resolved",
        },
        {
            ComplaintID: "C-0008",
            Date: "2021-09-17",
            Location: "Matara",
            Title: "Dog Harassment",
            Status: "Resolved",
        },
        {
            ComplaintID: "C-0009",
            Date: "2021-09-17",
            Location: "Anuradhapura",
            Title: "Dog Harassment",
            Status: "Not Resolved",
        },
        {
            ComplaintID: "C-0010",
            Date: "2021-09-17",
            Location: "Polonnaruwa",
            Title: "Dog Harassment",
            Status: "Not Resolved",
        }
    ];

    //  // for lost & found  sample data for lost and found const data, title, img , id , petid , petname , date
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



    // for Donation view, sample data for donation - DonationID, Date, Location, Donor, Receiver
    const donationData = [
        {
            DonationID: "D-0001",
            Date: "2021-09-10",
            Location: "Panadura",
            Donor: "John",
            Receiver: "James",
        },
        {
            DonationID: "D-0002",
            Date: "2021-09-11",
            Location: "Colombo",
            Donor: "John",
            Receiver: "James",
        },
        {
            DonationID: "D-0003",
            Date: "2021-09-12",
            Location: "Galle",
            Donor: "John",
            Receiver: "James",
        },
        {
            DonationID: "D-0004",
            Date: "2021-09-13",
            Location: "Kandy",
            Donor: "John",
            Receiver: "James",
        },
        {
            DonationID: "D-0005",
            Date: "2021-09-14",
            Location: "Kurunegala",
            Donor: "John",
            Receiver: "James",
        },
        {
            DonationID: "D-0006",
            Date: "2021-09-15",
            Location: "Kegalle",
            Donor: "John",
            Receiver: "James",
        },
        {
            DonationID: "D-0007",
            Date: "2021-09-16",
            Location: "Gampaha",
            Donor: "John",
            Receiver: "James",
        },
        {
            DonationID: "D-0008",
            Date: "2021-09-17",
            Location: "Matara",
            Donor: "John",
            Receiver: "James",
        },
        {
            DonationID: "D-0009",
            Date: "2021-09-17",
            Location: "Anuradhapura",
            Donor: "John",
            Receiver: "James",
        },
        {
            DonationID: "D-0010",
            Date: "2021-09-17",
            Location: "Polonnaruwa",
            Donor: "John",
            Receiver: "James",
        }
    ];


    // for Event view , sample data for event - EventID, Title, Location, Date, Time
    const eventData = [
        {
            EventID: "E-0001",
            Title: "Dog Show",
            Location: "Panadura",
            Date: "2021-09-10",
            Time: "10:00 AM",
        },
        {
            EventID: "E-0002",
            Title: "Dog Show",
            Location: "Colombo",
            Date: "2024-09-11",
            Time: "10:00 AM",
        },
        {
            EventID: "E-0003",
            Title: "Dog Show",
            Location: "Galle",
            Date: "2021-09-12",
            Time: "10:00 AM",
        },
        {
            EventID: "E-0004",
            Title: "Dog Show",
            Location: "Kandy",
            Date: "2024-09-13",
            Time: "10:00 AM",
        },
        {
            EventID: "E-0005",
            Title: "Dog Show",
            Location: "Kurunegala",
            Date: "2024-09-14",
            Time: "10:00 AM",
        },
        {
            EventID: "E-0006",
            Title: "Dog Show",
            Location: "Kegalle",
            Date: "2021-09-15",
            Time: "10:00 AM",
        },
        {
            EventID: "E-0007",
            Title: "Dog Show",
            Location: "Gampaha",
            Date: "2021-09-16",
            Time: "10:00 AM",
        },
        {
            EventID: "E-0008",
            Title: "Dog Show",
            Location: "Matara",
            Date: "2024-09-17",
            Time: "10:00 AM",
        },
        {
            EventID: "E-0009",
            Title: "Dog Show",
            Location: "Anuradhapura",
            Date: "2024-09-17",
            Time: "10:00 AM",
        },
        {
            EventID: "E-0010",
            Title: "Dog Show",
            Location: "Polonnaruwa",
            Date: "2021-09-17",
            Time: "10:00 AM",
        }
    ];

    //for Organization, sample data for organization - Name, Img, Id, Contact, Location
    const orgData = [
        {
            Name: "Animal Welfare Association",
            Img: "src/assets/org-image.jpg",
            Id: "O-0001",
            Contact: "0771234567",
            Location: "Panadura",
        },
        {
            Name: "Animal Welfare Association",
            Img: "src/assets/org-image.jpg",
            Id: "O-0002",
            Contact: "0771234567",
            Location: "Colombo",
        },
        {
            Name: "Animal Welfare Association",
            Img: "src/assets/org-image.jpg",
            Id: "O-0003",
            Contact: "0771234567",
            Location: "Galle",
        },
        {
            Name: "Animal Welfare Association",
            Img: "src/assets/org-image.jpg",
            Id: "O-0004",
            Contact: "0771234567",
            Location: "Kandy",
        },
        {
            Name: "Animal Welfare Association",
            Img: "src/assets/org-image.jpg",
            Id: "O-0005",
            Contact: "0771234567",
            Location: "Kurunegala",
        },
        {
            Name: "Animal Welfare Association",
            Img: "src/assets/org-image.jpg",
            Id: "O-0006",
            Contact: "0771234567",
            Location: "Kegalle",
        },
        {
            Name: "Animal Welfare Association",
            Img: "src/assets/org-image.jpg",
            Id: "O-0007",
            Contact: "0771234567",
            Location: "Gampaha",
        },
        {
            Name: "Animal Welfare Association",
            Img: "src/assets/org-image.jpg",
            Id: "O-0008",
            Contact: "0771234567",
            Location: "Matara",
        },
        {
            Name: "Animal Welfare Association",
            Img: "src/assets/org-image.jpg",
            Id: "O-0009",
            Contact: "0771234567",
            Location: "Anuradhapura",
        },
        {
            Name: "Animal Welfare Association",
            Img: "src/assets/org-image.jpg",
            Id: "O-0010",
            Contact: "0771234567",
            Location: "Polonnaruwa",
        }
    ];

    //for Vet view, sample data for vet - Name, Img, Id, NIC, Contact, Location
    const vetData = [
        {
            Name: "Dr. John",
            Img: "src/assets/vet2.jpeg",
            Id: "V-0001",
            NIC: "123456789V",
            Contact: "0771234567",
            Location: "Panadura",
        },
        {
            Name: "Dr. John",
            Img: "src/assets/vet2.jpeg",
            Id: "V-0002",
            NIC: "123456789V",
            Contact: "0771234567",
            Location: "Colombo",
        },
        {
            Name: "Dr. John",
            Img: "src/assets/vet2.jpeg",
            Id: "V-0003",
            NIC: "123456789V",
            Contact: "0771234567",
            Location: "Galle",
        },
        {
            Name: "Dr. John",
            Img: "src/assets/vet2.jpeg",
            Id: "V-0004",
            NIC: "123456789V",
            Contact: "0771234567",
            Location: "Kandy",
        },
        {
            Name: "Dr. John",
            Img: "src/assets/vet2.jpeg",
            Id: "V-0005",
            NIC: "123456789V",
            Contact: "0771234567",
            Location: "Kurunegala",
        },
        {
            Name: "Dr. John",
            Img: "src/assets/vet2.jpeg",
            Id: "V-0006",
            NIC: "123456789V",
            Contact: "0771234567",
            Location: "Kegalle",
        },
        {
            Name: "Dr. John",
            Img: "src/assets/vet2.jpeg",
            Id: "V-0007",
            NIC: "123456789V",
            Contact: "0771234567",
            Location: "Gampaha",
        },
        {
            Name: "Dr. John",
            Img: "src/assets/vet2.jpeg",
            Id: "V-0008",
            NIC: "123456789V",
            Contact: "0771234567",
            Location: "Matara",
        }
        ];

    //for Pet view, sample data for pet - Name, Img, Id, Breed, Colors, Owner
    const petData = [
        {
            Name: "Rex",
            Img: "src/assets/dog2.png",
            Id: "P-0001",
            Breed: "German Shepherd",
            Colors: "Black",
            Owner: "Has Owner",
        },
        {
            Name: "Max",
            Img: "src/assets/dog2.png",
            Id: "P-0002",
            Breed: "German Shepherd",
            Colors: "Black",
            Owner: "Hasn't Owner",
        },
        {
            Name: "Tom",
            Img: "src/assets/dog2.png",
            Id: "P-0003",
            Breed: "German Shepherd",
            Colors: "Black",
            Owner: "Hasn't Owner",
        },
        {
            Name: "Jerry",
            Img: "src/assets/dog2.png",
            Id: "P-0004",
            Breed: "German Shepherd",
            Colors: "Black",
            Owner: "Has Owner",
        },
        {
            Name: "Spike",
            Img: "src/assets/dog2.png",
            Id: "P-0005",
            Breed: "German Shepherd",
            Colors: "Black",
            Owner: "Has Owner",
        },
        {
            Name: "Scooby",
            Img: "src/assets/dog2.png",
            Id: "P-0006",
            Breed: "German Shepherd",
            Colors: "Black",
            Owner: "Hasn't Owner",
        },
        {
            Name: "Rover",
            Img: "src/assets/dog2.png",
            Id: "P-0007",
            Breed: "German Shepherd",
            Colors: "Black",
            Owner: "Has Owner",
        },
        {
            Name: "Bruno",
            Img: "src/assets/dog2.png",
            Id: "P-0008",
            Breed: "German Shepherd",
            Colors: "Black",
            Owner: "Hasn't Owner",
        }
    ];


    return (<div>
        <NavBar></NavBar>
        <div className={'h-56 w-full bg-red-500'}></div>

        <ViewOrganization list={orgData}></ViewOrganization>

        <div className={'h-56 w-full bg-red-500'}></div>

        <ViewPet list={petData}></ViewPet>

        <div className={'h-56 w-full bg-red-500'}></div>

        <ViewVet list={vetData}></ViewVet>


        {/*<ViewLostAndFound list={data}></ViewLostAndFound>*/}

        <ViewPetEvent data={eventData}></ViewPetEvent>

        <div className={'h-56 w-full bg-red-500'}></div>

        <ViewComplaint data={data}/>

        <div className={'h-56 w-full bg-red-500'}></div>

        <ViewDonation data={donationData}></ViewDonation>


        {/*<Login></Login>*/}
        {/*<div className={'h-56 w-full bg-red-500'}></div>*/}
        {/*<About></About>*/}

        {/*<PetForm></PetForm>*/}


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
