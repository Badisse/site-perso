import { AboutSection, Section } from "./section.types"

export interface NavMenu {
    title: string,
    href: string,
    section: Section | AboutSection,
}