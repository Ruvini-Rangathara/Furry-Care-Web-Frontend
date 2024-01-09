import CustomButton from "../../component/input/custom-button.tsx";

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
    if (data.length === 0) {
        return <p>No data available.</p>;
    }

    return <div className={'flex w-0.8 justify-evenly min-h-[300px] flex-col border p-40'}>
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
    </div>;
}

export default ViewDonation;
