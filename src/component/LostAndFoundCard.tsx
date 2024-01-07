import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
// Define an interface for the item prop
interface LostAndFoundItem {
    title: string;
    img: string;
    id: string;
    petId: string;
    petName: string;
    date: string;
}

// Use the interface in the component
function LostAndFoundCard({ item }: { item: LostAndFoundItem }) {
    return (
        <Card shadow="md" isPressable onPress={() => console.log("item pressed")}>
            <CardBody className="overflow-visible p-0">
                <Image
                    shadow="lg"
                    radius="lg"
                    width="100%"
                    alt={item.title}
                    className="w-full object-cover h-[220px]"
                    src={item.img}
                />
            </CardBody>
            <CardFooter className="text-[19px] justify-between text-[#071722]">
                <b>Location : {item.title}</b>
                <p>{item.id}</p>
            </CardFooter>
            <CardFooter className="flex-col text-[17px] justify-center pt-0 px-3 pb-3 text-[#004371]">
                <p>
                    Pet ID : {item.petId}<br />
                    Pet Name : {item.petName}<br />
                    Date : {item.date}
                </p>
            </CardFooter>
        </Card>
    );
}

export default LostAndFoundCard;
