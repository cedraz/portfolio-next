import { StaticImageData } from "next/image"

export interface projectDataInterface {
    id: number;
    title: string;
    description: string;
    category: string;
    image: StaticImageData;
    link: string;
    repository: string;
    tags: string[];
}

export interface socialMediaDataInterface {
    name: string;
    linkedin: string;
    github: string;
    email: string;
    repository: string;
}