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


import {ChangeEvent, useState} from "react";
import {IoCloseOutline} from "react-icons/io5";
import Input from "../../component/input/input.tsx";
import Select from "../../component/input/combo-box.tsx";
import CustomButton from "../../component/input/custom-button.tsx";
import Swal from "sweetalert2";
import axios from "axios";

const userId: string = `username1`;


function PetForm() {

    const [petId, setPetId] = useState<string>("");
    // const [selectedImage, setSelectedImage] = useState<File | null>(null);

    const [petType, setPetType] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [age, setAge] = useState<number>(0);
    const [breed, setBreed] = useState<string>("");
    const [colors, setColors] = useState<string>("");
    const [ownershipStatus, setOwnershipStatus] = useState('');
    const [injuredStatus, setInjuredStatus] = useState('');
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        console.log(selectedImage?.length)

        const file = e.target.files?.[0];

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const result = reader.result as string; // Asserting the type to string
                setSelectedImage(result);
            };
            reader.readAsDataURL(file);
        }
    };



    const handleOwnershipChange = (selectedValue: string) => {
        setOwnershipStatus(selectedValue);
        console.log("Selected Value : ", ownershipStatus)
    };

    const handleInjuredStatus = (selectedValue: string) => {
        setInjuredStatus(selectedValue);
        console.log("Selected Value : ", injuredStatus)
    };

    const handleInputs = (e: React.ChangeEvent<HTMLInputElement>, type: string) => {
        switch (type) {
            case 'petId':
                setPetId(e.target.value);
                break;
            case 'name':
                setName(e.target.value);
                break;
            case 'age':
                setAge(parseInt(e.target.value, 10) || 0);
                break;
            case 'breed':
                setBreed(e.target.value);
                break;
            case 'type':
                setPetType(e.target.value);
                break;
            case 'colors':
                setColors(e.target.value);
                break;
            default :
                break;
        }
    }


    // ===============================================================================================
    const clearForm = () => {
        setPetId("");
        setPetType("");
        setName("");
        setAge(0);
        setBreed("");
        setColors("");
    }

    const validateSubmission = () => {
        if (petId && petType && name && age && breed && colors) {
            console.log("Valid Inputs");
            return true;
        } else {
            Swal.fire({
                icon: "error", title: "Invalid Inputs", text: "Please enter valid inputs"
            });
            return false;
        }
    }

    const savePet = () => {
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

        if (validateSubmission()) {
            axios.post("http://localhost:3000/api/pet/add", pet)
                .then(response => {
                    Swal.fire({
                        icon: "success", title: "Success!", text: "Pet saved successfully : " + response.data
                    });
                    clearForm()
                })
                .catch(err => {
                    // Check if the error is a MongoDB duplicate key error
                    if (err.response && err.response.status === 500 && err.response.data && err.response.data.code === 11000) {
                        Swal.fire({
                            icon: "error", title: "Error!", text: "Pet with the same ID already exists."
                        });
                    } else {
                        Swal.fire({
                            icon: "error", title: "Sorry!", text: "Something went wrong. " + err
                        });
                    }
                });
        }
    };

    const updatePet = () => {
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

        if (validateSubmission()) {
            axios.put(`http://localhost:3000/api/pet/update/${petId}`, pet)
                .then((response) => {
                    if (response.status === 200) {
                        Swal.fire({
                            icon: "success", title: "Success!", text: "Pet updated successfully!"
                        });
                        clearForm()
                    } else {
                        Swal.fire({
                            icon: "error", title: "Sorry!", text: "Something went wrong. Please try again."
                        });
                    }
                })
                .catch((err) => {
                    Swal.fire({
                        icon: "error", title: "Sorry!", text: "Something went wrong. " + err
                    });
                });
        }
    };

    const deletePet = () => {
        if (validateSubmission()) {
            axios.delete(`http://localhost:3000/api/pet/delete/${petId}`)
                .then((response) => {
                    if (response.status === 200) {
                        Swal.fire({
                            icon: "success", title: "Success!", text: "Pet deleted successfully!"
                        });
                        clearForm()
                    } else {
                        Swal.fire({
                            icon: "error", title: "Sorry!", text: "Something went wrong. Please try again."
                        });
                    }
                })
                .catch((err) => {
                    Swal.fire({
                        icon: "error", title: "Sorry!", text: "Something went wrong. " + err
                    });
                });
        }
    };

    const searchPet = () => {
        console.log("Search Pet : ", petId);
        axios.get(`http://localhost:3000/api/pet/getById/${petId}`)
            .then((response) => {
                if (response.status === 200) {
                    Swal.fire({
                        icon: "success", title: "Success!", text: "Pet found successfully! : " + response.data
                    });
                    setPetType(response.data.petType);
                    setName(response.data.name);
                    setAge(response.data.age);
                    setBreed(response.data.breed);
                    setColors(response.data.colors);
                } else {
                    console.log("Response : ", response);
                    Swal.fire({
                        icon: "error", title: "Sorry!", text: "Something went wrong. Please try again."
                    });
                }
            })
            .catch((err) => {
                Swal.fire({
                    icon: "error", title: "Sorry!", text: "Something went wrong. " + err
                });
            });

    }


    // ======================================================================================================
    return (<>
        (
        <div>
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
                    />
                </div>
                <div className={"flex"}>
                    <div className={"flex flex-col justify-center items-center mr-4"}>
                        <img
                            className={" w-56 h-56 border border-gray-300 m-auto rounded-[500px]"}
                            src={selectedImage || "src/assets/dog-image1.jpeg"}
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
                                type={"text"}
                                optional={false}
                                placeholder={"P-0001"}
                                value={petId}
                                callBack={handleInputs}
                                name={'petId'}
                                onKeyDown={searchPet}
                            >
                            </Input>
                            <Input
                                label={"Pet Type : "}
                                type={"text"}
                                optional={false}
                                placeholder={"Ex:Dog"}
                                value={petType}
                                callBack={handleInputs}
                                name={'type'}
                            />
                            <Input
                                type={"text"}
                                label={"Pet Name : "}
                                optional={true}
                                placeholder={"Ex:Rex"}
                                value={name}
                                callBack={handleInputs}
                                name={'name'}

                            />
                        </div>
                        <div className={"flex flex-row gap-4"}>
                            <Input
                                type={"text"}
                                label={"Age : "}
                                optional={true}
                                placeholder={"Ex:2"}
                                callBack={handleInputs}
                                name={'age'}
                                value={age.toString()}

                            />
                            <Input
                                type={"text"}
                                label={"Breed : "}
                                optional={true}
                                placeholder={"Ex:German Shepherd"}
                                value={breed}
                                callBack={handleInputs}
                                name={'breed'}
                            />
                            <Input
                                type={"text"}
                                label={"Colors : "}
                                optional={true}
                                placeholder={"Ex:Brown,Black"}
                                value={colors}
                                callBack={handleInputs}
                                name={'colors'}
                            />
                        </div>
                        <div className={"flex flex-row gap-4"}>
                            <Select
                                name={"ownership"}
                                label={"Ownership Status :"}
                                options={["Has Owner", "Hasn't Owner"]}
                                optional={false}
                                id={"ownership"}
                                onChange={handleOwnershipChange}
                            />
                            <Select
                                name={"injured"}
                                label={"Injured Status :"}
                                options={["Injured", "Not Injured"]}
                                optional={false}
                                id={"injured"}
                                onChange={handleInjuredStatus}
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
        </div>
    </>);
}


export default PetForm;
