import Input from "../../component/input/input.tsx";
import Select from "../../component/input/combo-box.tsx";
import CustomButton from "../../component/input/custom-button.tsx";

const userId :string = `U-0001`;

function LostAndFoundForm() {
    return <
        div className={'flex justify-center p-10 bg-[#D9D9D9]'}>

        <form
            className="flex flex-col gap-2 text-[#071722] text-[18px] pr-14 pb-6 pl-14 bg-white border-[#071722] border-l-[35px] border-r-[35px]">

            <label className={'text-[18px] mr-0 m-auto mt-5'}>User ID : {userId}</label>

            <div className={'flex flex-col justify-center items-center'}>
                <p className={'text-[35px] text-[#071722]'}>Lost & Found Notice</p>
                <p className={'text-[18px] text-[#071722] pb-3'}>
                    "Lost and Found: Help Reunite Families with Their Beloved Pets <br/>
                    Report Sightings or Findings Here!"
                </p>
                <img className={'w-36 h-36 border border-gray-300'} src={'src/assets/dog-image1.jpeg'}
                     alt={'Dog Image'}></img>
            </div>

            <Input label={"Notice ID : "} name={'id'} type={'text'} optional={false} placeholder={'N-0001'}/>

            <div className={'flex flex-row gap-4'}>
                <Input label={"Pet ID : "} name={'id'} type={'text'} optional={false} placeholder={'P-0001'}/>
                <Input label={"Pet name : "} name={'name'} type={'text'} optional={false} placeholder={'Ex:Lacy'}/>
            </div>

            <Input type={'text'} name={'desc'} label={'Description : '} optional={true} placeholder={'Ex:Note'}/>

            <div className={'flex flex-row gap-4'}>
                <Input type={'date'} name={'date'} label={'Lost Date : '} optional={false} placeholder={''}/>
                <Input type={'time'} name={'time'} label={'Lost Time : '} optional={false}
                       placeholder={''}/>
            </div>

            <div className={'flex flex-row gap-4'}>
                <Input type={'location'} name={'location'} label={'Lost Location : '} optional={true} placeholder={'Ex:Panadura'}/>
                <Select name={'status'} label={'Found Status  :'} options={['Found', 'Not Found']}
                        optional={false}/>
            </div>


            <div className={'flex flex-row gap-4'}>
                <div>
                    <img className={'w-32 h-32 mt-4'} src={'src/assets/logo-pet-care.png'}></img>
                </div>
                <div className={'mt-10 ml-10'}>
                    <div className="flex gap-2 justify-center mt-3">
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

export default LostAndFoundForm;