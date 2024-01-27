import React from "react";
import { Navbar, NavbarBrand, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link } from "@nextui-org/react";
import { User } from "@nextui-org/react";
import {  Link as RouterLink,useNavigate } from "react-router-dom";
import axios from "axios";

function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const navigate = useNavigate();

    const menuItems = [
        "Pet",
        "Event",
        "Donation",
        "Complaint",
        "Lost & Found",
        "Q & A",
    ];


    const navigateUserProfile = async () => {
        try {
            const username = localStorage.getItem('username');
            console.log('username : ', username);
            const response = await axios.get('http://localhost:3000/api/user/getByUsername/' + username);

            if (response.status === 200) {
                const user = response.data;
                localStorage.setItem('user', JSON.stringify(user));

                // Assuming 'userRole' is obtained from the user object
                const userRole = user.role;

                const paths: Record<string, string> = {
                    vet: '/vet_form',
                    org: '/org_form',
                };

                navigate(paths[userRole as keyof typeof paths]);

            } else {
                console.error('Error fetching user data:', response);
            }
        } catch (error) {
            console.error('Error while navigating user profile:', error);
        }
    };


    const handleNavigation = (item: string) => {
        const paths: Record<string, string> = {
            Pet: '/view_pet',
            Event: '/view_event',
            Donation: '/view_donation',
            Complaint: '/view_complaint',
            'Lost & Found': '/view_lost',
            'Q & A': '/view_q_a',
        };

        navigate(paths[item]);
    };
    return (
        <Navbar
            isBordered
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
            className={'h-[80px]'}
        >
            <NavbarContent className="hidden sm:flex gap-3" justify="center">
                <NavbarBrand>

                    <img className={'logo'} src="src/assets/logo1.png" alt="React.js" />
                    <RouterLink to={'/home'}>
                    <p className="font-bold text-[22px] mr-20 text-[#071722]" >FURRY CARE</p>
                    </RouterLink>
                </NavbarBrand>

                {menuItems.map((item, index) => (
                    <NavbarItem key={index} className={'navbarItem pl-7 cursor-pointer'}>
                        <Link
                            color="foreground"
                            onClick={() => handleNavigation(item)}
                            className={'text-[20px]'}
                        >
                            {item}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>

            <NavbarContent justify="end">
                <User
                    className={'rounded-3xl cursor-pointer text-[21px] pl-36'}
                    name="Jane Doe"
                    description="Veterinarian"
                    avatarProps={{
                        src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
                    }}
                    onClick={navigateUserProfile}
                />
            </NavbarContent>

            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            className="w-full"
                            color={index === menuItems.length - 1 ? "danger" : "foreground"}
                            href="#"
                            size="lg"
                            onClick={() => handleNavigation(item)}
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
