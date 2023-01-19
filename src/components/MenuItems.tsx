import {
    HomeIcon,
    UserIcon,
    BriefcaseIcon,
    LicenseIcon,
    BookIcon,
    EnvelopeIcon,
} from "./icons/iconsIndex";

export const MenuItems = [
    {
        title: "HOME",
        cName: "anchor",
        path: "/",
        icon: <HomeIcon />,
        navigateTo: "/",
    },
    {
        title: "ABOUT ME",
        cName: "anchor",
        path: "/",
        icon: <UserIcon />,
        navigateTo: "/about",
    },
    {
        title: "RESUME",
        cName: "anchor",
        path: "/",
        icon: <BriefcaseIcon />,
        navigateTo: "/resume",
    },
    {
        title: "PORTFOLIO",
        cName: "anchor",
        path: "/",
        icon: <LicenseIcon />,
        navigateTo: "/portfolio",
    },
    {
        title: "BLOG",
        cName: "anchor",
        path: "/",
        icon: <BookIcon />,
        navigateTo: "/blog",
    },
    {
        title: "CONTACT",
        cName: "anchor",
        path: "/",
        icon: <EnvelopeIcon />,
        navigateTo: "/contact",
    },
];
