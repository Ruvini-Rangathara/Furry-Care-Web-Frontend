import OrganizationCard from "../../component/OrganizationCard.tsx";
import CustomButton from "../../component/input/custom-button.tsx";

interface OrgItem {
    Name: string;
    Img: string;
    Id: string;
    Contact: string;
    Location: string;
}

function ViewOrganization({list}: { list: OrgItem[] }) {
    return (
        <div className={'w-4/5 py-10 px-6 m-auto border-1 border-emerald-400 bg-emerald-50 my-6'}>
            <div className={'flex flex-row justify-center items-center'}>
                <p className={'text-[45px] text-[#071722] m-auto mx-0'}>Pet Care Organizations</p>
            </div>

            <div className={'border-1'}>
                <div className={'flex flex-row w-full max-h-fit justify-between overflow-y-scroll'}>
                    {list.map((item: OrgItem) => (
                        <div key={item.Id} className={'mx-6 my-10'}>
                            <OrganizationCard item={item}/>
                        </div>

                    ))}
                </div>

            </div>

            <div className={'flex flex-row justify-end items-center pt-4 gap-4'}>
                <CustomButton borderColor={'#071722'} bgColor={'white'} hoverColor={'#071722'}
                              textColor={'#071722'} textHoverColor={'white'} text={'Organization'}/>
            </div>


        </div>);
}

export default ViewOrganization;
