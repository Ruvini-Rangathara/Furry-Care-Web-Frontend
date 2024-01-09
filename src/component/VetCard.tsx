import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";

// Define an interface for the item prop
interface VetItem {
    Name: string;
    Img: string;
    Id: string;
    NIC: string;
    Contact: string;
    Location: string;
}

// Use the interface in the component
function VetCard({item}: { item: VetItem }) {
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
                <CardFooter className="text-[19px] justify-center text-[#071722]">
                    <p>Vet Name : {item.Name}</p>
                </CardFooter>
                <CardFooter className="flex-col text-[17px] justify-center pt-0 px-3 pb-3 text-[#004371]">
                    <p>
                        Vet ID : {item.Id}<br/>
                        NIC : {item.NIC}<br/>
                        Contact : {item.Contact}<br/>
                        Location : {item.Location}
                    </p>
                </CardFooter>
            </Card>

        </div>

    );
}

export default VetCard;
