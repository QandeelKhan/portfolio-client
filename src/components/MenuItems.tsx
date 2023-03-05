import {
    HomeIcon,
    UserIcon,
    BriefcaseIcon,
    LicenseIcon,
    BookIcon,
    EnvelopeIcon,
    SyncIcon,
} from "./data/iconsIndex";
import DiceIcon from "./icons/CPModeIcons/DiceIcon";

export const ResumeModeMenuItems = [
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

export const CPModeMenuItems = [
    {
        title: "Profile",
        cName: "anchor",
        path: "/",
        icon: <UserIcon />,
        navigateTo: "/user-profile",
    },
    {
        title: "PLACE ORDER",
        cName: "anchor",
        path: "/",
        icon: <EnvelopeIcon />,
        navigateTo: "/place-order",
    },
    {
        title: "TRACK ORDER",
        cName: "anchor",
        path: "/",
        icon: <SyncIcon />,
        navigateTo: "/track-order",
    },
    {
        title: "ORDER HISTORY",
        cName: "anchor",
        path: "/",
        icon: <DiceIcon />,
        navigateTo: "/order-history",
    },
    {
        title: "CONTACT",
        cName: "anchor",
        path: "/",
        icon: <EnvelopeIcon />,
        navigateTo: "/contact",
    },
];
