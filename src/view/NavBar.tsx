import React from "react";
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link} from "@nextui-org/react";
// import { IoSettingsOutline } from "react-icons/io5";
import {User} from "@nextui-org/react";

function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        "Pet",
        "Veterinarian",
        "Organization",
        "Event",
        "Donation",
        "Complaint",
        "Lost & Found",
        "Q & A",
        "Setting",
        "Log Out",
    ];

    return (
        <Navbar
            isBordered
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
            className={'h-[80px]'}
        >
            <NavbarContent className="sm:hidden" justify="start">
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
            </NavbarContent>

            <NavbarContent className="sm:hidden pr-3" justify="center">
                <NavbarBrand>
                    <img className={'logo'} src="src/assets/logo1.png" alt="React.js"/>
                    <p className="font-bold  mr-10 text-[22px]">FURRY CARE</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarBrand>
                    <img className={'logo'} src="src/assets/logo1.png" alt="React.js" />
                    <p className="font-bold text-[22px] mr-10">FURRY CARE</p>
                </NavbarBrand>
                <NavbarItem className={'navbarItem pl-20'}>
                    <Link color="foreground" href="#" className={'text-[20px]'}>
                        Pet
                    </Link>
                </NavbarItem>

                <NavbarItem className={'navbarItem'}>
                    <Link color="foreground" href="#" className={'text-[20px]'}>
                        Event
                    </Link>
                </NavbarItem>
                <NavbarItem className={'navbarItem'}>
                    <Link color="foreground" href="#" className={'text-[20px]'}>
                        Donation
                    </Link>
                </NavbarItem>
                <NavbarItem className={'navbarItem'}>
                    <Link color="foreground" href="#" className={'text-[20px]'}>
                        Complaint
                    </Link>
                </NavbarItem>
                <NavbarItem className={'navbarItem'}>
                    <Link color="foreground" href="#" className={'text-[20px]'}>
                        Lost & Found
                    </Link>
                </NavbarItem >
                <NavbarItem className={'navbarItem'}>
                    <Link color="foreground" href="#" className={'text-[20px]'}>
                        Q & A
                    </Link>
                </NavbarItem>

            </NavbarContent>

            <NavbarContent justify="end">

                <User
                    className={'rounded-3xl cursor-pointer ml-56 text-[21px]'}
                    name="Jane Doe"
                    description="Veterinarian"
                    avatarProps={{
                        src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
                    }}
                />

            </NavbarContent>

            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            className="w-full"
                            color={
                                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
                            }
                            href="#"
                            size="lg"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}

export default NavBar;