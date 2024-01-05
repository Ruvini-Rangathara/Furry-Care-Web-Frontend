import Input from "../component/input/input";
import CustomButton from "../component/input/custom-button.tsx";
// import Select from "../component/input/combo-box.tsx";
import TextArea from "../component/input/text-area.tsx";

const userId: string = `U-0001`;
const date: string = `06/01/2024`;

function ComplaintForm() {
    return <
        div className={'flex justify-center p-10 bg-[#D9D9D9]'}>

        <form
            className="flex flex-col gap-2 text-[#071722] text-[18px] pr-14 pb-6 pl-14 bg-white border-[#071722] border-l-[35px] border-r-[35px]">

            <label className={'text-[18px] mr-0 m-auto mt-4'}>User ID : {userId}</label>
            <label className={'text-[18px] mr-0 m-auto'}>Date : {date}</label>

            <div className={'flex flex-col justify-center items-center'}>
                <p className={'text-[35px] text-[#071722]'}>Question</p>
                <p className={'text-[18px] text-[#071722] pb-3'}>
                    "Explore our Q&A section for expert insights and helpful tips, ensuring<br/>
                    you have all the information for optimal pet care."
                </p>

            </div>

            <div className={'flex flex-row gap-4'}>
                <Input label={"Question ID : "} name={'id'} type={'text'} optional={false} placeholder={'Q-0001'}/>
            </div>

            <TextArea name={'text'} label={'Question : '} optional={false} rows={5} placeholder={'Ex:Note'}/>

            <div className={'flex flex-row gap-4'}>
                <div>
                    <img className={'w-32 h-32 mt-4'} src={'src/assets/logo-pet-care.png'}></img>
                </div>
                <div className={'mt-6 ml-6'}>
                    <div className="flex gap-2 justify-center mt-8 ml-16">
                        <CustomButton borderColor={'#071722'} bgColor={'white'} hoverColor={'#071722'}
                                      textColor={'#071722'} textHoverColor={'white'} text={'Save'}/>

                        <CustomButton borderColor={'#D75555'} bgColor={'white'} hoverColor={'#D75555'}
                                      textColor={'#D75555'} textHoverColor={'white'} text={'Delete'}/>
                    </div>

                </div>
            </div>


        </form>
    </div>
}

export default ComplaintForm;