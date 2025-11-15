import type { ProjectInterface } from "../../interfaces/interface";

export const myProjects: ProjectInterface[] = [
    {
        id: 1,
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
    },
    {
        id: 2,
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
        githubUrl: "#"
    },
    {
        id: 3,
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
        githubUrl: "https://github.com/Saedua/rentalcars-architecture"
    }
]