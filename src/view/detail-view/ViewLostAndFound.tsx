import LostAndFoundCard from "../../component/LostAndFoundCard.tsx";
import ComboBox from "../../component/input/combo-box.tsx";

interface LostAndFoundItem {
    title: string;
    img: string;
    id: string;
    petId: string;
    petName: string;
    date: string;
}

function ViewLostAndFound({list}: { list: LostAndFoundItem[] }) {
    return (<div className={'w-4/5 py-10 px-14 m-auto border-1 border-emerald-400 rounded-2xl mt-6'}>

        {/*center a paragraph*/}
        <div className={'flex flex-row justify-center items-center'}>
            <p className={'text-[45px] text-[#071722] m-auto mx-0'}>Lost & Found Notices</p>
        </div>

        <div className={'mr-0 m-auto w-1/4 cursor-pointer text-[18px]'}>
            <ComboBox name={'found-status'} label={'Filter By : '} options={['Not Found', 'Found', 'All']}
                      optional={true}/>
        </div>

        <br/>

        <div className="gap-12 grid grid-cols-2 sm:grid-cols-4 mt-5">
            {list.map((item: LostAndFoundItem, index: number) => (<LostAndFoundCard key={index} item={item}/>))}
        </div>
    </div>);
}

export default ViewLostAndFound;
