import CustomButton from "../../component/input/custom-button.tsx";

interface EventData {
    EventID: string;
    Title: string;
    Location: string;
    Date: string;
    Time: string;
}

interface EventProps {
    data: EventData[];
}

function ViewPetEvent({data}: EventProps) {
    if (data.length === 0) {
        return <p>No data available.</p>;
    }

    return <div className={'flex w-0.8 justify-evenly min-h-[300px] flex-col border p-40'}>
        <p className={'text-[45px] text-[#071722] text-center my-6'}>View Pet Events</p>


        <table className={'w-full h-full border-1 rounded-2xl m-15'}>
            <thead className={'border h-[50px] text-[18px]'}>
            <tr className={'border'}>
                <th className={'border w-[10%]'}>Event ID</th>
                <th className={'border'}>Title</th>
                <th className={'border'}>Location</th>
                <th className={'border'}>Date</th>
                <th className={'border'}>Time</th>
                <th className={'border'}>Option</th>
            </tr>

            </thead>
            <tbody className={'border text-[17px]'}>

            {data.map((event, index) => {
                const eventDate = new Date(event.Date);
                const today = new Date();
                const isUpcoming = eventDate >= today;
                const backgroundColor = isUpcoming ? ' bg-emerald-200' : '';

                return (
                    <tr key={index} className={`border ${backgroundColor}`}>
                        <td className={'border pl-3'}>{event.EventID}</td>
                        <td className={'border pl-3'}>{event.Title}</td>
                        <td className={'border pl-3'}>{event.Location}</td>
                        <td className={'border pl-3'}>{event.Date}</td>
                        <td className={'border pl-3'}>{event.Time}</td>
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
                );
            })}



            </tbody>
        </table>
    </div>;
}

export default ViewPetEvent;
