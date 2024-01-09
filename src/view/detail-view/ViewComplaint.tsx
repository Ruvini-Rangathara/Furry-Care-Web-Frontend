import CustomButton from "../../component/input/custom-button.tsx";

interface ComplaintData {
    ComplaintID: string;
    Date: string;
    Location: string;
    Title: string;
    Status: string;
}

interface ViewComplaintProps {
    data: ComplaintData[];
}

function ViewComplaint({data}: ViewComplaintProps) {
    if (data.length === 0) {
        return <p>No data available.</p>;
    }

    return <div className={'flex w-0.8 justify-evenly min-h-[300px] flex-col border p-40'}>
        <p className={'text-[45px] text-[#071722] text-center my-6'}>View Complaints</p>


        <table className={'w-full h-full border-1 rounded-2xl m-15'}>
            <thead className={'border h-[50px] text-[18px]'}>
            <tr className={'border'}>
                <th className={'border w-[10%]'}>Complaint ID</th>
                <th className={'border'}>Date</th>
                <th className={'border'}>Location</th>
                <th className={'border'}>Title</th>
                <th className={'border'}>Status</th>
                <th className={'border'}>Option</th>
            </tr>

            </thead>
            <tbody className={'border text-[17px]'}>

            {/*iterate this tr for each complaint using map*/}
            {data.map((complaint, index) => (
                <tr
                    key={index}
                    className={`border ${complaint.Status === "Not Resolved" ? 'bg-red-200' : 'bg-white'}`}
                >
                    <td className={'border pl-3'}>{complaint.ComplaintID}</td>
                    <td className={'border pl-3'}>{complaint.Date}</td>
                    <td className={'border pl-3'}>{complaint.Location}</td>
                    <td className={'border pl-3'}>{complaint.Title}</td>
                    <td className={'border pl-3'}>{complaint.Status}</td>
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

export default ViewComplaint;