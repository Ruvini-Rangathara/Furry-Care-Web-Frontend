import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";

// Define an interface for the item prop
interface PetItem {
    Id: string;
    Name: string;
    Img: string;
    Breed: string;
    Colors: string;
    Owner: string;
}

// Use the interface in the component
function PetCard({item}: { item: PetItem }) {
    return (
        <div className={'bg-blue-100 rounded-2xl'}>

            <Card shadow="md" isPressable onPress={() => console.log("item pressed")} className={'w-[300px]'}>
                <CardBody className="overflow-visible p-0">
                    <Image
                        shadow="lg"
                        // radius="lg"
                        width="300px"
                        alt={item.Id}
                        className="w-full object-cover h-[220px]"
                        src={item.Img}
                    />
                </CardBody>
                <CardFooter className={`text-[19px] justify-center text-[#071722] ${item.Owner == 'Hasn\'t Owner' ? 'text-red-700' : ''}`}>
                    <p>Pet Name : {item.Name}</p>
                </CardFooter>
                <CardFooter className={`flex-col text-[17px] justify-center pt-0 px-3 pb-3 text-[#004371]
                 ${item.Owner == 'Hasn\'t Owner' ? 'text-red-700' : ''}
                `}>
                    <p>
                        Pet ID : {item.Id}<br/>
                        Breed : {item.Breed}<br/>
                        Colors : {item.Colors}<br/>
                        Ownership Status : {item.Owner}
                    </p>
                </CardFooter>
            </Card>

        </div>

    );
}

export default PetCard;
