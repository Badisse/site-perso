export interface AboutSection {
    title: string,
    subtitle: string,
    content: string
    image: string
}

export interface Section {
    content: JSX.Element,
    images: string[]
}