import { ButtonProps } from "./SideNavButton";
import {
    HomeIcon,
    UserIcon,
    BriefcaseIcon,
    LicenseIcon,
    BookIcon,
    EnvelopeIcon,
    SyncIcon,
} from "../data/iconsIndex";
import DiceIcon from "../icons/CPModeIcons/DiceIcon";

export const ResumeModeNavItems: ButtonProps[] = [
    {
        navBtnTitle: "HOME",
        cName: "anchor",
        path: "/",
        icon: <HomeIcon />,
        navigateTo: "/",
        isCPMenuItem: false, // Indicate it's not a CPMenuItem
    },
    {
        navBtnTitle: "ABOUT ME",
        cName: "anchor",
        path: "/about",
        icon: <UserIcon />,
        navigateTo: "/about",
        isCPMenuItem: false,
    },
    {
        navBtnTitle: "RESUME",
        cName: "anchor",
        path: "/resume",
        icon: <BriefcaseIcon />,
        navigateTo: "/resume",
        isCPMenuItem: false,
    },
    {
        navBtnTitle: "PORTFOLIO",
        cName: "anchor",
        path: "/portfolio",
        icon: <LicenseIcon />,
        navigateTo: "/portfolio",
        isCPMenuItem: false,
    },
    {
        navBtnTitle: "BLOG",
        cName: "anchor",
        path: "/blog",
        icon: <BookIcon />,
        navigateTo: "/blog",
        isCPMenuItem: false,
    },
    {
        navBtnTitle: "CONTACT",
        cName: "anchor",
        path: "/contact",
        icon: <EnvelopeIcon />,
        navigateTo: "/contact",
        isCPMenuItem: false,
    },
];

export const CPModeNavItems = [
    {
        NavBtnTitle: "PROFILE",
        cName: "anchor",
        path: "/user-profile",
        icon: <UserIcon />,
        navigateTo: "/user-profile",
        isCPMenuItem: true, // Indicate it's a CPMenuItem
    },
    {
        NavBtnTitle: "PLACE ORDER",
        cName: "anchor",
        path: "/place-order",
        icon: <EnvelopeIcon />,
        navigateTo: "/place-order",
        isCPMenuItem: true,
    },
    {
        NavBtnTitle: "TRACK ORDER",
        cName: "anchor",
        path: "/track-order",
        icon: <SyncIcon />,
        navigateTo: "/track-order",
        isCPMenuItem: true,
    },
    {
        NavBtnTitle: "ORDER HISTORY",
        cName: "anchor",
        path: "/order-history",
        icon: <DiceIcon />,
        navigateTo: "/order-history",
        isCPMenuItem: true,
    },
    {
        NavBtnTitle: "CONTACT",
        cName: "anchor",
        path: "/contact",
        icon: <EnvelopeIcon />,
        navigateTo: "/contact",
        isCPMenuItem: true,
    },
];
