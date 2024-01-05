import Input from "../component/input/input";
import CustomButton from "../component/input/custom-button.tsx";

const userId :string = `U-0001`;

function EventForm() {
    return <
        div className={'flex justify-center p-10 bg-[#D9D9D9]'}>

        <form
            className="flex flex-col gap-2 text-[#071722] text-[18px] pr-14 pb-6 pl-14 bg-white border-[#071722] border-l-[35px] border-r-[35px]">

            <label className={'text-[18px] mr-0 m-auto mt-5'}>User ID : {userId}</label>

            <div className={'flex flex-col justify-center items-center'}>
                <p className={'text-[35px] text-[#071722]'}>Event Details</p>
                <p className={'text-[18px] text-[#071722] pb-3'}>
                    "Simplify pet events with our organized system. Coordinate seamlessly<br/>
                     for stress-free experiences, managing details to ensure comprehensive<br/>
                     and enjoyable gatherings."
                </p>

            </div>

            <div className={'flex flex-row gap-4'}>
                <Input label={"Event ID : "} name={'id'} type={'text'} optional={false} placeholder={'E-0001'}/>
                <Input label={"Event Name : "} name={'type'} type={'text'} optional={false} placeholder={'Ex:Dog Show'}/>
            </div>

            <Input type={'text'} name={'name'} label={'Description : '} optional={true} placeholder={'Ex:Note'}/>

            <div className={'flex flex-row gap-4'}>
                <Input type={'date'} name={'date'} label={'Date : '} optional={false} placeholder={''}/>
                <Input type={'time'} name={'time'} label={'Time : '} optional={false}
                       placeholder={''}/>
            </div>

            <Input type={'text'} name={'location'} label={'Location : '} optional={false} placeholder={'Ex:Panadura'}/>

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
    </div>
}

export default EventForm;