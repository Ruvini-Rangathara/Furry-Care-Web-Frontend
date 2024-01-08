import CustomButton from "../../component/input/custom-button.tsx";

interface ComplaintData {
    [key: string]: string | number; // Assuming each element in the data array can be a string or number
}

interface ViewComplaintProps {
    data: ComplaintData[];
}

function ViewComplaint({data}: ViewComplaintProps) {
    if (data.length === 0) {
        return <p>No data available.</p>;
    }

    return (<div className={'flex w-0.8 justify-evenly min-h-[300px] flex-col border p-24'}>
            <table className={'w-full h-full border-1 rounded-xl m-15'}>
                <thead className={'border h-[50px] text-[18px]'}>
                <tr className={'border'}>
                    <th className={'border'}>Complaint ID</th>
                    <th className={'border'}>Date</th>
                    <th className={'border'}>Location</th>
                    <th className={'border'}>Title</th>
                    <th className={'border'}>Status</th>
                    <th className={'border'}>Option</th>
                </tr>

                </thead>
                <tbody className={'border text-[17px]'}>

                {/*iterate this tr for each complaint using map*/}
                {data.map((complaint, index) => (<tr key={index} className={'border'}>
                        <td className={'border pl-3'}>{complaint.ComplaintID}</td>
                        <td className={'border pl-3'}>{complaint.Date}</td>
                        <td className={'border pl-3'}>{complaint.Location}</td>
                        <td className={'border pl-3'}>{complaint.Title}</td>
                        <td className={'border pl-3'}>{complaint.Status}</td>
                        <td className={'flex flex-row justify-around align-middle p-2'}>
                            <CustomButton borderColor={'#071722'} bgColor={'white'} hoverColor={'#071722'}
                                          textColor={'#071722'} textHoverColor={'white'} text={'View'}></CustomButton>
                        </td>
                    </tr>))}

                {/*sample data*/}


                <tr className={'border'}>
                    <td className={'border pl-3'}>C-0001</td>
                    <td className={'border pl-3'}>2024-02-02</td>
                    <td className={'border pl-3'}>Panadura</td>
                    <td className={'border pl-3'}>Dog Harassment</td>
                    <td className={'border pl-3'}>Not Resolved</td>
                    <td className={'flex flex-row justify-around align-middle p-2'}>
                        <CustomButton borderColor={'#071722'} bgColor={'white'} hoverColor={'#071722'}
                                      textColor={'#071722'} textHoverColor={'white'} text={'View'}></CustomButton>
                    </td>
                </tr>


                </tbody>
            </table>
        </div>);
}

export default ViewComplaint;
