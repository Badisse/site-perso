import { sections } from "./section.fixtures"
import { NavMenu } from "../types/navbar.types"

export const navMenus = [
    {
        title: "Home",
        href: "/",
        section: sections.home,
    } as NavMenu,
    {
        title: "About Me",
        href: "/#about-me",
        section: sections.about,
    } as NavMenu,
    {
        title: "Web3 Introduction",
        href: "/#web3",
        section: sections.web3,
    } as NavMenu,
    {
        title: "Skills",
        href: "/#skills",
        section: sections.skills,
    } as NavMenu,
    {
        title: "Qualifications",
        href: "/#qualifications",
        section: sections.qualifications,
    } as NavMenu,
    {
        title: "Portefolio",
        href: "/#portfolio",
        section: sections.portfolio,
    } as NavMenu,
    {
        title: "Blog",
        href: "/#blog",
        section: sections.blog,
    } as NavMenu,
    {
        title: "Contact",
        href: "/#contact",
        section: sections.contact,
    } as NavMenu
]