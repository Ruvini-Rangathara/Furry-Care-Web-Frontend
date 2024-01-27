import { useEffect, useState } from "react";
import CustomButton from "../../component/input/custom-button.tsx";
import ComboBox from "../../component/input/combo-box.tsx";
import PetForm from "../form/PetForm.tsx";
import PetCard from "../../component/PetCard.tsx";

interface PetItem {
    id: string;
    name: string;
    imageUrl: string;
    breed: string;
    colors: string;
    ownershipStatus: string;
}

function ViewPet() {
    const [showPetForm, setShowPetForm] = useState(false);
    const [searchOption, setSearchOption] = useState("All");
    const [petData, setPetData] = useState<PetItem[] | null>(null);

    useEffect(() => {
        // Fetch pet data from the backend API
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:3000/api/pet/getAll");
                const data = await response.json();
                setPetData(data);
            } catch (error) {
                console.error("Error fetching pet data:", error);
            }
        };

        fetchData().then((r) =>
            console.log("Pet data fetched successfully : ", r)
        );
        // Call the fetchData function when the component mounts
    }, []);

    const handleManage = () => {
        setShowPetForm(true);

        //scroll to the top of pet form
        const petHr = document.getElementById(
            "view-pet-end-hr"
        ) as HTMLDivElement;
        petHr.scrollIntoView({ behavior: "smooth", block: "nearest" });
    };

    const handleSearchOption = (selectedValue: string) => {
        setSearchOption(selectedValue);
        console.log("Selected Value : ", searchOption);
    };

    return (
        <div className={"w-4/5 py-3 px-6 m-auto border-1 border-gray-50 my-6"}>
            <div className={"flex flex-row justify-center items-center"}>
                <p className={"text-[45px] text-[#071722] m-auto mx-0"}>Little Paws</p>
            </div>

            <div className={"mr-0 m-auto w-1/4 cursor-pointer text-[18px]"}>
                <ComboBox
                    id={"found-status"}
                    onChange={handleSearchOption}
                    name={"found-status"}
                    label={"Filter By : "}
                    options={["All", "Has Owner", "Hasn't Owner"]}
                    optional={true}
                />
            </div>
            <br />

            <div className={"border-1"}>
                <div className={"flex flex-row w-full max-h-fit justify-between overflow-y-scroll"}>

                    {petData !== null && petData.length > 0 ? (
                        petData.map((item: PetItem) => (
                            <div className={"mx-6 my-10"} key={item.id}>
                                <PetCard item={item} />
                            </div>
                        ))
                    ) : (
                        <p>No pet data available.</p>
                    )}


                </div>
            </div>

            <div className={"flex flex-row justify-end items-center pt-4 gap-4"}>
                <CustomButton
                    borderColor={"#071722"}
                    bgColor={"white"}
                    hoverColor={"#071722"}
                    textColor={"#071722"}
                    textHoverColor={"white"}
                    text={"Manage Pet"}
                    onClick={handleManage}
                />
            </div>

            {showPetForm && <PetForm />}
            <br />
            <hr id={"view-pet-end-hr"} />
        </div>
    );
}

export default ViewPet;
