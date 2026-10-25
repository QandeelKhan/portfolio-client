import {
    jsBookDescription,
    heavensTrustDescription,
    defaultDescription,
    edoc21Description,
    propertierDescription,
} from "./markdown/mdText";

export const gridItems = [
    {
        titleImgSrc: "/images/portfolio/edoc21-mobile.jpg",
        descriptionImgSrc: [
            "/images/portfolio/edoc21-mobile.jpg",
            "/images/portfolio/edoc21-desktop.png",
        ],
        description: edoc21Description,
        title: "edoc21 - Bookkeeping Platform",
        category: ["WEB", "MOBILE"], // Multiple categories
        client: "KeyTax Accountants Ltd",
        date: "May 2026 - Present",
        icon: "fa-solid fa-globe",
    },
    {
        titleImgSrc: "/images/portfolio/propertier.jpeg",
        descriptionImgSrc: [
            "/images/portfolio/propertier.jpeg",
            "/images/portfolio/propertier-desktop.png",
        ],
        description: propertierDescription,
        title: "Propertier - Real Estate Platform",
        category: ["WEB", "MOBILE"], // Multiple categories
        client: "Propertier Pvt Ltd",
        date: "Nov 2024 - April 2026",
        icon: "fa-solid fa-building",
    },
    {
        titleImgSrc: "/images/portfolio/jsbook/jsbook-qandeel1.png",
        descriptionImgSrc: [
            "/images/portfolio/jsbook/jsbook-qandeel1.png",
            "/images/portfolio/jsbook/jsbook-qandeel2.png",
        ],
        description: jsBookDescription,
        title: "JSBOOK-QANDEEL",
        category: ["WEB"],
        client: "Personal",
        date: "16/5/2020",
        icon: "fa-solid fa-globe",
    },
    {
        titleImgSrc: "/images/portfolio/portfolio-9.jpg",
        descriptionImgSrc: [
            "/images/portfolio/portfolio-9.jpg",
            "/images/portfolio/portfolio-9.jpg",
        ],
        description: defaultDescription,
        title: "Mobile App",
        category: ["MOBILE"],
        client: "Qandeel Khan",
        date: "5/12/2020",
        // icon: "fa-solid fa-video",
        icon: "fa-solid fa-mobile",
    },
    {
        titleImgSrc: "/images/portfolio/HeavensTrust/heavenstrust1.png",
        descriptionImgSrc: [
            "/images/portfolio/HeavensTrust/heavenstrust1.png",
            "/images/portfolio/HeavensTrust/heavenstrust2.png",
            "/images/portfolio/HeavensTrust/heavenstrust3.png",
            "/images/portfolio/HeavensTrust/heavenstrust4.png",
        ],
        description: heavensTrustDescription,
        title: "Heavens Trust",
        category: ["WEB"],
        client: "Personal",
        date: "14/5/2019",
        icon: "fa-solid fa-globe",
    },
    {
        titleImgSrc: "/images/portfolio/portfolio-1.jpg",
        descriptionImgSrc: [
            "/images/portfolio/portfolio-1.jpg",
            "/images/portfolio/portfolio-1.jpg",
        ],
        description: defaultDescription,
        title: "Book DESIGN",
        category: ["GRAPHIC"],
        client: "Qandeel Khan",
        date: "16/1/2023",
        icon: "fa-solid fa-file",
    },
    {
        titleImgSrc: "/images/portfolio/portfolio-10.jpg",
        descriptionImgSrc: [
            "/images/portfolio/portfolio-10.jpg",
            "/images/portfolio/portfolio-10.jpg",
        ],
        description: defaultDescription,
        title: "Cup DESIGN",
        category: ["GRAPHIC"],
        client: "Qandeel Khan",
        date: "16/1/2023",
        icon: "fa-solid fa-image",
    },

    {
        titleImgSrc: "/images/portfolio/portfolio-8.jpg",
        descriptionImgSrc: [
            "/images/portfolio/portfolio-8.jpg",
            "/images/portfolio/portfolio-8.jpg",
        ],
        description: defaultDescription,
        title: "Creative Flyer",
        category: ["BRAND"],
        client: "Qandeel Khan",
        date: "16/1/2023",
        icon: "fa-solid fa-image",
    },
    {
        titleImgSrc: "/images/portfolio/portfolio-7.jpg",
        descriptionImgSrc: [
            "/images/portfolio/portfolio-7.jpg",
            "/images/portfolio/portfolio-7.jpg",
        ],
        description: defaultDescription,
        title: "Magazine DESIGN",
        category: ["DESIGN"],
        client: "Qandeel Khan",
        date: "16/1/2023",
        icon: "fa-solid fa-file",
    },
];

export const tabs = ["ALL", "GRAPHIC", "DESIGN", "MOBILE", "BRAND", "WEB"];
