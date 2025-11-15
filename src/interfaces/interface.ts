export interface TechnicalStack {
    id: number,
    title: string,
    description: string,
    svg: string
}

export interface Technology {
    name: string,
    color: string
}

export interface ProjectInterface{
    id: number,
    title: string,
    devType: string,
    description: string,
    technologiesUsed: Technology[],
    githubUrl: string
}

export interface SkillInterface{
    id: number,
    title: string,
    color: string,
    icon: string,
    skills: Technology[]
}

export interface EducationInterface{
    id: number,
    title: string,
    description: string,
    color: string,
    tagTitle: string,
    year: string
}