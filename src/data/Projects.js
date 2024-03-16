/**
 * @typedef {{
 *  title: string,
 *  content: string,
 *  imgSrc: string,
 *  imgAlt: string,
 *  types: ProjectTypes[],
 * }} ProjectCard
 *
 * @typedef {{
 *  title: string,
 *  content: string,
 *  carrousel: string[],
 *  techstack: TechStack[],
 * }} ProjectModal
 *
 * @typedef {{
 *  stackName: string,
 *  techs: string[],
 * }} TechStack
 *
 * @typedef {{
 *  card: ProjectCard,
 *  modal: ProjectModal,
 * }} Project
 *
 * @typedef { "Backend" | "Frontend" | "Database" | "IA" | "Desktop" | "Web" | "Code Library" | "Console" } ProjectTypes
 *
 * @typedef {{
 *  name: string,
 *  description: string,
 *  techstack: TechStack[],
 *  types: ProjectTypes[]
 * }} ExtraProject
 */

/**
 * @type {Project[]}
 */
export const ProjectsData = [
    {
        card: {
            title: "DYNAMIC REPORTS",
            content: "Dynamic reporting system for agricultural data.",
            imgSrc: "./portfolio/img/dynamic-full.png",
            imgAlt: "Fully dynamic reports",
            types: ["Backend", "Frontend", "Database", "Desktop"],
        },
        modal: {
            title: "DYNAMIC REPORTS",
            content:
                "This project required a fully dynamic reporting system for agricultural data. A comprehensive report for Phenology data was required, and a powerful tool for data analysis was delivered by my software. The client was satisfied and an efficient agricultural management solution was the result.",
            carrousel: [
                "./portfolio/img/dynamic-3.png",
                "./portfolio/img/dynamic-1.png",
                "./portfolio/img/dynamic-2.png",
                "./portfolio/img/dynamic-full.png",
            ],
            techstack: [
                {
                    stackName: "Database",
                    techs: ["Microsoft SQL Server"],
                },
                {
                    stackName: "Backend",
                    techs: ["C#", "ASP.NET"],
                },
                {
                    stackName: "Frontend",
                    techs: ["WinForms"],
                },
            ],
        },
    },
    {
        card: {
            title: "PLAGUE SPREAD PREDICTION",
            content:
                "Using image processing & machine learning tecniques to predict plague spread in fields.",
            imgSrc: "./portfolio/img/images-1.png",
            imgAlt: "Image processing",
            types: ["IA", "Backend", "Frontend"],
        },
        modal: {
            title: "PLAGUE SPREAD PREDICTION",
            content:
                "I utilized Machine Learning techniques to develop a RESTful API that transforms raw data into images, which can predict possible plague spread in fields. This tool provides a comprehensive solution for predicting and preventing agricultural plagues, ultimately resulting in better management and increased crop yield.",
            carrousel: [
                "./portfolio/img/images-1.png",
                "./portfolio/img/images-2.png",
                "./portfolio/img/images-3.png",
            ],
            techstack: [
                {
                    stackName: "Backend",
                    techs: ["Python", "Flask", "GDAL"],
                },
                {
                    stackName: "Frontend",
                    techs: ["WinForms"],
                },
            ],
        },
    },
    {
        card: {
            title: "DESKTOP APP MANAGER",
            content: "Desktop app manager for Agrosoft's applications.",
            imgSrc: "./portfolio/img/fito-updater.png",
            imgAlt: "Desktop app manager",
            types: ["Database", "Backend", "Frontend", "Web", "Desktop"],
        },
        modal: {
            title: "DESKTOP APP MANAGER",
            content:
                "This app manager allows users to download and install all necessary desktop applications and maintains them up-to-date automatically. With this app manager, Agrosoft can streamline their application management process and provide users with a more efficient and user-friendly experience.",
            carrousel: [
                "./portfolio/img/fito-updater.png",
                "./portfolio/img/fito-updater-m1.png",
                "./portfolio/img/fito-updater-opt.png",
            ],
            techstack: [
                {
                    stackName: "Database",
                    techs: ["Microsoft SQL Server"],
                },
                {
                    stackName: "Backend",
                    techs: ["Node.js", "Electron", "Java Web Services"],
                },
                {
                    stackName: "Frontend",
                    techs: ["Vue.js"],
                },
            ],
        },
    },
    {
        card: {
            title: "FITODYNA",
            content:
                "A flexible and scalable database model for agricultural data.",
            imgSrc: "./portfolio/img/fitodyna-1.png",
            imgAlt: "Fitodyna",
            types: ["Database", "Backend", "Frontend", "Desktop"],
        },
        modal: {
            title: "FITODYNA",
            content:
                "The challenge in this project was to develop a database model that could accommodate any type of agriculture form, making it possible to use a single database model for multiple applications. Our team successfully developed a flexible database model that meets this requirement, providing a comprehensive solution for agricultural data management.",
            carrousel: [
                "./portfolio/img/fitodyna-2.png",
                "./portfolio/img/fitodyna-1.png",
                "./portfolio/img/fitodyna-3.png",
            ],
            techstack: [
                {
                    stackName: "Database",
                    techs: ["Microsoft SQL Server"],
                },
                {
                    stackName: "Backend",
                    techs: ["C#", "ASP.NET"],
                },
                {
                    stackName: "Frontend",
                    techs: ["WinForms"],
                },
            ],
        },
    },
    {
        card: {
            title: "AI IMAGE RECOGNITION",
            content:
                "A tool that can recognize and count the amount of grape berries in a photo.",
            imgSrc: "./portfolio/img/conteo-ia.png",
            imgAlt: "conteo-ia",
            types: ["IA", "Backend", "Frontend", "Web"],
        },
        modal: {
            title: "AI IMAGE RECOGNITION",
            content:
                "For this project, the client required a tool that could recognize and count the amount of grape berries in a photo. I developed an AI model that can fit the requirement and integrated into a web application.",
            carrousel: [
                "./portfolio/img/conteo-ia-1.jpg",
                "./portfolio/img/conteo-ia-2.png",
                "./portfolio/img/conteo-ia.png",
            ],
            techstack: [
                {
                    stackName: "Backend",
                    techs: ["Python", "Flask", "Tensorflow"],
                },
                {
                    stackName: "Frontend",
                    techs: ["SolidJS", "TailwindCSS"],
                },
            ],
        },
    },
];

