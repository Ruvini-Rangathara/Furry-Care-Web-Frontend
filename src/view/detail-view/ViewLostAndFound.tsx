import LostAndFoundCard from "../../component/LostAndFoundCard.tsx";
import ComboBox from "../../component/input/combo-box.tsx";
import CustomButton from "../../component/input/custom-button.tsx";

interface LostAndFoundItem {
    title: string;
    img: string;
    id: string;
    petName: string;
    location: string;
    date: string;
}


function ViewLostAndFound({list}: { list: LostAndFoundItem[] }) {
    // const rowSize = 2; // Number of rows
    // const totalItems = list.length;
    // const columns = Math.ceil(totalItems / rowSize);


    return (<div className={'w-4/5 py-10 px-6 m-auto border-1 border-emerald-400 rounded-2xl my-6'}>
        <div className={'flex flex-row justify-center items-center'}>
            <p className={'text-[45px] text-[#071722] m-auto mx-0'}>Lost & Found Notices</p>
        </div>

        <div className={'mr-0 m-auto w-1/4 cursor-pointer text-[18px]'}>
            <ComboBox name={'found-status'} label={'Filter By : '} options={['Not Found', 'Found', 'All']}
                      optional={true}/>
        </div>
        <br/>


        <div className={'border-1'}>
            <div className={'flex flex-row w-full max-h-fit justify-between overflow-y-scroll'}>
                {list.map((item: LostAndFoundItem, index: number) => (
                    <div className={'mx-6 my-10'}>
                        <LostAndFoundCard key={index} item={item}/>
                    </div>

                ))}
            </div>

        </div>



        <div className={'flex flex-row justify-end items-center pt-4 gap-4'}>
            <CustomButton borderColor={'#071722'} bgColor={'white'} hoverColor={'#071722'}
                          textColor={'#071722'} textHoverColor={'white'} text={'More'}/>
        </div>


    </div>);
}

export default ViewLostAndFound;
