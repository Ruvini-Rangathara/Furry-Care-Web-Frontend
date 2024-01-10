import CustomButton from "../../component/input/custom-button.tsx";
import VetCard from "../../component/VetCard.tsx";
import React from "react";
import { useNavigate } from "react-router-dom";


interface VetItem {
    Name: string;
    Img: string;
    Id: string;
    NIC: string;
    Contact: string;
    Location: string;
}

function ViewVet({list}: { list: VetItem[] }) {
    const navigate = useNavigate();

    const handleManage = (e: React.MouseEvent<HTMLButtonElement>) => {
        // Prevent the default form submission behavior
        e.preventDefault();
        console.log("button clicked.")
        navigate('/vet_form')
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className={'w-4/5 py-10 px-6 m-auto border-1 border-emerald-400 bg-emerald-50 my-6'}>
            <div className={'flex flex-row justify-center items-center'}>
                <p className={'text-[45px] text-[#071722] m-auto mx-0'}>Pet Care Veterinarians</p>
            </div>

            <div className={'border-1'}>
                <div className={'flex flex-row w-full max-h-fit justify-between overflow-y-scroll'}>
                    {list.map((item: VetItem) => (
                        <div className={'mx-6 my-10'}  key={item.Id}>
                            <VetCard item={item}/>
                        </div>

                    ))}
                </div>

            </div>

            <div className={'flex flex-row justify-end items-center pt-4 gap-4'}>
                <CustomButton borderColor={'#071722'} bgColor={'white'} hoverColor={'#071722'}
                              textColor={'#071722'} textHoverColor={'white'} text={'Veterinarian'}
                                onClick={handleManage}
                />
            </div>


        </div>);
}

export default ViewVet;
