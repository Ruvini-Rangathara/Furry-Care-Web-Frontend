// import {useState} from "react";
// import {IoCloseOutline} from "react-icons/io5";
// import Input from "../../component/input/input.tsx";
// import Select from "../../component/input/combo-box.tsx";
// import CustomButton from "../../component/input/custom-button.tsx";
// import {useNavigate} from "react-router-dom";
// import axiosInstance from "../../config/AxiosInstance.ts";
// import Swal from "sweetalert2";
//
// const userId: string = `U-0001`;
//
// function PetForm() {
//     const navigate = useNavigate();
//     const [petId, setPetId] = useState<string>('');
//     const handlePetIdChange = (newValue:string) => {
//         setPetId(newValue)
//     }
//
//
//     const [selectedImage, setSelectedImage] = useState<File | null>(null);
//     const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         const imageFile = event.target.files && event.target.files[0];
//
//         if (imageFile) {
//             const petProfileImage = document.getElementById('pet-profile') as HTMLImageElement;
//             const imageUrl = URL.createObjectURL(imageFile);
//             petProfileImage.src = imageUrl;
//             setSelectedImage(imageFile);
//             console.log(selectedImage?.name);
//         }
//     };
//
//     const [isFormVisible, setFormVisibility] = useState(true);
//     const handleCloseForm = () => {
//         setFormVisibility(false);
//         navigate('/view_pet');
//         window.scrollTo({top: 0, behavior: 'smooth'});
//     };
//
//     return (<>
//         {isFormVisible && (<div>
//                 <div className={'flex flex-col justify-center items-center '} id={'pet-form'}>
//                     <p className={'text-[45px] text-[#071722] mt-14'}>Pet Details</p>
//                     <p className={'text-[18px] text-[#071722] pb-3 px-4'}>
//                         "Manage medical history, dietary preferences, and more for stress-free, comprehensive pet care."
//                     </p>
//                 </div>
//                 <form
//                     className="w-full m-auto mt-3 py-12 mb-20 bg-gray-100
//             flex flex-col gap-3 text-[#071722] text-[18px] pr-14 pl-14 border-gray-300 border-[1px] rounded-2xl">
//
//                     <div className={'flex flex-row justify-end items-center mt-2'}>
//                         <label className={'text-[18px] m-auto mr-6 bg-gray-300 px-5 py-1 rounded-lg '}>User ID
//                             : {userId}</label>
//                         <IoCloseOutline className={'text-[#071722] text-[35px] cursor-pointer'}
//                                         onClick={handleCloseForm}/>
//                     </div>
//
//                     <div className={'flex'}>
//                         <div className={'flex flex-col justify-center items-center mr-4'}>
//
//                             <img className={' w-56 h-56 border border-gray-300 m-auto rounded-[500px]'}
//                                  src={'src/assets/dog-image1.jpeg'}
//                                  alt={'Dog Image'}
//                                  id={'pet-profile'}
//                             ></img>
//
//                             <div className="flex flex-col justify-center items-center mb-28 rounded-lg cursor-pointer">
//                                 <input type="file" id="image" accept="image/*" onChange={handleImageChange}
//                                        className={'border-gray-200 border-[1px] w-3/4'}/>
//                             </div>
//
//                         </div>
//
//                         <div>
//                             <div className={'flex flex-row gap-4'}>
//                                 <Input label={"Pet ID : "} name={'id'} type={'text'} optional={false}
//                                        placeholder={'P-0001'} value={petId} onChange={handlePetIdChange}></Input>
//                                 <Input label={"Pet Type : "} name={'type'} type={'text'} optional={false}
//                                        placeholder={'Ex:Dog'} />
//                                 <Input type={'text'} name={'name'} label={'Pet Name : '} optional={true}
//                                        placeholder={'Ex:Rex'} />
//                             </div>
//
//
//                             <div className={'flex flex-row gap-4'}>
//                                 <Input type={'number'} name={'age'} label={'Age : '} optional={true}
//                                        placeholder={'Ex:2'}/>
//                                 <Input type={'text'} name={'breed'} label={'Breed : '} optional={true}
//                                        placeholder={'Ex:German Shepherd'} />
//                                 <Input type={'text'} name={'color'} label={'Colors : '} optional={true}
//                                        placeholder={'Ex:Brown,Black'}/>
//
//                             </div>
//
//
//                             <div className={'flex flex-row gap-4'}>
//                                 <Select name={'ownership'} label={'Ownership Status : '}
//                                         options={['Has Owner', 'No Owner']}
//                                         optional={false} id={'ownership'}/>
//                                 <Select name={'injured'} label={'Injured Status  :'}
//                                         options={['Injured', 'Not Injured']}
//                                         optional={false} id={'injured'}/>
//                             </div>
//
//
//                             <div className={'flex flex-row gap-4 mt-2 ml-48'}>
//                                 <div>
//                                     <img className={'w-32 h-32 mt-4'} src={'src/assets/logo-pet-care.png'}></img>
//                                 </div>
//                                 <div className={'mt-6 ml-12'}>
//
//                                     <div className="flex gap-2 justify-center mt-8">
//                                         <CustomButton borderColor={'#071722'} bgColor={'white'} hoverColor={'#071722'}
//                                                       textColor={'#071722'} textHoverColor={'white'} text={'Save'}
//                                                       onClick={savePet}/>
//                                         <CustomButton borderColor={'#59AE4B'} bgColor={'white'} hoverColor={'#59AE4B'}
//                                                       textColor={'#59AE4B'} textHoverColor={'white'} text={'Update'}
//                                                       onClick={updatePet}/>
//                                         <CustomButton borderColor={'#D75555'} bgColor={'white'} hoverColor={'#D75555'}
//                                                       textColor={'#D75555'} textHoverColor={'white'} text={'Delete'}
//                                                       onClick={deletePet}/>
//                                     </div>
//                                     <div className="flex gap-2 justify-center mt-3">
//                                         <CustomButton borderColor={'#A8A5A5'} bgColor={'white'} hoverColor={'#A8A5A5'}
//                                                       textColor={'#A8A5A5'} textHoverColor={'white'}
//                                                       text={'Health Record'}/>
//                                     </div>
//
//                                 </div>
//                             </div>
//
//
//                         </div>
//
//                     </div>
//
//
//                 </form>
//             </div>)}
//     </>);
// }
//
// const savePet = async () => {
//     const petId = document.getElementById('pet-id') as HTMLInputElement;
//     const petType = document.getElementById('type') as HTMLInputElement;
//     const petName = document.getElementById('name') as HTMLInputElement;
//     const petAge = document.getElementById('age') as HTMLInputElement;
//     const petBreed = document.getElementById('breed') as HTMLInputElement;
//     const petColor = document.getElementById('color') as HTMLInputElement;
//     const petOwnership = document.getElementById('ownership') as HTMLInputElement;
//     const petInjured = document.getElementById('injured') as HTMLInputElement;
//
//     const pet = {
//         id: petId.value,
//         petType: petType.value,
//         name: petName.value,
//         age: parseInt(petAge.value),
//         breed: petBreed.value,
//         colors: petColor.value,
//         ownershipStatus: petOwnership.value,
//         injuredStatus: petInjured.value,
//         username: 'username1'
//     };
//
//     try {
//         // Assuming axiosInstance is properly configured with your backend base URL
//         await axiosInstance.post('/pet/add', pet);
//         Swal.fire({
//             icon: 'success',
//             title: 'Pet Details Saved Successfully',
//             showConfirmButton: false,
//             timer: 1500
//         }).then(() => {
//             window.location.reload();
//         });
//         clearForm();
//     } catch (e) {
//         console.error(e);
//         Swal.fire({
//             icon: 'error',
//             title: 'Oops...',
//             text: 'Something went wrong!',
//             footer: '<a href="">Why do I have this issue?</a>'
//         }).then(() => {
//             window.location.reload();
//         });
//     }
// };
//
// const clearForm = () => {
//     const petId = document.getElementById('id') as HTMLInputElement;
//     const petType = document.getElementById('type') as HTMLInputElement;
//     const petName = document.getElementById('name') as HTMLInputElement;
//     const petAge = document.getElementById('age') as HTMLInputElement;
//     const petBreed = document.getElementById('breed') as HTMLInputElement;
//     const petColor = document.getElementById('color') as HTMLInputElement;
//     const petOwnership = document.getElementById('ownership') as HTMLInputElement;
//     const petInjured = document.getElementById('injured') as HTMLInputElement;
//
//     petId.value = '';
//     petType.value = '';
//     petName.value = '';
//     petAge.value = '';
//     petBreed.value = '';
//     petColor.value = '';
//     petOwnership.value = '';
//     petInjured.value = '';
// }
//
// const updatePet = async () => {
//     const petId = document.getElementById('pet-id') as HTMLInputElement;
//     const petType = document.getElementById('type') as HTMLInputElement;
//     const petName = document.getElementById('name') as HTMLInputElement;
//     const petAge = document.getElementById('age') as HTMLInputElement;
//     const petBreed = document.getElementById('breed') as HTMLInputElement;
//     const petColor = document.getElementById('color') as HTMLInputElement;
//     const petOwnership = document.getElementById('ownership') as HTMLInputElement;
//     const petInjured = document.getElementById('injured') as HTMLInputElement;
//
//     const pet = {
//         id: petId.value,
//         petType: petType.value,
//         name: petName.value,
//         age: parseInt(petAge.value),
//         breed: petBreed.value,
//         colors: petColor.value,
//         ownershipStatus: petOwnership.value,
//         injuredStatus: petInjured.value,
//         username: 'username1'
//     };
//
//     try {
//         // Assuming axiosInstance is properly configured with your backend base URL
//         await axiosInstance.post('/pet/update', pet);
//         Swal.fire({
//             icon: 'success',
//             title: 'Pet Details Updated Successfully',
//             showConfirmButton: false,
//             timer: 1500
//         }).then(() => {
//             window.location.reload();
//         });
//         clearForm();
//     } catch (e) {
//         console.error(e);
//         Swal.fire({
//             icon: 'error',
//             title: 'Oops...',
//             text: 'Something went wrong!',
//             footer: '<a href="">Why do I have this issue?</a>'
//         }).then(() => {
//             window.location.reload();
//         });
//     }
// }
//
// const deletePet = async () => {
//     const petId = document.getElementById('pet-id') as HTMLInputElement;
//
//     const pet = {
//         id: petId.value,
//     };
//
//     try {
//         // Assuming axiosInstance is properly configured with your backend base URL
//         await axiosInstance.post('/pet/delete', pet);
//         Swal.fire({
//             icon: 'success',
//             title: 'Pet Details Deleted Successfully',
//             showConfirmButton: false,
//             timer: 1500
//         }).then(() => {
//             window.location.reload();
//         });
//         clearForm();
//     } catch (e) {
//         console.error(e);
//         Swal.fire({
//             icon: 'error',
//             title: 'Oops...',
//             text: 'Something went wrong!',
//             footer: '<a href="">Why do I have this issue?</a>'
//         }).then(() => {
//             window.location.reload();
//         });
//     }
// }
//
//
// export default PetForm;


