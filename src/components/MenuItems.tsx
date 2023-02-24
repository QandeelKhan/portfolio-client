import { useDispatch } from "react-redux";
import {
    HomeIcon,
    UserIcon,
    BriefcaseIcon,
    LicenseIcon,
    BookIcon,
    EnvelopeIcon,
    UndoIcon,
} from "./data/iconsIndex";

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
        title: "Back to Resume",
        cName: "anchor",
        path: "/",
        icon: <UndoIcon />,
        navigateTo: "/",
    },
    {
        title: "CONTACT",
        cName: "anchor",
        path: "/",
        icon: <EnvelopeIcon />,
        navigateTo: "/contact",
    },
];
