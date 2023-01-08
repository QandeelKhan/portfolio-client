import { useNavigate } from "react-router-dom";
import {
    HomeIcon,
    UserIcon,
    BriefcaseIcon,
    LicenseIcon,
    BookIcon,
    EnvelopeIcon,
} from "./icons/iconsIndex";
// const navigate = useNavigate();
export const MenuItems = [
    {
        title: "HOME",
        cName: "achor",
        path: "/",
        icon: <HomeIcon />,
        navigateTo: "/home",
    },
    {
        title: "ABOUT ME",
        cName: "achor",
        path: "/",
        icon: <UserIcon />,
        navigateTo: "/about",
    },
    {
        title: "RESUME",
        cName: "achor",
        path: "/",
        icon: <BriefcaseIcon />,
        navigateTo: "/resume",
    },
    {
        title: "PORTFOLIO",
        cName: "achor",
        path: "/",
        icon: <LicenseIcon />,
        navigateTo: "/portfolio",
    },
    {
        title: "BLOG",
        cName: "achor",
        path: "/",
        icon: <BookIcon />,
        navigateTo: "/blog",
    },
    {
        title: "CONTACT",
        cName: "achor",
        path: "/",
        icon: <EnvelopeIcon />,
        navigateTo: "/contact",
    },
];
