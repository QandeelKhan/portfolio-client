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

export type MenuListProps = {
    title?: string;
    cName?: string;
    path?: string;
    icon?: JSX.Element;
    navigateTo?: string;
    isCPMenuItem?: boolean;
}[];

export const ResumeModeMenuItems: MenuListProps = [
    {
        title: "HOME",
        cName: "anchor",
        path: "/",
        icon: <HomeIcon />,
        navigateTo: "/",
        isCPMenuItem: false, // Indicate it's not a CPMenuItem
    },
    {
        title: "ABOUT ME",
        cName: "anchor",
        path: "/about",
        icon: <UserIcon />,
        navigateTo: "/about",
        isCPMenuItem: false, // Indicate it's not a CPMenuItem
    },
    {
        title: "RESUME",
        cName: "anchor",
        path: "/resume",
        icon: <BriefcaseIcon />,
        navigateTo: "/resume",
        isCPMenuItem: false, // Indicate it's not a CPMenuItem
    },
    {
        title: "PORTFOLIO",
        cName: "anchor",
        path: "/portfolio",
        icon: <LicenseIcon />,
        navigateTo: "/portfolio",
        isCPMenuItem: false, // Indicate it's not a CPMenuItem
    },
    {
        title: "BLOG",
        cName: "anchor",
        path: "/blog",
        icon: <BookIcon />,
        navigateTo: "/blog",
        isCPMenuItem: false, // Indicate it's not a CPMenuItem
    },
    {
        title: "CONTACT",
        cName: "anchor",
        path: "/contact",
        icon: <EnvelopeIcon />,
        navigateTo: "/contact",
        isCPMenuItem: false, // Indicate it's not a CPMenuItem
    },
];

export const CPModeMenuItems = [
    {
        title: "PROFILE",
        cName: "anchor",
        path: "/user-profile",
        icon: <UserIcon />,
        navigateTo: "/user-profile",
        isCPMenuItem: true, // Indicate it's not a CPMenuItem
    },
    {
        title: "PLACE ORDER",
        cName: "anchor",
        path: "/place-order",
        icon: <EnvelopeIcon />,
        navigateTo: "/place-order",
        isCPMenuItem: true, // Indicate it's not a CPMenuItem
    },
    {
        title: "TRACK ORDER",
        cName: "anchor",
        path: "/track-order",
        icon: <SyncIcon />,
        navigateTo: "/track-order",
        isCPMenuItem: true, // Indicate it's not a CPMenuItem
    },
    {
        title: "ORDER HISTORY",
        cName: "anchor",
        path: "/order-history",
        icon: <DiceIcon />,
        navigateTo: "/order-history",
        isCPMenuItem: true, // Indicate it's not a CPMenuItem
    },
    {
        title: "CONTACT",
        cName: "anchor",
        path: "/contact",
        icon: <EnvelopeIcon />,
        navigateTo: "/contact",
        isCPMenuItem: true, // Indicate it's not a CPMenuItem
    },
];
