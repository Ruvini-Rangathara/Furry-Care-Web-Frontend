import CustomButton from "../../component/input/custom-button.tsx";
import { useNavigate } from "react-router-dom";
import React from "react";


interface DonationData {
    DonationID: string;
    Date: string;
    Location: string;
    Donor: string;
    Receiver: string;
}

interface DonationProps {
    data: DonationData[];
}

function ViewDonation({data}: DonationProps) {
    const navigate = useNavigate();

    const handleManage = (e: React.MouseEvent<HTMLButtonElement>) => {
        // Prevent the default form submission behavior
        e.preventDefault();
        console.log("button clicked.")
        navigate('/donation_form')
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (data.length === 0) {
        return <p>No data available.</p>;
    }

    return <div className={'flex w-0.8 justify-evenly min-h-[300px] flex-col border px-32 mb-6 pb-6'}>
        <p className={'text-[45px] text-[#071722] text-center my-6'}>View Donations</p>


        <table className={'w-full h-full border-1 rounded-2xl m-15'}>
            <thead className={'border h-[50px] text-[18px]'}>
            <tr className={'border'}>
                <th className={'border w-[10%]'}>Donation ID</th>
                <th className={'border'}>Date</th>
                <th className={'border'}>Location</th>
                <th className={'border'}>Donor</th>
                <th className={'border'}>Receiver</th>
                <th className={'border'}>Option</th>
            </tr>

            </thead>
            <tbody className={'border text-[17px]'}>

            {/*iterate this tr for each complaint using map*/}
            {data.map((donation, index) => (
                <tr key={index} className={'border'}>
                    <td className={'border pl-3'}>{donation.DonationID}</td>
                    <td className={'border pl-3'}>{donation.Date}</td>
                    <td className={'border pl-3'}>{donation.Location}</td>
                    <td className={'border pl-3'}>{donation.Donor}</td>
                    <td className={'border pl-3'}>{donation.Receiver}</td>
                    <td className={'flex flex-row justify-around align-middle p-2'}>
                        <CustomButton
                            borderColor={'#071722'}
                            bgColor={'white'}
                            hoverColor={'#071722'}
                            textColor={'#071722'}
                            textHoverColor={'white'}
                            text={'View'}
                        ></CustomButton>
                    </td>
                </tr>
            ))}


            </tbody>
        </table>

        <div className={'flex w-[100px] mt-10 mr-0 m-auto'}>
            <CustomButton borderColor={'#59AE4B'} bgColor={'white'}
                          hoverColor={'#59AE4B'} textColor={'#59AE4B'} textHoverColor={'white'}
                          text={'Donation'}
                        onClick={handleManage}
            ></CustomButton>
        </div>

    </div>;
}

export default ViewDonation;
