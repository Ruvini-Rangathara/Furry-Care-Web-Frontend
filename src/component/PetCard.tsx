import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

interface PetItem {
    id: string;
    name: string;
    imageUrl: string;
    breed: string;
    colors: string;
    ownershipStatus: string;
}

function PetCard({ item }: { item: PetItem }) {
    console.log("Pet Card item : ", item)
    console.log("Pet Card id : ", item.id);

    // Check if 'item' is not undefined before accessing its properties
    if (!item) {
        console.error("Item is undefined");
        return null; // You can choose to render nothing or handle it accordingly
    }

    return (
        <div className={"bg-blue-100 rounded-2xl"}>
            <Card shadow="md" isPressable onPress={() => console.log("item pressed")} className={"w-[300px]"}>
                <CardBody className="overflow-visible p-0">
                    <Image
                        shadow="lg"
                        width="300px"
                        alt={item.id}
                        className="w-full object-cover h-[220px]"
                        src={item.imageUrl}
                    />
                </CardBody>
                <CardFooter className={`text-[19px] justify-center text-[#071722] ${item.ownershipStatus == "Hasn't Owner" ? 'text-red-700' : ''}`}>
                    <p>Pet Name : {item.name}</p>
                </CardFooter>
                <CardFooter className={`flex-col text-[17px] justify-center pt-0 px-3 pb-3 text-[#004371]
          ${item.ownershipStatus == "Hasn't Owner" ? 'text-red-700' : ''}
        `}>
                    <p>
                        Pet ID : {item.id}<br />
                        Breed : {item.breed}<br />
                        Colors : {item.colors}<br />
                        Ownership Status : {item.ownershipStatus}
                    </p>
                </CardFooter>
            </Card>
        </div>
    );
}

export default PetCard;
