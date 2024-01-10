import Input from "../../component/input/input.tsx";
import Select from "../../component/input/combo-box.tsx";
import CustomButton from "../../component/input/custom-button.tsx";
import { IoCloseOutline } from "react-icons/io5";


const userId :string = `U-0001`;
function VetForm() {
    return (
    // <div className={'flex justify-center p-10 bg-[#D9D9D9]'}>
        <form
            className="w-2/4 m-auto mt-5
            flex flex-col gap-2 text-[#071722] text-[18px] pr-14 pb-6 pl-14 bg-white border-[#071722] border-l-[35px] border-r-[35px]">

            <div className={'flex flex-row justify-end items-center mt-2'}>
                <label className={'text-[18px] m-auto mr-6'}>User ID : {userId}</label>
                <IoCloseOutline className={'text-[#071722] text-[35px] cursor-pointer'}/>
            </div>



            <div className={'flex flex-col justify-center items-center'}>
                <p className={'text-[35px] text-[#071722]'}>Vet Details</p>
                <p className={'text-[18px] text-[#071722] pb-3'}>
                    “Seamlessly managing medical records and dietary needs for a <br/> comprehensive veterinary
                    experience."
                </p>
                <img className={'w-36 h-36 border border-gray-300'} src={'src/assets/vet.png'}
                     alt={'Dog Image'}></img>
            </div>

            <div className={'flex flex-row gap-4'}>
                <Input label={"Veterinarian ID : "} name={'id'} type={'text'} optional={false} placeholder={'V-0001'}/>
                <Input label={"Qualification : "} name={'type'} type={'text'} optional={false} placeholder={''}/>
            </div>

            <Input type={'text'} name={'name'} label={'Veterinarian Name : '} optional={false}
                   placeholder={'Ex:Dr.John Doe'}/>

            <div className={'flex flex-row gap-4'}>
                <Select name={'gender'} label={'Gender  :'} options={['Male', 'Female']}
                        optional={false}/>
                <Input type={'text'} name={'nic'} label={'NIC : '} optional={false}
                       placeholder={'Ex:200076900989     '}/>
            </div>

            <Input type={'email'} name={'color'} label={'Email : '} optional={false}
                   placeholder={'Ex:ruvini925@gmail.com'}/>


            <div className={'flex flex-row gap-4'}>
                <Input label={"Contact No : "} name={'contact'} type={'tel'} optional={false}
                       placeholder={'Ex:0787628489'}/>
                <Input label={"Location : "} name={'location'} type={'text'} optional={false} placeholder={'Panadura'}/>
            </div>


            <div className={'flex flex-row gap-4 ml-10'}>
                <div>
                    <img className={'w-32 h-32'} src={'src/assets/logo-pet-care.png'}></img>
                </div>
                <div className={'mt-10 ml-16'}>
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
        // </div>
    )
}

export default VetForm;