import ViewPet from "./detail-view/ViewPet.tsx";
import ViewVet from "./detail-view/ViewVet.tsx";
import ViewOrganization from "./detail-view/ViewOrganization.tsx";

function About(){
    return (
        <div className="bg-white flex flex-col items-stretch">
            <div className="bg-white flex w-full flex-col items-center pt-12 pb-8 px-16 max-md:max-w-full max-md:px-5">
                <div className="w-full max-w-[1144px] mt-3.5 max-md:max-w-full">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                        <div className="flex flex-col items-stretch w-[69%] max-md:w-full max-md:ml-0">
                            <div className="flex flex-col items-stretch max-md:max-w-full max-md:mt-10">
                                <div className="text-gray-900 text-4xl self-center whitespace-nowrap">
                                    About Us
                                </div>
                                <div
                                    className="text-[18px] text-gray-900 text-justify text-base self-center max-w-[582px] mt-9 max-md:max-w-full">
                                    Furry Care&quot; emerges as a visionary initiative fueled by a
                                    sincere passion for the well-being of our beloved four-legged
                                    companions. Recognizing the unique challenges faced by rescue
                                    organizations and dedicated pet enthusiasts, Furry Care seeks
                                    to redefine the way we connect with, nurture, and celebrate
                                    our furry friends.
                                </div>
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/76c792714ffb1df88054dc48a068cffa10e194f6382437f55fff067c99f2b13e?apiKey=1e1d1af84687413c90642ed83011e3eb&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/76c792714ffb1df88054dc48a068cffa10e194f6382437f55fff067c99f2b13e?apiKey=1e1d1af84687413c90642ed83011e3eb&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/76c792714ffb1df88054dc48a068cffa10e194f6382437f55fff067c99f2b13e?apiKey=1e1d1af84687413c90642ed83011e3eb&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/76c792714ffb1df88054dc48a068cffa10e194f6382437f55fff067c99f2b13e?apiKey=1e1d1af84687413c90642ed83011e3eb&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/76c792714ffb1df88054dc48a068cffa10e194f6382437f55fff067c99f2b13e?apiKey=1e1d1af84687413c90642ed83011e3eb&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/76c792714ffb1df88054dc48a068cffa10e194f6382437f55fff067c99f2b13e?apiKey=1e1d1af84687413c90642ed83011e3eb&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/76c792714ffb1df88054dc48a068cffa10e194f6382437f55fff067c99f2b13e?apiKey=1e1d1af84687413c90642ed83011e3eb&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/76c792714ffb1df88054dc48a068cffa10e194f6382437f55fff067c99f2b13e?apiKey=1e1d1af84687413c90642ed83011e3eb&"
                                    className="aspect-[5.83] object-contain object-center w-full overflow-hidden mt-10 max-md:max-w-full"
                                />
                            </div>
                        </div>
                        <div className="text-[18px] flex flex-col items-stretch w-[40%] ml-5 max-md:w-full max-md:ml-0 bg-green-50 rounded-2xl pt-6 pl-13">
                            <div className="flex grow flex-col items-stretch max-md:mt-10 ">
                                <div className="text-gray-900 text-4xl self-center w-64 pl-5">
                                    Contact Us
                                </div>
                                <div className="text-gray-900 text-base leading-3 mt-8 pr-7 pl-9 max-md:ml-0">
                                    <p className={'mb-3'}>Email : subhasinghe200009@gmail.com</p>
                                    <p className={'mb-3'}>Phone : +9478 6628 489 / +9478 6628 489</p>
                                    <p className={'mb-3'}>Facebook : Furry Care ( Save Pets )</p>
                                    <p className={'mb-6'}>Youtube : Furry Care ( Save Pets )</p>
                                </div>
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b52471ad18b979194d244fbc426ffd2f47e51dbd283284c58939470833d9f1f0?apiKey=1e1d1af84687413c90642ed83011e3eb&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b52471ad18b979194d244fbc426ffd2f47e51dbd283284c58939470833d9f1f0?apiKey=1e1d1af84687413c90642ed83011e3eb&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b52471ad18b979194d244fbc426ffd2f47e51dbd283284c58939470833d9f1f0?apiKey=1e1d1af84687413c90642ed83011e3eb&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b52471ad18b979194d244fbc426ffd2f47e51dbd283284c58939470833d9f1f0?apiKey=1e1d1af84687413c90642ed83011e3eb&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b52471ad18b979194d244fbc426ffd2f47e51dbd283284c58939470833d9f1f0?apiKey=1e1d1af84687413c90642ed83011e3eb&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b52471ad18b979194d244fbc426ffd2f47e51dbd283284c58939470833d9f1f0?apiKey=1e1d1af84687413c90642ed83011e3eb&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b52471ad18b979194d244fbc426ffd2f47e51dbd283284c58939470833d9f1f0?apiKey=1e1d1af84687413c90642ed83011e3eb&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b52471ad18b979194d244fbc426ffd2f47e51dbd283284c58939470833d9f1f0?apiKey=1e1d1af84687413c90642ed83011e3eb&"
                                    className="aspect-[1.29] object-contain object-center w-[150px] overflow-hidden self-center max-w-full mt-5 pr-5"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="bg-gray-900 flex w-full flex-col justify-center items-center px-16 py-11 max-md:max-w-full max-md:px-5">
                <div className="w-full max-w-[1036px] max-md:max-w-full">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                        <div className="flex flex-col items-stretch w-[34%] max-md:w-full max-md:ml-0">
                            <div className="flex grow flex-col items-center max-md:mt-10">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0d00a7fc1c60a4421d954abe15657360530ae19e397ee6087449923129d1becb?apiKey=1e1d1af84687413c90642ed83011e3eb&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d00a7fc1c60a4421d954abe15657360530ae19e397ee6087449923129d1becb?apiKey=1e1d1af84687413c90642ed83011e3eb&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d00a7fc1c60a4421d954abe15657360530ae19e397ee6087449923129d1becb?apiKey=1e1d1af84687413c90642ed83011e3eb&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d00a7fc1c60a4421d954abe15657360530ae19e397ee6087449923129d1becb?apiKey=1e1d1af84687413c90642ed83011e3eb&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d00a7fc1c60a4421d954abe15657360530ae19e397ee6087449923129d1becb?apiKey=1e1d1af84687413c90642ed83011e3eb&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d00a7fc1c60a4421d954abe15657360530ae19e397ee6087449923129d1becb?apiKey=1e1d1af84687413c90642ed83011e3eb&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d00a7fc1c60a4421d954abe15657360530ae19e397ee6087449923129d1becb?apiKey=1e1d1af84687413c90642ed83011e3eb&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d00a7fc1c60a4421d954abe15657360530ae19e397ee6087449923129d1becb?apiKey=1e1d1af84687413c90642ed83011e3eb&"
                                    className="aspect-square object-contain object-center w-[130px] overflow-hidden max-w-full"
                                />
                                <div className="text-white text-lg self-stretch mt-7">
                                    Need a help of Veterinarian?
                                </div>
                                <div className="text-white text-justify text-base self-stretch mt-7">
                                    &quot;Need expert guidance for your pet's well-being?
                                    Experienced veterinarians is here to help you ensure the best
                                    care for your furry friends.&quot;
                                </div>
                            </div>
                        </div>
                        {" "}
                        <div className="flex flex-col items-stretch w-[34%] ml-5 max-md:w-full max-md:ml-0">
                            <div className="flex flex-col items-center max-md:mt-10">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/08aa9a229c98528635881c0ecc89ffc1b67853410b0be63bedaeb19d33a915a5?apiKey=1e1d1af84687413c90642ed83011e3eb&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/08aa9a229c98528635881c0ecc89ffc1b67853410b0be63bedaeb19d33a915a5?apiKey=1e1d1af84687413c90642ed83011e3eb&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/08aa9a229c98528635881c0ecc89ffc1b67853410b0be63bedaeb19d33a915a5?apiKey=1e1d1af84687413c90642ed83011e3eb&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/08aa9a229c98528635881c0ecc89ffc1b67853410b0be63bedaeb19d33a915a5?apiKey=1e1d1af84687413c90642ed83011e3eb&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/08aa9a229c98528635881c0ecc89ffc1b67853410b0be63bedaeb19d33a915a5?apiKey=1e1d1af84687413c90642ed83011e3eb&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/08aa9a229c98528635881c0ecc89ffc1b67853410b0be63bedaeb19d33a915a5?apiKey=1e1d1af84687413c90642ed83011e3eb&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/08aa9a229c98528635881c0ecc89ffc1b67853410b0be63bedaeb19d33a915a5?apiKey=1e1d1af84687413c90642ed83011e3eb&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/08aa9a229c98528635881c0ecc89ffc1b67853410b0be63bedaeb19d33a915a5?apiKey=1e1d1af84687413c90642ed83011e3eb&"
                                    className="aspect-square object-contain object-center w-[130px] overflow-hidden max-w-full"
                                />{" "}
                                <div className="text-white text-lg self-stretch mt-7">
                                    Need a help of Pet Clinic?
                                </div>
                                {" "}
                                <div className="text-white text-justify text-base self-stretch mt-7">
                                    &quot;Visit our pet clinic for compassionate care and expert
                                    advice to keep your furry companions happy and healthy!&quot;
                                </div>
                            </div>
                        </div>
                        {" "}
                        <div className="flex flex-col items-stretch w-[32%] ml-5 max-md:w-full max-md:ml-0">
                            <div className="flex flex-col items-center max-md:mt-10">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/dde60758ce3994c2e6fa5441ba842e56a5beda0bbcf1d8fcf81f73784631e76e?apiKey=1e1d1af84687413c90642ed83011e3eb&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/dde60758ce3994c2e6fa5441ba842e56a5beda0bbcf1d8fcf81f73784631e76e?apiKey=1e1d1af84687413c90642ed83011e3eb&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dde60758ce3994c2e6fa5441ba842e56a5beda0bbcf1d8fcf81f73784631e76e?apiKey=1e1d1af84687413c90642ed83011e3eb&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/dde60758ce3994c2e6fa5441ba842e56a5beda0bbcf1d8fcf81f73784631e76e?apiKey=1e1d1af84687413c90642ed83011e3eb&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/dde60758ce3994c2e6fa5441ba842e56a5beda0bbcf1d8fcf81f73784631e76e?apiKey=1e1d1af84687413c90642ed83011e3eb&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dde60758ce3994c2e6fa5441ba842e56a5beda0bbcf1d8fcf81f73784631e76e?apiKey=1e1d1af84687413c90642ed83011e3eb&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/dde60758ce3994c2e6fa5441ba842e56a5beda0bbcf1d8fcf81f73784631e76e?apiKey=1e1d1af84687413c90642ed83011e3eb&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/dde60758ce3994c2e6fa5441ba842e56a5beda0bbcf1d8fcf81f73784631e76e?apiKey=1e1d1af84687413c90642ed83011e3eb&"
                                    className="aspect-square object-contain object-center w-[130px] overflow-hidden max-w-full"
                                />{" "}
                                <div className="text-white text-lg self-stretch mt-7">
                                    Need a help of Organization?
                                </div>
                                {" "}
                                <div className="text-white text-justify text-base self-stretch mt-7">
                                    &quot;Our organizations are dedicated to providing assistance,
                                    ensuring that we're here to support you every step of the
                                    way.&quot;
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ViewPet list={[]} />
            <ViewVet list={[]} />
            <ViewOrganization list={[]} />
        </div>
    )
}

export default About;