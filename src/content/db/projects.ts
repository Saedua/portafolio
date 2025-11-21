import type { ProjectInterface } from "../../interfaces/interface";

export const myProjects: ProjectInterface[] = [
    {
        id: 1,
        title: "Proyecto PokeQueue",
        devType: "Architecture",
        description: "Proyecto que define una arquitectura y solucion para una plataforma de gestion de solicitudes mediante Azure Queues, y en la generacion de reportes de los datos solicitados. Se utilizo Terraform para la definicion de la arquitectura, Azure Function Apps para el manejo de la cola y el procesamiento de las solicitudes. Python con FastAPI para el manejo de la base de datos. NextJS con React para el desarrollo del Front-end ",
        technologiesUsed: [
            {
                name: "Azure Functions",
                color: "#007FFF"
            },
            {
                name: "Terraform",
                color: "#7B42BC"
            },
            {
                name: "NextJS",
                color: "#000000"
            },
            {
                name: "FastAPI",
                color: "#009485"
            },
        ],
        githubUrl: "https://github.com/Saedua/rentalcars-architecture",
        detailsUrl: "/projects/pokequeueproject"
    },
    {
        id: 2,
        title: "Proyecto Arquitectura RentalCars",
        devType: "Architecture",
        description: "Proyecto que define una arquitectura para un negocio de vehiculos blindados. Se incluye la parte de operacion del servicio, la base de datos, una estructura de data warehouse y una plataforma de analisis. Se utilizo Terraform para definir los recursos de Azure",
        technologiesUsed: [
            {
                name: "Azure",
                color: "#007FFF"
            },
            {
                name: "Terraform",
                color: "#7B42BC"
            },
        ],
        githubUrl: "https://github.com/Saedua/rentalcars-architecture",
        detailsUrl: "/projects/rentalcarsproject"
    },
    
    {
        id: 3,
        title: "Proyecto RestCountries",
        devType: "Front-End",
        description: "Proyecto que lista y brinda información sobre países. En este proyecto se puede buscar países por nombre, región o por código, además de brindar información básica sobre los países. ",
        technologiesUsed: [
            {
                name: "Angular",
                color: "#f43f5e"
            },
            {
                name: "TailwindCSS",
                color: "#22d3ee"
            },
            {
                name: "TypeScript",
                color: "#3b82f6"
            },
        ],
        githubUrl: "https://github.com/Saedua/RestCountries",
        detailsUrl: "/projects/restcountriesproject"
    },

    {
        id: 4,
        title: "Proyecto de Ingeniería de Software",
        devType: "Full-Stack",
        description: "Proyecto que tiene como objetivo brindar soluciones de procesos de admisión, una plataforma para estudiantes, una biblioteca virtual, una biblioteca musical y una plataforma para docentes para una universidad. Se utilizó una base de datos MySQL, el desarrollo de una API y un diseño responsive.",
        technologiesUsed: [
            {
                name: "PHP",
                color: "#9333ea"
            },
                        {
                name: "JavaScript",
                color: "#eab308"
            },
                        {
                name: "Bootstrap",
                color: "#4f46e5"
            },
                        {
                name: "MySQL",
                color: "#3b82f6"
            },
                        {
                name: "API REST",
                color: "#22c55e"
            },
        ],
        githubUrl: "https://github.com/Saedua/UNAH-Registro",
        detailsUrl: "/projects/softwareengproject"
    }
    
    
]