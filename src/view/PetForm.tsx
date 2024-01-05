import Input from "../component/input/input";
import Select from "../component/input/combo-box.tsx";
import CustomButton from "../component/input/custom-button.tsx";

const userId :string = `U-0001`;

function PetForm() {
    return <
        div className={'flex justify-center p-10 bg-[#D9D9D9]'}>

        <form
            className="flex flex-col gap-2 text-[#071722] text-[18px] pr-14 pb-6 pl-14 bg-white border-[#071722] border-l-[35px] border-r-[35px]">

            <label className={'text-[18px] mr-0 m-auto mt-5'}>User ID : {userId}</label>

            <div className={'flex flex-col justify-center items-center'}>
                <p className={'text-[35px] text-[#071722]'}>Pet Details</p>
                <p className={'text-[18px] text-[#071722] pb-3'}>
                    "Simplify pet care with our easy form. Manage medical history, <br/> dietary preferences, and more
                    for
                    stress-free, comprehensive pet care."
                </p>
                <img className={'w-36 h-36 border border-gray-300'} src={'src/assets/dog-image1.jpeg'}
                     alt={'Dog Image'}></img>
            </div>

            <div className={'flex flex-row gap-4'}>
                <Input label={"Pet ID : "} name={'id'} type={'text'} optional={false} placeholder={'P-0001'}/>
                <Input label={"Pet Type : "} name={'type'} type={'text'} optional={false} placeholder={'Ex:Dog'}/>
            </div>

            <Input type={'text'} name={'name'} label={'Pet Name : '} optional={true} placeholder={'Ex:Rex'}/>

            <div className={'flex flex-row gap-4'}>
                <Input type={'number'} name={'age'} label={'Age : '} optional={true} placeholder={'Ex:2'}/>
                <Input type={'text'} name={'breed'} label={'Breed : '} optional={true}
                       placeholder={'Ex:German Shepherd'}/>
            </div>

            <Input type={'text'} name={'color'} label={'Colors : '} optional={true} placeholder={'Ex:Brown,Black'}/>


            <div className={'flex flex-row gap-4'}>
                <Select name={'ownership'} label={'Ownership Status : '} options={['Has Owner', 'No Owner']}
                        optional={false}/>
                <Select name={'injured'} label={'Injured Status  :'} options={['Injured', 'Not Injured']}
                        optional={false}/>
            </div>


            <div className={'flex flex-row gap-4'}>
                <div>
                    <img className={'w-32 h-32 mt-4'} src={'src/assets/logo-pet-care.png'}></img>
                </div>
                <div className={'mt-6 ml-6'}>
                    <div className="flex gap-2 justify-center mt-3">
                        <CustomButton borderColor={'#071722'} bgColor={'white'} hoverColor={'#071722'}
                                      textColor={'#071722'} textHoverColor={'white'} text={'Save'}/>
                        <CustomButton borderColor={'#59AE4B'} bgColor={'white'} hoverColor={'#59AE4B'}
                                      textColor={'#59AE4B'} textHoverColor={'white'} text={'Update'}/>
                        <CustomButton borderColor={'#D75555'} bgColor={'white'} hoverColor={'#D75555'}
                                      textColor={'#D75555'} textHoverColor={'white'} text={'Delete'}/>
                    </div>
                    <div className="flex gap-2 justify-center mt-3">
                        <CustomButton borderColor={'#A8A5A5'} bgColor={'white'} hoverColor={'#A8A5A5'}
                                      textColor={'#A8A5A5'} textHoverColor={'white'} text={'Health Record'}/>
                    </div>
                </div>
            </div>


        </form>
    </div>
}

export default PetForm;