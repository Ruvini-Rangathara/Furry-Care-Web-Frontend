import Input from "../../component/input/input.tsx";
import CustomButton from "../../component/input/custom-button.tsx";
import Select from "../../component/input/combo-box.tsx";
import {IoCloseOutline} from "react-icons/io5";

const userId :string = `U-0001`;

function ComplaintForm() {
    return (
        // <div className={'flex justify-center p-10 bg-[#D9D9D9]'}>
        // <form
        //     className="flex flex-col gap-2 text-[#071722] text-[18px] pr-14 pb-6 pl-14 bg-white border-[#071722] border-l-[35px] border-r-[35px]">
        //     <label className={'text-[18px] mr-0 m-auto mt-5'}>User ID : {userId}</label>

        <form
            className="w-2/4 m-auto mt-5
            flex flex-col gap-2 text-[#071722] text-[18px] pr-14 pb-6 pl-14 bg-white border-[#071722] border-l-[35px] border-r-[35px]">

            <div className={'flex flex-row justify-end items-center mt-2'}>
                <label className={'text-[18px] m-auto mr-6'}>User ID : {userId}</label>
                <IoCloseOutline className={'text-[#071722] text-[35px] cursor-pointer'}/>
            </div>


            <div className={'flex flex-col justify-center items-center'}>
                <p className={'text-[35px] text-[#071722]'}>Complaint Details</p>
                <p className={'text-[18px] text-[#071722] pb-3'}>
                    "Provide feedback effortlessly in our complain section; we streamline<br/>
                    the process for stress-free resolution and continual improvement of <br/>
                    your pet care experience."
                </p>

            </div>

            <div className={'flex flex-row gap-4'}>
                <Input label={"Complaint ID : "} name={'id'} type={'text'} optional={false} placeholder={'C-0001'}/>
                <Input label={"Date : "} name={'date'} type={'date'} optional={false} placeholder={''}/>
            </div>

            <Input type={'text'} name={'title'} label={'Title : '} optional={true} placeholder={'Ex:This is Title'}/>
            <Input type={'text'} name={'name'} label={'Description : '} optional={false} placeholder={'Ex:Note'}/>

            <div className={'flex flex-row gap-4'}>
                <Input type={'text'} name={'location'} label={'Location : '} optional={false}
                       placeholder={'Ex:Panadura'}/>
                <Select name={'solution'} label={'Solved Status : '} options={['Solved', 'Not Solved']}
                        optional={false}/>
            </div>

            <div className={'flex flex-row gap-4'}>
                <div>
                    <img className={'w-32 h-32 mt-4'} src={'src/assets/logo-pet-care.png'}></img>
                </div>
                <div className={'mt-6 ml-6'}>
                    <div className="flex gap-2 justify-center mt-8 ml-8">
                        <CustomButton borderColor={'#071722'} bgColor={'white'} hoverColor={'#071722'}
                                      textColor={'#071722'} textHoverColor={'white'} text={'Save'}/>
                        <CustomButton borderColor={'#59AE4B'} bgColor={'white'} hoverColor={'#59AE4B'}
                                      textColor={'#59AE4B'} textHoverColor={'white'} text={'Update'}/>
                        <CustomButton borderColor={'#D75555'} bgColor={'white'} hoverColor={'#D75555'}
                                      textColor={'#D75555'} textHoverColor={'white'} text={'Delete'}/>
                    </div>

                </div>
            </div>


        </form>
    )
}

export default ComplaintForm;