import React, {useState} from "react";
import {IoCloseOutline} from "react-icons/io5";
import Input from "../../component/input/input.tsx";
import Select from "../../component/input/combo-box.tsx";
import CustomButton from "../../component/input/custom-button.tsx";
import {useNavigate} from "react-router-dom";
// import axiosInstance from "../../config/AxiosInstance.ts";
import Swal from "sweetalert2";
import axios from "axios";

const userId: string = `username1`;

function PetForm() {
    const navigate = useNavigate();

    const [petId, setPetId] = useState<string>("");
    const [selectedImage, setSelectedImage] = useState<File | null>(null);

    const [petType, setPetType] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [age, setAge] = useState<number>(0);
    const [breed, setBreed] = useState<string>("");
    const [colors, setColors] = useState<string>("");
    const [ownershipStatus, setOwnershipStatus] = useState<string>("");
    const [injuredStatus, setInjuredStatus] = useState<string>("");


    const handlePetIdChange = async (newValue: string) => {
        setPetId(newValue);
    };


    //when press enter on pet id input, search pet by id
    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        console.log("handle key press before fill form ")
        if (e.key === 'Enter') {
            searchById().then(r =>
                console.log(r)
            );
        }
    };

    const searchById = async () => {
        console.log("fill form")
        try {

            const config = {
                method: 'get',
                maxBodyLength:
                Infinity,
                url: 'http://localhost:3000/api/pet/getById/'+petId,
            };

            axios.request(config)
                .then((response) => {
                    const data = response.data;

                    console.log(JSON.stringify(data));
                    console.log("pet id  : ",data.id)
                    console.log("pet type  : ",data.petType)

                    //set data into text fields
                    setPetId(data.id);
                    setPetType(data.petType);
                    setName(data.name);
                    setAge(data.age);
                    setBreed(data.breed);
                    setColors(data.colors);


                })
                .catch((error) => {
                    console.log(error);
                });
        } catch (error) {
            console.error(error);
            await Swal.fire({
                icon: "error", title: "Error Fetching Pet Details", text: "Please try again.",
            });
            clearForm();
        }
    }


    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const imageFile = event.target.files && event.target.files[0];

        if (imageFile) {
            const petProfileImage = document.getElementById("pet-profile") as HTMLImageElement;
            const imageUrl = URL.createObjectURL(imageFile);
            petProfileImage.src = imageUrl;
            setSelectedImage(imageFile);
            console.log(selectedImage?.name);
        }
    };

    const [isFormVisible, setFormVisibility] = useState(true);

    const handleCloseForm = () => {
        setFormVisibility(false);
        navigate("/view_pet");
        window.scrollTo({top: 0, behavior: "smooth"});
    };

    const clearForm = () => {
        setPetId("");
        setPetType("");
        setName("");
        setAge(0);
        setBreed("");
        setColors("");
        setOwnershipStatus("");
        setInjuredStatus("");
        setSelectedImage(null);
    };


    // ========================================= save pet ==========================================
    const savePet = async () => {
        const pet = {
            id: petId,
            petType: petType,
            name: name,
            age: age,
            breed: breed,
            colors: colors,
            ownershipStatus: ownershipStatus,
            injuredStatus: injuredStatus,
            username: userId
        };

        try {
            // await axiosInstance.post("/pet/add", pet);
            await axios.post("http://localhost:3000/api/pet/add", pet);
            Swal.fire({
                icon: "success", title: "Pet Details Saved Successfully", showConfirmButton: false, timer: 1500,
            }).then(() => {
                window.location.reload();
            });
            clearForm();
        } catch (e) {
            console.error(e);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                footer: '<a href="">Why do I have this issue?</a>',
            }).then(() => {
                window.location.reload();
            });
        }
    };

    // ============================================ update pet ==========================================
    const updatePet = async () => {
        const pet = {
            id: petId,
            petType: petType,
            name: name,
            age: age,
            breed: breed,
            colors: colors,
            ownershipStatus: ownershipStatus,
            injuredStatus: injuredStatus,
            username: userId
        };

        try {
            await axios.put("http://localhost:8000/api/pet/update/"+petId , pet)
            Swal.fire({
                icon: "success", title: "Pet Details Updated Successfully", showConfirmButton: false, timer: 1500,
            }).then(() => {
                window.location.reload();
            });
            clearForm();
        } catch (e) {
            console.error(e);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                footer: '<a href="">Why do I have this issue?</a>',
            }).then(() => {
                window.location.reload();
            });
        }
    };


    // ============================================ delete pet ===============================================
    const deletePet = async () => {
        const pet = {
            id: petId,
        };

        try {
            await axios.delete("http://localhost:3000/api/pet/delete/"+petId, {data: pet})
            Swal.fire({
                icon: "success", title: "Pet Details Deleted Successfully", showConfirmButton: false, timer: 1500,
            }).then(() => {
                window.location.reload();
            });
            clearForm();
        } catch (e) {
            console.error(e);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                footer: '<a href="">Why do I have this issue?</a>',
            }).then(() => {
                window.location.reload();
            });
        }
    };



    // ======================================================================================================
    return (<>
        {isFormVisible && (<div>
            <div className={"flex flex-col justify-center items-center "} id={"pet-form"}>
                <p className={"text-[45px] text-[#071722] mt-14"}>Pet Details</p>
                <p className={"text-[18px] text-[#071722] pb-3 px-4"}>
                    "Manage medical history, dietary preferences, and more for stress-free, comprehensive pet
                    care."
                </p>
            </div>
            <form
                className="w-full m-auto mt-3 py-12 mb-20 bg-gray-100
            flex flex-col gap-3 text-[#071722] text-[18px] pr-14 pl-14 border-gray-300 border-[1px] rounded-2xl"
            >
                <div className={"flex flex-row justify-end items-center mt-2"}>
                    <label className={"text-[18px] m-auto mr-6 bg-gray-300 px-5 py-1 rounded-lg"}>
                        User ID : {userId}
                    </label>
                    <IoCloseOutline className={"text-[#071722] text-[35px] cursor-pointer"}
                                    onClick={handleCloseForm}/>
                </div>
                <div className={"flex"}>
                    <div className={"flex flex-col justify-center items-center mr-4"}>
                        <img
                            className={" w-56 h-56 border border-gray-300 m-auto rounded-[500px]"}
                            src={"src/assets/dog-image1.jpeg"}
                            alt={"Dog Image"}
                            id={"pet-profile"}
                        ></img>
                        <div
                            className="flex flex-col justify-center items-center mb-28 rounded-lg cursor-pointer">
                            <input
                                type="file"
                                id="image"
                                accept="image/*"
                                onChange={handleImageChange}
                                className={"border-gray-200 border-[1px] w-3/4"}
                            />
                        </div>
                    </div>
                    <div>
                        <div className={"flex flex-row gap-4"}>
                            <Input
                                label={"Pet ID : "}
                                name={"id"}
                                type={"text"}
                                optional={false}
                                placeholder={"P-0001"}
                                value={petId}
                                onChange={(e) => handlePetIdChange(e)}
                                onKeyDown={(e) => handleKeyPress(e)}
                            ></Input>
                            <Input label={"Pet Type : "} name={"type"} type={"text"} optional={false}
                                   placeholder={"Ex:Dog"}/>
                            <Input type={"text"} name={"name"} label={"Pet Name : "} optional={true}
                                   placeholder={"Ex:Rex"}/>
                        </div>
                        <div className={"flex flex-row gap-4"}>
                            <Input type={"number"} name={"age"} label={"Age : "} optional={true}
                                   placeholder={"Ex:2"}/>
                            <Input type={"text"} name={"breed"} label={"Breed : "} optional={true}
                                   placeholder={"Ex:German Shepherd"}/>
                            <Input type={"text"} name={"color"} label={"Colors : "} optional={true}
                                   placeholder={"Ex:Brown,Black"}/>
                        </div>
                        <div className={"flex flex-row gap-4"}>
                            <Select
                                name={"ownership"}
                                label={"Ownership Status :"}
                                options={["Has Owner", "No Owner"]}
                                optional={false}
                                id={"ownership"}
                            />
                            <Select
                                name={"injured"}
                                label={"Injured Status :"}
                                options={["Injured", "Not Injured"]}
                                optional={false}
                                id={"injured"}
                            />
                        </div>
                        <div className={"flex flex-row gap-4 mt-2 ml-48"}>
                            <div>
                                <img className={"w-32 h-32 mt-4"} src={"src/assets/logo-pet-care.png"}
                                     alt={"Pet Care Logo"}></img>
                            </div>
                            <div className={"mt-6 ml-12"}>
                                <div className="flex gap-2 justify-center mt-8">
                                    <CustomButton
                                        borderColor={"#071722"}
                                        bgColor={"white"}
                                        hoverColor={"#071722"}
                                        textColor={"#071722"}
                                        textHoverColor={"white"}
                                        text={"Save"}
                                        onClick={savePet}
                                    />
                                    <CustomButton
                                        borderColor={"#59AE4B"}
                                        bgColor={"white"}
                                        hoverColor={"#59AE4B"}
                                        textColor={"#59AE4B"}
                                        textHoverColor={"white"}
                                        text={"Update"}
                                        onClick={updatePet}
                                    />
                                    <CustomButton
                                        borderColor={"#D75555"}
                                        bgColor={"white"}
                                        hoverColor={"#D75555"}
                                        textColor={"#D75555"}
                                        textHoverColor={"white"}
                                        text={"Delete"}
                                        onClick={deletePet}
                                    />
                                </div>
                                <div className="flex gap-2 justify-center mt-3">
                                    <CustomButton
                                        borderColor={"#A8A5A5"}
                                        bgColor={"white"}
                                        hoverColor={"#A8A5A5"}
                                        textColor={"#A8A5A5"}
                                        textHoverColor={"white"}
                                        text={"Health Record"}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>)}
    </>);
}

export default PetForm;