/**
 * @type {ExtraProject[]}
 */
export const MoreProjectsData = [
    {
        name: "Walkdown App",
        description:
            "A mobile & web app that allows users to create and share incidents media & reports.",
        techstack: [
            {
                stackName: "Server",
                techs: ["ArchLinux", "Nginx", "Docker"],
            },
            {
                stackName: "Database",
                techs: ["MongoDB", "Microsoft SQL Server"],
            },
            {
                stackName: "Backend",
                techs: ["C#", "ASP.NET"],
            },
            {
                stackName: "Frontend",
                techs: ["React", "React Native", "TailwindCSS"],
            },
        ],
        types: ["Web", "Mobile", "Backend", "Frontend", "Database"],
    },
    {
        name: "Automotive Shop App",
        description:
            "A web app that allows users to create and maintain invoices for car repairs.",
        techstack: [
            {
                stackName: "Server",
                techs: ["ArchLinux", "Nginx", "Docker"],
            },
            {
                stackName: "Database",
                techs: ["MongoDB"],
            },
            {
                stackName: "Backend",
                techs: ["Rust", "Rocket"],
            },
            {
                stackName: "Frontend",
                techs: ["React", "TailwindCSS"],
            },
        ],
        types: ["Web", "Backend", "Frontend", "Database"],
    },
    {
        name: "Decompressor",
        description:
            "A console application that decompresses .zip files, processes the information inside them in JSON format or others and inserts them into a database dynamically.",
        techstack: [
            {
                stackName: "Server",
                techs: ["Windows"],
            },
            {
                stackName: "Database",
                techs: ["Microsoft SQL Server"],
            },
            {
                stackName: "Backend",
                techs: ["C#", "Console App"],
            },
        ],
        types: ["Console", "Backend", "Database"],
    },
    {
        name: "SQL Server Connector",
        description:
            "A C# library that allows you to connect to an SQL Server database and perform operations with an ODM abstraction.",
        techstack: [
            {
                stackName: "Backend",
                techs: ["C#"],
            },
        ],
        types: ["Code Library", "Backend"],
    },
    {
        name: "Automatic Email Sender",
        description:
            "A windows service that sends emails automatically to a list of recipients with a custom message and attachments.",
        techstack: [
            {
                stackName: "Server",
                techs: ["Windows"],
            },
            {
                stackName: "Database",
                techs: ["Microsoft SQL Server"],
            },
            {
                stackName: "Backend",
                techs: ["C#", "Windows Service"],
            },
        ],
        types: ["Backend", "Database"],
    },
    {
        name: "And much more...",
        description:
            "I have worked on many other projects that are not listed here, including web, desktop, and mobile applications. I have also developed a variety of tools and libraries, including a RESTful API, a database model, and a report system. Please feel free to contact me for more information.",
    },
];
