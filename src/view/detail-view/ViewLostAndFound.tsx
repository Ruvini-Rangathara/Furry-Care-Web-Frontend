import LostAndFoundCard from "../../component/LostAndFoundCard.tsx";
import ComboBox from "../../component/input/combo-box.tsx";
import CustomButton from "../../component/input/custom-button.tsx";

interface LostAndFoundItem {
    title: string;
    img: string;
    id: string;
    petId: string;
    petName: string;
    date: string;
}

function ViewLostAndFound({list}: { list: LostAndFoundItem[] }) {
    return (<div className={'w-4/5 py-10 px-14 m-auto border-1 border-emerald-400 rounded-2xl my-6'}>

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

        {/*add 'more' button using custom-button.tsx*/}
        <div className={'flex flex-row justify-end items-center pt-12 gap-4'}>
            {/*add another custom button here*/}
            <CustomButton borderColor={'#59AE4B'} bgColor={'white'} hoverColor={'#59AE4B'} textColor={'#59AE4B'} textHoverColor={'white'} text={'Notice'}/>
            <CustomButton borderColor={'#071722'} bgColor={'white'} hoverColor={'#071722'}
                          textColor={'#071722'} textHoverColor={'white'} text={'More'}/>
        </div>

    </div>);
}

export default ViewLostAndFound;
